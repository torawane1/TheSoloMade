import { Briefcase, CheckCircle, Target, Activity } from 'lucide-react';

const ProjectWork = () => {
    const projects = [
        {
            title: 'Azure DevOps Configuration & Variable Group Migration',
            role: 'DevOps Engineer',
            environment: 'Azure DevOps, YAML Pipelines, Git, Multi-Environment Setup',
            color: 'from-blue-500 to-cyan-500',
            icon: '⚙️',
            status: 'success',
            workDone: [
                'Migrated 100+ Azure DevOps variable groups into Git-based YAML configuration templates to improve maintainability and version control.',
                'Designed a structured config repository with environment separation (dev, stage, prod, test).',
                'Updated multiple CI/CD pipelines to reference the new configuration templates.',
                'Validated pipeline executions across environments to ensure zero regression.',
                'Reduced configuration duplication and enabled easier onboarding for new services.',
            ],
            impact: [
                'Improved release reliability and traceability',
                'Enabled infrastructure and app configuration as code',
                'Reduced manual errors during releases',
            ],
        },
        {
            title: 'CI/CD Pipeline Optimization & Release Process Improvements',
            role: 'DevOps Engineer',
            environment: 'Azure DevOps Pipelines, YAML, Terraform, Docker',
            color: 'from-green-500 to-emerald-500',
            icon: '🚀',
            status: 'success',
            workDone: [
                'Improved release pipelines by refactoring YAML definitions and removing legacy configurations.',
                'Investigated and fixed pipeline failures related to variable resolution, secret handling, and date formatting issues.',
                'Standardized pipeline stages for build, deploy, and validation.',
                'Assisted teams in splitting large releases into phased rollouts to reduce risk.',
                'Supported Terraform execution exclusively through pipelines, ensuring compliance and auditability.',
            ],
            impact: [
                'Faster and more predictable deployments',
                'Reduced production deployment risks',
                'Better pipeline readability and reuse',
            ],
        },
        {
            title: 'Cloud Infrastructure & Terraform Automation',
            role: 'DevOps Engineer',
            environment: 'Microsoft Azure, Terraform',
            color: 'from-purple-500 to-pink-500',
            icon: '☁️',
            status: 'success',
            workDone: [
                'Supported infrastructure provisioning and changes using Terraform executed via CI/CD pipelines.',
                'Assisted in debugging Terraform plan/apply failures across environments.',
                'Ensured correct state handling and environment isolation.',
                'Helped teams comply with internal policies by enforcing pipeline-only Terraform execution.',
            ],
            impact: [
                'Consistent infrastructure deployments',
                'Reduced configuration drift',
                'Improved security and governance',
            ],
        },
        {
            title: 'Kubernetes Observability Platform – SigNoz on AKS',
            role: 'DevOps Engineer',
            environment: 'Azure Kubernetes Service, SigNoz, Helm, Flux, Kustomize (GitOps), OpenTelemetry',
            color: 'from-orange-500 to-yellow-500',
            icon: '�',
            status: 'success',
            workDone: [
                'Set up a POC observability platform using SigNoz on Azure Kubernetes Service (AKS).',
                'Deployed SigNoz using Helm charts and managed configurations with Flux and Kustomize (GitOps).',
                'Configured OpenTelemetry collectors to capture logs, metrics, and distributed traces from Kubernetes workloads.',
                'Built dashboards and alerts for application performance and cluster health monitoring.',
            ],
            impact: [
                'Enabled end-to-end observability across Kubernetes applications and infrastructure',
                'Improved incident investigation, debugging speed, and operational visibility for engineering teams',
            ],
        },
        {
            title: 'Azure Front Door – Custom Domain Automation & Concurrency Control',
            role: 'DevOps Engineer',
            environment: 'Azure Front Door, Terraform, Azure Blob Storage, CI/CD Pipelines',
            color: 'from-indigo-500 to-blue-500',
            icon: '🚪',
            status: 'success',
            workDone: [
                'Automated Azure Front Door custom domain association using Terraform.',
                'Analyzed frequent CI/CD pipeline failures caused by Front Door resources being locked by other running pipelines.',
                'Designed and implemented concurrency control using Azure Blob Storage lease mechanism.',
                'Integrated lease-based locking into pipelines to coordinate access across parallel deployments.',
                'Implemented validation and fallback handling for lease acquisition and release.',
            ],
            impact: [
                'Eliminated pipeline failures caused by resource contention',
                'Enabled multiple pipelines to run concurrently without deployment conflicts',
                'Improved deployment reliability, speed, and developer productivity',
            ],
        },
        {
            title: 'Self-Service Environment Provisioning Platform',
            role: 'DevOps Engineer',
            environment: 'Azure DevOps Pipelines, Feature-Branch Deployments, Backend & Frontend Services',
            color: 'from-red-500 to-pink-500',
            icon: '⚡',
            status: 'success',
            workDone: [
                'Designed and implemented self-service provisioning pipelines to enable developers and QA to create on-demand environments.',
                'Built a universal provisioning pipeline supporting feature-branch–based deployments for isolated testing.',
                'Automated environment reset and back-deployment with required application data.',
                'Integrated deployment of backend and frontend services using latest or feature-specific builds.',
                'Standardized environment setup workflows to remove manual DevOps intervention.',
            ],
            impact: [
                'Enabled developers and QA to provision environments independently without waiting on DevOps',
                'Reduced environment setup time from hours/days to minutes',
                'Increased developer productivity and faster feature validation',
                'Eliminated repetitive manual environment preparation requests',
            ],
        },
    ];


    return (
        <section id="projects" className="py-24 px-6 bg-background">
            <div className="container mx-auto max-w-5xl">
                <h2 className="section-header text-2xl font-bold">
                    <span className="text-secondary">cat</span> project-work.md
                </h2>

                {/* Projects Grid */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="terminal-window hover:shadow-lg transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="terminal-header">
                                <div className="terminal-dot terminal-dot-red" />
                                <div className="terminal-dot terminal-dot-yellow" />
                                <div className="terminal-dot terminal-dot-green" />
                                <span className="ml-4 text-muted-foreground text-sm">project-{index + 1}.txt</span>
                            </div>

                            <div className="p-6">
                                {/* Project Header */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                                        {project.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                                            {project.title}
                                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-terminal-green/10 text-terminal-green text-[10px] font-mono border border-terminal-green/20">
                                                <Activity className="w-3 h-3" />
                                                <span>Build: {project.status === 'success' ? 'Passing' : 'Failing'}</span>
                                            </div>
                                        </h3>
                                        <div className="flex flex-wrap gap-2 text-sm">
                                            <span className="px-2 py-1 bg-muted rounded text-muted-foreground">
                                                <strong>Role:</strong> {project.role}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            <strong className="text-foreground">Environment:</strong> {project.environment}
                                        </p>
                                    </div>
                                </div>

                                {/* Work Done Section */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-terminal-green mb-2 flex items-center gap-2">
                                        <Target className="w-4 h-4" />
                                        Work Done:
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.workDone.map((work, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                                                <span className="text-terminal-green flex-shrink-0">→</span>
                                                <span>{work}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Impact Section */}
                                <div>
                                    <h4 className="text-sm font-semibold text-terminal-yellow mb-2 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        Impact:
                                    </h4>
                                    <ul className="space-y-1">
                                        {project.impact.map((imp, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                                                <span className="text-terminal-yellow flex-shrink-0">✓</span>
                                                <span>{imp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectWork;
