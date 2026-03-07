import React from 'react';
import { X, User } from 'lucide-react';
import './SocialUsersModal.css';

const SocialUsersModal = ({ isOpen, onClose, title, users, loading }) => {
    if (!isOpen) return null;

    return (
        <div className="social-modal-overlay" onClick={onClose}>
            <div className="social-modal-sheet" onClick={(e) => e.stopPropagation()}>
                <div className="social-modal-handle"></div>
                <div className="social-modal-header">
                    <h3>{title}</h3>
                    <button className="social-close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>
                <div className="social-modal-body">
                    {loading ? (
                        <div className="social-loading">
                            <div className="social-spinner"></div>
                            <p>Loading users...</p>
                        </div>
                    ) : users.length > 0 ? (
                        <div className="social-user-list">
                            {users.map((user) => (
                                <div key={user._id} className="social-user-item">
                                    <div className="social-user-avatar">
                                        <User size={20} />
                                    </div>
                                    <div className="social-user-info">
                                        <p className="social-user-name">{user.name}</p>
                                        <p className="social-user-email">{user.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="social-empty-state">
                            <p>No users found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SocialUsersModal;
