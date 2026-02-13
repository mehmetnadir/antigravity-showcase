import { motion } from 'framer-motion';
import { Download, Palette, Server, Cpu, ShieldCheck } from 'lucide-react';
import skillsData from '../data/skills.json';

const iconMap: any = { Palette, Server, Cpu, ShieldCheck };

const Skills = () => {

    return (
        <div className="space-y-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground">Yetenek Kütüphanesi</h2>
                <p className="text-muted-foreground mt-2">Antigravity'nin uzmanlık modülleri. İhtiyacınız olanı sisteme yükleyin.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {skillsData.map((skill, index) => {
                    const Icon = iconMap[skill.icon] || Cpu;

                    return (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-6 rounded-2xl border-white/60 hover:shadow-md transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-secondary rounded-xl text-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Icon className="w-6 h-6" />
                                </div>
                                {skill.file_path && (
                                    <a
                                        href={skill.file_path}
                                        download={`${skill.id}.md`}
                                        className="p-2 text-muted-foreground hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"
                                        title="İndir"
                                    >
                                        <Download className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-1">{skill.name}</h3>
                            <p className="text-sm font-medium text-primary mb-3">{skill.role}</p>

                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                                {skill.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {skill.categories.map(cat => (
                                    <span key={cat} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-gray-100 text-gray-600">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
