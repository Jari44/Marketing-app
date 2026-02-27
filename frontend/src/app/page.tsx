"use client";

import Link from "next/link";
import { BarChart3, Search, TrendingUp, Users, FileText, Zap, Quote, HelpCircle, Mail, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";

export default function Home() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track your marketing performance with live data visualization and instant insights."
    },
    {
      icon: Search,
      title: "SEO Tools",
      description: "Analyze your website's SEO score, find keywords, and fix technical issues."
    },
    {
      icon: TrendingUp,
      title: "Growth Tracking",
      description: "Monitor your growth metrics and get actionable recommendations."
    },
    {
      icon: Users,
      title: "Audience Insights",
      description: "Understand your audience demographics, behavior, and preferences."
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Generate comprehensive reports and export data in multiple formats."
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get started in minutes with our intuitive dashboard and easy integrations."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: ["5,000 visits/month", "Basic analytics", "3 SEO analyses/day", "Email support"]
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      features: ["50,000 visits/month", "Advanced analytics", "Unlimited SEO analyses", "Priority support", "Custom reports"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited visits", "Full API access", "Dedicated manager", "Custom integrations", "SLA guarantee"]
    }
  ];

  const stats = [
    { value: "500+", label: "Active Companies" },
    { value: "2.5M+", label: "Keywords Tracked" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      quote: "MarketPulse transformed how we track our marketing performance. The insights are invaluable.",
      author: "Sarah Chen",
      role: "CMO at TechFlow",
      avatar: "SC"
    },
    {
      quote: "The SEO tools helped us increase our organic traffic by 340% in just 6 months.",
      author: "Marcus Johnson",
      role: "Founder at GrowthLab",
      avatar: "MJ"
    },
    {
      quote: "Finally, a marketing platform that actually delivers. The analytics are comprehensive yet easy to use.",
      author: "Emily Rodriguez",
      role: "Director of Marketing at ScaleUp",
      avatar: "ER"
    }
  ];

  const faqs = [
    {
      question: "How long is the free trial?",
      answer: "Our free trial lasts 14 days with full access to all features. No credit card required to start."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on the next billing cycle."
    },
    {
      question: "Do you offer custom Enterprise solutions?",
      answer: "Yes, we offer custom Enterprise plans with dedicated support, custom integrations, and SLA guarantees."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and are SOC 2 Type II certified. Your data is always safe with us."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-horizontal-mesh relative overflow-hidden">
      {/* Horizontal gradient orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[400px] rounded-full opacity-60 animate-float" style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.7) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[350px] rounded-full opacity-50 animate-float-delayed" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
      
      {/* Floating geometric shapes - Hero section only */}
      {/* Row 1 */}
      <div className="absolute top-10 left-[2%] w-6 h-6 opacity-20 animate-float" style={{ background: '#6366F1', animationDelay: '0s' }}></div>
      <div className="absolute top-16 right-[4%] w-8 h-8 opacity-15 animate-float" style={{ background: '#8B5CF6', borderRadius: '50%', animationDelay: '0.2s' }}></div>
      <div className="absolute top-8 left-[15%] w-5 h-5 opacity-20 animate-float" style={{ background: '#6366F1', transform: 'rotate(45deg)', animationDelay: '0.4s' }}></div>
      <div className="absolute top-20 right-[12%] w-7 h-7 opacity-15 animate-float" style={{ background: '#A78BFA', borderRadius: '50%', animationDelay: '0.6s' }}></div>
      <div className="absolute top-12 left-[28%] w-6 h-6 opacity-20 animate-float" style={{ background: '#6366F1', animationDelay: '0.8s' }}></div>
      <div className="absolute top-24 right-[18%] w-5 h-5 opacity-15 animate-float" style={{ background: '#8B5CF6', borderRadius: '50%', animationDelay: '1s' }}></div>
      <div className="absolute top-8 left-[42%] w-7 h-7 opacity-20 animate-float" style={{ background: '#6366F1', transform: 'rotate(45deg)', animationDelay: '1.2s' }}></div>
      <div className="absolute top-18 right-[25%] w-6 h-6 opacity-15 animate-float" style={{ background: '#A78BFA', animationDelay: '1.4s' }}></div>
      <div className="absolute top-14 left-[55%] w-5 h-5 opacity-20 animate-float" style={{ background: '#6366F1', borderRadius: '50%', animationDelay: '1.6s' }}></div>
      <div className="absolute top-22 right-[32%] w-7 h-7 opacity-15 animate-float" style={{ background: '#8B5CF6', transform: 'rotate(45deg)', animationDelay: '1.8s' }}></div>
      {/* Row 2 */}
      <div className="absolute top-[25%] left-[3%] w-6 h-6 opacity-20 animate-float" style={{ background: '#6366F1', animationDelay: '0.3s' }}></div>
      <div className="absolute top-[28%] right-[6%] w-8 h-8 opacity-15 animate-float" style={{ background: '#8B5CF6', borderRadius: '50%', animationDelay: '0.5s' }}></div>
      <div className="absolute top-[30%] left-[12%] w-5 h-5 opacity-20 animate-float" style={{ background: '#6366F1', transform: 'rotate(45deg)', animationDelay: '0.7s' }}></div>
      <div className="absolute top-[32%] right-[14%] w-7 h-7 opacity-15 animate-float" style={{ background: '#A78BFA', borderRadius: '50%', animationDelay: '0.9s' }}></div>
      <div className="absolute top-[27%] left-[22%] w-6 h-6 opacity-20 animate-float" style={{ background: '#6366F1', animationDelay: '1.1s' }}></div>
      <div className="absolute top-[33%] right-[20%] w-5 h-5 opacity-15 animate-float" style={{ background: '#8B5CF6', borderRadius: '50%', animationDelay: '1.3s' }}></div>
      <div className="absolute top-[29%] left-[35%] w-7 h-7 opacity-20 animate-float" style={{ background: '#6366F1', transform: 'rotate(45deg)', animationDelay: '1.5s' }}></div>
      <div className="absolute top-[35%] right-[26%] w-6 h-6 opacity-15 animate-float" style={{ background: '#A78BFA', animationDelay: '1.7s' }}></div>
      <div className="absolute top-[31%] left-[45%] w-5 h-5 opacity-20 animate-float" style={{ background: '#6366F1', borderRadius: '50%', animationDelay: '1.9s' }}></div>
      <div className="absolute top-[37%] right-[30%] w-7 h-7 opacity-15 animate-float" style={{ background: '#8B5CF6', transform: 'rotate(45deg)', animationDelay: '2.1s' }}></div>
      {/* Row 3 - Center */}
      <div className="absolute top-[40%] left-[5%] w-6 h-6 opacity-20 animate-float" style={{ background: '#6366F1', animationDelay: '0.1s' }}></div>
      <div className="absolute top-[42%] right-[8%] w-8 h-8 opacity-15 animate-float" style={{ background: '#8B5CF6', borderRadius: '50%', animationDelay: '0.3s' }}></div>
      <div className="absolute top-[38%] left-[18%] w-5 h-5 opacity-20 animate-float" style={{ background: '#6366F1', transform: 'rotate(45deg)', animationDelay: '0.5s' }}></div>
      <div className="absolute top-[44%] right-[16%] w-7 h-7 opacity-15 animate-float" style={{ background: '#A78BFA', borderRadius: '50%', animationDelay: '0.7s' }}></div>
      <div className="absolute top-[41%] left-[30%] w-6 h-6 opacity-20 animate-float" style={{ background: '#6366F1', animationDelay: '0.9s' }}></div>
      <div className="absolute top-[46%] right-[24%] w-5 h-5 opacity-15 animate-float" style={{ background: '#8B5CF6', borderRadius: '50%', animationDelay: '1.1s' }}></div>
      <div className="absolute top-[43%] left-[42%] w-7 h-7 opacity-20 animate-float" style={{ background: '#6366F1', transform: 'rotate(45deg)', animationDelay: '1.3s' }}></div>
      <div className="absolute top-[48%] right-[34%] w-6 h-6 opacity-15 animate-float" style={{ background: '#A78BFA', animationDelay: '1.5s' }}></div>
      <div className="absolute top-[45%] left-[52%] w-5 h-5 opacity-20 animate-float" style={{ background: '#6366F1', borderRadius: '50%', animationDelay: '1.7s' }}></div>
      <div className="absolute top-[50%] right-[40%] w-7 h-7 opacity-15 animate-float" style={{ background: '#8B5CF6', transform: 'rotate(45deg)', animationDelay: '1.9s' }}></div>
      
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up opacity-0" style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
            <span className="w-2 h-2 rounded-full pulse-glow" style={{ background: 'var(--accent)' }}></span>
            <span className="text-sm text-gray-300">Trusted by 500+ marketing teams</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up opacity-0 animate-delay-100">
            Your Marketing, <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Data-Driven</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0 animate-delay-200">
            Powerful analytics, SEO tools, and insights to grow your business. 
            Make smarter decisions with real-time data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animate-delay-300">
            <Link 
              href="/register" 
              className="btn-primary text-lg px-8 py-4"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', 
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 35px rgba(99, 102, 241, 0.7)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)'}
            >
              Start Free Trial
            </Link>
            <Link href="/login" className="btn-secondary text-lg px-8 py-4">View Demo</Link>
          </div>
          
          {/* Trusted by */}
          <div className="mt-16 animate-fade-in-up opacity-0 animate-delay-400">
            <p className="text-sm text-gray-500 text-center mb-6">Trusted by industry leaders</p>
            <div className="flex items-center justify-center gap-8 md:gap-16 opacity-50 grayscale">
              <div className="text-gray-400 text-lg md:text-xl font-bold">Apple</div>
              <div className="text-gray-400 text-lg md:text-xl font-bold">Google</div>
              <div className="text-gray-400 text-lg md:text-xl font-bold">Meta</div>
              <div className="text-gray-400 text-lg md:text-xl font-bold">Amazon</div>
              <div className="text-gray-400 text-lg md:text-xl font-bold hidden md:block">Microsoft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <ScrollReveal>
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools to analyze, optimize, and grow your marketing efforts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="feature-card p-8 rounded-2xl animate-fade-in-up opacity-0 cursor-pointer"
                style={{ 
                  animationDelay: `${0.2 + i * 0.1}s`,
                  background: 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 10px 30px rgba(0,0,0,0.2)',
                }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.35) 0%, rgba(139, 92, 246, 0.2) 100%)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <feature.icon className="w-7 h-7" style={{ color: '#A78BFA' }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Pricing */}
      <ScrollReveal>
      <section id="pricing" className="py-20 px-4" style={{ background: 'rgba(30, 41, 59, 0.5)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`pricing-card p-8 rounded-2xl relative animate-fade-in-up opacity-0 cursor-pointer ${plan.popular ? 'popular' : ''}`}
                style={{ 
                  animationDelay: `${0.3 + i * 0.1}s`,
                  background: plan.popular 
                    ? 'linear-gradient(145deg, rgba(99, 102, 241, 0.2) 0%, rgba(30, 41, 59, 0.8) 100%)'
                    : 'linear-gradient(145deg, rgba(71, 85, 105, 0.4) 0%, rgba(30, 41, 59, 0.6) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${plan.popular ? 'rgba(139, 92, 246, 0.4)' : 'rgba(148, 163, 184, 0.25)'}`,
                  boxShadow: plan.popular 
                    ? '0 0 30px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255,255,255,0.1), 0 25px 50px rgba(0,0,0,0.4)' 
                    : 'inset 0 1px 0 rgba(255,255,255,0.05), 0 15px 35px rgba(0,0,0,0.3)',
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', color: 'white', boxShadow: '0 4px 20px rgba(99, 102, 241, 0.5)' }}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className={`block text-center py-3 rounded-lg font-medium transition ${plan.popular ? '' : ''}`} style={plan.popular ? { background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', color: 'white', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' } : { background: 'rgba(71, 85, 105, 0.5)', color: 'white', border: '1px solid rgba(148, 163, 184, 0.3)' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Join thousands of marketers using MarketPulse to drive growth.
          </p>
          <Link href="/register" className="btn-primary text-lg px-10 py-4 inline-block">
            Start Your Free Trial
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal>
      <section className="py-16 px-4" style={{ background: 'rgba(30, 41, 59, 0.5)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center animate-fade-in-up opacity-0" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by Marketers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what our customers have to say about transforming their marketing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl animate-fade-in-up opacity-0 cursor-pointer"
                style={{ 
                  animationDelay: `${0.2 + i * 0.1}s`,
                  background: 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                }}
              >
                <Quote className="w-8 h-8 mb-4" style={{ color: '#8B5CF6', opacity: 0.6 }} />
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', color: 'white' }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
      <section className="py-20 px-4" style={{ background: 'rgba(30, 41, 59, 0.5)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Everything you need to know about MarketPulse.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="p-6 rounded-xl animate-fade-in-up opacity-0"
                style={{ 
                  animationDelay: `${0.2 + i * 0.1}s`,
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                }}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8B5CF6' }} />
                  <div>
                    <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <div 
            className="p-8 rounded-2xl"
            style={{ 
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 116, 139, 0.3)',
            }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white focus:outline-none focus:border-purple-500 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white focus:outline-none focus:border-purple-500 transition"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white focus:outline-none focus:border-purple-500 transition resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2"
                style={{ 
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', 
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                }}
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">MarketPulse</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2026 MarketPulse. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
