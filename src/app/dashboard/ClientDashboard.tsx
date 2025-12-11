"use client";

import React, { useMemo, useState } from "react";
import RangeSelector from "@/components/filters/RangeSelector";
import PieChart from "@/components/charts/PieChart";
import DonutChart from "@/components/charts/DonutChart";
import BarChart from "@/components/charts/BarChart";
import ChartCard from "@/components/ui/ChartCard";


function genSeries(length: number, base = 10) {
  
  return Array.from({ length }).map((_, i) => Math.round(base + Math.abs(Math.sin(i + length) * (base * 2))));
}

export default function ClientDashboard() {
  const [range, setRange] = useState<string>("30");

  
  const { barLabels, barData, pieData, donutData, pieLabels, donutLabels } = useMemo(() => {
    if (range === "7") {
      const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      return {
        barLabels: labels,
        barData: genSeries(7, 5),
        pieData: [30, 25, 45],
        donutData: [50, 30, 20],
        pieLabels: ["Red", "Blue", "Green"],
        donutLabels: ["A", "B", "C"],
      };
    }
    if (range === "30") {
      const labels = Array.from({ length: 6 }).map((_, i) => `W${i + 1}`);
      return {
        barLabels: labels,
        barData: genSeries(6, 12),
        pieData: [40, 30, 30],
        donutData: [45, 35, 20],
        pieLabels: ["Web", "Mobile", "Other"],
        donutLabels: ["New", "Returning", "Referral"],
      };
    }
    if (range === "90") {
      const labels = ["Jan", "Feb", "Mar"];
      return {
        barLabels: labels,
        barData: genSeries(3, 18),
        pieData: [34, 33, 33],
        donutData: [50, 25, 25],
        pieLabels: ["A", "B", "C"],
        donutLabels: ["X", "Y", "Z"],
      };
    }
   
    const labels = ["Q1", "Q2", "Q3", "Q4"];
    return {
      barLabels: labels,
      barData: genSeries(4, 20),
      pieData: [20, 30, 50],
      donutData: [40, 35, 25],
      pieLabels: ["North", "South", "West"],
      donutLabels: ["Returning", "New", "Churn"],
    };
  }, [range]);

  return (
    <div>      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">Analytics</h2>
          <RangeSelector value={range} onChange={setRange} />
        </div>
        <div className="text-sm text-slate-600">Showing last {range} days</div>
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ChartCard title="Pie Breakdown">
          <PieChart data={pieData} labels={pieLabels} />
        </ChartCard>

        <ChartCard title="Monthly Sales">
          <BarChart labels={barLabels} data={barData} />
        </ChartCard>

        <ChartCard title="User Segments">
          <DonutChart data={donutData} labels={donutLabels} />
        </ChartCard>

        <div className="md:col-span-2 lg:col-span-3">
          <ChartCard title="Another Bar (Wide)">
            <BarChart labels={barLabels} data={barData} />
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
