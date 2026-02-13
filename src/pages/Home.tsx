import { motion } from 'framer-motion';
import { Zap, ShieldCheck, BrainCircuit } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-16 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 drop-shadow-sm">
                        Antigravity
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Yapay Zeka Destekli, Otonom ve<br />
                        <span className="text-foreground font-semibold">Yetenek Tabanlı Geliştirme Ortamı</span>
                    </p>
                </motion.div>

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
