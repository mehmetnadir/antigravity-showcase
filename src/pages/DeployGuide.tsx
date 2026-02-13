
import { motion } from 'framer-motion';
import { Github, Globe, CheckCircle2, Terminal, Cloud } from 'lucide-react';

const DeployGuide = () => {
    return (
        <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground">GitHub ile Yayınlama</h2>
                <p className="text-muted-foreground mt-2 text-lg">
                    Projeniz yerel olarak Git'e hazırlandı. Şimdi GitHub'a gönderelim.
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
                                GitHub Deposunu Oluşturun
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                                <p className="text-muted-foreground">GitHub.com'da yeni bir repo açın.</p>
                                <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" className="text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
                                    Hesap Oluştur ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 ml-16">
                        <div className="p-4 bg-slate-900 text-slate-50 border border-slate-700 rounded-xl font-mono text-sm overflow-x-auto relative group">
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Terminal className="w-4 h-4 text-slate-400" />
                            </div>
                            <p className="opacity-50 mb-2"># Ben sizin için 'init' ve 'commit' işlemlerini yaptım.</p>
                            <p className="opacity-50 mb-2"># Sadece şunları yazın:</p>
                            <div className="space-y-2 mt-4">
                                <p><span className="text-purple-400">git</span> remote add origin https://github.com/KULLANICI_ADINIZ/antigravity-showcase.git</p>
                                <p><span className="text-purple-400">git</span> push -u origin master</p>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            * `KULLANICI_ADINIZ` kısmını kendi GitHub kullanıcı adınızla değiştirmeyi unutmayın.
                        </p>
                    </div>
                </motion.div>

                {/* Comparison Section */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Vercel Option */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-panel p-6 rounded-2xl h-full border-blue-100 bg-blue-50/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-black text-white rounded-lg"><Globe className="w-5 h-5" /></div>
                                <h3 className="font-bold text-lg">Seçenek A: Vercel</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Next.js yaratıcılarından.</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> En hızlı React performansı.</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Sıfır ayar (Zero Config).</li>
                            </ul>
                            <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                                Vercel ile Yayınla ↗
                            </a>
                        </motion.div>
                    </div>

                    {/* Netlify Option */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-panel p-6 rounded-2xl h-full border-teal-100 bg-teal-50/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-teal-600 text-white rounded-lg"><Cloud className="w-5 h-5" /></div>
                                <h3 className="font-bold text-lg">Seçenek B: Netlify</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500" /> Sürükle-Bırak özelliği var.</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500" /> Ücretsiz formu yönetimi.</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500" /> Geniş eklenti pazarı.</li>
                            </ul>
                            <a href="https://app.netlify.com/start" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors">
                                Netlify ile Yayınla ↗
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Detailed Steps (Toggleable or Static - keeping it simple for now) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-8 rounded-2xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                            <h3 className="text-xl font-bold">Nasıl Yapılır?</h3>
                            <p className="text-muted-foreground">Seçtiğiniz platforma göre adımları takip edin.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 ml-16">
                        <div>
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-black"></span>
                                Vercel Adımları
                            </h4>
                            <ol className="space-y-3 text-sm text-muted-foreground list-decimal pl-4">
                                <li><strong>Vercel.com</strong>'a GitHub ile giriş yapın.</li>
                                <li><strong>"Add New Project"</strong> butonuna tıklayın.</li>
                                <li>GitHub reponuzu (antigravity-showcase) seçin.</li>
                                <li>Platform otomatik olarak <strong>Vite</strong> altyapısını tanır.</li>
                                <li><strong>"Deploy"</strong> butonuna basın.</li>
                            </ol>
                        </div>
                        <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                                Netlify Adımları
                            </h4>
                            <ol className="space-y-3 text-sm text-muted-foreground list-decimal pl-4">
                                <li><strong>Netlify.com</strong>'a GitHub ile giriş yapın.</li>
                                <li><strong>"Add new site"</strong> &gt; <strong>"Import an existing project"</strong> deyin.</li>
                                <li>GitHub'ı seçip reponuzu bağlayın.</li>
                                <li>Build settings otomatik dolacaktır (`npm run build`).</li>
                                <li><strong>"Deploy site"</strong> butonuna basın.</li>
                            </ol>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default DeployGuide;
