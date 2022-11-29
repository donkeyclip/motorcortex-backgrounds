export const BgOpenerValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  easing: { optional: false, type: "string" },
  exitStart: { optional: false, type: "number" },
};

export const TwoSidesRevealValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  easing: { optional: false, type: "string" },
};

export const RowRevealValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  easing: { optional: false, type: "string" },
  exitStart: { optional: false, type: "number" },
  bgOut: { optional: false, type: "boolean" },
};

export const ColumnRevealValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  easing: { optional: false, type: "string" },
  exitStart: { optional: false, type: "number" },
  bgOut: { optional: false, type: "boolean" },
};

export const GridValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  columns: { optional: false, type: "number" },
  rows: { optional: false, type: "number" },
};

export const ThreeSidesRevealValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  overlayColor: { optional: false, type: "color" },
  grid: { optional: false, type: "boolean" },
  gridDuration: { optional: true, type: "number" },
  gridColor: { optional: false, type: "color" },
  columns: { optional: false, type: "number" },
  rows: { optional: false, type: "number" },
};
export const HexagonCircleValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  colors: { optional: false, type: "array", items: { type: "color" } },
  size: { optional: false, type: "number" },
};
export const FloatingBubblesValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  backgroundColor: { optional: false, type: "color" },
  size: { optional: false, type: "number" },
  bubbleCount: { optional: false, type: "number" },
  maxBubbleRadius: { optional: false, type: "number" },
};
export const WaveValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  colors: { optional: false, type: "array", items: { type: "color" } },
  backgroundColor: { optional: false, type: "color" },
};
export const GradientLinesValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  hue: { optional: true, type: "number" },
  lineWidth: { optional: true, type: "number" },
  lineLength: { optional: true, type: "number" },
  lineNumber: { optional: true, type: "number" },
  opacity: { optional: true, type: "number" },
};
export const RipplesValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  circleSize: { optional: true, type: "number" },
  backgroundColor: { optional: false, type: "color" },
  circleColor: { optional: false, type: "color" },
};
