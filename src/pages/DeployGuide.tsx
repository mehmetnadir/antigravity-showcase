import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const DeployGuide = () => {
    return (
        <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground">GitHub ile Yayınlama</h2>
                <p className="text-muted-foreground mt-2 text-lg">
                    Bilgisayarınıza hiçbir şey kurmadan, doğrudan GitHub üzerinden yayınlayın.
                </p>
            </div>

            <div className="grid gap-8">

                {/* Step 1: GitHub */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel p-8 rounded-2xl relative overflow-hidden"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                        <div>
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Github className="w-6 h-6" />
                                Projeyi GitHub'a Yükleyin
                            </h3>
                            <p className="text-muted-foreground">Önce kodlarınızı GitHub deposuna (repository) gönderin.</p>
                        </div>
                    </div>

                    <div className="space-y-4 ml-16">
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                            <p className="font-semibold text-slate-700 mb-2">VS Code ile (Terminal gerekmez):</p>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                                <li>Sol menüdeki <strong>Source Control</strong> simgesine tıklayın.</li>
                                <li>Değişiklikleri yazıp <strong>Commit</strong> butonuna basın.</li>
                                <li><strong>Publish Branch</strong> diyerek GitHub'a gönderin.</li>
                            </ol>
                        </div>
                    </div>
                </motion.div>

                {/* Step 2: Vercel Web */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-8 rounded-2xl relative overflow-hidden"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Globe className="w-6 h-6" />
                                Vercel.com'a Bağlayın
                            </h3>
                            <p className="text-muted-foreground">Vercel, GitHub projenizi otomatik olarak çeker ve yayınlar.</p>
                        </div>
                    </div>

                    <div className="space-y-4 ml-16">
                        <ol className="space-y-4">
                            <step className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span><strong>Vercel.com</strong> adresine gidin ve <strong>GitHub ile Giriş</strong> yapın.</span>
                            </step>
                            <step className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span><strong>"Add New Project"</strong> butonuna tıklayın.</span>
                            </step>
                            <step className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span>GitHub listenizden bu projeyi seçin ve <strong>Deploy</strong> deyin.</span>
                            </step>
                        </ol>

                        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100 text-sm text-green-800 flex items-start gap-3">
                            <Zap className="w-5 h-5 mt-0.5" />
                            <div>
                                <strong>Otomatik Güncelleme:</strong>
                                <p>Artık GitHub'a her kod attığınızda, siteniz de otomatik olarak güncellenecek!</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default DeployGuide;
