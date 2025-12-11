// import Header from "@/components/ui/Header";
// import ChartCard from "@/components/ui/ChartCard";
// import PieChart from "@/components/charts/PieChart";
// import DonutChart from "@/components/charts/DonutChart";
// import BarChart from "@/components/charts/BarChart";
import KpiCard from "@/components/ui/KpiCard";
import { sampleKpis } from "@/lib/kpis";
// import DataTable from "@/components/ui/DataTable";
// import { sampleTableRows } from "@/lib/tableData";
import ClientDashboard from "./ClientDashboard";


export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold">Analytics</h1>
          {/* <p className="text-sm text-slate-600 mt-1">Basic demo dashboard with responsive charts.</p> */}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {sampleKpis.map((k) => (
            <KpiCard
              key={k.title}
              title={k.title}
              value={k.value}
              delta={k.delta}
              deltaType={k.deltaType}
              subtitle={k.subtitle}
            />
          ))}
        </div>       
        
        <ClientDashboard />
      </main>
    </div>
  );
}



{/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ChartCard title="Pie Chart">
            <PieChart />
          </ChartCard>

          

          <ChartCard title="Donut Chart">
            <DonutChart />
          </ChartCard>

          
          <div className="md:col-span-2 lg:col-span-3">
            <ChartCard title="Bar Chart">
              <BarChart
                labels={["Jan","Feb","Mar","April","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                data={[18, 22, 15, 28, 30, 26, 18, 22, 15, 28, 30, 26]}
              />
            </ChartCard>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium mb-3">Raw data</h2>
            <DataTable rows={sampleTableRows} />
          </div>
          
        </div> */}