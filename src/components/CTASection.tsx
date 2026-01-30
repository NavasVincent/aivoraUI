
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="py-32 relative bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto glass-card p-1 bg-gradient-to-br from-primary-500/20 to-accent/20">
                    <div className="bg-slate-900/90 rounded-[15px] p-12 md:p-20 text-center relative overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                                Ready to build something <br />
                                <span className="text-gradient">extraordinary?</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                                Join 20,000+ developers building faster with AivoraUI.
                                Start creating your next world-class project today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button className="px-10 py-4 rounded-full accent-gradient text-white font-bold shadow-2xl shadow-accent/20 hover:scale-105 transition-transform">
                                    Get Started Now
                                </button>
                                <button className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
                                    Join the Discord
                                </button>
                            </div>

                            <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                                {/* Mock Logo Cloud */}
                                {['Pulse', 'Aether', 'Vortex', 'Nexus', 'Flux'].map((logo) => (
                                    <span key={logo} className="text-xl font-black text-white tracking-widest uppercase">{logo}</span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Abstract background shapes */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] rounded-full -z-10"></div>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default CTASection;
