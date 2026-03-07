import React, { useMemo } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Sub-component: Partner Header and Identity
 * Senior UI Refactor: Premium glassmorphism & visual hierarchy
 */
const PartnerHeader = ({ partner }) => {
    const handle = useMemo(() => 
        partner?.name?.toLowerCase().replace(/\s+/g, ''), 
    [partner?.name]);

    if (!partner) return null;

    return (
        <header className="profile-header-premium">
            <div className="header-glass-card">
                <div className="header-layout-split">
                    {/* Identity Section (Left) */}
                    <div className="header-identity-left">
                        <div className="partner-avatar-wrapper">
                            <div className="partner-profile-badge-premium">
                                {partner.name?.charAt(0).toUpperCase()}
                            </div>
                        </div>
                        
                        <div className="partner-identity-stack">
                            <h1>{partner.name}</h1>
                            <p className="partner-handle-premium">@{handle}</p>
                        </div>
                    </div>

                    {/* Meta Vertical Stack (Right) */}
                    <div className="header-meta-right">
                        <a href={`mailto:${partner.email}`} className="meta-info-item">
                            <div className="meta-icon-box">
                                <Mail size={16} />
                            </div>
                            <div className="meta-text-stack">
                                <label>Email</label>
                                <p>{partner.email}</p>
                            </div>
                        </a>
                        
                        <a href={`tel:${partner.contactNumber}`} className="meta-info-item">
                            <div className="meta-icon-box">
                                <Phone size={16} />
                            </div>
                            <div className="meta-text-stack">
                                <label>Phone</label>
                                <p>{partner.contactNumber || 'Not provided'}</p>
                            </div>
                        </a>
                        
                        <div className="meta-info-item">
                            <div className="meta-icon-box">
                                <MapPin size={16} />
                            </div>
                            <div className="meta-text-stack">
                                <label>Address</label>
                                <p>{partner.address || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PartnerHeader;
