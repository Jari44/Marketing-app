"use client";

import { useState } from "react";
import { Globe, Monitor, Smartphone, Tablet } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const deviceData = [
  { name: "Desktop", value: 55, color: "#6366F1" },
  { name: "Mobile", value: 35, color: "#10B981" },
  { name: "Tablet", value: 10, color: "#F59E0B" },
];

const sourceData = [
  { name: "Organic Search", visitors: 45000 },
  { name: "Direct", visitors: 28000 },
  { name: "Social Media", visitors: 18000 },
  { name: "Referral", visitors: 12000 },
  { name: "Email", visitors: 8000 },
];

const geoData = [
  { country: "United States", visitors: 45000, percentage: 36 },
  { country: "United Kingdom", visitors: 18000, percentage: 14 },
  { country: "Germany", visitors: 12000, percentage: 10 },
  { country: "France", visitors: 9000, percentage: 7 },
  { country: "Other", visitors: 40500, percentage: 33 },
];

export default function AnalyticsPage() {
  const [dateRange] = useState("7d");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-gray-400">Deep dive into your marketing data.</p>
        </div>
        <select className="input-field w-40" defaultValue={dateRange}>
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Device Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-6">Device Breakdown</h3>
          <div className="flex items-center gap-8">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ background: '#1E293B', border: '1px solid #475569', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-4">
              {deviceData.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: item.color }}></div>
                  <span className="text-gray-300">{item.name}</span>
                  <span className="text-white font-medium ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-6">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={sourceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94A3B8" />
              <YAxis dataKey="name" type="category" stroke="#94A3B8" width={100} />
              <Tooltip 
                contentStyle={{ background: '#1E293B', border: '1px solid #475569', borderRadius: '8px' }}
              />
              <Bar dataKey="visitors" fill="#6366F1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Geographic Data */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-6">Top Countries</h3>
        <div className="space-y-4">
          {geoData.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-white w-40">{item.country}</span>
              <div className="flex-1 h-2 bg-surface-light rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ width: `${item.percentage}%`, background: 'var(--primary)' }}
                ></div>
              </div>
              <span className="text-gray-400 w-20 text-right">{item.visitors.toLocaleString()}</span>
              <span className="text-gray-500 w-12 text-right">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
