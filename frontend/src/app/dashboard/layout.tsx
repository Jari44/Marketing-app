"use client";

import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-horizontal-mesh min-h-screen relative">
      {/* Horizontal gradient orbs - purple/violet only */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)' }}></div>
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(139, 92, 246, 0.25) 0%, transparent 50%)' }}></div>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-[260px] p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
