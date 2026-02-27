"use client";

import { useState } from "react";
import { FileText, Download, Calendar, Plus, Clock } from "lucide-react";

const reports = [
  { id: 1, name: "Monthly Analytics Report", type: "Analytics", date: "2026-02-20", size: "2.4 MB" },
  { id: 2, name: "SEO Performance Q1", type: "SEO", date: "2026-02-18", size: "1.8 MB" },
  { id: 3, name: "Traffic Analysis - January", type: "Analytics", date: "2026-02-01", size: "3.1 MB" },
  { id: 4, name: "Keyword Rankings Report", type: "SEO", date: "2026-01-28", size: "1.2 MB" },
  { id: 5, name: "Conversion Funnel Analysis", type: "Analytics", date: "2026-01-25", size: "2.0 MB" },
];

const scheduledReports = [
  { id: 1, name: "Weekly Performance Summary", frequency: "Weekly", nextRun: "2026-03-03" },
  { id: 2, name: "Monthly SEO Audit", frequency: "Monthly", nextRun: "2026-03-01" },
];

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "scheduled">("all");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Reports</h1>
          <p className="text-gray-400">Generate and manage your marketing reports.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Generate Report
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <button
          onClick={() => setActiveTab("all")}
          className={`pb-3 px-2 text-sm font-medium transition ${
            activeTab === "all" 
              ? "text-white border-b-2" 
              : "text-gray-400 hover:text-white"
          }`}
          style={{ borderColor: activeTab === 'all' ? 'var(--primary)' : 'transparent' }}
        >
          All Reports
        </button>
        <button
          onClick={() => setActiveTab("scheduled")}
          className={`pb-3 px-2 text-sm font-medium transition ${
            activeTab === "scheduled" 
              ? "text-white border-b-2" 
              : "text-gray-400 hover:text-white"
          }`}
          style={{ borderColor: activeTab === 'scheduled' ? 'var(--primary)' : 'transparent' }}
        >
          Scheduled
        </button>
      </div>

      {/* Reports List */}
      {activeTab === "all" && (
        <div className="space-y-3">
          {reports.map((report) => (
            <div key={report.id} className="card flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                  <FileText className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <h3 className="font-medium text-white">{report.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <button className="btn-secondary flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Scheduled Reports */}
      {activeTab === "scheduled" && (
        <div className="space-y-3">
          {scheduledReports.map((report) => (
            <div key={report.id} className="card flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                  <Clock className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="font-medium text-white">{report.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                    <span>{report.frequency}</span>
                    <span>•</span>
                    <span>Next: {report.nextRun}</span>
                  </div>
                </div>
              </div>
              <button className="btn-secondary">
                Configure
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Generate New Report */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Generate New Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="card-hover p-4 rounded-xl border border-dashed text-center" style={{ borderColor: 'var(--border)' }}>
            <FileText className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--primary)' }} />
            <p className="text-white font-medium">Analytics Report</p>
            <p className="text-sm text-gray-400">Traffic & conversions</p>
          </button>
          <button className="card-hover p-4 rounded-xl border border-dashed text-center" style={{ borderColor: 'var(--border)' }}>
            <FileText className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--accent)' }} />
            <p className="text-white font-medium">SEO Report</p>
            <p className="text-sm text-gray-400">Rankings & issues</p>
          </button>
          <button className="card-hover p-4 rounded-xl border border-dashed text-center" style={{ borderColor: 'var(--border)' }}>
            <FileText className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--warning)' }} />
            <p className="text-white font-medium">Custom Report</p>
            <p className="text-sm text-gray-400">Choose your metrics</p>
          </button>
        </div>
      </div>
    </div>
  );
}
