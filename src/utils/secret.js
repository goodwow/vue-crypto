const CryptoJS = require('crypto-js');

//加密
function Encrypt(word, keyword) {
  var key = CryptoJS.enc.Utf8.parse(keyword);

  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

//解密
function Decrypt(word, keyword) {
  var key = CryptoJS.enc.Utf8.parse(keyword);

  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

export default {
  Decrypt,
  Encrypt
}
