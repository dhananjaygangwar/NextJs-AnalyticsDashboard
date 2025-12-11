"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

const ranges = [
  { key: "7", label: "7d" },
  { key: "30", label: "30d" },
  { key: "90", label: "90d" },
  { key: "365", label: "1y" },
];

export default function RangeSelector({ value, onChange }: Props) {
  return (
    <div className="inline-flex rounded-md bg-white border shadow-sm">
      {ranges.map((r) => (
        <button
          key={r.key}
          onClick={() => onChange(r.key)}
          className={`px-3 py-1 text-sm font-medium ${
            value === r.key ? "bg-slate-100" : "hover:bg-slate-50"
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
