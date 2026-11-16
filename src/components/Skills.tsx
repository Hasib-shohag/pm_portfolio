import { Layers, Code, Wrench, BrainCircuit } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layers,
      title: 'Product Management',
      skills: [
        'Product Roadmapping',
        'PRD Writing',
        'KPI Monitoring',
        'User Funnel Analysis',
        'Product Market Fit',
      ],
    },
    {
      icon: Code,
      title: 'Technical Understanding',
      skills: [
        'System Architecture Thinking',
        'API Design & Integration',
        'SaaS Platform Design',
        'Digital Banking & Credit System',
        'AI-Driven Systems',
        'Tokenization & Embeddings',
        'Cross-Functional Technical Collaboration',
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: [
        'Jira',
        'Power BI',
        'Excel',
        'Figma',
        'GitHub',
        'Notion',
        'Miro',
        'GA4',
        'Python',
        'Grafana',
        'SQL',
        'Claude Code',
        'Gamma',
        'Lucidchart',
      ],
    },
    {
      icon: BrainCircuit,
      title: 'AI-Enabled Working Method',
      skills: [
        'Context building',
        'Documented AI procedures with review gates',
        'MCP server development',
        'AI-assisted requirement review',
        'Scope traceability',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-[#00FFC6] mb-3 tracking-wider">
          04 · SKILLS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          Skills
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-4" />
        <p className="text-[#8B949E] mb-16">
          Product, technical and AI-enabled capabilities I use to take products
          from discovery to release.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-[#161B22] border border-[#30363d] rounded-xl p-6 hover:border-[#00FFC6]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#00FFC6]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-[#00FFC6]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#C9D1D9] mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-[#8B949E] bg-[#21262d] px-3 py-2 rounded-lg border border-[#30363d] hover:border-[#00FFC6]/30 hover:text-[#C9D1D9] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
