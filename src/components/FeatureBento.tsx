import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layout, Palette, Code, BarChart3, Users, Smartphone } from 'lucide-react';

const FeatureBento = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
        })
    };

    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeIn}
                        className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        Features for <span className="text-gradient">modern apps</span>
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={fadeIn}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        A suite of high-performance components designed to help you build beautiful,
                        interactive websites faster than ever.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-4 gap-4 h-auto md:h-[1100px]">
                    {/* Large Featured Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                        variants={fadeIn}
                        className="md:col-span-3 md:row-span-2 glass-card p-1 group"
                    >
                        <div className="bg-slate-900/50 rounded-[15px] h-full p-8 md:p-12 flex flex-col relative">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2 rounded-lg bg-primary-500/20 text-primary-400">
                                        <Layout size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Component Ecosystem</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-none tracking-tight">Masterfully crafted <br /><span className="text-primary-400">design systems</span></h3>
                                <p className="text-slate-400 max-w-xl text-lg mb-10">
                                    A comprehensive suite of 100+ production-ready components. From complex data tables to high-fidelity animations, we provide the building blocks for world-class interfaces.
                                </p>

                                <div className="mt-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {[
                                        { icon: <Zap size={18} />, label: 'Buttons', color: 'from-blue-500/20' },
                                        { icon: <Layout size={18} />, label: 'Cards', color: 'from-purple-500/20' },
                                        { icon: <Smartphone size={18} />, label: 'Inputs', color: 'from-pink-500/20' },
                                        { icon: <BarChart3 size={18} />, label: 'Charts', color: 'from-emerald-500/20' },
                                        { icon: <Shield size={18} />, label: 'Auth', color: 'from-amber-500/20' },
                                        { icon: <Palette size={18} />, label: 'Themes', color: 'from-primary-500/20' }
                                    ].map((cat, i) => (
                                        <div key={i} className="aspect-square rounded-2xl bg-slate-950/80 border border-white/5 p-4 flex flex-col items-center justify-center gap-3 group/item hover:border-primary-500/50 hover:bg-slate-900 transition-all duration-300">
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} to-transparent flex items-center justify-center text-white group-hover/item:scale-110 transition-transform`}>
                                                {cat.icon}
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cat.label}</span>
                                        </div>
                                    ))}

                                    {/* Additional detailed mock preview for variety */}
                                    <div className="col-span-2 sm:col-span-3 lg:col-span-6 h-32 mt-4 rounded-2xl bg-slate-950/80 border border-white/5 p-6 flex items-center justify-between group/row hover:border-primary-500/30 transition-colors">
                                        <div className="space-y-3">
                                            <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-2/3 bg-primary-500 animate-pulse"></div>
                                            </div>
                                            <div className="h-2 w-20 bg-white/5 rounded-full"></div>
                                            <div className="flex gap-2 pt-2">
                                                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20"></div>
                                                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20"></div>
                                                <div className="w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/20"></div>
                                            </div>
                                        </div>
                                        <div className="hidden sm:flex gap-4">
                                            <div className="w-24 h-20 rounded-xl bg-slate-900 border border-white/5 p-3 space-y-2">
                                                <div className="h-1.5 w-full bg-white/10 rounded"></div>
                                                <div className="h-1.5 w-2/3 bg-white/5 rounded"></div>
                                                <div className="h-1.5 w-1/2 bg-white/5 rounded"></div>
                                            </div>
                                            <div className="w-24 h-20 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center">
                                                <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative background light */}
                            <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full group-hover:bg-primary-500/20 transition-all duration-700"></div>
                            <div className="absolute left-[-10%] bottom-[-10%] w-[300px] h-[300px] bg-accent/5 blur-[80px] rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Stats/Performance Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={3}
                        variants={fadeIn}
                        className="md:col-span-1 md:row-span-2 glass-card p-1 group"
                    >
                        <div className="bg-slate-900/50 rounded-[15px] h-full p-8 flex flex-col">
                            <div className="p-2 rounded-lg bg-accent/20 text-accent w-fit mb-6">
                                <Zap size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6">Built for speed</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Loading Speed', val: '98%', color: 'bg-emerald-500' },
                                    { label: 'SEO Score', val: '100', color: 'bg-primary-500' },
                                    { label: 'Accessibility', val: '95%', color: 'bg-accent' }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                            <span className="text-slate-500">{stat.label}</span>
                                            <span className="text-white">{stat.val}</span>
                                        </div>
                                        <div className="h-1 w-full bg-slate-950 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: stat.val.includes('%') ? stat.val : '100%' }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                className={`h-full ${stat.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto pt-8 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/10 p-1">
                                    <div className="w-full h-full rounded-full bg-slate-800 animate-pulse"></div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Alex Rivera</div>
                                    <div className="text-[10px] text-slate-500">Lead Architecture</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Color Palette Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={4}
                        variants={fadeIn}
                        className="md:col-span-2 md:row-span-1 glass-card p-1 group"
                    >
                        <div className="bg-slate-900/50 rounded-[15px] h-full p-8 flex flex-col relative overflow-hidden">
                            <div className="relative z-10 flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Palette size={16} className="text-primary-400" />
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Adaptive Themes</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Dynamic Color Engines</h3>
                                </div>
                                <div className="flex gap-2">
                                    {['#6366f1', '#a855f7', '#ec4899', '#f97316'].map((color, i) => (
                                        <div key={i} style={{ backgroundColor: color }} className="w-4 h-4 rounded-full border border-white/20"></div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-4 gap-2">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div key={i} className="h-12 rounded-lg bg-slate-950/50 border border-white/5 hover:border-primary-500/30 transition-colors"></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Security/Trust Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={5}
                        variants={fadeIn}
                        className="md:col-span-2 md:row-span-2 glass-card p-1 group"
                    >
                        <div className="bg-slate-900/50 rounded-[15px] h-full p-8 flex flex-col relative overflow-hidden">
                            <div className="flex items-center gap-2 mb-6">
                                <Shield size={16} className="text-emerald-400" />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Enterprise Ready</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Bulletproof security <br />by default</h3>
                            <p className="text-slate-400 mb-8 max-w-sm">
                                Every component is audited for security risks and follows WCAG standards for maximum inclusivity.
                            </p>
                            <div className="mt-auto space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50 border border-white/5">
                                    <div className="p-2 rounded-lg bg-white/5">
                                        <Users size={16} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-xs font-bold text-white">Team Collaboration</div>
                                        <div className="text-[10px] text-slate-500">Shared design tokens across projects</div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50 border border-white/5">
                                    <div className="p-2 rounded-lg bg-white/5">
                                        <Smartphone size={16} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-xs font-bold text-white">Cross-platform Sync</div>
                                        <div className="text-[10px] text-slate-500">React, Vue, and Svelte support</div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Code Integration Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={6}
                        variants={fadeIn}
                        className="md:col-span-2 md:row-span-1 glass-card p-1 group"
                    >
                        <div className="bg-slate-900/50 rounded-[15px] h-full p-8 flex flex-col relative overflow-hidden">
                            <div className="flex items-center gap-2 mb-4">
                                <Code size={16} className="text-accent" />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Developer Experience</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Built for developers</h3>
                            <p className="text-slate-400 text-sm">
                                TypeScript support and IntelliSense out of the box.
                            </p>
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 blur-[1px] rotate-3 group-hover:rotate-0 transition-transform">
                                <pre className="text-[10px] font-mono text-white p-4 bg-slate-950 rounded-xl border border-white/5">
                                    {`interface Props {
  variant: 'glass' | 'neo';
  size: 'sm' | 'lg';
}`}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureBento;
