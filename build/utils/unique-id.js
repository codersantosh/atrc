export default function AtrcUniqueID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var a = new Uint32Array(3);
  var result = '';
  window.crypto.getRandomValues(a);
  var characters = (performance.now().toString(36) + Array.from(a).map(function (A) {
      return A.toString(36);
    }).join('')).replace(/\./g, ''),
    charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return 'ab-' + result;
}
//# sourceMappingURL=unique-id.js.map