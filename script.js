//your JS code here. If required.
// JavaScript code (script.js)
window.addEventListener('DOMContentLoaded', function() {
  var browserInfoElement = document.getElementById('browser-info');

  var browserName = getBrowserName();
  var version = getBrowserVersion();

  var message = "You are using " + browserName + " version " + version;
  browserInfoElement.textContent = message;
});

function getBrowserName() {
  var userAgent = navigator.userAgent;
  var browserName = "";

  if (userAgent.indexOf("Firefox") !== -1) {
    browserName = "Firefox";
  } else if (userAgent.indexOf("Chrome") !== -1) {
    browserName = "Chrome";
  } else if (userAgent.indexOf("Safari") !== -1) {
    browserName = "Safari";
  } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
    browserName = "Opera";
  } else if (userAgent.indexOf("Edge") !== -1) {
    browserName = "Edge";
  } else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) {
    browserName = "Internet Explorer";
  } else {
    browserName = "Unknown";
  }

  return browserName;
}

function getBrowserVersion() {
  var userAgent = navigator.userAgent;
  var version = "";

  if (userAgent.indexOf("Firefox") !== -1) {
    version = userAgent.substring(userAgent.indexOf("Firefox") + 8);
  } else if (userAgent.indexOf("Chrome") !== -1) {
    version = userAgent.substring(userAgent.indexOf("Chrome") + 7);
  } else if (userAgent.indexOf("Safari") !== -1) {
    version = userAgent.substring(userAgent.indexOf("Version") + 8);
  } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
    version = userAgent.substring(userAgent.indexOf("OPR") + 4) || userAgent.substring(userAgent.indexOf("Opera") + 6);
  } else if (userAgent.indexOf("Edge") !== -1) {
    version = userAgent.substring(userAgent.indexOf("Edge") + 5);
  } else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) {
    version = userAgent.substring(userAgent.indexOf("MSIE") + 5) || userAgent.substring(userAgent.indexOf("rv") + 3);
  } else {
    version = "Unknown";
  }

  return version;
}

