"use client";

import { useState } from "react";
import { Users, Plus, Mail, Shield, MoreVertical, Edit, Trash2, UserPlus, Check, X } from "lucide-react";

const mockTeam = [
  { id: 1, name: "John Doe", email: "john@marketpulse.io", role: "Admin", status: "active", lastActive: "Now", avatar: "JD" },
  { id: 2, name: "Jane Smith", email: "jane@marketpulse.io", role: "Editor", status: "active", lastActive: "2 hours ago", avatar: "JS" },
  { id: 3, name: "Mike Johnson", email: "mike@marketpulse.io", role: "Viewer", status: "active", lastActive: "1 day ago", avatar: "MJ" },
  { id: 4, name: "Sarah Chen", email: "sarah@marketpulse.io", role: "Editor", status: "active", lastActive: "3 hours ago", avatar: "SC" },
  { id: 5, name: "Tom Wilson", email: "tom@marketpulse.io", role: "Viewer", status: "pending", lastActive: "Never", avatar: "TW" },
];

const roles = ["Admin", "Editor", "Viewer"];
const inviteEmail = "colleague@company.com";

export default function TeamPage() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);

  const handleInvite = () => {
    setInviteSent(true);
    setTimeout(() => {
      setInviteSent(false);
      setShowInviteModal(false);
    }, 2000);
  };

  const getRoleBadge = (role: string) => {
    const styles: Record<string, { bg: string; text: string }> = {
      Admin: { bg: "bg-purple-500/20", text: "text-purple-400" },
      Editor: { bg: "bg-blue-500/20", text: "text-blue-400" },
      Viewer: { bg: "bg-gray-500/20", text: "text-gray-400" },
    };
    return styles[role] || styles.Viewer;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Team</h1>
          <p className="text-gray-400">Manage your team members and permissions.</p>
        </div>
        <button 
          className="btn-primary flex items-center gap-2"
          onClick={() => setShowInviteModal(true)}
        >
          <UserPlus className="w-4 h-4" />
          Invite Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.2)' }}>
              <Users className="w-6 h-6" style={{ color: '#6366F1' }} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Team Members</p>
              <p className="text-2xl font-bold text-white">{mockTeam.length}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active</p>
              <p className="text-2xl font-bold text-white">{mockTeam.filter(m => m.status === 'active').length}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
              <Shield className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Admins</p>
              <p className="text-2xl font-bold text-white">{mockTeam.filter(m => m.role === 'Admin').length}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(239, 68, 68, 0.2)' }}>
              <X className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Pending</p>
              <p className="text-2xl font-bold text-white">{mockTeam.filter(m => m.status === 'pending').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Roles Info */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((role) => (
            <div key={role} className="p-4 rounded-xl" style={{ background: 'var(--surface-light)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Shield className={`w-4 h-4 ${getRoleBadge(role).text}`} />
                <span className="text-white font-medium">{role}</span>
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                {role === "Admin" && (
                  <>
                    <li>• Full access to all features</li>
                    <li>• Manage team members</li>
                    <li>• Edit billing & settings</li>
                  </>
                )}
                {role === "Editor" && (
                  <>
                    <li>• Create & edit content</li>
                    <li>• View analytics</li>
                    <li>• Cannot manage team</li>
                  </>
                )}
                {role === "Viewer" && (
                  <>
                    <li>• View only access</li>
                    <li>• View reports</li>
                    <li>• Cannot edit anything</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Team Members</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Member</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Role</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Last Active</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockTeam.map((member) => (
                <tr key={member.id} className="border-b hover:bg-white/5" style={{ borderColor: 'var(--border)' }}>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}>
                        {member.avatar}
                      </div>
                      <div>
                        <p className="text-white font-medium">{member.name}</p>
                        <p className="text-gray-400 text-sm">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${getRoleBadge(member.role).bg} ${getRoleBadge(member.role).text}`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                      member.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{member.lastActive}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/10 transition" title="Edit role">
                        <Edit className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/10 transition" title="Remove">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="card max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Invite Team Member</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    defaultValue={inviteEmail}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Role</label>
                <select className="input-field">
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleInvite}
                  className="flex-1 btn-primary"
                >
                  {inviteSent ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4" /> Sent!
                    </span>
                  ) : (
                    "Send Invite"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
