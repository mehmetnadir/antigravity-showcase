
import { motion } from 'framer-motion';
import { Github, Globe, CheckCircle2, Terminal } from 'lucide-react';

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
                                Vercel ile Canlıya Alın
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                                <p className="text-muted-foreground">Kodlarınız GitHub'a gidince Vercel gerisini halleder.</p>
                                <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer" className="text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
                                    Üye Ol ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 ml-16">
                        <ol className="space-y-4">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span><strong>Vercel.com</strong>'a girip <strong>"Add New Project"</strong> deyin.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span>Listeden <strong>antigravity-showcase</strong> projesini seçin.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span><strong>Deploy</strong> butonuna basın ve 1 dakika bekleyin!</span>
                            </li>
                        </ol>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default DeployGuide;
