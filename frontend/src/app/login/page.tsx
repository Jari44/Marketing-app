"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/components/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const name = email.split("@")[0].replace(/./g, c => c.toUpperCase());
    setTimeout(() => {
      setUser({
        name: name,
        email: email,
        avatar: name.substring(0, 2)
      });
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--background)' }}>
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">MarketPulse</span>
          </Link>

          <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-gray-400 mb-8">Sign in to your account to continue</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-10"
                  required
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" style={{ accentColor: 'var(--primary)' }} />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm" style={{ color: 'var(--primary)' }}>Forgot password?</a>
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
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-8">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium" style={{ color: 'var(--primary)' }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-12" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #4F46E5 100%)' }}>
        <div className="max-w-md text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur">
            <BarChart3 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Powerful Marketing Analytics</h2>
          <p className="text-white/80">
            Track your marketing performance, analyze SEO, and grow your business with data-driven insights.
          </p>
        </div>
      </div>
    </div>
  );
}
