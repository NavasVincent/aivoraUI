import { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

const componentsList = [
    {
        id: 1,
        name: 'Spotlight Card',
        description: 'A card that follows your mouse with a subtle radial light effect.',
        code: `const SpotlightCard = ({ children }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div 
            ref={divRef} 
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 px-8 py-12"
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    opacity,
                    background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)\`,
                }}
            />
            {children}
        </div>
    );
};`,
        preview: (
            <SpotlightCard className="h-32">
                <div className="text-white font-bold text-center">Spotlight</div>
            </SpotlightCard>
        )
    },
    {
        id: 2,
        name: 'Neo-Dynamic Button',
        description: 'A button that reacts to cursor proximity with a glow effect.',
        code: `<button className="relative px-8 py-3 rounded-xl bg-slate-900 border border-white/10 text-white font-medium overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
    <span className="relative z-10">Hover Me</span>
</button>`,
        preview: (
            <button className="relative px-8 py-3 rounded-xl bg-slate-900 border border-white/10 text-white font-medium overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <span className="relative z-10">Hover Me</span>
            </button>
        )
    },
    {
        id: 3,
        name: 'Glassmorphism Card',
        description: 'A frosted glass effect with a subtle animated border.',
        code: `<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative group overflow-hidden">
    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
    <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-accent/20 mb-4"></div>
        <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
        <div className="h-2 w-32 bg-white/10 rounded"></div>
    </div>
</div>`,
        preview: (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative group overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-accent/20 mb-4"></div>
                    <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                    <div className="h-2 w-32 bg-white/10 rounded"></div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        name: 'Floating Input',
        description: 'Modern input field with an animated label and focus glow.',
        code: `<div className="relative w-full max-w-xs">
    <input
        type="text"
        placeholder=" "
        className="peer w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
    />
    <label className="absolute left-4 top-3 text-slate-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent bg-slate-950 px-1">
        Username
    </label>
</div>`,
        preview: (
            <div className="relative w-full max-w-xs">
                <input
                    type="text"
                    placeholder=" "
                    className="peer w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
                />
                <label className="absolute left-4 top-3 text-slate-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent bg-slate-950 px-1">
                    Username
                </label>
            </div>
        )
    },
    {
        id: 5,
        name: 'Status Indicator',
        description: 'Polished pulse indicators for live status or notifications.',
        code: `<div className="flex gap-4">
    <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
    </span>
    <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
    </span>
</div>`,
        preview: (
            <div className="flex gap-4">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </span>
            </div>
        )
    },
    {
        id: 6,
        name: 'Premium Data Table',
        description: 'A modern, glass-styled table with hover states and status badges.',
        code: `<div className="w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm">
    <table className="w-full text-left text-sm">
        <thead className="bg-white/5 text-slate-400 uppercase text-[10px] tracking-widest font-bold">
            <tr>
                <th className="px-4 py-3 border-b border-white/5">Project</th>
                <th className="px-4 py-3 border-b border-white/5">Status</th>
                <th className="px-4 py-3 border-b border-white/5 text-right">Commit</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
            <tr className="hover:bg-white/5 transition-colors group">
                <td className="px-4 py-3 text-white font-medium">Aivora UI</td>
                <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">Active</span>
                </td>
                <td className="px-4 py-3 text-right text-slate-500 font-mono">8f2d1a</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors group">
                <td className="px-4 py-3 text-white font-medium">Nova Dashboard</td>
                <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] border border-amber-500/20">Pending</span>
                </td>
                <td className="px-4 py-3 text-right text-slate-500 font-mono">4c9b2e</td>
            </tr>
        </tbody>
    </table>
</div>`,
        preview: (
            <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-slate-950 shadow-2xl scale-90">
                <table className="w-full text-left text-[11px]">
                    <thead className="bg-white/5 text-slate-500 uppercase text-[9px] tracking-widest font-bold">
                        <tr>
                            <th className="px-3 py-2 border-b border-white/5 font-bold">Project</th>
                            <th className="px-3 py-2 border-b border-white/5 font-bold">Status</th>
                            <th className="px-3 py-2 border-b border-white/5 text-right font-bold">Ref</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/5 transition-colors group">
                            <td className="px-3 py-2 text-slate-200">Aivora UI</td>
                            <td className="px-3 py-2">
                                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                                    <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                    Live
                                </span>
                            </td>
                            <td className="px-3 py-2 text-right text-slate-600 font-mono">8f2d</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors group">
                            <td className="px-3 py-2 text-slate-200">Nova</td>
                            <td className="px-3 py-2">
                                <span className="inline-flex items-center gap-1.5 text-amber-400">
                                    <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                                    Wait
                                </span>
                            </td>
                            <td className="px-3 py-2 text-right text-slate-600 font-mono">4c9b</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
];

const ComponentGrid = () => {
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [showCodeId, setShowCodeId] = useState<number | null>(null);

    const handleCopy = async (code: string, id: number) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const toggleCode = (id: number) => {
        setShowCodeId(showCodeId === id ? null : id);
    };

    return (
        <section id="components" className="py-20 bg-slate-950/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold text-white mb-4">The Component Lab</h2>
                        <p className="text-slate-400">
                            A collection of high-performance, accessible components built with Tailwind CSS and React.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {componentsList.map((comp) => (
                        <div key={comp.id} className="glass-card p-1 group flex flex-col">
                            <div className="bg-slate-900/50 rounded-[15px] p-6 h-full flex flex-col">
                                <div className="flex-1 flex items-center justify-center p-8 bg-slate-950 rounded-xl mb-6 border border-white/5 min-h-[200px] relative overflow-hidden">
                                    {/* Background glow for preview */}
                                    <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10 w-full flex justify-center">
                                        {comp.preview}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-white mb-2">{comp.name}</h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                        {comp.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleCopy(comp.code, comp.id)}
                                                className="text-xs font-bold transition-colors flex items-center gap-2 group/btn h-8"
                                            >
                                                <AnimatePresence mode="wait">
                                                    {copiedId === comp.id ? (
                                                        <motion.span
                                                            key="copied"
                                                            initial={{ opacity: 0, y: 5 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -5 }}
                                                            className="text-emerald-400 flex items-center gap-1"
                                                        >
                                                            <Check size={14} />
                                                            Copied!
                                                        </motion.span>
                                                    ) : (
                                                        <motion.span
                                                            key="copy"
                                                            initial={{ opacity: 0, y: 5 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -5 }}
                                                            className="text-slate-400 group-hover/btn:text-white flex items-center gap-1"
                                                        >
                                                            <Copy size={14} className="group-hover/btn:scale-110 transition-transform" />
                                                            Copy
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </button>

                                            <button
                                                onClick={() => toggleCode(comp.id)}
                                                className={`text-xs font-bold transition-colors flex items-center gap-2 h-8 ${showCodeId === comp.id ? 'text-primary-400' : 'text-slate-400 hover:text-white'
                                                    }`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`w-4 h-4 transition-transform duration-300 ${showCodeId === comp.id ? 'rotate-180' : ''}`}
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                >
                                                    <path d="m18 15-6-6-6 6" />
                                                </svg>
                                                {showCodeId === comp.id ? 'Hide Code' : 'Show Code'}
                                            </button>
                                        </div>

                                        <div className="flex gap-1 text-[10px] font-mono text-slate-600">
                                            <span className="px-1.5 py-0.5 rounded-md border border-slate-800">React</span>
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {showCodeId === comp.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-slate-950 rounded-xl p-4 border border-white/5 font-mono text-[11px] leading-relaxed relative">
                                                <div className="absolute top-2 right-2 text-[10px] text-slate-700 uppercase tracking-widest font-bold">TSX</div>
                                                <pre className="text-slate-400 custom-scrollbar overflow-x-auto max-h-[250px] pt-4">
                                                    <code>{comp.code}</code>
                                                </pre>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComponentGrid;
