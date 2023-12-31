export default function AtrcUniqueID(length = 7) {
  const a = new Uint32Array(3);
  let result = '';
  window.crypto.getRandomValues(a);
  const characters = (performance.now().toString(36) + Array.from(a).map(A => A.toString(36)).join('')).replace(/\./g, ''),
    charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return 'ab-' + result;
}
//# sourceMappingURL=unique-id.js.map