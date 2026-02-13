import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap } from 'lucide-react';

const MobileGuide = () => {
    return (
        <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <span className="text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">3. Ders İçeriği</span>
                <h2 className="text-3xl font-bold text-foreground mt-4">Mobil Uygulama Geliştirme</h2>
                <p className="text-muted-foreground mt-2 text-lg">
                    Google Stitch ile web uygulamanızı native mobile dönüştürün.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Concept Art / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <div className="aspect-[9/16] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden max-w-[300px] mx-auto relative z-10">
                        {/* Screen Content Simulation */}
                        <div className="h-full bg-white flex flex-col">
                            <div className="bg-blue-600 p-6 pt-12 text-white">
                                <h3 className="font-bold text-lg">Antigravity</h3>
                                <p className="text-xs opacity-80">Mobile v1.0</p>
                            </div>
                            <div className="p-4 gap-3 grid grid-cols-2">
                                <div className="aspect-square bg-blue-50 rounded-xl"></div>
                                <div className="aspect-square bg-blue-50 rounded-xl"></div>
                                <div className="aspect-square bg-blue-50 rounded-xl"></div>
                                <div className="aspect-square bg-blue-50 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>

                {/* Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-6 rounded-2xl"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Google Stitch Entegrasyonu</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Web projenizdeki state ve veri yapısını Google Stitch platformuna aktararak, kod tekrarı yapmadan native deneyim elde edin.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel p-6 rounded-2xl"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-pink-100 text-pink-600 rounded-xl">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Hızlı Prototipleme</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Mevcut React bileşenlerinizi referans alarak, sürükle-bırak mantığıyla mobil arayüzü dakikalar içinde oluşturun.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-yellow-800 text-sm">
                        <strong>Not:</strong> Bu özellik henüz geliştirme aşamasındadır. Derste detaylı canlı demo yapılacaktır.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileGuide;
