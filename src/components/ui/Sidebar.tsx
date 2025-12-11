import Link from "next/link";

export default function Sidebar() {
  const linkClass = "flex items-center gap-3 px-3 py-2  rounded-lg hover:bg-slate-100 dark:hover:bg-slate-100";
  return (
    <aside className="hidden md:block w-56 shrink-0">

      <div className="sticky top-4">
        {/* <div className="mb-4 px-3 text-sm font-semibold text-slate-600 dark:text-slate-300">App</div> */}

        <nav className="space-y-1 px-2">
          <Link href="/dashboard" className={linkClass}>            
            <span className="text-sm">Dashboard</span>
          </Link>

          <Link href="/" className={linkClass}>            
            <span className="text-sm">Home</span>
          </Link>

          
        </nav>
      </div>
    </aside>
  );
}




