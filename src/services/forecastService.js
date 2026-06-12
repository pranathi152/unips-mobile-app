export const getForecastData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        averageNoise: "68 dB",
        peakNoise: "84 dB",
        riskWindow: "6 PM - 9 PM",
        confidence: "91%",
        safeThreshold: 75,
        trend: [
          { time: "8 AM", noise: 54 },
          { time: "11 AM", noise: 61 },
          { time: "2 PM", noise: 66 },
          { time: "5 PM", noise: 78 },
          { time: "8 PM", noise: 84 },
          { time: "11 PM", noise: 63 },
        ],
      });
    }, 1000);
  });
};
