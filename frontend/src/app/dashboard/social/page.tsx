"use client";

import { useState } from "react";
import { Share2, Plus, Image, Calendar, Heart, MessageCircle, Repeat, Eye, ThumbsUp, TrendingUp, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const mockPosts = [
  { id: 1, platform: "twitter", content: "Excited to announce our new feature launch! 🚀 Check it out and let us know what you think.", scheduled: "Feb 28, 2026 10:00 AM", status: "scheduled", likes: 0, retweets: 0, replies: 0 },
  { id: 2, platform: "instagram", content: "Behind the scenes look at our team working on the next big thing! #teamwork #innovation", scheduled: "Feb 27, 2026 2:00 PM", status: "published", likes: 1245, comments: 89, reach: 8500 },
  { id: 3, platform: "linkedin", content: "We're hiring! Looking for talented developers to join our growing team. Apply now!", scheduled: "Feb 26, 2026 9:00 AM", status: "published", likes: 567, comments: 34, reach: 12000 },
  { id: 4, platform: "twitter", content: "Tips for better SEO: 1) Optimize your meta descriptions 2) Use alt text for images 3) Build quality backlinks", scheduled: "Draft", status: "draft", likes: 0, retweets: 0, replies: 0 },
  { id: 5, platform: "facebook", content: "Thank you for 10K followers! 🎉 We're grateful for your continued support.", scheduled: "Feb 25, 2026 12:00 PM", status: "published", likes: 2340, comments: 156, reach: 45000 },
];

const platforms = [
  { name: "Twitter", icon: Twitter, color: "#1DA1F2" },
  { name: "Instagram", icon: Instagram, color: "#E4405F" },
  { name: "LinkedIn", icon: Linkedin, color: "#0A66C2" },
  { name: "Facebook", icon: Facebook, color: "#1877F2" },
];

const mockAnalytics = {
  totalFollowers: "125.4K",
  totalEngagement: "18.2K",
  avgReach: "45.2K",
  engagementRate: "4.8%",
  weeklyGrowth: "+2.3K",
};

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState<"posts" | "schedule" | "analytics">("posts");

  const getPlatformIcon = (platform: string) => {
    const p = platforms.find(p => p.name.toLowerCase() === platform);
    return p || platforms[0];
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Social Media</h1>
          <p className="text-gray-400">Manage and schedule your social media posts.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Post
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.2)' }}>
              <Share2 className="w-5 h-5" style={{ color: '#6366F1' }} />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Total Followers</p>
              <p className="text-xl font-bold text-white">{mockAnalytics.totalFollowers}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
              <ThumbsUp className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Engagement</p>
              <p className="text-xl font-bold text-white">{mockAnalytics.totalEngagement}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
              <Eye className="w-5 h-5" style={{ color: '#8B5CF6' }} />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Avg. Reach</p>
              <p className="text-xl font-bold text-white">{mockAnalytics.avgReach}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
              <TrendingUp className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Engagement Rate</p>
              <p className="text-xl font-bold text-white">{mockAnalytics.engagementRate}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(236, 72, 153, 0.2)' }}>
              <TrendingUp className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Weekly Growth</p>
              <p className="text-xl font-bold text-green-400">{mockAnalytics.weeklyGrowth}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b" style={{ borderColor: 'var(--border)' }}>
        {(["posts", "schedule", "analytics"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition ${
              activeTab === tab 
                ? 'text-white border-b-2' 
                : 'text-gray-400 hover:text-white'
            }`}
            style={{ 
              borderColor: activeTab === tab ? '#6366F1' : 'transparent',
              background: activeTab === tab ? 'rgba(99, 102, 241, 0.1)' : 'transparent'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Posts */}
      {activeTab === "posts" && (
        <div className="space-y-4">
          {mockPosts.map((post) => {
            const platform = getPlatformIcon(post.platform);
            return (
              <div key={post.id} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${platform.color}20` }}>
                    <platform.icon className="w-5 h-5" style={{ color: platform.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-medium capitalize">{post.platform}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        post.status === 'published' ? 'bg-green-500/20 text-green-400' :
                        post.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {post.status}
                      </span>
                      <span className="text-gray-500 text-sm">{post.scheduled}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{post.content}</p>
                    <div className="flex gap-6 text-gray-400 text-sm">
                      {post.status === 'published' && (
                        <>
                          <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> {post.likes?.toLocaleString()}</span>
                          {post.retweets !== undefined && <span className="flex items-center gap-1"><Repeat className="w-4 h-4" /> {post.retweets}</span>}
                          {post.replies !== undefined && <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {post.replies}</span>}
                          {post.reach !== undefined && <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {post.reach.toLocaleString()}</span>}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Schedule */}
      {activeTab === "schedule" && (
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Content Calendar
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="text-center p-2 rounded-lg" style={{ background: 'var(--surface-light)' }}>
                <p className="text-gray-400 text-sm mb-2">{day}</p>
                <div className="space-y-1">
                  {day === "Wed" && (
                    <div className="p-1.5 rounded text-xs bg-blue-500/20 text-blue-400 truncate">Product Launch</div>
                  )}
                  {day === "Fri" && (
                    <>
                      <div className="p-1.5 rounded text-xs bg-purple-500/20 text-purple-400 truncate">Tips Post</div>
                      <div className="p-1.5 rounded text-xs bg-pink-500/20 text-pink-400 truncate">Meme</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics */}
      {activeTab === "analytics" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Platform Performance</h3>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${platform.color}20` }}>
                    <platform.icon className="w-5 h-5" style={{ color: platform.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-white text-sm">{platform.name}</span>
                      <span className="text-gray-400 text-sm">{Math.floor(Math.random() * 5000) + 1000} followers</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: 'var(--surface-light)' }}>
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${Math.floor(Math.random() * 60) + 20}%`,
                          background: `linear-gradient(90deg, ${platform.color} 0%, ${platform.color}80 100%)`
                        }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Engagement by Post Type</h3>
            <div className="space-y-4">
              {["Images", "Videos", "Links", "Text Only"].map((type, i) => (
                <div key={type} className="flex items-center gap-4">
                  <Image className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-white text-sm">{type}</span>
                      <span className="text-gray-400 text-sm">{Math.floor(Math.random() * 3000) + 500} engagements</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: 'var(--surface-light)' }}>
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500"
                        style={{ width: `${Math.floor(Math.random() * 70) + 10}%` }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
