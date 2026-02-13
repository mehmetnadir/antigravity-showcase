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
                className="flex-1 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white relative group"
            >
                <div className="absolute inset-0 bg-slate-50 flex items-center justify-center z-0">
                    <div className="text-center text-slate-400">
                        <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>NotebookLM Yükleniyor...</p>
                    </div>
                </div>
                <iframe
                    src="https://notebooklm.google.com/notebook/d6fb55c9-3f35-4e3e-b78f-8af4bae2bd71"
                    className="w-full h-full relative z-10"
                    title="NotebookLM Assistant"
                    allow="clipboard-write"
                />
            </motion.div>
        </div>
    );
};

export default Assistant;
