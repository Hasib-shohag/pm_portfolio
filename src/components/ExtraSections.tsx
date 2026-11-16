type Card = { title: string; text: string; tags: string[] };

const impact: Card[] = [
  { title: '325,000+ active users', text: 'Three banking solutions (retail internet banking, corporate banking and digital lending) delivered at Brain Station 23.', tags: ['Fintech', 'Digital Banking'] },
  { title: '25% less rework', text: 'Clear SRS documents, API specifications and acceptance criteria, held together by change control.', tags: ['Requirements', 'Change Control'] },
  { title: '30% faster go-to-market', text: 'Scoped a credit-based fintech MVP by deferring automated settlement integration and settling manually, so the product could be validated with users first.', tags: ['MVP', 'Fintech'] },
  { title: '85% sprint delivery success', text: 'Across 110+ cross-functional team members working in Scrum.', tags: ['Scrum', 'Delivery'] },
  { title: '15% better project margins', text: 'Earned value (CPI) tracking without reducing scope, alongside a 20% rise in client satisfaction.', tags: ['CPI', 'Client Reporting'] },
  { title: '30% faster hiring decisions', text: 'AI recruitment automation that syncs applicants and scores candidates, and cut HR workload by 40–50%.', tags: ['AI', 'Automation'] },
];

const delivery: Card[] = [
  { title: 'One source of truth', text: 'The tracker holds status, ownership, estimates, dates, blockers and decisions. Nothing material lives only in chat or in a personal list.', tags: ['Jira'] },
  { title: 'Ready before the sprint', text: 'A Definition of Ready and a one-week ready-backlog buffer, so teams never commit to unclear work just to fill a sprint.', tags: ['Definition of Ready'] },
  { title: 'Three separate gates', text: 'QA pass, product UAT and production release are different milestones: Ready for UAT, Ready for Live and Production Deployed.', tags: ['QA', 'UAT', 'Release'] },
  { title: 'Decisions have owners', text: 'A RACI covers backlog, acceptance criteria, estimates, QA, UAT and release, so every decision has a named owner.', tags: ['RACI'] },
  { title: 'Blockers surface early', text: 'Whoever finds a blocker raises it and records its impact. Critical blockers that stay unresolved are escalated.', tags: ['Escalation'] },
  { title: 'Honest estimation', text: 'Tasks are estimated at 1 to 3 points for both development and QA. Capacity comes from real availability, not a quota.', tags: ['Estimation', 'Capacity'] },
];

const aiParagraphs = [
  'I use AI as part of how product and project work gets done: line-by-line requirement review before estimation, scope-to-contract traceability, board-to-baseline reconciliation, and reusable document and workbook generation.',
  "I keep a structured context system: persistent project memory, a library of delivery templates, versioned process documents, and documented procedures that run with review before anything is written. I also built an MCP server that connects AI assistants to my team's self-hosted project management tool.",
  'AI makes mistakes. It has produced wrong figures that I caught in review, and it once confirmed a file update that had not actually saved. So every output is verified against the source, and the judgement stays with me.',
];

function CardsSection({ id, title, subtitle, cards }: { id: string; title: string; subtitle: string; cards: Card[] }) {
  return (
    <section id={id} className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">{title}</h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-4" />
        <p className="text-[#8B949E] mb-16">{subtitle}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-[#161B22] border border-[#30363d] rounded-xl p-6 hover:border-[#00FFC6]/50 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-[#C9D1D9] mb-3">{card.title}</h3>
              <p className="text-[#8B949E] leading-relaxed mb-4">{card.text}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-[#8B949E] bg-[#21262d] px-3 py-1 rounded-full border border-[#30363d]">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return <CardsSection id="impact" title="Impact at a Glance" subtitle="Results from product and delivery work, with the context behind each number." cards={impact} />;
}

export function DeliverySection() {
  return <CardsSection id="delivery-model" title="How I Run Delivery" subtitle="A delivery framework I authored for three product teams, built to be reviewed and improved through use." cards={delivery} />;
}

export function AiSection() {
  return (
    <section id="ai-method" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">Working with AI</h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-16" />
        <div className="max-w-3xl space-y-6">
          {aiParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-[#8B949E] text-lg leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
