type Row = {
  month: string;
  sales: number;
  change: string; 
};

type Props = {
  rows: Row[];
  className?: string;
};

export default function DataTable({ rows, className = "" }: Props) {
  return (
    // <div className={`bg-white dark:bg-slate-800 dark:text-slate-100 rounded-2xl shadow-sm p-4 ${className}`}>
    <div className={`bg-white dark:text-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 ${className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="py-2 pr-4 text-slate-600 dark:text-slate-300">Month</th>
              <th className="py-2 pr-4 text-slate-600 dark:text-slate-300">Sales</th>
              <th className="py-2 pr-4 text-slate-600 dark:text-slate-300">Change</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.month} className="border-t border-slate-100 dark:border-slate-700">
                <td className="py-3 pr-4">{r.month}</td>
                <td className="py-3 pr-4">{r.sales.toLocaleString()}</td>
                <td className={`py-3 pr-4 ${r.change.startsWith("-") ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
                  {r.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
