"use client";
import "../charts/chartconfig";
import { Doughnut } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

type Props = {
  data?: number[];
  labels?: string[];
};

export default function DonutChart({
  data = [45, 35, 20],
  labels = ["A", "B", "C"],
}: Props) {
  const chartData: ChartData<"doughnut"> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ["#6366F1", "#06B6D4", "#F97316"],
        // cutout: "60%", 
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
    },
  };

  return <Doughnut data={chartData} options={options} />;
}
