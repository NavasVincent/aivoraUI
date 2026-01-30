import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeBlockProps {
    code: string;
    language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="group relative bg-slate-900/50 rounded-xl border border-white/5 overflow-hidden transition-all hover:border-primary-500/30">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">{language}</span>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                    title="Copy code"
                >
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div
                                key="check"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                <Check size={14} className="text-emerald-400" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="copy"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                <Copy size={14} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>
            <div className="p-4 font-mono text-sm overflow-x-auto custom-scrollbar">
                <pre className="text-slate-300">
                    <code>{code}</code>
                </pre>
            </div>

            {/* Glossy overlay effect on hover */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
};

export default CodeBlock;
