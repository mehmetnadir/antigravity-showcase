import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, Palette, Server, Cpu, ShieldCheck, BrainCircuit, Smartphone, TrendingUp, Gamepad2, Search, Filter } from 'lucide-react';
import skillsData from '../data/skills.json';

const iconMap: any = { Palette, Server, Cpu, ShieldCheck, BrainCircuit, Smartphone, TrendingUp, Gamepad2 };

const Skills = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get unique categories dynamically
    const categories = useMemo(() => {
        const cats = new Set<string>();
        skillsData.forEach(skill => {
            if (Array.isArray(skill.categories)) {
                skill.categories.forEach(c => cats.add(c));
            }
        });
        return Array.from(cats).sort();
    }, []);

    const filteredSkills = useMemo(() => {
        return skillsData.filter(skill => {
            const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                skill.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory ? (Array.isArray(skill.categories) && skill.categories.includes(selectedCategory)) : true;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="space-y-8 max-w-6xl mx-auto pb-12">

            {/* Header & Stats */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Yetenek Kütüphanesi</h1>
                    <p className="text-muted-foreground mt-2 text-lg max-w-2xl">
                        Antigravity'nin 240+ uzmanlık modülü. Projenize uygun yeteneği arayın ve indirin.
                    </p>
                </div>

                <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm min-w-[200px]">
                    <div className="text-right w-full">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Aktif Yetenekler</p>
                        <p className="text-2xl font-black text-primary">{skillsData.length}</p>
                    </div>
                </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/40 space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Yetenek ara... (Örn: React, Security, SEO)"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${selectedCategory === null ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                        Tümü
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill, index) => {
                        const Icon = iconMap[skill.icon] || Cpu;

                        return (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: Math.min(index * 0.05, 0.5) }} // Cap delay for large lists
                                className="glass-panel p-5 rounded-2xl border-white/60 hover:shadow-md hover:border-blue-200 transition-all group flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2.5 bg-secondary rounded-xl text-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-100 text-slate-500 uppercase tracking-wide">
                                            {Array.isArray(skill.categories) ? skill.categories[0] : 'Genel'}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">{skill.name}</h3>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                                    {skill.description}
                                </p>

                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                                    <span className="text-xs font-semibold text-slate-400">v2.1</span>
                                    {skill.file_path && (
                                        <a
                                            href={skill.file_path}
                                            download={`${skill.id}.md`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                                        >
                                            <Download className="w-3.5 h-3.5" />
                                            SKILL.md İndir
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })
                ) : (
                    <div className="col-span-full py-20 text-center opacity-50">
                        <Search className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                        <h3 className="text-lg font-medium">Sonuç bulunamadı</h3>
                        <p>Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
