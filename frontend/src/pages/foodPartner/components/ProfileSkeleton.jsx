import React from 'react';

/**
 * Sub-component: Partner Profile Skeleton Loader
 */
const ProfileSkeleton = () => (
    <div className="partner-skeleton-wrapper">
        <div className="header-glass-card skeleton-header-card">
            <div className="header-layout-split">
                <div className="header-identity-left">
                    <div className="skeleton-avatar-circle"></div>
                    <div className="skeleton-name-stack">
                        <div className="skeleton-line skeleton-title"></div>
                        <div className="skeleton-line skeleton-handle"></div>
                    </div>
                </div>
                <div className="header-meta-right">
                    <div className="skeleton-meta-box"></div>
                    <div className="skeleton-meta-box"></div>
                    <div className="skeleton-meta-box"></div>
                </div>
            </div>
        </div>
        
        <div className="skeleton-video-grid">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton-video-card"></div>
            ))}
        </div>
    </div>
);

export default ProfileSkeleton;
