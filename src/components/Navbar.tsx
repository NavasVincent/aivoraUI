import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg accent-gradient animate-pulse flex items-center justify-center font-bold text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                        A
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white line-clamp-1">Aivora<span className="text-primary-400">UI</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <Link to="/library" className="hover:text-white transition-colors">Explore Library</Link>
                    <Link to="/sandbox" className="text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></div>
                        Lab Sandbox
                    </Link>
                    <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
                </div>

                <Link to="/docs" className="glass-button text-sm font-semibold text-white px-5 py-2">
                    Get Started
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
