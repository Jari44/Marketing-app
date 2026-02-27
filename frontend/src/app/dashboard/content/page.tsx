"use client";

import { useState } from "react";
import { FileEdit, Plus, Search, Clock, Eye, Edit3, Trash2, Calendar, Tag, Lightbulb, Copy, Check } from "lucide-react";

const mockContent = [
  { id: 1, title: "10 SEO Tips for 2026", type: "Blog Post", status: "published", seoScore: 92, views: 12450, lastEdited: "Feb 25, 2026", author: "John Doe" },
  { id: 2, title: "Marketing Strategy Guide", type: "Blog Post", status: "draft", seoScore: 78, views: 0, lastEdited: "Feb 27, 2026", author: "Jane Smith" },
  { id: 3, title: "Product Announcement: AI Features", type: "Announcement", status: "review", seoScore: 85, views: 0, lastEdited: "Feb 26, 2026", author: "John Doe" },
  { id: 4, title: "Customer Success Story: TechFlow", type: "Case Study", status: "draft", seoScore: 65, views: 0, lastEdited: "Feb 24, 2026", author: "Mike Johnson" },
  { id: 5, title: "How to Improve Email Open Rates", type: "Guide", status: "published", seoScore: 88, views: 8320, lastEdited: "Feb 20, 2026", author: "Jane Smith" },
];

const contentTypes = ["All Types", "Blog Post", "Announcement", "Case Study", "Guide", "Landing Page"];
const statusFilters = ["All", "Published", "Draft", "Review"];

export default function ContentPage() {
  const [filterType, setFilterType] = useState("All Types");
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredContent = mockContent.filter(c => {
    const typeMatch = filterType === "All Types" || c.type === filterType;
    const statusMatch = filterStatus === "All" || c.status.toLowerCase() === filterStatus.toLowerCase();
    const searchMatch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && statusMatch && searchMatch;
  });

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      published: "bg-green-500/20 text-green-400",
      draft: "bg-gray-500/20 text-gray-400",
      review: "bg-yellow-500/20 text-yellow-400",
    };
    return styles[status] || styles.draft;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const copyToClipboard = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Content Studio</h1>
          <p className="text-gray-400">Create, edit, and manage your content.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Content
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.2)' }}>
              <FileEdit className="w-6 h-6" style={{ color: '#6366F1' }} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Content</p>
              <p className="text-2xl font-bold text-white">{mockContent.length}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
              <Eye className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Views</p>
              <p className="text-2xl font-bold text-white">20.8K</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
              <Lightbulb className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Avg. SEO Score</p>
              <p className="text-2xl font-bold text-white">81.5</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
              <Clock className="w-6 h-6" style={{ color: '#8B5CF6' }} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">In Draft</p>
              <p className="text-2xl font-bold text-white">{mockContent.filter(c => c.status === 'draft').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Tips */}
      <div className="card" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)' }}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.2)' }}>
            <Lightbulb className="w-5 h-5" style={{ color: '#6366F1' }} />
          </div>
          <div>
            <h3 className="text-white font-medium mb-2">Content Tips</h3>
            <p className="text-gray-400 text-sm">Your SEO scores are looking good! Consider adding more internal links to improve your rankings. Also, try to include at least one image in each blog post.</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <select 
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="input-field w-auto"
        >
          {contentTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="input-field w-auto"
        >
          {statusFilters.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Content Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Title</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">SEO Score</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Views</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Last Edited</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Author</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContent.map((content) => (
                <tr key={content.id} className="border-b hover:bg-white/5" style={{ borderColor: 'var(--border)' }}>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.2)' }}>
                        <FileEdit className="w-5 h-5" style={{ color: '#6366F1' }} />
                      </div>
                      <span className="text-white font-medium">{content.title}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{content.type}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${getStatusBadge(content.status)}`}>
                      {content.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`font-medium ${getScoreColor(content.seoScore)}`}>
                      {content.seoScore}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-300">
                    {content.views > 0 ? content.views.toLocaleString() : '-'}
                  </td>
                  <td className="py-4 px-4 text-gray-300 text-sm">{content.lastEdited}</td>
                  <td className="py-4 px-4 text-gray-300">{content.author}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button 
                        className="p-2 rounded-lg hover:bg-white/10 transition"
                        onClick={() => copyToClipboard(content.id)}
                        title="Copy"
                      >
                        {copiedId === content.id ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/10 transition" title="Edit">
                        <Edit3 className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/10 transition" title="Delete">
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
    </div>
  );
}
