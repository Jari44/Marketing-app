"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, PieChart, Search, FileText, Settings, LogOut, Menu, X, Megaphone, Share2, FileEdit, Users } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/components/AuthContext";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/dashboard/analytics", label: "Analytics", icon: PieChart },
  { href: "/dashboard/seo", label: "SEO Tools", icon: Search },
  { href: "/dashboard/campaigns", label: "Campaigns", icon: Megaphone },
  { href: "/dashboard/social", label: "Social Media", icon: Share2 },
  { href: "/dashboard/content", label: "Content Studio", icon: FileEdit },
  { href: "/dashboard/team", label: "Team", icon: Users },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="p-6 border-b" style={{ borderColor: 'var(--border)' }}>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">MarketPulse</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-4 border-t" style={{ borderColor: 'var(--border)' }}>
          <Link href="/dashboard/settings" className="flex items-center gap-3 mb-3 hover:bg-white/5 p-2 -m-2 rounded-lg transition">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium" style={{ background: 'var(--primary)' }}>
              {user?.avatar || "U"}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{user?.name || "User"}</p>
              <p className="text-xs text-gray-400">Pro Plan</p>
            </div>
          </Link>
          <button onClick={() => { logout(); window.location.href = "/login"; }} className="nav-item text-red-400 hover:text-red-300 w-full">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
