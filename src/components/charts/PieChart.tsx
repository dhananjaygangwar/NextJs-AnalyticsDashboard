"use client";
import "../charts/chartconfig"; 
import { Pie } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

type Props = {
  data?: number[];
  labels?: string[];
};

export default function PieChart({
  data = [30, 20, 25, 25],
  labels = ["Red", "Blue", "Green", "Yellow"],
}: Props) {
  const chartData: ChartData<"pie"> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ["#EF4444", "#3B82F6", "#10B981", "#F59E0B"],
        hoverOffset: 8,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      title: { display: false },
    },
  };

  return <Pie data={chartData} options={options} />;
}
