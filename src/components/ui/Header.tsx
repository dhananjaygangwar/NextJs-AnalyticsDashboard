// import DarkToggle from "./DarkToggle";
// import MobileNav from "./MobileNav";


// export default function Header() {
//   return (
//     <header className="w-full flex items-center justify-between py-3 px-4 sm:px-6 bg-white/40 backdrop-blur-sm border-b">
//       {/* <header className="w-full flex items-center justify-between py-3 px-4 sm:px-6 bg-white/40 backdrop-blur-sm border-b dark:bg-slate-900/40"> */}

//       <div className="flex items-center gap-3">
//         <div className="text-lg font-bold">Dashboard</div>
//       </div>
      
//       {/* <DarkToggle />
//       <div className="text-sm text-slate-600">
//         Dhananjay — demo
//       </div> */}

//       <div className="flex items-center gap-3">
//         <MobileNav />           
//         <DarkToggle />          
//         <div className="text-sm text-slate-600 dark:text-slate-300">Dhananjay — demo</div>
//       </div>
            

//     </header>
//   );
// }


import DarkToggle from "./DarkToggle";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-3 px-4 sm:px-6 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border-b border-[color:var(--border)] sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <MobileNav />
        <div className="text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          Dashboard
        </div>
      </div>

      <div className="flex items-center gap-3">
        <DarkToggle />
        <div className="text-sm text-slate-600 dark:text-slate-300">Dhananjay — demo</div>
      </div>
    </header>
  );
}



