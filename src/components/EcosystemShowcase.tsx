import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Zap, Layout, Smartphone, BarChart3,
    Shield, Palette, Command, MousePointer2,
    Layers, Cpu, Globe, Rocket
} from 'lucide-react';

const categories = [
    {
        id: 'buttons',
        name: 'Interactive Buttons',
        icon: <Zap size={20} />,
        count: 12,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        preview: (
            <div className="flex gap-2">
                <div className="h-6 w-12 rounded bg-blue-500/20 border border-blue-500/30"></div>
                <div className="h-6 w-6 rounded-full bg-white/10"></div>
                <div className="h-6 w-8 rounded bg-white/5 border border-white/10"></div>
            </div>
        )
    },
    {
        id: 'navigation',
        name: 'Nav Systems',
        icon: <Command size={20} />,
        count: 8,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        preview: (
            <div className="w-full space-y-2">
                <div className="flex gap-1">
                    <div className="h-1.5 w-1/3 bg-purple-500/30 rounded"></div>
                    <div className="h-1.5 w-1/4 bg-white/10 rounded"></div>
                    <div className="h-1.5 w-1/5 bg-white/10 rounded"></div>
                </div>
                <div className="h-4 w-full bg-slate-800 rounded-md border border-white/5"></div>
            </div>
        )
    },
    {
        id: 'feedback',
        name: 'Pulse Feedback',
        icon: <Cpu size={20} />,
        count: 6,
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10',
        preview: (
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                <div className="h-4 w-20 bg-white/5 rounded-full border border-emerald-500/20"></div>
            </div>
        )
    },
    {
        id: 'display',
        name: 'Data Display',
        icon: <BarChart3 size={20} />,
        count: 15,
        color: 'text-amber-400',
        bg: 'bg-amber-400/10',
        preview: (
            <div className="flex items-end gap-1 h-8">
                <div className="w-2 bg-amber-500/40 h-1/2 rounded-t"></div>
                <div className="w-2 bg-amber-500/60 h-3/4 rounded-t"></div>
                <div className="w-2 bg-amber-500 h-full rounded-t"></div>
                <div className="w-2 bg-amber-500/20 h-1/3 rounded-t"></div>
            </div>
        )
    },
    {
        id: 'overlay',
        name: 'Glass Overlays',
        icon: <Layers size={20} />,
        count: 10,
        color: 'text-pink-400',
        bg: 'bg-pink-400/10',
        preview: (
            <div className="relative h-10 w-24">
                <div className="absolute top-0 left-0 h-8 w-16 bg-white/5 border border-white/10 rounded-lg"></div>
                <div className="absolute top-2 left-4 h-8 w-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl"></div>
            </div>
        )
    },
    {
        id: 'input',
        name: 'Supercharged Inputs',
        icon: <Smartphone size={20} />,
        count: 9,
        color: 'text-sky-400',
        bg: 'bg-sky-400/10',
        preview: (
            <div className="w-full">
                <div className="h-7 w-full bg-slate-950 border border-sky-500/30 rounded-lg flex items-center px-2">
                    <div className="h-1 w-2/3 bg-sky-500/30 rounded"></div>
                </div>
            </div>
        )
    },
];

const EcosystemShowcase = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="py-24 relative bg-slate-950 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            <div className="absolute -top-40 left-10 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-40 right-10 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-primary-400 uppercase tracking-widest mb-6"
                    >
                        <Rocket size={12} />
                        Next-Gen Infrastructure
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        The Component <span className="text-gradient">Ecosystem</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg leading-relaxed max-w-2xl"
                    >
                        Beyond simple UI blocks. AivoraUI provides a living ecosystem of interconnected
                        components designed to work in perfect harmony across your entire application stack.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left: Interactive Categories */}
                    <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onMouseEnter={() => setHoveredId(cat.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="glass-card p-1 group"
                            >
                                <Link
                                    to={`/ecosystem/${cat.id}`}
                                    className="bg-slate-900/50 rounded-[15px] p-6 h-full flex flex-col relative overflow-hidden transition-all duration-500 group-hover:bg-slate-900 cursor-pointer block"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-xl ${cat.bg} ${cat.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                            {cat.icon}
                                        </div>
                                        <div className="text-[10px] font-black text-slate-600 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            {cat.count} Variants
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                        {cat.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                        Enterprise-grade implementation with zero-runtime CSS and full TypeScript support.
                                    </p>

                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex-1 max-w-[120px]">
                                            {cat.preview}
                                        </div>
                                        <div className="text-[10px] font-bold text-white/40 group-hover:text-primary-400 flex items-center gap-1 transition-colors uppercase tracking-widest">
                                            View All
                                            <MousePointer2 size={10} />
                                        </div>
                                    </div>

                                    {/* Abstract background light */}
                                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${cat.bg.replace('/10', '/30')}`}></div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Integration Row */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-1"
                    >
                        <div className="bg-slate-900/50 rounded-[15px] p-8 flex items-center gap-8">
                            <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                                <Globe size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Global Edge Sync</h4>
                                <p className="text-sm text-slate-400">Sync design tokens across your micro-frontend architecture with our edge-delivery network.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-1"
                    >
                        <div className="bg-slate-900/50 rounded-[15px] p-8 flex items-center gap-8">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                                <Palette size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Adaptive Theming</h4>
                                <p className="text-sm text-slate-400">Intelligent color normalization that automatically adjusts contrast for WCAG 2.1 AAA compliance.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemShowcase;
