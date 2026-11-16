import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string | null;
  tags: string[];
  category: string | null;
  source_url: string | null;
  show_date: boolean;
}

function formatPublishedAt(date: string | null): string {
  if (!date) return '';
  return new Date(date)
    .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    .toUpperCase();
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error: queryError } = await supabase
        .from('blog_posts')
        .select(
          'id, title, slug, excerpt, published_at, tags, category, source_url, show_date'
        )
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (queryError || !data) {
        setError(true);
      } else {
        setPosts(data as BlogPost[]);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          Writing
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-4" />
        <p className="text-[#8B949E] mb-16">
          Posts from LinkedIn on product decisions, project delivery and fintech.
        </p>

        {loading ? (
          <div className="text-center text-[#8B949E] py-12">Loading posts...</div>
        ) : error ? (
          <div className="text-center text-[#8B949E] py-12">
            Could not load posts right now. Please try again later.
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center text-[#8B949E] py-12">No posts yet.</div>
        ) : (
          <ul className="space-y-2">
            {posts.map((post) => {
              const dateLabel = post.show_date
                ? formatPublishedAt(post.published_at)
                : null;
              return (
                <li key={post.id}>
                  <article className="group rounded-xl border border-[#30363d] bg-[#161B22]/60 px-6 py-5 transition-all duration-300 hover:border-[#00FFC6]/50 hover:bg-[#161B22]">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      {post.category && (
                        <span className="font-mono text-xs text-[#00FFC6] bg-[#00FFC6]/10 px-2.5 py-1 rounded border border-[#00FFC6]/30">
                          {post.category}
                        </span>
                      )}
                      {dateLabel && (
                        <span className="font-mono text-xs text-[#8B949E] tracking-wider">
                          {dateLabel}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-[#C9D1D9] mb-2 group-hover:text-[#00FFC6] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-[#8B949E] leading-relaxed mb-3">
                      {post.excerpt}
                    </p>

                    {post.source_url && (
                      <a
                        href={post.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00FFC6] hover:text-[#00FFC6]/80 transition-colors"
                      >
                        Read on LinkedIn
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
