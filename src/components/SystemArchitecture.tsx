import { ArrowRight } from 'lucide-react';

export default function SystemArchitecture() {
  const architectureLayers = [
    { name: 'User App', description: 'Web & Mobile Interface' },
    { name: 'API Gateway', description: 'Request routing & auth' },
    { name: 'Authentication Service', description: 'Identity & access control' },
    { name: 'Transaction Processor', description: 'Business logic layer' },
    { name: 'Banking Network', description: 'External integrations' },
    { name: 'Settlement Layer', description: 'Final transaction settlement' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          System <span className="text-[#00FFC6]">Architecture</span>
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-16" />

        <div className="bg-[#161B22] border border-[#30363d] rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#C9D1D9] mb-8 text-center">
            Digital Banking Transaction Flow
          </h3>

          <div className="relative max-w-2xl mx-auto">
            {architectureLayers.map((layer, index) => (
              <div key={index} className="relative">
                <div className="bg-[#21262d] border border-[#30363d] rounded-xl p-6 hover:border-[#00FFC6]/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-[#C9D1D9] mb-1 group-hover:text-[#00FFC6] transition-colors">
                        {layer.name}
                      </h4>
                      <p className="text-[#8B949E] text-sm">{layer.description}</p>
                    </div>
                    <div className="w-10 h-10 bg-[#00FFC6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00FFC6] font-mono text-sm">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-[#00FFC6] to-[#58A6FF]" />
                      <ArrowRight className="text-[#00FFC6] rotate-90" size={20} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-[#00FFC6]/5 border border-[#00FFC6]/30 rounded-lg p-4 text-center">
              <p className="text-[#00FFC6] font-bold text-2xl mb-1">220K+</p>
              <p className="text-[#8B949E] text-sm">Active Users</p>
            </div>
            <div className="bg-[#58A6FF]/5 border border-[#58A6FF]/30 rounded-lg p-4 text-center">
              <p className="text-[#58A6FF] font-bold text-2xl mb-1">20%</p>
              <p className="text-[#8B949E] text-sm">Reduced Rework</p>
            </div>
            <div className="bg-[#00FFC6]/5 border border-[#00FFC6]/30 rounded-lg p-4 text-center">
              <p className="text-[#00FFC6] font-bold text-2xl mb-1">99.9%</p>
              <p className="text-[#8B949E] text-sm">System Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
