import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import ParticleBackground from '../ui/ParticleBackground';
import { AntigravityLogo } from '../ui/AntigravityLogo';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        // Mobile Layout Refactor: v1.0
        <div className="flex min-h-screen relative overflow-hidden bg-[#F8F9FA] text-[#121317] font-sans">

            {/* Dynamic Background */}
            <ParticleBackground />

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40 flex items-center justify-between px-4">
                <AntigravityLogo />
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    <Menu className="w-6 h-6 text-slate-700" />
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 flex flex-col glass-border bg-white/95 backdrop-blur-xl w-64 transition-transform duration-300 ease-in-out md:translate-x-0",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100 shrink-0">
                    <AntigravityLogo />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>
                <Sidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 pt-20 md:pt-8 relative z-10 w-full">
                <div className="max-w-7xl mx-auto space-y-8">
                    {children}
                </div>
            </main>

        </div>
    );
};
