
import CodeBlock from '../components/CodeBlock';

const Documentation = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <aside className="md:col-span-1 space-y-8">
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Getting Started</h3>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><a href="#introduction" className="hover:text-primary-400 transition-colors">Introduction</a></li>
                            <li><a href="#installation" className="hover:text-primary-400 transition-colors">Installation</a></li>
                            <li><a href="#theming" className="hover:text-primary-400 transition-colors">Theming</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Core Components</h3>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Buttons</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Cards</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Inputs</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Navbars</a></li>
                        </ul>
                    </div>
                </aside>

                <main className="md:col-span-3 prose prose-invert max-w-none">
                    <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>

                    <section id="introduction" className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            AivoraUI is a premium component library built specifically for modern web applications.
                            Every component is crafted with a focus on original design, accessibility, and high performance.
                        </p>
                        <div className="glass-card p-6 bg-slate-900/50 border-primary-500/20">
                            <p className="text-sm text-primary-400 font-medium">✨ Pro Tip</p>
                            <p className="text-slate-300 text-sm">
                                Our components use Tailwind CSS v3+ and are fully compatible with React 18 and 19.
                            </p>
                        </div>
                    </section>

                    <section id="installation" className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
                        <p className="text-slate-400 mb-4">To get started, install the core dependencies via npm:</p>
                        <CodeBlock language="bash" code="npm install aivora-ui lucide-react framer-motion" />
                        <p className="text-slate-400 mb-4">Then, add the AivoraUI preset to your <code className="text-accent-light">tailwind.config.js</code>:</p>
                        <CodeBlock
                            language="js"
                            code={`module.exports = {
  presets: [require('aivora-ui/preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/aivora-ui/dist/**/*.js'
  ],
}`}
                        />
                    </section>

                    <section id="theming" className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Theming</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Customizing AivoraUI is straightforward. You can override our default tokens in your CSS variables or directly
                            within your Tailwind configuration. Our design system relies heavily on our custom primary and accent palettes.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Documentation;
