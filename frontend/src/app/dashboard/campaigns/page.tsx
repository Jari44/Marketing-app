"use client";

import { useState } from "react";
import { Megaphone, Plus, Play, Pause, BarChart3, Users, Mail, TrendingUp } from "lucide-react";

const mockCampaigns = [
  { id: 1, name: "Summer Sale 2026", status: "active", platform: "Email", audience: "All Users", sent: 24500, opens: 8200, clicks: 1450, startDate: "Feb 15", endDate: "Mar 1" },
  { id: 2, name: "Product Launch", status: "active", platform: "Social", audience: "New Visitors", sent: 15200, opens: 6100, clicks: 980, startDate: "Feb 20", endDate: "Mar 10" },
  { id: 3, name: "Re-engagement", status: "paused", platform: "Email", audience: "Inactive Users", sent: 8500, opens: 2100, clicks: 320, startDate: "Feb 10", endDate: "Feb 28" },
  { id: 4, name: "Newsletter Weekly", status: "draft", platform: "Email", audience: "Subscribers", sent: 0, opens: 0, clicks: 0, startDate: "Mar 1", endDate: "Mar 8" },
  { id: 5, name: "Brand Awareness", status: "active", platform: "Social", audience: "Target Demo", sent: 45000, opens: 18500, clicks: 3200, startDate: "Feb 1", endDate: "Feb 28" },
];

const platforms = ["All", "Email", "Social", "PPC"];
const statuses = ["All", "Active", "Paused", "Draft", "Completed"];

export default function CampaignsPage() {
  const [filterPlatform, setFilterPlatform] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredCampaigns = mockCampaigns.filter(c => {
    const platformMatch = filterPlatform === "All" || c.platform === filterPlatform;
    const statusMatch = filterStatus === "All" || 
      (filterStatus === "Active" && c.status === "active") ||
      (filterStatus === "Paused" && c.status === "paused") ||
      (filterStatus === "Draft" && c.status === "draft");
    return platformMatch && statusMatch;
  });

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: "bg-green-500/20 text-green-400",
      paused: "bg-yellow-500/20 text-yellow-400",
      draft: "bg-gray-500/20 text-gray-400",
      completed: "bg-purple-500/20 text-purple-400",
    };
    return styles[status] || styles.draft;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Campaigns</h1>
          <p className="text-gray-400">Create and manage your marketing campaigns.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Campaign
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.2)' }}>
              <Megaphone className="w-6 h-6" style={{ color: '#6366F1' }} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Campaigns</p>
              <p className="text-2xl font-bold text-white">{mockCampaigns.length}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Avg. Open Rate</p>
              <p className="text-2xl font-bold text-white">42.3%</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
              <Users className="w-6 h-6" style={{ color: '#8B5CF6' }} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Reach</p>
              <p className="text-2xl font-bold text-white">93.2K</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
              <BarChart3 className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Avg. CTR</p>
              <p className="text-2xl font-bold text-white">6.8%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <select 
          value={filterPlatform}
          onChange={(e) => setFilterPlatform(e.target.value)}
          className="input-field w-auto"
        >
          {platforms.map(p => <option key={p} value={p}>{p} Platform</option>)}
        </select>
        <select 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="input-field w-auto"
        >
          {statuses.map(s => <option key={s} value={s}>{s} Status</option>)}
        </select>
      </div>

      {/* Campaigns Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Campaign</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Platform</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Sent</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Opens</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Clicks</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Date Range</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b hover:bg-white/5" style={{ borderColor: 'var(--border)' }}>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.2)' }}>
                        <Mail className="w-5 h-5" style={{ color: '#6366F1' }} />
                      </div>
                      <span className="text-white font-medium">{campaign.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${getStatusBadge(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{campaign.platform}</td>
                  <td className="py-4 px-4 text-gray-300">{campaign.sent.toLocaleString()}</td>
                  <td className="py-4 px-4 text-gray-300">{campaign.opens.toLocaleString()}</td>
                  <td className="py-4 px-4 text-gray-300">{campaign.clicks.toLocaleString()}</td>
                  <td className="py-4 px-4 text-gray-300 text-sm">{campaign.startDate} - {campaign.endDate}</td>
                  <td className="py-4 px-4">
                    <button className="p-2 rounded-lg hover:bg-white/10 transition">
                      {campaign.status === 'active' ? (
                        <Pause className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <Play className="w-4 h-4 text-green-400" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
