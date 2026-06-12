export const getAlertData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        activeAlerts: 4,
        highRiskZones: 2,
        latestSpike: "82 dB",
        responseStatus: "Monitoring",
        alerts: [
          {
            id: 1,
            title: "High risk zone detected",
            location: "Station A - Main Gate",
            severity: "High",
            noise: "82 dB",
            time: "10 min ago",
            message: "Noise level is above the safe threshold.",
          },
          {
            id: 2,
            title: "Sudden spike recorded",
            location: "Station C - Academic Block",
            severity: "High",
            noise: "79 dB",
            time: "18 min ago",
            message: "Sharp increase detected compared with the last reading.",
          },
          {
            id: 3,
            title: "Moderate noise warning",
            location: "Station B - Library Road",
            severity: "Medium",
            noise: "68 dB",
            time: "35 min ago",
            message: "Noise is elevated but still below the critical range.",
          },
          {
            id: 4,
            title: "Area back to normal",
            location: "Station D - Parking",
            severity: "Low",
            noise: "54 dB",
            time: "1 hr ago",
            message: "Noise levels have returned to the normal range.",
          },
        ],
      });
    }, 1000);
  });
};
