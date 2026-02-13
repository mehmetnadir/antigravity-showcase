import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Zap, GitBranch, Download, Cloud, Smartphone, MessageSquare } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Sidebar = () => {
    const navItems = [
        { to: "/", icon: LayoutDashboard, label: "Felsefe" },
        { to: "/rules", icon: BookOpen, label: "Kurallar" },
        { to: "/skills", icon: Zap, label: "Yetenekler" },
        { to: "/workflow", icon: GitBranch, label: "Akış" },
        { to: "/deploy", icon: Cloud, label: "Nasıl Yayınlanır?" },
        { to: "/mobile", icon: Smartphone, label: "Mobil Uygulama" },
        {
            to: "https://notebooklm.google.com/notebook/d6fb55c9-3f35-4e3e-b78f-8af4bae2bd71",
            icon: MessageSquare,
            label: "AI Asistanı (NotebookLM)",
            external: true
        },
    ];

    return (
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
                if (item.external) {
                    return (
                        <a
                            key={item.to}
                            href={item.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
                                "text-muted-foreground hover:text-primary hover:bg-blue-50/50"
                            )}
                        >
                            <item.icon className="w-5 h-5 transition-colors group-hover:text-primary" />
                            <span>{item.label}</span>
                        </a>
                    );
                }

                return (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
                            isActive
                                ? "bg-primary text-primary-foreground shadow-lg shadow-blue-500/20"
                                : "text-muted-foreground hover:text-primary hover:bg-blue-50/50"
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
