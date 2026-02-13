import React from 'react';

export const AntigravityLogo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        {/* Stylized 'A' Logo - Approximated from official site */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L2 26H9L16 14L23 26H30L16 2Z" fill="#3186FF" />
            <path d="M16 8L11 20H21L16 8Z" fill="white" fillOpacity="0.5" />
            {/* Adding a subtle gradient or cut effect */}
            <path fillRule="evenodd" clipRule="evenodd" d="M16.0001 5.46411L26.6507 24H23.1866L16.0001 11.5359L8.81358 24H5.34946L16.0001 5.46411ZM16.0001 16.1555L18.2537 20.0622H13.7465L16.0001 16.1555Z" fill="white" />
        </svg>

        <span className="font-sans text-xl font-medium tracking-tight text-[#121317]">
            Google <span className="text-gray-500 font-normal">Antigravity</span>
        </span>
    </div>
);
