import { useEffect, useState } from 'react';
import { Calendar, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  tags: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, published_at, tags')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(4);

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const samplePosts = [
    {
      id: '1',
      title: 'Why Banking Systems Still Use SOAP APIs',
      slug: 'banking-soap-apis',
      excerpt:
        'Understanding legacy integration patterns in modern fintech and the gradual migration to REST.',
      published_at: '2026-02-15',
      tags: ['Fintech', 'API Design'],
    },
    {
      id: '2',
      title: 'Product Metrics Every Fintech PM Should Track',
      slug: 'fintech-pm-metrics',
      excerpt:
        'Essential KPIs for measuring success in digital banking and financial platforms.',
      published_at: '2026-01-28',
      tags: ['Product Management', 'Metrics'],
    },
    {
      id: '3',
      title: 'Building Scalable Credit Platforms',
      slug: 'scalable-credit-platforms',
      excerpt:
        'Architectural considerations for designing credit systems that can handle millions of users.',
      published_at: '2025-12-10',
      tags: ['Architecture', 'Credit'],
    },
    {
      id: '4',
      title: 'How Product Managers Work with Engineers',
      slug: 'pm-engineer-collaboration',
      excerpt:
        'Best practices for effective cross-functional collaboration in technical product development.',
      published_at: '2025-11-22',
      tags: ['Product Management', 'Collaboration'],
    },
  ];

  const displayPosts = posts.length > 0 ? posts : samplePosts;

  return (
    <section id="blog" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          Product <span className="text-[#00FFC6]">Notes</span>
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-4" />
        <p className="text-[#8B949E] mb-16">
          Insights on product thinking, fintech systems, and building scalable platforms.
        </p>

        {loading ? (
          <div className="text-center text-[#8B949E] py-12">Loading articles...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {displayPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-[#161B22] border border-[#30363d] rounded-xl p-6 hover:border-[#00FFC6]/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[#8B949E] bg-[#21262d] px-2 py-1 rounded border border-[#30363d] flex items-center gap-1"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#C9D1D9] mb-3 group-hover:text-[#00FFC6] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#8B949E] mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center text-[#8B949E] text-sm">
                  <Calendar size={14} className="mr-2" />
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
