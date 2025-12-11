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
    <div className={`card-surface text-slate-800 dark:text-slate-100 p-4 sm:p-5 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{title}</div>
          <div className="text-2xl font-semibold leading-tight">{value}</div>
          <div className="text-xs text-slate-400 dark:text-slate-500">{subtitle ?? "vs previous period"}</div>
        </div>

        {delta && (
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-slate-50 dark:bg-slate-800 ${deltaColor}`}>
            {deltaType === "up" ? "▲" : "▼"} {delta}
          </div>
        )}
      </div>
    </div>
  );
}
