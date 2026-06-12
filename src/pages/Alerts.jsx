import { useEffect, useState } from "react";
import KPIcard from "../components/KPIcard";
import Loading from "../components/Loading";
import { getAlertData } from "../services/alertService";

const severityStyles = {
  High: "border-red-300 bg-red-50 text-red-700",
  Medium: "border-amber-300 bg-amber-50 text-amber-700",
  Low: "border-emerald-300 bg-emerald-50 text-emerald-700",
};

function Alerts() {
  const [alertData, setAlertData] = useState(null);

  useEffect(() => {
    getAlertData().then((data) => {
      setAlertData(data);
    });
  }, []);

  if (!alertData) {
    return <Loading title="Alerts" message="Loading alerts..." />;
  }

  return (
    <div className="min-h-screen w-full bg-slate-100 px-4 py-6 sm:px-8 lg:px-12">
      <div className="w-full space-y-12">
        <header>
          <h1 className="text-4xl font-semibold text-slate-800">Alerts</h1>
        </header>
        <br/>
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-800">
              Alert Summary
            </h2>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <KPIcard title="Active Alerts" value={alertData.activeAlerts} />
            <KPIcard title="High Risk Zones" value={alertData.highRiskZones} />
            <KPIcard title="Latest Spike" value={alertData.latestSpike} />
            <KPIcard title="Status" value={alertData.responseStatus} />
          </div>
        </section>
        <br></br>
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-800">
              Recent Alerts
            </h2>
          </div>

          <div className="grid gap-4">
            {alertData.alerts.map((alert) => (
              <article
                key={alert.id}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {alert.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {alert.location}
                    </p>
                    <p className="mt-3 text-slate-600">{alert.message}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span
                      className={`rounded-md border px-3 py-1 text-sm font-medium ${
                        severityStyles[alert.severity]
                      }`}
                    >
                      {alert.severity}
                    </span>
                    <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                      {alert.noise}
                    </span>
                    <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-500">
                      {alert.time}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Alerts;
