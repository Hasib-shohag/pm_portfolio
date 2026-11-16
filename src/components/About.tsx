import { Target, Users, Lightbulb, BarChart3, Workflow, Code2 } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: Target,
      title: 'Product Roadmap Ownership',
      description: 'Strategic planning and execution',
    },
    {
      icon: Code2,
      title: 'PRD & SRS Writing',
      description: 'Technical documentation excellence',
    },
    {
      icon: BarChart3,
      title: 'KPI Monitoring',
      description: 'Data-driven decision making',
    },
    {
      icon: Users,
      title: 'AI-Driven Product Features',
      description: 'LLMs, Agentic AI, Embeddings, Tokenization',
    },
    {
      icon: Workflow,
      title: 'Cross-functional Execution',
      description: 'Team collaboration and delivery',
    },
    {
      icon: Lightbulb,
      title: 'System Workflow Planning',
      description: 'Architecture and integration',
    },
  ];

  const proofStrip = [
    { value: '4+', label: 'years of experience' },
    { value: '325,000+', label: 'active users served' },
    { value: '110+', label: 'team members led' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          About
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-4" />
        <p className="text-[#8B949E] mb-16">
          A product and project manager who takes fintech, healthtech and SaaS
          products from discovery to release.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-[#8B949E] text-lg leading-relaxed">
              I'm <span className="text-[#C9D1D9] font-semibold">Md Hasibul Hossain</span>,
              a Product and Project Manager with over 4 years of experience taking
              healthcare, fintech, banking, remittance and SaaS products from
              discovery to release. I write the requirements and shape the roadmap,
              then build the delivery system around them: operating frameworks,
              readiness rules, release gates and cadences. I also build with AI: I
              keep a structured context system for my work and built tooling that
              connects AI assistants to my team's project management tool, and I
              verify every AI output against source.
            </p>

            <div className="flex flex-wrap gap-4">
              {proofStrip.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#161B22] border border-[#30363d] rounded-xl px-5 py-4 hover:border-[#00FFC6]/50 transition-all duration-300"
                >
                  <p className="text-2xl font-bold text-[#00FFC6] font-mono">
                    {item.value}
                  </p>
                  <p className="text-[#8B949E] text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#00FFC6]/5 rounded-2xl blur-xl" />
            <div className="relative bg-[#161B22] border border-[#30363d] rounded-2xl p-8">
              <h3 className="text-[#00FFC6] font-semibold mb-4 font-mono text-sm">
                Core Focus Areas
              </h3>
              <ul className="space-y-3">
                {[
                  'Product Roadmap Ownership',
                  'PRD and SRS Writing',
                  'KPI Monitoring & Analytics',
                  'AI-Driven Product Features',
                  'Cross-functional Product Execution',
                  'System Workflow Planning',
                  'API Integration Feasibility',
                ].map((item) => (
                  <li key={item} className="flex items-start text-[#8B949E]">
                    <span className="text-[#00FFC6] mr-3 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength) => {
            const Icon = strength.icon;
            return (
              <div
                key={strength.title}
                className="group relative bg-[#161B22]/50 backdrop-blur-sm border border-[#30363d] rounded-xl p-6 hover:border-[#00FFC6]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC6]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 bg-[#00FFC6]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00FFC6]/20 transition-colors">
                    <Icon className="text-[#00FFC6]" size={24} />
                  </div>
                  <h3 className="text-[#C9D1D9] font-semibold mb-2">{strength.title}</h3>
                  <p className="text-[#8B949E] text-sm">{strength.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
