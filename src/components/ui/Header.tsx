import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">          
          <div className="flex items-center gap-3">
            <MobileNav />

            <div className="text-lg font-semibold leading-none">
              Dashboard
            </div>
          </div>         
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-600">
              Dhananjay — demo
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
