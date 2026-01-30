import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';

const PerformanceBanner = () => {
    return (
        <section className="py-20 relative bg-slate-950 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="glass-card p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-primary-500/5 to-transparent">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-3xl font-black text-white mb-4 uppercase">Defining real-time <br /><span className="text-gradient">performance</span></h3>
                                <p className="text-slate-400 max-w-md">
                                    Our components are optimized for the modern web.
                                    Ultra-lightweight, SEO-friendly, and blazing fast.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: 'Core Web Vitals', score: '99/100', color: 'bg-primary-500' },
                                    { label: 'Accessibility Support', score: '100/100', color: 'bg-emerald-500' },
                                    { label: 'Security Metrics', score: 'Clean', color: 'bg-accent' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
                                            <span className="text-white font-bold">{item.score}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                transition={{ duration: 1, delay: i * 0.2 }}
                                                className={`h-full ${item.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden glass-card p-2 border-primary-500/20">
                                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center relative group">
                                    <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="text-center space-y-4 relative z-10">
                                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-primary-500 to-accent flex items-center justify-center shadow-lg shadow-primary-500/40 translate-y-2 group-hover:translate-y-0 transition-transform">
                                            <Zap size={32} className="text-white fill-white" />
                                        </div>
                                        <div className="font-black text-white text-4xl tracking-tighter">99.9</div>
                                        <div className="text-xs font-bold text-primary-400 uppercase tracking-widest">Global Uptime</div>
                                    </div>

                                    {/* Floating Badges */}
                                    <div className="absolute top-8 left-8 p-3 rounded-xl glass-card border-emerald-500/20 -rotate-6 animate-float">
                                        <ShieldCheck className="text-emerald-400" size={24} />
                                    </div>
                                    <div className="absolute bottom-8 right-8 p-3 rounded-xl glass-card border-primary-500/20 rotate-6 animate-float-delayed">
                                        <CheckCircle className="text-primary-400" size={24} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceBanner;
