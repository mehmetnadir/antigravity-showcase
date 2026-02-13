import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Brain, Code, Search, Shield } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Planlama",
        desc: "Kullanıcı isteği analiz edilir ve detaylı bir 'Implementation Plan' oluşturulur.",
        icon: Brain,
        color: "bg-purple-100 text-purple-600"
    },
    {
        id: 2,
        title: "Yetenek Seçimi",
        desc: "Görev için en uygun 'Skill' (Örn: Frontend Architect) devreye alınır.",
        icon: Search,
        color: "bg-blue-100 text-blue-600"
    },
    {
        id: 3,
        title: "Güvenli Kodlama",
        desc: "Plan doğrultusunda, var olan yapıyı bozmadan kod yazılır.",
        icon: Code,
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        id: 4,
        title: "Doğrulama",
        desc: "Yazılan kod test edilir ve kullanıcı onayına sunulur.",
        icon: Shield,
        color: "bg-amber-100 text-amber-600"
    }
];

const Workflow = () => {
    return (
        <div className="space-y-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">Antigravity İş Akışı</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Sıradan bir kodlama asistanından farklı olarak, Antigravity belirli bir disiplin ve hiyerarşi içinde çalışır.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-amber-200 -z-10 rounded-full" />

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-sm border-4 border-white z-10`}>
                                    <Icon className="w-10 h-10" />
                                </div>

                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed px-2">
                                    {step.desc}
                                </p>

                                {index < steps.length - 1 && (
                                    <ArrowRight className="md:hidden w-6 h-6 text-gray-300 mt-4 mx-auto rotate-90" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6"
            >
                <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-1">Döngüsel İyileştirme</h4>
                    <p className="text-blue-700 text-sm">Hata durumunda süreç başa dönmez, analize döner.</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-blue-600">
                        <CheckCircle className="w-4 h-4" />
                        Sürekli Öğrenme
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-blue-600">
                        <CheckCircle className="w-4 h-4" />
                        Hafıza (Memory)
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Workflow;
