import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Target, Users, Zap, Star, Shield, TrendingUp, Cpu } from 'lucide-react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

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
      {[...Array(30)].map((_, i) => (
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

function ScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-blue-500/10 z-[1000]">
      <div id="scroll-progress" className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6] transition-all duration-150 ease-out" style={{ width: '0%' }}></div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-6 inset-x-0 z-[900] flex justify-center px-6">
      <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-gray-900/60 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">A</div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">AI AUTO</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Solution</a>
          <a href="#audit-form" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">Free Audit</a>
        </div>
      </div>
    </nav>
  );
}

function MouseTracker() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById('mouse-glow');
      if (glow) {
        glow.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }

      const cursors = document.querySelectorAll('.custom-cursor');
      cursors.forEach((cursor) => {
        (cursor as HTMLElement).style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div id="mouse-glow" className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-[1] transition-transform duration-300 ease-out will-change-transform"></div>
      <div className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[2000] mix-blend-difference transition-transform duration-75 ease-out"></div>
      <div className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-blue-500/50 rounded-full pointer-events-none z-[2000] transition-transform duration-200 ease-out"></div>
    </>
  );
}

function LogoTicker() {
  const logos = [
    "TechFlow", "CloudScale", "DataNext", "AutoLogic", "NovaAI", "Quantun"
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-gray-950/50 backdrop-blur-sm overflow-hidden flex whitespace-nowrap">
      <div className="flex animate-scroll hover:[animation-play-state:paused]">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-2 mx-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="w-8 h-8 bg-white/20 rounded-md"></div>
            <span className="text-xl font-bold font-display tracking-tight text-white">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MagneticButton({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      if (Math.sqrt(distanceX ** 2 + distanceY ** 2) < 150) {
        el.style.transform = `translate(${distanceX * 0.3}px, ${distanceY * 0.3}px)`;
      } else {
        el.style.transform = `translate(0, 0)`;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = `translate(0, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`transition-transform duration-200 ease-out active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

function ScarcityBanner() {
  return (
    <div className="fixed bottom-8 left-8 z-[800]">
      <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-2xl border-blue-500/20 animate-bounce-slow">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </div>
        <p className="text-sm font-medium">
          Only <span className="text-blue-400 font-bold">3 Audits</span> left this week
        </p>
      </div>
    </div>
  );
}

function BentoCard({ title, desc, icon: Icon, className, delay = 0 }: { title: string, desc: string, icon: any, className?: string, delay?: number }) {
  return (
    <div
      className={`reveal-on-scroll glass-card p-8 rounded-[2rem] group hover:border-blue-500/30 transition-all duration-500 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight italic">{title}</h3>
      <p className="text-gray-400 leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "COO, FlowState",
      content: "The automation audit was a game-changer. We identified 15+ hours of manual work per week that we could eliminate immediately.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Marcus Thorne",
      role: "Founder, ScaleUp AI",
      content: "I've worked with many agencies, but the technical depth here is unmatched. They don't just suggest tools, they build systems.",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Operations, GlobalLogistics",
      content: "Scaling without adding headcount seemed impossible until we implemented their custom AI nerve center. Efficiency is up 60%.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative py-24 overflow-hidden bg-blue-900/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4 uppercase italic">Client Success</h2>
          <p className="text-xl text-gray-400 font-light">Don't just take our word for it.</p>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center text-center ${i === active ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95 pointer-events-none"
                }`}
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-2xl lg:text-3xl font-light text-gray-200 mb-10 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-blue-500/20" />
                <div className="text-left">
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-blue-500" : "bg-gray-800"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


function App() {
  useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    createChat({
      webhookUrl: 'http://n8n-eccsgw8s40o0cgoosg84g888.34.59.132.81.sslip.io/webhook/e91436a2-3553-41ee-9a63-1b12c90cd788/chat',
      mode: 'window',
      showWelcomeScreen: false,
      initialMessages: ["Hi there! 👋", "How can I help you today?"],
    });
  }, []);

  const scrollToCTA = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500/30">
      <ScrollProgress />
      <Navbar />
      <MouseTracker />
      <ScarcityBanner />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-gray-950">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.4),transparent_50%),radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.3),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(30,58,138,0.3),transparent_40%)] animate-mesh"></div>

          {/* Organic Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-blue-600/10 blur-[100px] animate-blob"
              style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
            ></div>
            <div
              className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-800/10 blur-[100px] animate-blob"
              style={{
                animationDelay: '-4s',
                transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)`
              }}
            ></div>
          </div>
        </div>

        <FloatingParticles />

        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-48 text-center sm:text-left">
          <div className="max-w-4xl reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8 animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now Accepting New Partners
            </div>
            <h1 className="text-6xl lg:text-[7rem] font-display font-black tracking-tight mb-8 bg-gradient-to-br from-white via-blue-100 to-blue-900/40 bg-clip-text text-transparent leading-[0.9] luminous-text">
              Automate <br />
              <span className="text-white">Your Growth.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light">
              We engineer intelligent AI systems that eliminate bottlenecks and skyrocket efficiency for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton
                onClick={scrollToCTA}
                className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/20"
              >
                Get Your Free Automation Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <LogoTicker />

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

      {/* Who We Serve Section - Bento Grid */}
      <section className="py-32 relative overflow-hidden" id="features">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-display font-black mb-6 uppercase italic">Who We Serve</h2>
            <p className="text-xl text-gray-400 font-light">Custom automation strategies built for high-performance teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <BentoCard
              className="md:col-span-2 lg:col-span-3 min-h-[300px]"
              title="Growing Scaleups"
              desc="Companies that need to duplicate their efficiency without duplicating their overhead. We handle the technical debt of manual scaling."
              icon={TrendingUp}
              delay={100}
            />
            <BentoCard
              className="md:col-span-2 lg:col-span-3 min-h-[300px]"
              title="Service Agencies"
              desc="Agencies and consultancies looking to improve client delivery times by 40% through automated reporting and intake."
              icon={Users}
              delay={200}
            />
            <BentoCard
              className="md:col-span-4 lg:col-span-4 min-h-[250px]"
              title="Operational Infrastructure"
              desc="Organizations with complex, fragmented data silos that need a unified AI nerve center to manage communication and task routing."
              icon={Cpu}
              delay={300}
            />
            <BentoCard
              className="md:col-span-2 lg:col-span-2 min-h-[250px]"
              title="Secure Enterprise"
              desc="Data-sensitive firms requiring on-premise AI deployments that respect privacy."
              icon={Shield}
              delay={400}
            />
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

      <TestimonialCarousel />


      {/* Final CTA Section */}
      <section id="audit-form" className="py-32 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="reveal-on-scroll glass-card rounded-[3rem] p-10 lg:p-20 shadow-2xl relative overflow-hidden border-blue-500/10">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-800/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-7xl font-display font-black mb-6 tracking-tight uppercase italic luminous-text">Secure Your Audit</h2>
                <p className="text-xl text-gray-400 max-w-xl mx-auto font-light">
                  Join the elite group of businesses leveraging AI to dominate their market.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-gray-950/50 border border-gray-800 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    className="w-full bg-gray-950/50 border border-gray-800 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                  />
                </div>

                <input
                  type="text"
                  required
                  placeholder="Website URL"
                  className="w-full bg-gray-950/50 border border-gray-800 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                />

                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your biggest operational bottleneck..."
                  className="w-full bg-gray-950/50 border border-gray-800 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none"
                ></textarea>

                <MagneticButton
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
                >
                  Apply for Free Audit
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">A</div>
              <span className="font-display font-black text-2xl tracking-tighter italic luminous-text">AI AUTO</span>
            </div>
            <div className="flex gap-12 text-sm font-medium text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
          </div>
          <p className="text-gray-700 text-center text-sm">&copy; 2024 AI Automation Agency. All Systems Operational.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
