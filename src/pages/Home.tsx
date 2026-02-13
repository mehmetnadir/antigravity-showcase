import { motion } from 'framer-motion';
import { Zap, ShieldCheck, BrainCircuit } from 'lucide-react';

import { AntigravityLogo } from '../components/ui/AntigravityLogo';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
            {/* Hero Section */}
            <section className="py-16 relative">
                <div className="space-y-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <AntigravityLogo className="h-24 w-auto md:h-32" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-muted-foreground font-light"
                    >
                        Yapay Zeka Destekli, Otonom ve <br />
                        <span className="font-semibold text-foreground">Yetenek Tabanlı Geliştirme Ortamı</span>
                    </motion.p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </section>

            {/* Philosophy Cards */}
            <section className="grid md:grid-cols-3 gap-6">
                <PhilosophyCard
                    icon={BrainCircuit}
                    title="Yetenek Odaklı"
                    desc="Sıradan bir bot değil. Her görev için özelleşmiş yetenekler (Skills) yüklenir."
                    delay={0.1}
                />
                <PhilosophyCard
                    icon={ShieldCheck}
                    title="Güvenli & Planlı"
                    desc="Kod yazmadan önce düşünür. Mevcut yapıyı bozmaz, plana sadık kalır."
                    delay={0.2}
                />
                <PhilosophyCard
                    icon={Zap}
                    title="Otonom Doğrulama"
                    desc="Yazdığı kodu kendi test eder. Hata varsa düzeltir, size çalışan ürün sunar."
                    delay={0.3}
                />
            </section>
        </div>
    );
};

const PhilosophyCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="glass-panel p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border-white/60 shadow-sm"
    >
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
);

export default Home;
