export type GradientType = "dimigo" | "skyline" | "mango" | "bluelagoo";

const getGradientColors = (gradientType: GradientType = "dimigo"): string[] => {
  const defaultGradient = ["#ec008c", "#fc6767"]; // dimigo
  switch (gradientType) {
    case "dimigo":
      return defaultGradient;
    case "skyline":
      return ["#1488CC", "#2B32B2"];
    case "mango":
      return ["#ffe259", "#ffa751"];
    case "bluelagoo":
      return ["#0052D4", "#4364F7", "#6FB1FC"];
    default:
      return defaultGradient;
  }
};

export default getGradientColors;
