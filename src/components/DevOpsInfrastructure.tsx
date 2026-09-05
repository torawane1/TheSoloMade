import { Server, ShieldCheck, GitBranch, Cloud, Cpu } from 'lucide-react';

const DevOpsInfrastructure = () => {
    const stack = [
        {
            title: 'Infrastructure as Code',
            description: 'Provisioned using Terraform for consistent, repeatable environments across Dev, Stage, and Prod.',
            icon: <Cloud className="w-5 h-5 text-blue-400" />,
            tool: 'Terraform, Azure'
        },
        {
            title: 'CI/CD Automation',
            description: 'Fully automated pipelines with linting, type-checking, and automated deployments.',
            icon: <GitBranch className="w-5 h-5 text-green-400" />,
            tool: 'GitHub Actions, npm'
        },
        {
            title: 'Security & Quality',
            description: 'Integrated static analysis and type-safety checks to ensure production-ready code.',
            icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
            tool: 'ESLint, TypeScript, Zod'
        },
        {
            title: 'Hosting & Edge',
            description: 'Deployed to a high-availability edge network for global low-latency access.',
            icon: <Server className="w-5 h-5 text-orange-400" />,
            tool: 'Vite, Edge Network'
        }
    ];

    return (
        <section id="infrastructure" className="py-24 px-6 bg-background border-t border-border">
            <div className="container mx-auto max-w-5xl">
                <h2 className="section-header text-2xl font-bold mb-12">
                    <span className="text-secondary">cat</span> infrastructure.md
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stack.map((item, index) => (
                        <div 
                            key={index} 
                            className="p-6 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-2 rounded-lg bg-background border border-border group-hover:border-secondary transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-foreground">{item.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                {item.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-mono text-secondary">
                                <Cpu className="w-3 h-3" />
                                <span>Stack: {item.tool}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevOpsInfrastructure;
