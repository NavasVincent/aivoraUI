import React, { useState } from 'react';
import ComponentGrid from '../components/ComponentGrid';

const Library = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Buttons', 'Cards', 'Inputs', 'Navigation', 'Feedback'];

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-6 mb-12">
                <h1 className="text-5xl font-black text-white mb-6">Component Library</h1>
                <p className="text-xl text-slate-400 max-w-2xl mb-12">
                    Browse our extensive collection of production-ready components.
                    Each one is designed to be copy-pasted directly into your project.
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all ${activeCategory === cat
                                    ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/20'
                                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <ComponentGrid />

            <div className="container mx-auto px-6 mt-20 text-center">
                <div className="glass-card p-12 bg-gradient-to-br from-white/5 to-transparent">
                    <h2 className="text-3xl font-bold text-white mb-4">Request a Component</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Can't find what you're looking for? Our design team releases new components every week.
                        Tell us what you need and we'll try to prioritize it!
                    </p>
                    <button className="accent-gradient px-8 py-3 rounded-full text-white font-bold hover:scale-105 transition-transform shadow-xl shadow-accent/20">
                        Submit Request
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Library;
