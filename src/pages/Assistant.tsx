import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare } from 'lucide-react';

const Assistant = () => {
    return (
        <div className="h-[calc(100vh-8rem)] min-h-[600px] flex flex-col">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">AI Asistan (NotebookLM)</h2>
                    <p className="text-muted-foreground mt-2">Bu projenin tüm dokümantasyonu ile eğitilmiş yapay zeka asistanı.</p>
                </div>
                <a
                    href="https://notebooklm.google.com/notebook/d6fb55c9-3f35-4e3e-b78f-8af4bae2bd71"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                    <ExternalLink className="w-4 h-4" />
                    Yeni Sekmede Aç
                </a>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 relative flex items-center justify-center p-8"
            >
                <div className="text-center max-w-md space-y-6">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto">
                        <MessageSquare className="w-10 h-10 text-purple-600" />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Güvenlik Kısıtlaması Nedeniyle</h3>
                        <p className="text-slate-500 mt-2 leading-relaxed">
                            Google NotebookLM, güvenlik politikaları gereği (X-Frame-Options) başka sitelerin içine gömülemez.
                            En iyi deneyim için ayrı bir pencerede kullanmanız gerekmektedir.
                        </p>
                    </div>

                    <button
                        onClick={() => window.open('https://notebooklm.google.com/notebook/d6fb55c9-3f35-4e3e-b78f-8af4bae2bd71', '_blank', 'width=1200,height=800')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 hover:shadow-xl hover:-translate-y-1 transform duration-200"
                    >
                        <ExternalLink className="w-5 h-5" />
                        Asistanı Pencerede Aç
                    </button>

                    <p className="text-xs text-slate-400">
                        *Pop-up engelleyici varsa izin vermeniz gerekebilir.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Assistant;
