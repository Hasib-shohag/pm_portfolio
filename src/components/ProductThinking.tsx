import { ArrowDown } from 'lucide-react';

export default function ProductThinking() {
  const framework = [
    {
      step: 1,
      title: 'User Problem',
      description: 'Identify pain points through research',
    },
    {
      step: 2,
      title: 'Product Hypothesis',
      description: 'Define solution assumptions',
    },
    {
      step: 3,
      title: 'MVP Build',
      description: 'Ship minimum viable solution',
    },
    {
      step: 4,
      title: 'Experiment & Metrics',
      description: 'Measure and analyze performance',
    },
    {
      step: 5,
      title: 'Iteration',
      description: 'Optimize based on data',
    },
  ];

  const metrics = [
    { label: 'Activation Rate', description: 'User onboarding success' },
    { label: 'User Retention', description: 'Long-term engagement' },
    { label: 'Conversion Rate', description: 'Funnel optimization' },
    { label: 'Revenue per User', description: 'Monetization efficiency' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          How I Build <span className="text-[#00FFC6]">Products</span>
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-16" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#C9D1D9] mb-8">Product Framework</h3>
            <div className="relative">
              {framework.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#00FFC6]/10 border-2 border-[#00FFC6] rounded-full flex items-center justify-center text-[#00FFC6] font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-lg font-semibold text-[#C9D1D9] mb-1">{item.title}</h4>
                      <p className="text-[#8B949E] text-sm">{item.description}</p>
                    </div>
                  </div>
                  {index < framework.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-[#30363d] -mb-8">
                      <ArrowDown
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00FFC6]"
                        size={16}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#C9D1D9] mb-8">Key Metrics I Track</h3>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-[#161B22] border border-[#30363d] rounded-xl p-6 hover:border-[#00FFC6]/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[#C9D1D9] mb-1 group-hover:text-[#00FFC6] transition-colors">
                        {metric.label}
                      </h4>
                      <p className="text-[#8B949E] text-sm">{metric.description}</p>
                    </div>
                    <div className="w-8 h-8 bg-[#00FFC6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00FFC6] font-mono text-xs">{index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-[#00FFC6]/10 to-[#58A6FF]/10 border border-[#00FFC6]/30 rounded-xl p-6">
              <p className="text-[#C9D1D9] font-mono text-sm leading-relaxed">
                <span className="text-[#00FFC6]">"</span>
                I combine quantitative metrics with qualitative insights to make informed product
                decisions that balance user value with business impact.
                <span className="text-[#00FFC6]">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
