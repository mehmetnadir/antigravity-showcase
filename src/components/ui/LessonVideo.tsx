import { Play } from 'lucide-react';

interface LessonVideoProps {
    title: string;
    description: string;
    videoUrl: string; // The confusing 'view' url from drive
}

export const LessonVideo = ({ title, description, videoUrl }: LessonVideoProps) => {
    // Convert 'view' URL to 'preview' for embedding if it's a google drive link
    let embedUrl = videoUrl;
    if (videoUrl.includes('drive.google.com/file/d/')) {
        const fileId = videoUrl.split('/d/')[1].split('/')[0];
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    }

    return (
        <div className="glass-panel p-6 rounded-2xl border-blue-100 bg-white/50 space-y-4">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 fill-current" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-500">{description}</p>
                </div>
            </div>

            <div className="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-200 relative group">
                <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    allow="autoplay"
                    title={title}
                ></iframe>

                {/* Fallback/External Link (Optional overlay if iframe fails or for better UX) */}
                <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                    Drive'da Aç ↗
                </a>
            </div>
        </div>
    );
};
