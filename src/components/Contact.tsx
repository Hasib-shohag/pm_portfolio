import { useState } from 'react';
import { Send, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const { error } = await supabase.from('contact_submissions').insert([formData]);

    if (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C9D1D9] mb-4">
          Get In <span className="text-[#00FFC6]">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-[#00FFC6] mb-16" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#C9D1D9] mb-6">Let's Connect</h3>
            <p className="text-[#8B949E] mb-8 leading-relaxed">
              I'm always interested in discussing product opportunities, fintech innovation, and
              building scalable platforms. Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hasibcuetmie.pm@gmail.com"
                className="flex items-center gap-4 text-[#8B949E] hover:text-[#00FFC6] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#00FFC6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00FFC6]/20 transition-colors">
                  <Mail className="text-[#00FFC6]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#8B949E]">Email</p>
                  <p className="text-[#C9D1D9] font-medium">hasibcuetmie.pm@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/hasibcuetmie/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#8B949E] hover:text-[#58A6FF] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#58A6FF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#58A6FF]/20 transition-colors">
                  <Linkedin className="text-[#58A6FF]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#8B949E]">LinkedIn</p>
                  <p className="text-[#C9D1D9] font-medium">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/Hasib-shohag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#8B949E] hover:text-[#C9D1D9] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#C9D1D9]/10 rounded-lg flex items-center justify-center group-hover:bg-[#C9D1D9]/20 transition-colors">
                  <Github className="text-[#C9D1D9]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#8B949E]">GitHub</p>
                  <p className="text-[#C9D1D9] font-medium">View my work</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#8B949E]">
                <div className="w-12 h-12 bg-[#8B949E]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-[#8B949E]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#8B949E]">Location</p>
                  <p className="text-[#C9D1D9] font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#C9D1D9] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#21262d] border border-[#30363d] rounded-lg px-4 py-3 text-[#C9D1D9] focus:outline-none focus:border-[#00FFC6] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#C9D1D9] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#21262d] border border-[#30363d] rounded-lg px-4 py-3 text-[#C9D1D9] focus:outline-none focus:border-[#00FFC6] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#C9D1D9] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[#21262d] border border-[#30363d] rounded-lg px-4 py-3 text-[#C9D1D9] focus:outline-none focus:border-[#00FFC6] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status === 'success' && (
                <div className="bg-[#00FFC6]/10 border border-[#00FFC6]/30 rounded-lg p-4 text-[#00FFC6]">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#00FFC6] text-[#0D1117] rounded-lg px-6 py-3 font-semibold hover:bg-[#00FFC6]/90 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
