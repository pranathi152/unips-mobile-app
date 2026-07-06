import api from "./api";

const fallbackForecastData = {
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
};

function pickValue(source, keys, fallback) {
  const value = keys.map((key) => source?.[key]).find((item) => item !== undefined && item !== null);
  return value ?? fallback;
}

function formatDecibels(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? `${Math.round(value)} dB` : String(value);
}

function formatPercent(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? `${Math.round(value)}%` : String(value);
}

function getList(payload, keys) {
  if (Array.isArray(payload)) return payload;
  return keys.map((key) => payload?.[key]).find(Array.isArray) ?? [];
}

function normalizeTrend(predictions) {
  const items = getList(predictions, ["predictions", "items", "results", "data"]);

  const trend = items
    .map((item, index) => ({
      time: String(
        pickValue(item, ["time", "label", "hour", "timestamp", "created_at"], `Period ${index + 1}`),
      ),
      noise: Number(
        pickValue(item, ["noise", "noise_db", "predictedNoise", "predicted_noise", "value"], 0),
      ),
    }))
    .filter((item) => Number.isFinite(item.noise) && item.noise > 0);

  return trend.length > 0 ? trend : fallbackForecastData.trend;
}

export const getForecastData = async () => {
  try {
    const [summaryResponse, predictionsResponse, analyticsResponse] = await Promise.all([
      api.get("/forecast/summary"),
      api.get("/forecast/predictions"),
      api.get("/forecast/analytics"),
    ]);

    const summary = summaryResponse.data ?? {};
    const analytics = analyticsResponse.data ?? {};
    const trend = normalizeTrend(predictionsResponse.data);
    const calculatedAverage = Math.round(
      trend.reduce((total, item) => total + item.noise, 0) / trend.length,
    );
    const calculatedPeak = Math.max(...trend.map((item) => item.noise));

    return {
      averageNoise: formatDecibels(
        pickValue(
          summary,
          ["averageNoise", "average_noise", "avgNoise", "avg_noise", "average_noise_db", "avg_noise_db"],
          pickValue(analytics, ["averageNoise", "average_noise", "avgNoise", "avg_noise"], calculatedAverage),
        ),
        fallbackForecastData.averageNoise,
      ),
      peakNoise: formatDecibels(
        pickValue(
          summary,
          ["peakNoise", "peak_noise", "peak_noise_db", "maxNoise", "max_noise"],
          pickValue(analytics, ["peakNoise", "peak_noise", "maxNoise", "max_noise"], calculatedPeak),
        ),
        fallbackForecastData.peakNoise,
      ),
      riskWindow: pickValue(
        summary,
        ["riskWindow", "risk_window", "peakWindow", "peak_window"],
        pickValue(analytics, ["riskWindow", "risk_window", "peakWindow", "peak_window"], fallbackForecastData.riskWindow),
      ),
      confidence: formatPercent(
        pickValue(summary, ["confidence", "modelConfidence", "model_confidence"], fallbackForecastData.confidence),
        fallbackForecastData.confidence,
      ),
      safeThreshold: Number(
        pickValue(summary, ["safeThreshold", "safe_threshold", "threshold", "safe_threshold_db"], fallbackForecastData.safeThreshold),
      ),
      trend,
    };
  } catch {
    return fallbackForecastData;
  }
};
