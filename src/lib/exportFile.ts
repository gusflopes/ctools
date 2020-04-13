export function base64ToArrayBuffer(base64: any) {
  var binaryString = window.atob(base64);
  var binaryLen = binaryString.length;
  var bytes = new Uint8Array(binaryLen);
  for (var i = 0; i < binaryLen; i++) {
     var ascii = binaryString.charCodeAt(i);
     bytes[i] = ascii;
  }
  return bytes;
}

export function saveByteArray(reportName: any, byte: any) {
var blob = new Blob([byte], {type: "text/plain"});
var link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
var fileName = reportName;
link.download = fileName;
link.click();
};