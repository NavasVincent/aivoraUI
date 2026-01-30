import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center font-bold text-white shadow-lg shadow-accent/20">
                                A
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">Aivora<span className="text-primary-400">UI</span></span>
                        </div>
                        <p className="text-slate-500 max-w-sm leading-relaxed">
                            Empowering frontend developers to build faster and more beautiful web applications with our curated component library.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link to="/docs" className="hover:text-primary-400 transition-colors">Documentation</Link></li>
                            <li><Link to="/library" className="hover:text-primary-400 transition-colors">Components</Link></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Examples</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Themes</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Discord</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Newsletter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-slate-600 gap-4">
                    <p>© 2026 AivoraUI. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
