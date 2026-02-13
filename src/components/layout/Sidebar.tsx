import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Zap, GitBranch, Download, Cloud, Smartphone } from 'lucide-react';
import { cn } from '../../lib/utils'; // We need to create this utility

export const Sidebar = () => {
    const navItems = [
        { to: "/", icon: LayoutDashboard, label: "Felsefe" },
        { to: "/rules", icon: BookOpen, label: "Kurallar" },
        { to: "/skills", icon: Zap, label: "Yetenekler" },
        { to: "/workflow", icon: GitBranch, label: "Akış" },
        { to: "/deploy", icon: Cloud, label: "Nasıl Yayınlanır?" },
        { to: "/mobile", icon: Smartphone, label: "Mobil Uygulama" },
    ];

    return (
        <aside className="w-64 h-full border-r border-white/40 bg-white/60 backdrop-blur-md hidden md:flex flex-col shadow-lg z-20">
            <div className="p-8 pb-4">
                <h1 className="text-2xl font-bold tracking-tight text-primary flex items-center gap-2">
                    <Zap className="w-6 h-6 fill-current" />
                    Antigravity
                </h1>
                <p className="text-sm text-muted-foreground mt-1">Showcase v1.0</p>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                                isActive
                                    ? "bg-white shadow-md text-primary ring-1 ring-black/5"
                                    : "text-muted-foreground hover:bg-white/40 hover:text-foreground"
                            )
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 m-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Download className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-blue-900">Kaynaklar</p>
                        <p className="text-[10px] text-blue-600">Tümünü İndir</p>
                    </div>
                </div>
                <button className="w-full mt-2 text-xs bg-white border border-blue-200 text-blue-700 py-1.5 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                    ZIP Olarak İndir
                </button>
            </div>
        </aside>
    );
};
