import React, { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function ChartCard({ title, children, className = "" }: Props) {
  return (
    //<div className={`bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-300 rounded-2xl shadow-sm p-4 sm:p-6 ${className}`}>
    <div className={`bg-white rounded-2xl dark:text-slate-500 shadow-sm p-4 sm:p-6 ${className}`}>

      {title && <h3 className="text-sm sm:text-base font-medium mb-3">{title}</h3>}
      <div className="w-full h-56 sm:h-72">{children}</div>
    </div>
  );
}
