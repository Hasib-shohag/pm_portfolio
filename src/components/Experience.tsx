import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Brain Station 23 PLC',
      location: 'Dhaka, Bangladesh',
      role: 'Project Manager',
      period: '2024 – Present',
      responsibilities: [
        'Led end-to-end delivery of digital banking, AI ATS Platform, AI Ride Planner and Micro credit platforms',
        'Converted strategic goals into PRDs, SRS documents, and user stories',
        'Managed product roadmap execution with engineering, design, QA, and operations teams',
        'Managed stakeholders at all levels, including CXOs internally and external partners across multiple verticals',
        'Supported system architecture workflows and API integrations',
        'Conducted post-release evaluations to improve system scalability',
      ],
    },
    {
      company: 'TS4U LLC',
      location: 'Michigan, USA',
      role: 'Product Manager',
      period: '2023 – 2024',
      responsibilities: [
        'Owned full product lifecycle for SaaS platforms',
        'Defined product vision and roadmap',
        'Conducted user research and market validation',
        'Collaborated with engineering and design teams to improve usability',
        'Led agile ceremonies and sprint planning',
        'Delivered features improving user engagement and retention',
      ],
    },
    {
      company: 'Dekko Legacy Group',
      location: 'Dhaka, Bangladesh',
      role: 'Executive – Sales & Marketing',
      period: '2022',
      responsibilities: [
        'Supported pipeline and sales operations',
        'Generated market insights to improve revenue opportunities',
        'Coordinated with production and planning teams to improve workflow efficiency',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          Work <span className="text-[#00FFC6]">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-16" />

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
