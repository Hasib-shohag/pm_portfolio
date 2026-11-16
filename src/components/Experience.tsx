import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Celloscope',
      location: 'Dhaka, Bangladesh',
      role: 'Product Manager',
      period: 'Nov 2026 – Present',
      responsibilities: [
        'Own product direction for a health ecosystem platform covering e-prescription, telemedicine, appointments and patient health records; drafted the product vision and defined the telemedicine and appointment roadmaps with the delivery teams.',
        'Designed the delivery operating model for three teams and authored a Development Process & Delivery Framework: Definition of Ready, 1–3 point estimation, separate QA, UAT, Ready for Live and Production Deployed gates, and RACI.',
        'Built an MCP server for the team’s self-hosted project management tool and used AI to migrate about 2,350 work items across four team workspaces with no deletions.',
      ],
    },
    {
      company: 'Brain Station 23',
      location: 'Dhaka, Bangladesh',
      role: 'Project Manager',
      period: 'Apr 2024 – Oct 2026',
      responsibilities: [
        'Delivered fintech, remittance, AI and bank-audit platforms, including 3 banking solutions for 325,000+ active users; wrote requirements and shaped the roadmap with the client and solution architects.',
        'Reduced rework by 25% through SRS documents, API specifications and clear acceptance criteria.',
        'Led 110+ cross-functional team members through Scrum with an 85% sprint delivery success rate.',
        'Cut go-to-market time by 30% by scoping credit-based fintech MVPs and deferring automated settlement integration.',
        'Improved project margins by 15% with earned value (CPI) tracking and raised client satisfaction by 20%.',
        'Introduced AI-assisted project control: requirement review, scope traceability and board-to-baseline reconciliation.',
      ],
    },
    {
      company: 'TS4U LLC',
      location: 'Michigan, USA (Remote)',
      role: 'Product Manager',
      period: 'Jan 2023 – Apr 2024',
      responsibilities: [
        'Owned the lifecycle of a SaaS project management platform and an EdTech app, improving user engagement by 15–20% and reducing rework by 10–15%.',
        'Introduced Show & Tell demos to drive course completion and launched real-time chat based on competitor gap analysis and churn data, contributing to a 10% rise in active interactions.',
        'Ran email and SMS A/B campaigns against the North Star Metric; 90–95% sprint adherence, +15% customer satisfaction, 20% faster go-to-market.',
      ],
    },
    {
      company: 'Dekko Legacy Group',
      location: 'Dhaka, Bangladesh',
      role: 'Executive, Sales & Marketing',
      period: 'Aug – Dec 2022',
      responsibilities: [
        'Coordinated B2B sales pipeline, order scheduling and cross-team fulfillment planning.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-[#00FFC6] mb-3 tracking-wider">
          02 · EXPERIENCE
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-4" />
        <p className="text-[#8B949E] mb-16">
          Roles across product and project management in fintech, healthtech and
          SaaS delivery.
        </p>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-[#30363d]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-24">
                <div className="absolute left-[-8px] md:left-[24px] top-2 w-4 h-4 bg-[#00FFC6] rounded-full border-4 border-[#0D1117]" />

                <div className="bg-[#161B22] border border-[#30363d] rounded-xl p-6 md:p-8 hover:border-[#00FFC6]/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#C9D1D9] mb-1">{exp.company}</h3>
                      <p className="text-[#8B949E] text-sm mb-2">{exp.location}</p>
                      <p className="text-[#00FFC6] font-semibold flex items-center gap-2">
                        <Briefcase size={16} />
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#8B949E] text-sm mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-[#8B949E]">
                        <span className="text-[#00FFC6] mr-3 mt-1.5">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
