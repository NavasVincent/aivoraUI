import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Command, Cpu, BarChart3, Layers, Smartphone } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const categoryData: Record<string, any> = {
    buttons: {
        name: 'Interactive Buttons',
        icon: <Zap size={40} />,
        description: 'High-performance button components with various states and animations.',
        variants: [
            {
                name: 'Glass Primary',
                description: 'Translucent background with high contrast text.',
                code: `<button className="px-6 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all font-medium">Primary Action</button>`,
                preview: <button className="px-6 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all font-medium">Primary Action</button>
            },
            {
                name: 'Neon Glow',
                description: 'Vibrant accent button with outer glow effects.',
                code: `<button className="px-6 py-2 rounded-lg accent-gradient text-white font-bold shadow-lg shadow-accent/20 hover:scale-105 transition-transform">Get Started</button>`,
                preview: <button className="px-6 py-2 rounded-lg accent-gradient text-white font-bold shadow-lg shadow-accent/20 hover:scale-105 transition-transform">Get Started</button>
            },
            {
                name: 'Ghost Minimal',
                description: 'Border-only button with subtle hover fill.',
                code: `<button className="px-6 py-2 rounded-lg border border-white/10 text-slate-400 hover:border-white/20 hover:text-white transition-all">Ghost Action</button>`,
                preview: <button className="px-6 py-2 rounded-lg border border-white/10 text-slate-400 hover:border-white/20 hover:text-white transition-all">Ghost Action</button>
            }
        ]
    },
    navigation: {
        name: 'Nav Systems',
        icon: <Command size={40} />,
        description: 'Modern navigation patterns for headers, sidebars, and menus.',
        variants: [
            {
                name: 'Minimal Header',
                description: 'Clean top navigation with blurred background.',
                code: `<nav className="p-4 bg-slate-900/50 backdrop-blur-xl border-b border-white/5 flex gap-6">
    <a href="#" className="text-white font-bold">Logo</a>
    <div className="flex gap-4 text-slate-400 text-sm">
        <span className="hover:text-white cursor-pointer">Home</span>
        <span className="hover:text-white cursor-pointer">About</span>
    </div>
</nav>`,
                preview: (
                    <div className="w-full bg-slate-950/50 border border-white/5 rounded-xl p-4 flex gap-6 items-center">
                        <span className="text-white font-bold text-xs">AIVORA</span>
                        <div className="flex gap-3 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                            <span className="text-primary-400">Home</span>
                            <span>Products</span>
                            <span>Docs</span>
                        </div>
                    </div>
                )
            }
        ]
    },
    // Adding basics for all to ensure page doesn't crash
    feedback: { name: 'Pulse Feedback', icon: <Cpu size={40} />, description: 'Real-time indicators and toast notifications.', variants: [] },
    display: { name: 'Data Display', icon: <BarChart3 size={40} />, description: 'Beautiful charts and data visualizations.', variants: [] },
    overlay: { name: 'Glass Overlays', icon: <Layers size={40} />, description: 'Modal and popover systems with backdrop filters.', variants: [] },
    input: { name: 'Supercharged Inputs', icon: <Smartphone size={40} />, description: 'Form elements with validation and premium styling.', variants: [] }
};

const CategoryDetail = () => {
    const { id } = useParams<{ id: string }>();
    const data = categoryData[id || 'buttons'] || categoryData.buttons;

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="mb-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Ecosystem
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className="w-20 h-20 rounded-3xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shadow-2xl shadow-primary-500/20">
                            {data.icon}
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                                {data.name} <span className="text-gradient">Variants</span>
                            </h1>
                            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                                {data.description} All variants are built with accessibility and customization in mind.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Variants Grid */}
                <div className="space-y-12">
                    {data.variants.length > 0 ? (
                        data.variants.map((v: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-1"
                            >
                                <div className="bg-slate-900/50 rounded-[15px] overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        {/* Preview Area */}
                                        <div className="p-8 md:p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)]">
                                            <div className="absolute top-4 left-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Preview</div>
                                            <div className="scale-125">
                                                {v.preview}
                                            </div>
                                        </div>

                                        {/* Info & Code Area */}
                                        <div className="p-8 md:p-12 flex flex-col">
                                            <h3 className="text-2xl font-bold text-white mb-2">{v.name}</h3>
                                            <p className="text-slate-500 text-sm mb-8">{v.description}</p>

                                            <div className="mt-auto">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Source Implementation</span>
                                                </div>
                                                <CodeBlock language="tsx" code={v.code} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-32 glass-card rounded-[15px] bg-slate-900/50">
                            <div className="text-slate-500 mb-4 font-bold uppercase tracking-widest">Coming Soon</div>
                            <h3 className="text-2xl font-bold text-white">Variants are being prepared</h3>
                            <p className="text-slate-400 max-w-md mx-auto mt-2">Our engineers are polishing the code samples for this category. Check back shortly!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryDetail;
