type Props = {
  title: string;
  value: string | number;
  delta?: string; // 
  deltaType?: "up" | "down"; 
  className?: string;
  subtitle?: string;
};

export default function KpiCard({ title, value, delta, deltaType = "up", className = "", subtitle }: Props) {
  const deltaColor = deltaType === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400";

  return (
    // <div className={`bg-white dark:bg-slate-800 dark:text-slate-100 rounded-2xl shadow-sm p-4 ${className}`}>
    <div className={`bg-white text-slate-800 rounded-2xl shadow-sm p-4 ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-slate-500 dark:text-slate-300">{title}</div>
          <div className="mt-1 text-2xl font-semibold">{value}</div>
        </div>

        {delta && (
          <div className="text-right">
            <div className={`text-sm font-medium ${deltaColor}`}>{delta}</div>
            <div className="text-xs text-slate-400 dark:text-slate-500">{subtitle ?? "vs prev"}</div>
          </div>
        )}
      </div>
    </div>
  );
}
