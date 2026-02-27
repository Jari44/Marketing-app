"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownSection = {
  label: string;
  items: DropdownItem[];
};

const dropdowns: DropdownSection[] = [
  {
    label: "Services",
    items: [
      { label: "Web Development", href: "#" },
      { label: "E-commerce", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "CRM Systems", href: "#" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Analytics", href: "#" },
      { label: "SEO Tools", href: "#" },
      { label: "Reports", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(30, 41, 59, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(99, 102, 241, 0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' }}>
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">MarketPulse</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-2">
          {dropdowns.map((dropdown) => (
            <div 
              key={dropdown.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(dropdown.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {dropdown.label}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === dropdown.label ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === dropdown.label && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 py-2 rounded-xl animate-fade-in-up"
                  style={{ 
                    background: 'rgba(30, 41, 59, 0.98)', 
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(99, 102, 241, 0.1)'
                  }}
                >
                  {dropdown.items.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <Link href="#features" className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
            Features
          </Link>
          <Link href="#pricing" className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link 
            href="/register" 
            className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

import { BarChart3 } from "lucide-react";
