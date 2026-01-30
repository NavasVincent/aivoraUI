import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { motion } from 'framer-motion';
import { Rocket, Code2, Play, Layout, Share2, Sparkles, AlertCircle, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const initialReactCode = `
const PremiumCard = () => {
  return (
    <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10 opacity-50"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">React Component</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          Full power of React & Tailwind.
        </p>
        <button className="px-6 py-2 rounded-full bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/20">
          Interactive
        </button>
      </div>
    </div>
  );
};

render(<PremiumCard />);
`;

const initialHtmlCode = `
<div class="p-8 rounded-3xl bg-slate-900 border border-white/5 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-50"></div>
  <div class="relative z-10">
    <h3 class="text-2xl font-bold text-white mb-3 tracking-tight">Pure HTML</h3>
    <p class="text-slate-400 leading-relaxed mb-6">
      Standard HTML markup with Tailwind utility classes.
    </p>
    <button class="px-6 py-2 rounded-full bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20">
      Static Render
    </button>
  </div>
</div>
`;

const Sandbox = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [mode, setMode] = useState<'react' | 'html'>('react');
    const [editorCode, setEditorCode] = useState(initialReactCode);

    const handleModeChange = (newMode: 'react' | 'html') => {
        setMode(newMode);
        setEditorCode(newMode === 'react' ? initialReactCode : initialHtmlCode);
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-950">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-6"
                        >
                            <Sparkles size={12} />
                            Live Lab Environment
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                            Interactive <span className="text-gradient">Sandbox</span>
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Experiment with Aivora UI components or build your own from scratch.
                            Everything you write is rendered instantly in the preview pane. Now with <b>HTML</b> support.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex p-1 bg-slate-900 rounded-xl border border-white/5 w-fit">
                            <button
                                onClick={() => handleModeChange('react')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${mode === 'react' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white'}`}
                            >
                                React (TSX)
                            </button>
                            <button
                                onClick={() => handleModeChange('html')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${mode === 'html' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:text-white'}`}
                            >
                                HTML
                            </button>
                        </div>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                setIsCopied(true);
                                setTimeout(() => setIsCopied(false), 2000);
                            }}
                            className="p-3 rounded-xl glass-card border-white/10 text-slate-400 hover:text-white transition-all flex items-center gap-2 text-sm font-bold justify-center"
                        >
                            {isCopied ? <Check size={18} /> : <Share2 size={18} />}
                            {isCopied ? 'Link Copied!' : 'Share Lab'}
                        </button>
                    </div>
                </div>

                {/* Playground Container */}
                <div className="glass-card p-1">
                    <div className="bg-slate-900/50 rounded-[15px] overflow-hidden">
                        <LiveProvider
                            code={editorCode}
                            noInline={mode === 'react'}
                            scope={{ motion, LucideIcons }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
                                {/* Editor Column */}
                                <div className="lg:col-span-12 xl:col-span-5 border-b xl:border-b-0 xl:border-r border-white/5 flex flex-col">
                                    <div className="px-6 py-3 border-b border-white/5 bg-slate-900 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-4">
                                                {mode === 'react' ? 'lab_playground.tsx' : 'preview.html'}
                                            </span>
                                        </div>
                                        <Code2 size={14} className="text-slate-500" />
                                    </div>
                                    <div className="flex-grow bg-slate-950 p-4 font-mono text-sm overflow-hidden custom-scrollbar">
                                        <LiveEditor
                                            onChange={(c) => setEditorCode(c)}
                                            className="react-live-editor"
                                        />
                                    </div>
                                </div>

                                {/* Preview Column */}
                                <div className="lg:col-span-12 xl:col-span-7 flex flex-col bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.05),transparent)]">
                                    <div className="px-6 py-3 border-b border-white/5 bg-slate-900/50 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Play size={14} className="text-emerald-400" />
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Instant Render</span>
                                        </div>
                                        <Layout size={14} className="text-slate-500" />
                                    </div>
                                    <div className="flex-grow p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
                                        <div className="relative z-10 w-full max-w-lg">
                                            <LivePreview />
                                        </div>
                                        {/* Background Grid for lab feel */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                                    </div>
                                    {/* Error Console */}
                                    <div className="p-4 border-t border-white/5 bg-slate-950/80 backdrop-blur-sm">
                                        <div className="flex items-center gap-2 mb-2">
                                            <AlertCircle size={12} className="text-rose-500" />
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Console Output</span>
                                        </div>
                                        <LiveError className="text-xs font-mono text-rose-400 bg-rose-500/5 p-3 rounded-lg border border-rose-500/20" />
                                    </div>
                                </div>
                            </div>
                        </LiveProvider>
                    </div>
                </div>

                {/* Tips Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: mode === 'react' ? 'React Power' : 'HTML Simplicity', desc: mode === 'react' ? 'You have access to all React hooks, Tailwind classes, and Framer Motion.' : 'Write clean, semantic HTML and use the full utility set of Tailwind CSS.' },
                        { title: 'Live Rendering', desc: 'Edits are updated automatically. No need to refresh or save.' },
                        { title: 'Environment', desc: 'The sandbox provides an isolated container to test components safely.' }
                    ].map((tip, i) => (
                        <div key={i} className="space-y-3">
                            <h4 className="text-white font-bold text-lg">{tip.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .react-live-editor textarea {
                    outline: none !important;
                    background: transparent !important;
                }
                .react-live-editor pre {
                    background: transparent !important;
                    color: inherit !important;
                }
                .token.comment, .token.prolog, .token.doctype, .token.cdata { color: #64748b; }
                .token.punctuation { color: #94a3b8; }
                .token.namespace { opacity: .7; }
                .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted { color: #fb7185; }
                .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted { color: #34d399; }
                .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string { color: #94a3b8; }
                .token.atrule, .token.attr-value, .token.keyword { color: #818cf8; }
                .token.function, .token.class-name { color: #60a5fa; }
                .token.regex, .token.important, .token.variable { color: #facc15; }
            `}</style>
        </div>
    );
};

export default Sandbox;
