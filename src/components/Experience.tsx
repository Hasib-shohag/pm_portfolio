import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
}

export default function Experience() {
  const experiences: ExperienceEntry[] = [
    {
      company: 'Stealth Healthtech Startup',
      location: 'Dhaka, Bangladesh',
      role: 'Product Manager',
      period: 'Nov 2026 – Present',
      summary:
        'I own product direction for a health ecosystem platform built to give doctors a practical first step onto a connected platform and patients a portable health record. I set the direction, define requirements and roadmaps, and run the delivery system for three product teams.',
      responsibilities: [
        'Product direction: drafted the product vision and revised the development-plan sections of the platform vision document, then defined the telemedicine and appointment roadmaps with the delivery teams and framed the main risk in each module (clinical data governance, no champion users, unknowns in the patient module)',
        'Discovery: captured appointment requirements from team discussions and ran discovery conversations for the patient health-record module, including competitor analysis',
        'Operating model: set up three teams on staggered 10-day sprints, each with planning, daily scrum, stakeholder checkpoints, requirement handover, ready-for-development and demo gates, and an agenda, expected artifacts and a named owner for every meeting',
        'Process framework: authored the Development Process & Delivery Framework (v1.0) covering a Definition of Ready, a one-week ready-backlog buffer, 1–3 point estimation, separate QA, UAT, Ready for Live and Production Deployed gates, blocker escalation, dependency control and a RACI, plus a meetings-and-artifacts Gantt and a delivery timeline workbook',
        'AI and tooling: built an MCP server for the team\u2019s self-hosted project management tool and used AI to migrate about 2,350 work items across four restructured team workspaces with no deletions; I run the work through a structured AI context system with an 18-template delivery library',
      ],
    },
    {
      company: 'Brain Station 23 PLC',
      location: 'Dhaka, Bangladesh',
      role: 'Project Manager',
      period: 'Apr 2024 – Oct 2026',
      summary:
        'I delivered a portfolio of fintech, remittance, AI and bank-audit platforms for clients, including three banking solutions serving 325,000+ active users. Beyond running delivery, I wrote requirements and shaped the roadmap with clients and solution architects, and introduced AI-assisted project control.',
      responsibilities: [
        'Banking: delivered retail internet banking, corporate banking and digital lending; clear SRS documents, API specifications and acceptance criteria with change control reduced rework by 25%, and UAT scope and release criteria cut post-release rework by 20% on the digital banking platform',
        'Integration and compliance: worked with solution architects on CBS, payment gateway and third-party API integration, including KYC/AML and Bangladesh Bank requirements',
        'Remittance and wallets: delivered cross-border remittance and multi-currency wallet products with KYC/AML, pay-in and payout integrations, release planning and post-launch hypercare',
        'AI and automation: delivered an AI recruitment platform (30% faster hiring decisions, 40–50% less HR workload) and an internal audit and compliance platform for 100+ branches that supports 120+ audits a year',
        'Product thinking: scoped credit-based fintech MVPs by deferring automated settlement integration and handling settlement manually, so the product could launch faster and be validated through user surveys, which cut go-to-market time by 30%',
        'Delivery and cost control: led 110+ cross-functional team members through Scrum at an 85% sprint delivery success rate, tracked earned value (CPI) to improve project margins by 15%, and raised client satisfaction by 20% through structured reporting',
        'AI-assisted project control: line-by-line requirement review before estimation, scope-to-contract traceability and board-to-baseline reconciliation, run as documented procedures with review before any write and a versioned PM methodology with a gap log',
      ],
    },
    {
      company: 'TS4U LLC',
      location: 'Michigan, USA (Remote)',
      role: 'Product Manager',
      period: 'Jan 2023 – Apr 2024',
      summary:
        'I owned the product lifecycle for a SaaS project management platform and an EdTech application, from discovery and requirements through release, and made decisions from competitor gaps, churn data and user behaviour.',
      responsibilities: [
        'Results: improved user engagement by 15–20% and reduced development rework by 10–15% through a prioritized roadmap, backlogs, user stories and specifications',
        'Course completion: introduced Show & Tell demos to drive completion, not just enrollment, which also worked as marketing content',
        'Community: launched real-time chat based on a competitor gap analysis and churn data from comparable platforms, connecting learners with mentors and peers and contributing to a 10% rise in active user interactions',
        'Silent drop-off: found that users who got stuck early left without ever raising a support ticket, so the team tracked drop-off instead of ticket volume and added instant in-product help; active interactions and customer satisfaction improved',
        'Growth: ran email and SMS campaigns with A/B testing, tracking conversion against the North Star Metric',
        'Execution: ran Agile and Waterfall across the SDLC at 90–95% sprint adherence, improved UX flows from KPIs and feedback (+15% customer satisfaction), and worked with design and engineering on wireframes and workflows to speed go-to-market by 20%',
      ],
    },
    {
      company: 'Dekko Legacy Group',
      location: 'Dhaka, Bangladesh',
      role: 'Executive – Sales & Marketing',
      period: 'Aug – Dec 2022',
      summary: 'My first professional role, in B2B sales and operations coordination.',
      responsibilities: [
        'Coordinated the B2B sales pipeline, order scheduling and cross-team fulfillment planning with production and operations stakeholders',
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

                  <p className="text-[#C9D1D9]/90 leading-relaxed mt-4 mb-6">
                    {exp.summary}
                  </p>

                  <ul className="space-y-3">
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
