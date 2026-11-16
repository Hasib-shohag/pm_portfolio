import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, TrendingUp } from 'lucide-react';

interface Project {
  title: string;
  year: string;
  role: string;
  users: string | null;
  problem: string;
  solution: string;
  contributions: string[];
  impact: string;
  tags: string[];
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Health Ecosystem Platform',
      year: '2026',
      role: 'Product Manager',
      users: null,
      problem:
        'Patients have no portable health record, and doctors need a practical first step onto a connected platform. e-Prescription is the wedge that brings doctors in first.',
      solution:
        'A connected platform spanning e-prescription, telemedicine, appointments and patient health records, delivered by three coordinated teams on a shared operating model.',
      contributions: [],
      impact:
        'Telemedicine and appointment roadmaps defined with the delivery teams, and a delivery framework authored for three teams.',
      tags: ['Healthtech', 'e-Prescription', 'Telemedicine', 'Patient Records'],
    },
    {
      title: 'Digital Banking Platform',
      year: '2024–2026',
      role: 'Project Manager',
      users: '325,000+',
      problem:
        'A private bank in Bangladesh needed to replace its legacy retail and corporate internet banking app, web and admin panel.',
      solution:
        'New retail and corporate banking channels (app, web and admin panel) with loan management, delivered phase by phase with UAT sign-off at each stage.',
      contributions: [
        'Joined in Oct 2024 as the client-facing lead PM, about a month before the first go-live',
        'Release coordination, UAT sign-off and change requests (23 live)',
        'Corporate production readiness and deployment coordination',
        'UAT scope and release criteria reduced post-release rework by 20%',
      ],
      impact:
        'The retail channel replaced the legacy app and is live, with 373 of 443 RFP items live and UAT-signed off (Sep 2026). Corporate had 118 items UAT-signed off and was ready for go-live pending hardware.',
      tags: ['Fintech', 'Digital Banking', 'Retail', 'Corporate'],
    },
    {
      title: 'Credit-Based E-Commerce & Microfinance Platform',
      year: '2024–2025',
      role: 'Project Manager',
      users: null,
      problem:
        'Factory-employee customers of a retail operator needed flexible credit and savings inside the existing shopping app.',
      solution:
        'Loans, instalment purchases and savings and investment added to the client\u2019s existing app and admin portal, on an Apache Fineract loan core with credit scoring.',
      contributions: [
        'Only PM from Apr 2024, leading a team of 5',
        'Wrote the proposal for a follow-on nano loan and savings platform and managed its delivery through go-live',
        'Dependency tracking, change requests, UAT and release documents',
        'Fallback clauses that turned open client dependencies into decisions',
      ],
      impact:
        'Loan features went live in Sep 2024, the instalment (BNPL) module passed client UAT and reached production in Aug 2025, and the savings and investment feature went live.',
      tags: ['E-commerce', 'Credit', 'Microfinance', 'Savings', 'Fineract'],
    },
    {
      title: 'Cross-Border Remittance & Multi-Currency Wallets',
      year: '2026',
      role: 'Project Manager',
      users: null,
      problem:
        'Freelancers and families living abroad needed wallets and remittance that work across borders, not just in one country.',
      solution:
        'P2P and multi-currency wallet products with KYC/AML, pay-in and payout integrations, an agent panel, and remittance to 100+ countries via bank transfer, cash pickup and mobile wallet.',
      contributions: [
        'Release planning and post-launch hypercare',
        'KYC/AML, pay-in and payout integration delivery',
        'Cross-functional coordination across QA, DevOps, backend and frontend',
      ],
      impact:
        'Onboarding across multiple countries and base currencies, built for users who live between two countries.',
      tags: ['Remittance', 'Multi-Currency Wallets', 'KYC', 'AML', 'Fintech'],
    },
    {
      title: 'Cross-Border Payout Hub',
      year: '2026',
      role: 'Project Manager',
      users: null,
      problem:
        'Fintechs and remittance companies need to pay out across borders to bank accounts, mobile wallets and cash pickup through one integration.',
      solution:
        'A prefund-only, ledger-first payout platform delivered as a technology layer under licensed partners, with connector-based rails and AI limited to advisory roles.',
      contributions: [
        'Project manager for the initiative',
        'Reviewing the requirements, scope baseline and money-movement reference module by module',
        'Tracking the open provider decisions that gate the first go-live',
      ],
      impact:
        'Scope baseline frozen, project approved with a team and plan, and now in design and build.',
      tags: ['Payments', 'Payouts', 'Stablecoin', 'Ledger'],
    },
    {
      title: 'Bank Internal Audit & Compliance Platform',
      year: '2026',
      role: 'Project Manager',
      users: null,
      problem:
        'A private bank needed an end-to-end internal audit lifecycle aligned to Bangladesh Bank requirements.',
      solution:
        'Audit planning, holiday-aware team assignment, pre- and post-audit workflows, branch-wise risk scoring, real-time progress tracking and AI-integrated reporting.',
      contributions: [
        'Delivery management and audit workflow design',
        'Branch-wise risk scoring and real-time tracking',
        'AI-integrated reporting',
      ],
      impact:
        'Supports a yearly risk-based plan of 120+ audits across 100+ branches and substantially cuts manual audit-tracking effort.',
      tags: ['Banking', 'Audit', 'Compliance', 'AI'],
    },
    {
      title: 'AI Recruitment Automation',
      year: '2025',
      role: 'Project Manager',
      users: null,
      problem:
        'Hiring teams had to download resumes by hand and screen candidates one by one.',
      solution:
        'Automatically syncs job postings and applicants from a major job board and scores candidates against job descriptions with AI.',
      contributions: [
        'Requirements and automation logic',
        'Applicant sync and AI candidate scoring',
        'Delivery management',
      ],
      impact: '30% faster hiring decisions and 40–50% less HR workload.',
      tags: ['AI', 'Recruitment', 'Automation'],
    },
    {
      title: 'Ride-Share Driver Analytics & Finance Platform',
      year: '2025',
      role: 'Project Manager',
      users: null,
      problem:
        'Ride-share drivers lacked a clear view of trips, earnings and time across platforms, and had no data-driven path to credit.',
      solution:
        'A driver app and back office with performance analytics, AI-based suggestions and a recommendation engine, with loans, eKYC and subscriptions specified for phase 2.',
      contributions: [
        'Only PM from Mar 2025, leading a team of 7',
        'Client discussions, sprint planning and weekly reporting',
        'Phase 2 SRS set (loans, eKYC, subscriptions) with acceptance criteria',
        'Treated data acquisition as its own feasibility workstream',
      ],
      impact:
        'Phase 1 delivered the driver dashboard, performance analytics, login and sign-up, with the recommendation-engine foundation; the phase 2 loan, eKYC and subscription modules were fully specified with acceptance criteria.',
      tags: ['AI', 'Ride Share', 'Analytics', 'Fintech'],
    },
    {
      title: 'AML/CFT Transaction Monitoring Product Definition',
      year: '2024',
      role: 'Product Definition',
      users: null,
      problem:
        'Financial institutions need to screen and monitor customer transactions for AML/CFT risk, and manage the alerts and cases that result.',
      solution:
        'A feature catalogue for a platform covering alerts, case management with maker-checker approvals, sanction and PEP screening, rule-based monitoring, customer risk grading and STR/SAR reports.',
      contributions: [
        'AML/CFT feature catalogue',
        'Granular permissions list',
        'Customer risk-grading matrix',
      ],
      impact:
        'I wrote the AML/CFT feature catalogue, the permissions list and the customer risk-grading matrix for a transaction monitoring product.',
      tags: ['AML', 'CFT', 'Compliance', 'Banking', 'Product Definition'],
    },
    {
      title: 'Saastho — Doctor Appointment Platform',
      year: '2019–2020',
      role: 'Founder',
      users: null,
      problem:
        'Getting a doctor\u2019s serial meant contacting the clinic within a narrow window, with no certainty about when the doctor would see you.',
      solution:
        'An end-to-end doctor appointment platform covering booking, patient journey management and pharma marketing automation.',
      contributions: [
        'Product vision and definition',
        'Appointment booking and patient journey',
        'Pharma marketing automation',
      ],
      impact: 'Founded and led product definition and build with a team.',
      tags: ['Healthtech', 'Appointments', 'Startup'],
    },
    {
      title: 'Project Management SaaS Platform',
      year: '2023–2024',
      role: 'Product Manager',
      users: null,
      problem:
        'Development teams needed better workflow tracking, testing, communication through chat, and automation.',
      solution:
        'A SaaS platform supporting automated testing, configurable roles, and user story execution with a ticketing-based chat feature.',
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
          Projects
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-4" />
        <p className="text-[#8B949E] mb-16">
          A selection of fintech, SaaS and AI products I delivered from
          discovery to release.
        </p>

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

                    {project.contributions.length > 0 && (
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
                    )}

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
