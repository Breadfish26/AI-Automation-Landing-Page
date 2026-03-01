import { ArrowRight, CheckCircle2, Target, Users, Zap } from 'lucide-react';

function App() {
  const scrollToCTA = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-950 to-gray-950"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Transform Your Business with AI Automation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 mb-10 leading-relaxed">
              We help businesses streamline operations, reduce costs, and scale efficiently through intelligent automation solutions.
            </p>
            <button
              onClick={scrollToCTA}
              className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Get Your Free Automation Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Free Automation Audit Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Free Automation Audit</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We'll analyze your current workflows and identify specific opportunities where AI automation can save you time and money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Identify Opportunities</h3>
              <p className="text-gray-400 leading-relaxed">
                We'll review your current processes and pinpoint where automation can have the biggest impact.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Recommendations</h3>
              <p className="text-gray-400 leading-relaxed">
                Receive tailored suggestions based on your specific business needs and goals.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clear Action Plan</h3>
              <p className="text-gray-400 leading-relaxed">
                Get a straightforward roadmap showing how to implement automation in your business.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToCTA}
              className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Request Your Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet/Audit Offer Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">What You'll Receive</h2>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-10 lg:p-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Process Review</h3>
                    <p className="text-gray-400 leading-relaxed">
                      A detailed analysis of your current workflows, identifying manual tasks that consume your team's time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost-Benefit Analysis</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Clear projections showing potential time savings and cost reductions from implementing automation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Priority Roadmap</h3>
                    <p className="text-gray-400 leading-relaxed">
                      A prioritized plan showing which automations to implement first for maximum impact.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementation Strategy</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Specific recommendations for tools, technologies, and approaches that fit your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is & Who It's For */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">What We Do</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                We design and implement AI-powered automation systems that handle repetitive tasks, streamline workflows, and improve efficiency across your organization.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our solutions integrate with your existing tools and systems, creating seamless automation that works in the background while your team focuses on high-value activities.
              </p>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Who We Serve</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growing Businesses</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Companies that need to scale operations without proportionally increasing headcount.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Service Providers</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Agencies and consultancies looking to improve client delivery and reduce operational overhead.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Operations Teams</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Organizations with manual, repetitive processes that limit growth and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Happens Next</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              A straightforward process with no pressure or obligations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">1</div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold mb-3">Submit Your Information</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Fill out a brief form telling us about your business and the challenges you're facing. This helps us prepare for our conversation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">2</div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold mb-3">Initial Consultation</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    We'll schedule a call to discuss your current processes and understand where automation could help. No sales pitch—just a productive conversation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">3</div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold mb-3">Receive Your Audit</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Within a few days, you'll receive a detailed audit document with our findings, recommendations, and a clear action plan.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">4</div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold mb-3">Choose Your Path</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Review the audit at your own pace. If you'd like help implementing the recommendations, we're here. If not, you'll still have valuable insights to work with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You Decide What to Do Next */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">You're in Control</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            This audit is designed to provide value whether you work with us or not. Our goal is to give you clarity on how automation can help your business. What you do with that information is entirely up to you.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            There's no obligation, no high-pressure sales tactics, and no strings attached. Just honest insights and practical recommendations you can act on when you're ready.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="audit-form" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-900/40 to-gray-900 border border-blue-800/50 rounded-2xl p-10 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-400">
                Request your free automation audit and discover how AI can transform your operations.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="challenges" className="block text-sm font-medium mb-2">
                  What challenges are you looking to solve?
                </label>
                <textarea
                  id="challenges"
                  rows={4}
                  required
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Get Your Free Automation Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>&copy; 2024 AI Automation Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
