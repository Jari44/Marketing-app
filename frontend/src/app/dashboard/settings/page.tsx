"use client";

import { useState } from "react";
import { User, Key, Users, Bell, Shield } from "lucide-react";
import { useAuth } from "@/components/AuthContext";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  const { user } = useAuth();

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "api", label: "API Keys", icon: Key },
    { id: "team", label: "Team", icon: Users },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                activeTab === tab.id 
                  ? "text-white" 
                  : "text-gray-400 hover:text-white hover:bg-surface-light"
              }`}
              style={{ background: activeTab === tab.id ? 'var(--surface-light)' : 'transparent' }}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "profile" && (
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-6">Profile Settings</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ background: 'var(--primary)' }}>
                    {user?.avatar || "U"}
                  </div>
                  <button className="btn-secondary">Change Avatar</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">First Name</label>
                    <input type="text" defaultValue={user?.name?.split(" ")[0] || ""} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                    <input type="text" defaultValue={user?.name?.split(" ").slice(1).join(" ") || ""} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input type="email" defaultValue={user?.email || ""} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input type="text" defaultValue={user?.company || ""} className="input-field" placeholder="Your company name" />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button onClick={handleSave} className="btn-primary">
                    {saved ? "Saved!" : "Save Changes"}
                  </button>
                  <button className="btn-secondary">Cancel</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "api" && (
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-6">API Keys</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg flex items-center justify-between" style={{ background: 'var(--surface-light)' }}>
                  <div>
                    <p className="text-white font-medium">Production API Key</p>
                    <p className="text-sm text-gray-400 font-mono">mp_prod_***********************</p>
                  </div>
                  <button className="btn-secondary text-sm">Regenerate</button>
                </div>
                <div className="p-4 rounded-lg flex items-center justify-between" style={{ background: 'var(--surface-light)' }}>
                  <div>
                    <p className="text-white font-medium">Development API Key</p>
                    <p className="text-sm text-gray-400 font-mono">mp_dev_***********************</p>
                  </div>
                  <button className="btn-secondary text-sm">Regenerate</button>
                </div>
              </div>
              <button className="btn-primary mt-6 flex items-center gap-2">
                <Key className="w-4 h-4" />
                Create New Key
              </button>
            </div>
          )}

          {activeTab === "team" && (
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-6">Team Members</h3>
              <div className="space-y-4">
                {[
                  { name: user?.name || "User", email: user?.email || "user@company.com", role: "Admin" },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg" style={{ background: 'var(--surface-light)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium" style={{ background: 'var(--primary)' }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-white font-medium">{member.name}</p>
                        <p className="text-sm text-gray-400">{member.email}</p>
                      </div>
                    </div>
                    <select defaultValue={member.role} className="input-field w-32">
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Viewer</option>
                    </select>
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-6 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Invite Team Member
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { label: "Email reports", desc: "Receive weekly analytics reports" },
                  { label: "SEO alerts", desc: "Get notified about SEO issues" },
                  { label: "Traffic alerts", desc: "Alert when traffic drops significantly" },
                  { label: "Team activity", desc: "Updates about team member actions" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg" style={{ background: 'var(--surface-light)' }}>
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
