export function getApiHost() {
  var host, port;
  [host, port]= window.location.host.split(":");
  port = 3001;

  return window.location.protocol + "//" + host + ":" + port;
}
