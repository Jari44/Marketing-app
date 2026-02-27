"use client";

import { ArrowUp, ArrowDown, Eye, MousePointer, DollarSign, Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const stats = [
  { label: "Total Visits", value: "124,532", change: "+12.5%", positive: true, icon: Eye },
  { label: "Unique Visitors", value: "45,891", change: "+8.2%", positive: true, icon: Users },
  { label: "Conversions", value: "3,421", change: "+23.1%", positive: true, icon: MousePointer },
  { label: "Revenue", value: "$28,450", change: "-2.4%", positive: false, icon: DollarSign },
];

const chartData = [
  { name: "Mon", visitors: 4000, conversions: 240 },
  { name: "Tue", visitors: 3000, conversions: 139 },
  { name: "Wed", visitors: 2000, conversions: 980 },
  { name: "Thu", visitors: 2780, conversions: 390 },
  { name: "Fri", visitors: 1890, conversions: 480 },
  { name: "Sat", visitors: 2390, conversions: 380 },
  { name: "Sun", visitors: 3490, conversions: 430 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your marketing overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                <stat.icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.positive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-6">Traffic Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip 
                contentStyle={{ background: '#1E293B', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#F8FAFC' }}
              />
              <Area type="monotone" dataKey="visitors" stroke="#6366F1" fillOpacity={1} fill="url(#colorVisitors)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Conversions Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-6">Conversions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip 
                contentStyle={{ background: '#1E293B', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#F8FAFC' }}
              />
              <Line type="monotone" dataKey="conversions" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/dashboard/seo" className="btn-secondary text-left flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>🔍</span>
            Run SEO Analysis
          </a>
          <a href="/dashboard/reports" className="btn-secondary text-left flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>📊</span>
            Generate Report
          </a>
          <button className="btn-secondary text-left flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>📤</span>
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
}
