"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/components/AuthContext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setUser({
        name: name,
        email: email,
        company: company,
        avatar: name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)
      });
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--background)' }}>
      {/* Left side - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-12" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}>
        <div className="max-w-md text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur">
            <BarChart3 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Free Trial</h2>
          <p className="text-white/80">
            Join 500+ marketing teams using MarketPulse to grow their business.
          </p>
          <div className="mt-8 space-y-3 text-left">
            {["14-day free trial", "No credit card required", "Full features included"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">MarketPulse</span>
          </Link>

          <h1 className="text-3xl font-bold text-white mb-2">Create account</h1>
          <p className="text-gray-400 mb-8">Start your 14-day free trial</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Work Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Acme Inc"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-10"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1 rounded" style={{ accentColor: 'var(--primary)' }} required />
              <span className="text-sm text-gray-400">
                I agree to the{" "}
                <a href="#" className="underline">Terms</a>
                {" "}and{" "}
                <a href="#" className="underline">Privacy Policy</a>
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="font-medium" style={{ color: 'var(--primary)' }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
