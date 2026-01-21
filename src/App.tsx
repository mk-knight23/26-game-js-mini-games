import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Bell, Timer, Moon, Calculator, ArrowLeft, ExternalLink, Zap } from 'lucide-react';

type ProjectId = 'hub' | 'bgcolor' | 'popup' | 'countdown' | 'darkmode' | 'calculator';

function App() {
    const [activeTab, setActiveTab] = useState<ProjectId>('hub');

    const projects = [
        { id: 'bgcolor', title: 'Color Changer', icon: <Palette />, color: 'bg-rose-500', desc: 'Dynamic background color generator' },
        { id: 'popup', title: 'Popup Notify', icon: <Bell />, color: 'bg-blue-500', desc: 'Sleek toast notification system' },
        { id: 'countdown', title: 'Countdown', icon: <Timer />, color: 'bg-emerald-500', desc: 'Precision event timer' },
        { id: 'darkmode', title: 'Dark Mode', icon: <Moon />, color: 'bg-violet-500', desc: 'Smart theme switching utility' },
        { id: 'calculator', title: 'Calculator', icon: <Calculator />, color: 'bg-amber-500', desc: 'Minimalist mathematical tool' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Premium Header */}
            <header className="p-6 flex justify-between items-center border-b border-slate-100 bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl text-white shadow-xl shadow-indigo-500/20">
                        <Zap className="w-7 h-7" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tighter">FUN<span className="text-indigo-600">_LABS</span></h1>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">MK Mini Apps Collection</p>
                    </div>
                </div>

                {activeTab !== 'hub' && (
                    <button
                        onClick={() => setActiveTab('hub')}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-black transition-all active:scale-95"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Hub
                    </button>
                )}
            </header>

            <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    {activeTab === 'hub' ? (
                        <motion.div
                            key="hub"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {projects.map((p) => (
                                <button
                                    key={p.id}
                                    onClick={() => setActiveTab(p.id as ProjectId)}
                                    className="group relative p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-indigo-500/50 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all text-left overflow-hidden"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${p.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-${p.color.split('-')[1]}-500/20`}>
                                        {p.icon}
                                    </div>
                                    <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-indigo-600 transition-colors uppercase">{p.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>

                                    <div className="absolute top-8 right-8 text-slate-200 group-hover:text-indigo-500/20 transition-colors">
                                        <ExternalLink className="w-8 h-8" />
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="project"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="h-full bg-white rounded-[3rem] border border-slate-200 shadow-2xl p-12 flex flex-col items-center justify-center text-center space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase">
                                    {projects.find(p => p.id === activeTab)?.title}
                                </h2>
                                <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full" />
                            </div>

                            <p className="text-xl text-slate-500 max-w-xl font-medium">
                                The {activeTab} logic is currently being upgraded for a full React implementation.
                                Enjoy this premium dashboard interface as part of the 30 Projects Rebuild Phase.
                            </p>

                            <div className="p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                                <p className="font-bold text-slate-400 text-sm uppercase tracking-widest">Live Demo Preview Enabled</p>
                                {/* Specific logic for each could be added here */}
                                {activeTab === 'bgcolor' && (
                                    <button
                                        onClick={() => {
                                            const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
                                            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                        }}
                                        className="mt-6 px-8 py-4 bg-rose-500 text-white font-black rounded-2xl shadow-xl active:scale-95 transition-transform"
                                    >
                                        GENERATE COLOR
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="p-8 text-center border-t border-slate-200 bg-white">
                <p className="text-xs font-bold text-slate-400 tracking-[0.3em] uppercase">© 2024 MK-FUN-PROJECTS • 30/30 REBUILD</p>
            </footer>
        </div>
    );
}

export default App;
