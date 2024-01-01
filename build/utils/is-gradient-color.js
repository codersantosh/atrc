export default function AtrcIsGradientColor(value) {
  if (!value) {
    return false;
  }
  return value.includes('linear-gradient') || value.includes('radial-gradient') || value.includes('conic-gradient');
}
export function AtrcIsLinearGradientColor(value) {
  if (!value) {
    return false;
  }
  return value.includes('linear-gradient');
}
//# sourceMappingURL=is-gradient-color.js.map