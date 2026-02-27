"use client";

import { useState } from "react";
import { Search, AlertCircle, CheckCircle, XCircle, Loader2 } from "lucide-react";

const mockResults = {
  score: 78,
  loading: false,
  issues: [
    { type: "error", category: "Performance", message: "Image sizes not optimized", fix: "Compress images to WebP format" },
    { type: "warning", category: "SEO", message: "Meta description too short", fix: "Add more descriptive meta description" },
    { type: "success", category: "Accessibility", message: "Alt tags present on all images", fix: null },
    { type: "success", category: "Performance", message: "Server response time is good", fix: null },
    { type: "warning", category: "SEO", message: "Missing H1 tag", fix: "Add an H1 heading to the page" },
    { type: "error", category: "Security", message: "HTTPS not enforced", fix: "Enable HTTPS redirect" },
  ],
  keywords: [
    { keyword: "marketing analytics", volume: 12100, difficulty: "Medium" },
    { keyword: "seo tools", volume: 8200, difficulty: "Medium" },
    { keyword: "digital marketing", volume: 22400, difficulty: "Hard" },
    { keyword: "marketing dashboard", volume: 3600, difficulty: "Easy" },
  ]
};

export default function SEOPage() {
  const [url, setUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<typeof mockResults | null>(null);

  const handleAnalyze = () => {
    if (!url) return;
    setAnalyzing(true);
    setResults(null);
    
    setTimeout(() => {
      setAnalyzing(false);
      setResults(mockResults);
      setTimeout(() => {
        document.getElementById('seo-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "from-green-500 to-emerald-600";
    if (score >= 60) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-rose-600";
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">SEO Tools</h1>
        <p className="text-gray-400">Analyze and optimize your website's SEO.</p>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Website Analyzer</h3>
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="url"
              placeholder="Enter website URL (e.g., https://example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <button 
            onClick={handleAnalyze}
            disabled={analyzing || !url}
            className={`btn-primary flex items-center gap-2 ${analyzing ? 'opacity-70' : ''}`}
          >
            {analyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                Analyze
              </>
            )}
          </button>
        </div>
      </div>

      {analyzing && (
        <div className="card text-center py-12">
          <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin" style={{ color: 'var(--primary)' }} />
          <p className="text-gray-400">Analyzing website...</p>
        </div>
      )}

      {results && !analyzing && (
        <div id="seo-results">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card flex items-center justify-center py-8">
              <div className="text-center">
                <div className={`text-6xl font-bold mb-2 bg-gradient-to-r ${getScoreBg(results.score)} bg-clip-text text-transparent`}>
                  {results.score}
                </div>
                <p className="text-gray-400">SEO Score</p>
              </div>
            </div>
            <div className="card md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-4">Summary</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg" style={{ background: 'rgba(239, 68, 68, 0.1)' }}>
                  <p className="text-2xl font-bold text-red-400">{results.issues.filter(i => i.type === 'error').length}</p>
                  <p className="text-sm text-gray-400">Errors</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                  <p className="text-2xl font-bold text-yellow-400">{results.issues.filter(i => i.type === 'warning').length}</p>
                  <p className="text-sm text-gray-400">Warnings</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                  <p className="text-2xl font-bold text-green-400">{results.issues.filter(i => i.type === 'success').length}</p>
                  <p className="text-sm text-gray-400">Passed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Issues Found</h3>
            <div className="space-y-3">
              {results.issues.map((issue, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'var(--surface-light)' }}>
                  {issue.type === 'error' && <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />}
                  {issue.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />}
                  {issue.type === 'success' && <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-300">{issue.category}</span>
                    </div>
                    <p className="text-white">{issue.message}</p>
                    {issue.fix && (
                      <p className="text-sm text-gray-400 mt-1">💡 {issue.fix}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Suggested Keywords</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Keyword</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Volume</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {results.keywords.map((kw, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: 'var(--border)' }}>
                      <td className="py-3 px-4 text-white">{kw.keyword}</td>
                      <td className="py-3 px-4 text-gray-300">{kw.volume.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          kw.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                          kw.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {kw.difficulty}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
