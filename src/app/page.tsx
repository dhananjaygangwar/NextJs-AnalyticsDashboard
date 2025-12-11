import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Welcome — open the Dashboard</h2>
        <Link href="/dashboard" className="px-4 py-2 rounded bg-indigo-600 text-white">
          View Dashboard
        </Link>
      </div>
    </main>
  );
}
