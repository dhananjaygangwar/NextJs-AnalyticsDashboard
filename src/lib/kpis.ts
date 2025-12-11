export type KPI = {
  title: string;
  value: string | number;
  delta?: string;
  deltaType?: "up" | "down";
  subtitle?: string;
};

//just some sample data
export const sampleKpis: KPI[] = [
  { title: "Total Users", 
    value: "12,345", 
    delta: "+4.8%",
    deltaType: "up", 
    subtitle: "30d" },
  { title: "Active Today", 
    value: "1,234", 
    delta: "-1.2%", 
    deltaType: "down", 
    subtitle: "24h" },
  { title: "Monthly Revenue", 
    value: "₹12,345", 
    delta: "+8.2%", 
    deltaType: "up", 
    subtitle: "30d" },
];
