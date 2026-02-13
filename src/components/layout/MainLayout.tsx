import React from 'react';
import { Sidebar } from './Sidebar';
import ParticleBackground from '../ui/ParticleBackground';
import { AntigravityLogo } from '../ui/AntigravityLogo';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex min-h-screen relative overflow-hidden bg-[#F8F9FA] text-[#121317] font-sans">

            {/* Dynamic Background */}
            <ParticleBackground />

            {/* Sidebar */}
            <aside className="w-64 fixed inset-y-0 left-0 z-50 flex flex-col glass-border bg-white/60 backdrop-blur-xl">
                <div className="h-20 flex items-center px-6 border-b border-gray-100">
                    <AntigravityLogo />
                </div>
                <Sidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 relative z-10">
                <div className="max-w-7xl mx-auto space-y-8">
                    {children}
                </div>
            </main>

        </div>
    );
};
