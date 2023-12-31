export default function AtrcGetJsonData(str) {
  try {
    const jsonDta = JSON.parse(str);
    if (['array', 'object'].includes(typeof jsonDta)) {
      return jsonDta;
    }
    return false;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=get-json-data.js.map