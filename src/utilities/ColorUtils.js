/**
 * Collection of several functions to manipulate color in
 * keyboard maker web app.
 */

const RGBToHSL = (r, g, b) => {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
};

const GetColor = (rgbColor) => {
  let color = RGBToHSL(rgbColor.r, rgbColor.g, rgbColor.b);

  return color;
};

const AdjustHSLColor = (color, extraHue, extraSaturation, extraLightness) => {
  let colorOutput =
    "hsl(" +
    (color[0] + extraHue) +
    ", " +
    (color[1] + extraSaturation) +
    "%, " +
    (color[2] + extraLightness) +
    "%)";

  return colorOutput;
};

const RGBColorToString = (color) => {
  return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
};

const CalculateTextColor = (color) => {
  if (GetColor(color)[2] > 33) {
    return "black";
  } else {
    return "white";
  }
};

export { GetColor, AdjustHSLColor, RGBColorToString, CalculateTextColor };
