import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Zap, GitBranch, Cloud, MessageSquare, Terminal } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Sidebar = () => {
    const navItems = [
        { to: "/setup", icon: Terminal, label: "Kurulum" },
        { to: "/", icon: LayoutDashboard, label: "Felsefe" },
        { to: "/rules", icon: BookOpen, label: "Kurallar" },
        { to: "/skills", icon: Zap, label: "Yetenekler" },
        { to: "/workflow", icon: GitBranch, label: "Akış" },
        { to: "/skills", icon: Zap, label: "Yetenekler" },
        { to: "/workflow", icon: GitBranch, label: "Akış" },
        { to: "/deploy", icon: Cloud, label: "Tasarım & Yayınlama" },
        {
            to: "/assistant",
            icon: MessageSquare,
            label: "AI Asistanı",
            className: "text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
        },
    ];

    return (
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
                        isActive
                            ? "bg-primary text-primary-foreground shadow-lg shadow-blue-500/20"
                            : item.className || "text-muted-foreground hover:text-primary hover:bg-blue-50/50"
                    )}
                >
                    {({ isActive }) => (
                        <>
                            <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-white" : "group-hover:text-primary")} />
                            <span>{item.label}</span>
                        </>
                    )}
                </NavLink>
            );
            })}
        </nav>
    );
};
