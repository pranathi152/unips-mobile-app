export const getDashboardData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        noise: "72 dB",
        hotspots: 12,
        stations: 45,
        risk: "High",
      });
  }, 1000);});};
