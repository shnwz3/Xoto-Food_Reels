import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PartnerProfile.css';

/**
 * Sub-component: Partner Header and Identity
 * Optimized for mobile hierarchy
 */
const PartnerHeader = ({ partner }) => {
    const handle = useMemo(() => 
        partner?.name?.toLowerCase().replace(/\s+/g, ''), 
    [partner?.name]);

    return (
        <header className="profile-header">
            <div className="profile-identity">
                <div className="profile-badge">
                    {partner.name?.charAt(0).toUpperCase()}
                </div>
                <div className="partner-info">
                    <h1>{partner.name}</h1>
                    <p className="partner-handle">@{handle}</p>
                </div>
            </div>
            
            <div className="profile-meta-grid">
                <div className="meta-item">
                    <label>Email</label>
                    <p>{partner.email}</p>
                </div>
                <div className="meta-item">
                    <label>Phone</label>
                    <p>{partner.contactNumber || 'Not provided'}</p>
                </div>
                <div className="meta-item">
                    <label>Address</label>
                    <p>{partner.address || 'Not provided'}</p>
                </div>
            </div>
        </header>
    );
};

/**
 * Sub-component: Video Card for the Grid
 * Handles hover for desktop and tap/active for mobile
 */
const VideoCard = ({ video }) => {
    const handlePlay = (e) => e.target.play();
    const handlePause = (e) => e.target.pause();

    return (
        <div className="video-card">
            <video 
                src={video.video} 
                muted
                onMouseOver={handlePlay}
                onMouseOut={handlePause}
                // For mobile touches
                onTouchStart={handlePlay}
                onTouchEnd={handlePause}
                loop
                playsInline
            />
            <div className="video-card-overlay">
                <p className="video-card-title">{video.name}</p>
            </div>
        </div>
    );
};

/**
 * Main PartnerProfile Component
 * Senior Refactor: Mobile-First Mobile Priority
 */
const PartnerProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({
        partner: null,
        videos: [],
        loading: true,
        error: null
    });

    // Check if the current viewer is the owner of this profile
    const [isOwner, setIsOwner] = useState(false);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [uploading, setUploading] = useState(false);

    const fetchData = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true }));
        try {
            const response = await axios.get(`http://localhost:3000/api/auth/food-partner/${id}`);
            
            setState({
                partner: response.data.foodPartner,
                videos: response.data.videos || [],
                loading: false,
                error: null
            });

            // Ownership check
            const loggedInPartner = JSON.parse(localStorage.getItem('foodPartner'));
            if (loggedInPartner && loggedInPartner.foodPartnerId === id) {
                setIsOwner(true);
            }
        } catch (err) {
            console.error('[PartnerProfile] Fetch error:', err);
            setState(prev => ({ 
                ...prev, 
                loading: false, 
                error: 'Profile not available.' 
            }));
        }
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleGoBack = () => navigate('/home');

    const handleUpload = async (e) => {
        e.preventDefault();
        setUploading(true);
        const formData = new FormData();
        formData.append('name', e.target.name.value);
        formData.append('caption', e.target.caption.value);
        formData.append('video', e.target.video.files[0]);

        try {
            await axios.post('http://localhost:3000/api/food', formData, {
                withCredentials: true,
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setShowUploadModal(false);
            fetchData(); // Refresh videos
        } catch (err) {
            alert('Upload failed: ' + (err.response?.data?.message || err.message));
        } finally {
            setUploading(false);
        }
    };

    if (state.loading) {
        return (
            <div className="status-container">
                <div className="status-msg text-pulse">Loading profile...</div>
            </div>
        );
    }

    if (state.error || !state.partner) {
        return (
            <div className="status-container">
                <p className="status-error">{state.error || 'Partner not found'}</p>
                <button className="retry-btn" onClick={handleGoBack}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="profile-page-wrapper">
            <button className="back-btn" onClick={handleGoBack}>
                <span>←</span> Back to Feed
            </button>

            <div className="profile-container">
                <PartnerHeader partner={state.partner} />

                <main className="profile-main">
                    <div className="video-section-header">
                        <h2>Posted Reels</h2>
                        <span className="video-count-badge">{state.videos.length}</span>
                    </div>
                    
                    <div className="video-grid">
                        {/* Add Reel Card (Only for Owner) */}
                        {isOwner && (
                            <div className="video-card add-reel-card" onClick={() => setShowUploadModal(true)}>
                                <div className="add-reel-content">
                                    <span className="add-icon">+</span>
                                    <p>Add New Reel</p>
                                </div>
                            </div>
                        )}

                        {state.videos.length > 0 ? (
                            state.videos.map(video => (
                                <VideoCard key={video._id} video={video} />
                            ))
                        ) : !isOwner && (
                            <div className="empty-state">
                                <p>No videos posted yet.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="upload-modal-overlay">
                    <div className="upload-modal-card">
                        <h3>Create New Reel</h3>
                        <form onSubmit={handleUpload} className="upload-form">
                            <input name="name" placeholder="Food Name (e.g. Spicy Ramen)" required />
                            <textarea name="caption" placeholder="Write a catchy caption..." required />
                            <div className="file-input-wrapper">
                                <label>Select Video</label>
                                <input type="file" name="video" accept="video/*" required />
                            </div>
                            <div className="modal-actions">
                                <button type="button" onClick={() => setShowUploadModal(false)} className="cancel-btn">Cancel</button>
                                <button type="submit" disabled={uploading} className="upload-submit-btn">
                                    {uploading ? 'Uploading...' : 'Post Reel'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PartnerProfile;