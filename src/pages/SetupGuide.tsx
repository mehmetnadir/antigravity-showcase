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

            {/* Antigravity Product Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-[2rem] p-1 shadow-2xl overflow-hidden relative"
            >
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="bg-black/20 backdrop-blur-md rounded-[1.8rem] p-8 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/20">
                                    v2.1 Release
                                </div>
                                <div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-bold uppercase tracking-wider border border-green-500/30 flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                    Stable
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                Antigravity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Engine</span>
                            </h2>

                            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                                Yapay zeka orkestrasyonu ve otonom kodlama için tasarlanmış yeni nesil işletim sistemi. Cursor ve Windsurf ile kusursuz entegrasyon sağlar.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="https://antigravity.google/download"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                                >
                                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Antigravity İndir</span>
                                    <span className="text-xs font-normal text-slate-500 ml-1">(macOS Universal)</span>
                                </a>


                            </div>


                        </div>

                        {/* Interactive Terminal Visual */}
                        <div className="flex-1 w-full max-w-md">
                            <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-2xl border border-white/10 font-mono text-sm relative group">
                                <div className="flex items-center justify-between px-4 py-3 bg-[#2D2D2D] border-b border-black/50">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                    </div>
                                    <div className="text-slate-500 text-xs">zsh — antigravity</div>
                                </div>
                                <div className="p-6 space-y-4 text-slate-300 min-h-[220px]">
                                    <div>
                                        <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">npx antigravity-init</span>
                                    </div>
                                    <div className="text-slate-400">
                                        Initializing Antigravity Engine v2.1...
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span>
                                            <span>System Core Loaded</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span>
                                            <span>AI Models Connected (Gemini, Claude)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span>
                                            <span>Workspace Indexed</span>
                                        </div>
                                    </div>
                                    <div className="text-purple-400 pt-2 animate-pulse">
                                        Ready for instructions..._
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

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
