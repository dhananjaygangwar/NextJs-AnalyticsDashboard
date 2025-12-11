"use client";
import "../charts/chartconfig";
import { Bar } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

type Props = {
  labels?: string[];
  data?: number[];
};

export default function BarChart({
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  data = [12, 19, 8, 14, 25, 20],
}: Props) {
  const chartData: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "Sales",
        data,
        borderRadius: 6,
        barThickness: 28,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
