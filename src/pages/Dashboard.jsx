import { useEffect, useState } from "react";
import KPIcard from "../components/KPIcard";
import MapContainer from "../components/MapContainer";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // fake API call
    setTimeout(() => {
      setDashboardData({
        noise: "72 dB",
        hotspots: 12,
        stations: 45,
        risk: "High",
      });
    }, 1000);
  }, []);

  if (!dashboardData) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <h1>Loading dashboard...</h1>
      </div>
    );
  }

  /*api.get("/dashboard")
.then((res)=>{
setDashboardData(res.data)
})*/

  return (
    <div className="min-h-screen w-full bg-slate-100 px-4 py-6 sm:px-8 lg:px-12">
      <div className="w-full space-y-12">
        <header>
          <h1 className="text-4xl font-semibold text-slate-800">Dashboard</h1>
        </header>
      <br></br>
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-800">KPI Cards</h2>
          </div>
        
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <KPIcard title="Average Noise" value={dashboardData.noise} />
            <KPIcard title="Hotspots" value={dashboardData.hotspots} />
            <KPIcard title="Stations" value={dashboardData.stations} />
            <KPIcard title="Risk" value={dashboardData.risk} />
          </div>
          <br></br>
          {dashboardData.risk === "High" && (
            <div className="mt-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
              Warning: High noise levels predicted
            </div>
          )}
        </section>
          <br></br>
        <section>
          <div className="mb-4 bg-slate-50">
            <h2 className="text-xl font-semibold text-slate-800">Noise Map</h2>
          </div>

          <MapContainer />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
