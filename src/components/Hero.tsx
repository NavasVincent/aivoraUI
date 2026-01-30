
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary-400 mb-8 animate-fade-in">
                    <span className="flex h-2 w-2 rounded-full bg-primary-400 animate-ping"></span>
                    New Components Released Weekly
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight">
                    Crafting the <br />
                    <span className="text-gradient">Future of Web</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
                    Premium Tailwind CSS components designed for world-class developers.
                    Original designs, production-ready, and built to scale.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/library" className="px-8 py-4 rounded-full accent-gradient text-white font-bold shadow-xl shadow-accent/20 hover:scale-105 transition-transform">
                        Explore Library
                    </Link>
                    <Link to="/docs" className="glass-button px-8 py-4 font-bold text-white">
                        View Documentation
                    </Link>
                </div>

                <div className="mt-20 relative max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full -z-10"></div>
                    <div className="glass-card p-4 md:p-8 aspect-video overflow-hidden group">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                            </div>
                            <div className="ml-4 text-xs font-mono text-slate-500">component-preview.tsx</div>
                        </div>
                        <div className="grid grid-cols-12 gap-8 h-full">
                            <div className="col-span-12 md:col-span-4 space-y-4">
                                <div className="h-8 w-3/4 rounded-lg bg-white/5 animate-pulse"></div>
                                <div className="h-32 w-full rounded-xl bg-white/5 animate-pulse"></div>
                                <div className="h-8 w-1/2 rounded-lg bg-white/5 animate-pulse"></div>
                            </div>
                            <div className="col-span-12 md:col-span-8">
                                <div className="h-full w-full rounded-2xl bg-white/5 animate-pulse flex items-center justify-center">
                                    <div className="grid grid-cols-2 gap-4 p-8 w-full">
                                        <div className="h-20 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5"></div>
                                        <div className="h-20 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5"></div>
                                        <div className="h-20 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5"></div>
                                        <div className="h-20 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
