"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block px-4 py-3 text-lg font-medium hover:bg-slate-200 rounded-md";
  
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
 
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>      
      <button
        onClick={() => setOpen(true)}
        className="md:hidden px-2 py-2 rounded-md hover:bg-slate-100"
        aria-label="Open menu"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6h14M3 10h14M3 14h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {open && (
        <div className="fixed inset-0 z-50 bg-white animate-fadeIn">
          
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="text-lg font-semibold">Menu</div>
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1 rounded-md hover:bg-slate-200"
              aria-label="Close menu"
            >
              ✖
            </button>
          </div>
          
          <nav className="mt-4 space-y-2">
            <Link
              href="/dashboard"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>

            <Link
              href="/"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Reports
            </Link>
           
          </nav>
        </div>
      )}
    </>
  );
}
