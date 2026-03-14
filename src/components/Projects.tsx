import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, TrendingUp } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Digital Banking Platform',
      year: '2024-2025',
      role: 'Project Manager',
      users: '220K+',
      problem:
        'Bank needed a reliable internet banking for retail and corporate and loan platform with scalable microservice transition from monolith architecture.',
      solution:
        'Delivered two digital banking platforms with integrated loan modules and scalable backend architecture.',
      contributions: [
        'Project planning execution',
        'SRS Writing and API integration feasibility',
        'Internal and External team management and CPI verification',
        'Pre and Post-release Checklist and release coordination',
      ],
      impact: 'Reduced system rework by 20% through better requirement analysis and sprint planning.',
      tags: ['Fintech', 'Digital Banking', 'Retail', 'Corporate'],
    },
    {
      title: 'AI Ride-Share Microfinance Platform',
      year: '2025',
      role: 'Product Manager',
      users: null,
      problem:
        'Ride-share drivers struggle to find rides and access financing due to lack of credit scoring.',
      solution:
        'Platform enabling AI-based location wise ride planning with credit scoring and loan accessibility for ride-share drivers.',
      contributions: [
        'Managed product roadmap',
        'Technical workflow design',
        'AI credit scoring integration',
        'Financial analytics implementation',
      ],
      impact: 'AI Based personalized trips planning and Improved financing accessibility for underserved ride-share driver segment.',
      tags: ['AI', 'Ride Share', 'Fintech', 'Credit Scoring'],
    },
    {
      title: 'Credit-Based E-Commerce & Microfinance Platform',
      year: '2024-2025',
      role: 'Product Manager',
      users: '100k+',
      problem: 'Unengaged in banking domain RMG workers needed flexible credit options.',
      solution:
        'Designed a credit-enabled marketplace combining loans, savings, investments, and product EMIs.',
      contributions: [
        'Product strategy and User journey establishment',
        'Technical workflow design',
        'Credit integration roadmap',
        'Multi-product feature planning',
      ],
      impact: 'Enabled seamless credit access within e-commerce ecosystem.',
      tags: ['E-commerce', 'Credit', 'Microfinance', 'e-KYC', 'Loan'],
    },
    {
      title: 'Project Management SaaS Platform',
      year: '2024',
      role: 'Product Manager',
      users: '50k',
      problem: 'Development teams needed better workflow tracking, testing, communication through chats and automation.',
      solution:
        'Internal platform supporting automated testing, configurable roles, and user story execution with ticketing based chat feature.',
      contributions: [
        'Automated testing workflows',
        'Role-based access control',
        'User story execution system',
        'Workflow tracking features',
      ],
      impact: 'Improved development team productivity and sprint delivery rates.',
      tags: ['SaaS', 'Project Management', 'Automation', 'Chatbot'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          Key <span className="text-[#00FFC6]">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-16" />

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;
            return (
              <div
                key={index}
                className="bg-[#161B22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#00FFC6]/50 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedProject(isExpanded ? null : index)}
                  className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-[#C9D1D9]">{project.title}</h3>
                      <span className="text-[#8B949E] text-sm font-mono bg-[#21262d] px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                      {project.users && (
                        <span className="text-[#00FFC6] text-sm font-mono bg-[#00FFC6]/10 px-3 py-1 rounded-full border border-[#00FFC6]/30 flex items-center gap-1">
                          <Users size={14} />
                          {project.users}
                        </span>
                      )}
                    </div>
                    <p className="text-[#58A6FF] font-semibold mb-3">{project.role}</p>
                    <p className="text-[#8B949E]">{project.problem}</p>
                  </div>
                  <div className="text-[#00FFC6] flex-shrink-0">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6 animate-fadeIn">
                    <div className="h-px bg-[#30363d] mb-6" />

                    <div>
                      <h4 className="text-[#C9D1D9] font-semibold mb-2 flex items-center gap-2">
                        <span className="text-[#00FFC6]">◆</span> Solution
                      </h4>
                      <p className="text-[#8B949E] pl-6">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-[#C9D1D9] font-semibold mb-3 flex items-center gap-2">
                        <span className="text-[#00FFC6]">◆</span> Key Contributions
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2 pl-6">
                        {project.contributions.map((contribution, idx) => (
                          <li key={idx} className="flex items-start text-[#8B949E]">
                            <span className="text-[#00FFC6] mr-2">▹</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#00FFC6]/5 border border-[#00FFC6]/30 rounded-lg p-4">
                      <h4 className="text-[#C9D1D9] font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="text-[#00FFC6]" size={18} />
                        Impact
                      </h4>
                      <p className="text-[#8B949E]">{project.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-[#8B949E] bg-[#21262d] px-3 py-1 rounded-full border border-[#30363d]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
