import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Bell, Lock, FileText, Zap } from 'lucide-react';
import rulesData from '../data/rules.json';
import { LessonVideo } from '../components/ui/LessonVideo';

const iconMap: any = { Bell, Lock, FileText, Zap };

const Rules = () => {
    return (
        <div className="space-y-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground">Sistem Kuralları</h2>
                <p className="text-muted-foreground mt-2">Antigravity'nin asla ihlal etmediği temel çalışma prensipleri.</p>
                <div className="mt-8">
                    <LessonVideo
                        title="2. Ders: Planlama ve Kurallar"
                        description="Yetenek yönetimi ve kural setlerinin önemi."
                        videoUrl="https://drive.google.com/file/d/16qHxtbyfMdHbMxM9lba1-2wWw-DXVCoq/view?usp=drive_link"
                    />
                </div>
            </div>

            <div className="grid gap-4">
                {rulesData.map((rule) => (
                    <RuleCard key={rule.id} rule={rule} />
                ))}
            </div>
        </div>
    );
};

const RuleCard = ({ rule }: { rule: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = iconMap[rule.icon] || FileText;

    return (
        <motion.div
            layout
            className={`glass-panel rounded-xl border transition-colors ${isOpen ? 'border-primary/50 bg-white/90' : 'border-white/50 hover:border-primary/20'}`}
        >
            <div
                className="p-6 cursor-pointer flex items-center gap-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`p-3 rounded-full ${isOpen ? 'bg-primary text-white' : 'bg-secondary text-primary'} transition-colors`}>
                    <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground">{rule.short_desc}</p>
                </div>

                <button className="text-muted-foreground">
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed border-t border-dashed border-gray-100 mt-2">
                            <div className="pt-4">
                                {rule.full_desc}
                            </div>
                            <div className="mt-4 flex gap-2">
                                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100">Zorunlu Protokol</span>
                                <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">v2.1</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Rules;
