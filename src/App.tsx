import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Target, Users, Zap } from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
}

function App() {
  useScrollReveal();

  const scrollToCTA = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-gray-950">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.4),transparent_50%),radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.3),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(30,58,138,0.3),transparent_40%)] animate-mesh"></div>

          {/* Organic Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-blue-600/10 blur-[100px] animate-blob"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-800/10 blur-[100px] animate-blob" style={{ animationDelay: '-4s' }}></div>
          </div>
        </div>

        <FloatingParticles />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl reveal-on-scroll">
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-gray-500 bg-clip-text text-transparent leading-[1.1]">
              Transform Your Business with AI Automation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
              We help high-growth businesses streamline operations, reduce overhead, and scale infinitely through tailored AI-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToCTA}
                className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Get Your Free Automation Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Automation Audit Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Free Automation Audit</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We'll analyze your current workflows and identify specific opportunities where AI automation can save you time and money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Target className="w-6 h-6 text-blue-500" />,
                title: "Identify Opportunities",
                desc: "We'll review your current processes and pinpoint where automation can have the biggest impact."
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-500" />,
                title: "Custom Recommendations",
                desc: "Receive tailored suggestions based on your specific business needs and goals."
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />,
                title: "Clear Action Plan",
                desc: "Get a straightforward roadmap showing how to implement automation in your business."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group reveal-on-scroll bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center reveal-on-scroll">
            <button
              onClick={scrollToCTA}
              className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Request Your Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet/Audit Offer Details */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center reveal-on-scroll">What You'll Receive</h2>

            <div className="reveal-on-scroll glass-card rounded-3xl p-10 lg:p-12 shadow-2xl relative">
              {/* Connecting Line */}
              <div className="absolute left-[3.25rem] lg:left-[3.75rem] top-24 bottom-24 w-px bg-blue-500/10 hidden sm:block overflow-hidden">
                <div className="w-full h-full animate-flow-line"></div>
              </div>
              <div className="space-y-12 relative z-10">
                {[
                  {
                    num: 1,
                    title: "Comprehensive Process Review",
                    desc: "A detailed analysis of your current workflows, identifying manual tasks that consume your team's time."
                  },
                  {
                    num: 2,
                    title: "Cost-Benefit Analysis",
                    desc: "Clear projections showing potential time savings and cost reductions from implementing automation."
                  },
                  {
                    num: 3,
                    title: "Priority Roadmap",
                    desc: "A prioritized plan showing which automations to implement first for maximum impact."
                  },
                  {
                    num: 4,
                    title: "Implementation Strategy",
                    desc: "Specific recommendations for tools, technologies, and approaches that fit your business."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/20">
                        {item.num}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is & Who It's For */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-on-scroll">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">What We Do</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                We design and implement AI-powered automation systems that handle repetitive tasks, streamline workflows, and improve efficiency across your organization.
              </p>
              <div className="glass-card rounded-2xl p-8 border-blue-500/20">
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "Our solutions integrate with your existing tools and systems, creating seamless automation that works in the background while your team focuses on high-value activities."
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Who We Serve</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Growing Businesses",
                    desc: "Companies that need to scale operations without proportionally increasing headcount."
                  },
                  {
                    title: "Service Providers",
                    desc: "Agencies and consultancies looking to improve client delivery and reduce operational overhead."
                  },
                  {
                    title: "Operations Teams",
                    desc: "Organizations with manual, repetitive processes that limit growth and efficiency."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Happens Next</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              A straightforward process designed for maximum clarity and speed.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Connecting Line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-blue-500/10 hidden md:block overflow-hidden">
              <div className="w-full h-full animate-flow-line"></div>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Submit Your Information",
                  desc: "Fill out a brief form telling us about your business and the challenges you're facing. This helps us prepare for our conversation."
                },
                {
                  title: "Initial Consultation",
                  desc: "We'll schedule a call to discuss your current processes and understand where automation could help. No sales pitch—just a productive conversation."
                },
                {
                  title: "Receive Your Audit",
                  desc: "Within a few days, you'll receive a detailed audit document with our findings, recommendations, and a clear action plan."
                },
                {
                  title: "Choose Your Path",
                  desc: "Review the audit at your own pace. If you'd like help implementing the recommendations, we're here. If not, you'll still have valuable insights."
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 bg-gray-950 border-2 border-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                      {i + 1}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* You Decide What to Do Next */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">You're in Control</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            This audit is designed to provide value whether you work with us or not. Our goal is to give you clarity on how automation can help your business.
          </p>
          <div className="p-8 glass-card border-blue-500/20 rounded-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              There's no obligation, no high-pressure sales tactics, and no strings attached. Just honest insights and practical recommendations you can act on when you're ready.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="audit-form" className="py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="reveal-on-scroll glass-card rounded-[2rem] p-10 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-800/10 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
                <p className="text-xl text-gray-400 max-w-xl mx-auto">
                  Request your free automation audit and discover how AI can transform your operations.
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      placeholder="John"
                      className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      placeholder="Doe"
                      className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 ml-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    placeholder="Acme Inc."
                    className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="challenges" className="block text-sm font-medium text-gray-300 ml-1">
                    What challenges are you looking to solve?
                  </label>
                  <textarea
                    id="challenges"
                    rows={4}
                    required
                    placeholder="Tell us about your current manual processes..."
                    className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                >
                  Get Your Free Automation Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-lg">&copy; 2024 AI Automation Agency. Empowering growth through intelligence.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
