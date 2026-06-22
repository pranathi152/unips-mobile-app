export const getAnalyticsReports = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "executive-overview",
          title: "Executive Overview",
          description: "Combined operational health, noise risk, and station coverage.",
          updatedAt: "Today, 9:30 AM",
          status: "Awaiting embed token",
          metrics: [
            { label: "Average Noise", value: "68 dB", width: 68 },
            { label: "Active Stations", value: "45", width: 82 },
            { label: "High Risk Zones", value: "2", width: 38 },
          ],
        },
        {
          id: "noise-analytics",
          title: "Noise Analytics",
          description: "Long-term noise patterns and zone-level comparisons.",
          updatedAt: "Today, 9:15 AM",
          status: "Awaiting embed token",
          metrics: [
            { label: "Peak Noise", value: "84 dB", width: 84 },
            { label: "Weekly Average", value: "66 dB", width: 66 },
            { label: "Safe Periods", value: "71%", width: 71 },
          ],
        },
        {
          id: "forecast-performance",
          title: "Forecast Performance",
          description: "Prediction accuracy, confidence, and model performance.",
          updatedAt: "Yesterday, 6:00 PM",
          status: "Awaiting embed token",
          metrics: [
            { label: "Confidence", value: "91%", width: 91 },
            { label: "Accuracy", value: "88%", width: 88 },
            { label: "Prediction Window", value: "24 hrs", width: 58 },
          ],
        },
        {
          id: "alert-analysis",
          title: "Alert Analysis",
          description: "Alert frequency, severity distribution, and response status.",
          updatedAt: "Today, 9:40 AM",
          status: "Awaiting embed token",
          metrics: [
            { label: "Active Alerts", value: "4", width: 45 },
            { label: "Resolved Today", value: "12", width: 76 },
            { label: "High Severity", value: "2", width: 35 },
          ],
        },
      ]);
    }, 1000);
  });
};

// Replace the mock service above with:
// api.get("/powerbi/reports") and api.get(`/powerbi/embed-config/${reportId}`)
// when the backend embed-token endpoint is available.
