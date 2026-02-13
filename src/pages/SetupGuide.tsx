import { motion } from 'framer-motion';
import { Terminal, Download, Cpu, Code2, Command, Zap } from 'lucide-react';
import { LessonVideo } from '../components/ui/LessonVideo';

const SetupGuide = () => {
    return (
        <div className="space-y-12 max-w-5xl mx-auto pb-12">

            {/* Header */}
            <div className="text-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider"
                >
                    <Terminal className="w-3 h-3" />
                    Başlangıç Noktası
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Geliştirme Ortamını Kur
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Antigravity dünyasına girmeden önce, yeni nesil yapay zeka destekli kod editörlerini ve gerekli altyapıyı hazırlayalım.
                </p>
            </div>

            {/* IDE Selection */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Cursor */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-8 rounded-3xl border-slate-200/60 hover:border-blue-300 hover:shadow-lg transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Code2 className="w-24 h-24" />
                    </div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center">
                            <Command className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Cursor</h3>
                            <p className="text-sm font-medium text-slate-500">AI Code Editor</p>
                        </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                        VS Code altyapısı üzerine kurulu, yapay zekayı (GPT-4, Claude 3.5) doğrudan editörün içine entegre eden en popüler araç.
                    </p>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-sm text-slate-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Zap className="w-3 h-3" /></div>
                            VS Code eklentilerini destekler.
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Zap className="w-3 h-3" /></div>
                            Chat & Composer özellikleri.
                        </li>
                    </ul>

                    <a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                        <Download className="w-4 h-4" />
                        Cursor İndir
                    </a>
                </motion.div>

                {/* Windsurf */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-8 rounded-3xl border-slate-200/60 hover:border-teal-300 hover:shadow-lg transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-teal-600">
                        <Cpu className="w-24 h-24" />
                    </div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center">
                            <Cpu className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Windsurf</h3>
                            <p className="text-sm font-medium text-teal-600">Agentic IDE</p>
                        </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Codeium tarafından geliştirilen, "Flow" özelliği ile kodun akışını ve bağlamını derinlemesine anlayan yeni nesil editör.
                    </p>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-sm text-slate-700">
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600"><Zap className="w-3 h-3" /></div>
                            Derin bağlam farkındalığı (Context).
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-700">
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600"><Zap className="w-3 h-3" /></div>
                            Cascade Agent teknolojisi.
                        </li>
                    </ul>

                    <a href="https://windsurf.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors">
                        <Download className="w-4 h-4" />
                        Windsurf İndir
                    </a>
                </motion.div>
            </div>

            {/* Antigravity Setup */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/50 backdrop-blur-xl border border-white/40 p-1 rounded-3xl shadow-sm mb-12"
            >
                <div className="bg-slate-900 rounded-[1.3rem] p-8 md:p-10 text-white relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">Antigravity Kurulumu</h2>
                                <p className="text-slate-400 text-lg">
                                    Proje dosyalarını bilgisayarınıza indirin ve sistemi başlatın.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Node.js Yükleyin</h4>
                                        <p className="text-sm text-slate-400">Projeyi çalıştırmak için gereklidir. <a href="https://nodejs.org/" className="text-blue-400 hover:text-blue-300 underline">nodejs.org</a> adresinden LTS sürümünü indirin.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Repoyu Klonlayın</h4>
                                        <p className="text-sm text-slate-400">Terminali açın ve aşağıdaki komutu yapıştırın.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/50 rounded-xl p-5 border border-white/10 font-mono text-sm leading-7 shadow-inner">
                            <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
                                <span className="text-slate-400 text-xs">Terminal</span>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-slate-300">
                                    <span className="text-purple-400">git</span> clone https://github.com/mehmetnadir/antigravity-showcase.git
                                </p>
                                <p className="text-slate-300">
                                    <span className="text-blue-400">cd</span> antigravity-showcase
                                </p>
                                <p className="text-slate-300">
                                    <span className="text-green-400">npm</span> install
                                </p>
                                <p className="text-slate-300">
                                    <span className="text-green-400">npm</span> run dev
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Narrative & Video Section */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Kurulumdan Sonra Ne Olacak?</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Terminalde <code>Local: http://localhost:5173</code> yazısını gördüğünüzde, projeniz kendi bilgisayarınızda çalışıyor demektir.
                            Artık bu canlı bir organizma gibidir; kodları değiştirdiğinizde anında tarayıcıda sonucunu göreceksiniz.
                        </p>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">Neden Önce Kurallar?</h4>
                        <p className="text-sm text-blue-800 leading-relaxed">
                            Yazılıma başlamadan önce bir "anayasa" belirlemeliyiz. Yapay zeka (AI) çok güçlüdür ancak kontrolsüz bırakılırsa kaotik kodlar üretir.
                            <strong>Kurallar (Rules)</strong>, bizim AI ile nasıl konuşacağımızı ve projenin sınırlarını belirler. Bir plana sadık kalmadan bina inşa edemezsiniz; yazılım da böyledir.
                        </p>
                    </div>
                </div>

                <LessonVideo
                    title="1. Ders: Kurulum ve Temeller"
                    description="Geliştirme ortamının hazırlanması ve ilk adımlar."
                    videoUrl="https://drive.google.com/file/d/1dyYGJbEFGlhrs7gQrg4F4cNkLCtFa9x0/view?usp=drive_link"
                />
            </div>

            {/* Narrative & Video Section */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Kurulumdan Sonra Ne Olacak?</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Terminalde <code>Local: http://localhost:5173</code> yazısını gördüğünüzde, projeniz kendi bilgisayarınızda çalışıyor demektir.
                            Artık bu canlı bir organizma gibidir; kodları değiştirdiğinizde anında tarayıcıda sonucunu göreceksiniz.
                        </p>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">Neden Önce Kurallar?</h4>
                        <p className="text-sm text-blue-800 leading-relaxed">
                            Yazılıma başlamadan önce bir "anayasa" belirlemeliyiz. Yapay zeka (AI) çok güçlüdür ancak kontrolsüz bırakılırsa kaotik kodlar üretir.
                            <strong>Kurallar (Rules)</strong>, bizim AI ile nasıl konuşacağımızı ve projenin sınırlarını belirler. Bir plana sadık kalmadan bina inşa edemezsiniz; yazılım da böyledir.
                        </p>
                    </div>
                </div>

                <LessonVideo
                    title="1. Ders: Kurulum ve Temeller"
                    description="Geliştirme ortamının hazırlanması ve ilk adımlar."
                    videoUrl="https://drive.google.com/file/d/1dyYGJbEFGlhrs7gQrg4F4cNkLCtFa9x0/view?usp=drive_link"
                />
            </div>
        </div>
    );
};

export default SetupGuide;
