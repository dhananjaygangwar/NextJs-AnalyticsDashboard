import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// export const metadata = {
//   title: "Dashboard",
// };

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-(--bg)">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-6 py-6">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>

    </div>
  );
}
