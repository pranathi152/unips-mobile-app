import { useEffect, useState } from "react";
import KPIcard from "../components/KPIcard";
import Loading from "../components/Loading";
import MapContainer from "../components/MapContainer";
import { getDashboardData } from "../services/dashboardService";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    getDashboardData().then((data) => {
      setDashboardData(data);
    });
  }, []);

  if (!dashboardData) {
    return <Loading title="Dashboard" message="Loading dashboard..." />;
  }

  return (
    <div className="min-h-screen w-full bg-slate-100 px-4 py-6 sm:px-8 lg:px-12">
      <div className="w-full space-y-12">
        <header>
          <h1 className="text-4xl font-semibold text-slate-800">Dashboard</h1>
        </header>
        <br/>
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

          {dashboardData.risk === "High" && (
            <div className="mt-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
              Warning: High noise levels predicted
            </div>
          )}
        </section>
        <br/>
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-800">Noise Map</h2>
          </div>

          <MapContainer />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
