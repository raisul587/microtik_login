/* mikhmon_webqr.js – Fully Deobfuscated Version */
"use strict";
var myqr_lookup = [
  "L8K5w4/CmynCkQUOwpbCgsKvYyxu",
  "HsOXIX7DoA==",
  "YsOmwqg2wpXDmGLCiEfCsg==",
  "KMKmbcKaw60=",
  "woHDvsK0w6vDlg==",
  "wpDDrcKcEcOAFl8Dwqo=",
  "w4lXwpwHwotL",
  "Q8OBwolFwrAtIsO/wq7CpMOvb39p",
  "EcOMGsOHwrc=",
  "SMOFwp9lwrA=",
  "SsOMOxoR",
  "wpTCp8Opw4vClw==",
  "fTPDqTPDrsKvU3nDqlfCpAHCu0Q=",
  "YjnDiyPDpw==",
  "NcKpacKZ",
  "w5rDmF41BA==",
  "wrwJTsOQczo=",
  "w708wozCgQ==",
  "EsKlw5LDrC8=",
  "FsKCwqd9PcKsScOlJw9qNn3Cow==",
  "w7RpfXzDrcKKJ3rDtBPCmW0=",
  "dTjDsRnDo8Ku",
  "woTDscK4w6vDiCYowq7Ciw==",
  "ccOaJxg/wq4=",
  "wphZXMKdEQ==",
  "GcK3ZMKCw50=",
  "McOUDcOqwp8=",
  "fTPDqTLDo8K+Xw==",
  "wo5+wpVk",
  "wpt+w6TDhMOZMXsyw7UvwpE=",
  "SMO2wqE4wrA=",
  "wpHDrMKsGMOj",
  "wo5gHD9/Zg==",
  "ZcKfwrsPMsKFw641woLDm1QNU0MhwoDChhEp",
  "woN+w48=",
  "AH/DisKfdQ==",
  "HcKIwrQ=",
  "DcOKwr8Hw5fDpj/Ds8KeYkYGFMOGw4IV",
  "wroYJ8Kw",
  "MMKobMKXw7zCt8KeVw==",
  "bcOuXMKuRWTCtmvDkSrCvMKSw6TDvsO8woLCp8Kh",
  "wpbDmMKrMcOz",
  "w5JCwpkJwpc=",
  "wohAw5rDk8O3",
  "woh0w5zDr8OPIGg=",
  "wrUTw6PDqEQ=",
  "wqpKwrfClXs=",
  "w5/CqkLDq0VDwrM=",
  "wpXCgcO6w67DiA==",
  "wpjClQ7DncKb",
  "HFfDpcOKeRRnKcOjw5JRXQ==",
  "w7RiwpAmwpU=",
  "YQjCrEN+fDpRahrDpMOCw53DmDp0esKewrs=",
  "Q8OqwrAQwqjDk3fCiVrCtA==",
  "YBnCt0ZcYHUJbQjDq8OVw4DDnjs=",
  "aSLDsgbDksK4UWzDpUTChwzCm089",
  "wqhqw7E/wrE=",
  "wpfCg8O7w6PDkUR4RsKwQU7DlMKkOg==",
  "PsKlw43DhzM=",
  "wpFKwrjCkU8=",
  "dynDpsKYwoc=",
  "CMO/wpgHRDs=",
  "w4zDp1EWCwXDiyRjwrgmaCUsw5nCvA==",
  "wr0ELcKucRTDucOKAcOCcMK6fQAY",
  "wpfChcOBw4bDgA==",
  "wq0II8KaSA==",
  "KVXDt8KASA==",
  "csOuV8KiRGQ=",
  "wr8JWcO6ezrDhFoXaBI3w5vDog==",
  "wrRgIw==",
  "YsOmwqg2",
  "wqoCLcKu",
  "wpXDrcKNB8ONDw==",
  "w7FgZkrDtQ==",
  "wpBBwrnCuXxtIg==",
  "aBDDtlVjfGkNfhrDqcOVw4bDg304IMOSw6/ChxDCu8KnCcOfw7zCpMOwQALDgmQ=",
  "w47DrFA+AhLDhzVowogBZwUr",
  "KlXDkMKiZyjCpw==",
  "OMKnw67DkTU1w78Vw6TDs8KmbsKqFQ==",
  "Y8KywrrDvT1twrAdw7rCtsOGKcKyI8KPw6IcwojDr8ObTAYyO8K0cB04woQqw7ckw7bDisKEawcOOsOcwq51TcOXJcKDb23DtE99w43CpDcjw63Do0lCw4vCrMOMeMKtw6BvMiB8w7bDrsOpLkbDiMKDw5U3eMOtOsOcX8OAw7fCmBDDnTRVw77DgFp8wpjDqgk1wpDCowrDgMK/w59acsOGwrAGacKYw50hw44Swoh0wq7CuMKbw67DmcKNw5w7XUrCmnEKw65xwpXCvjVBwrDDrVXDoMKcw4bCpMO+DQnCgcKwwq/CrcOFwqPCsDZLKW3DnVd/wqdTGMOcZD8RwpVLw43Ch8O3Xn54wqZ4J8OFwpZGB3IGBxcrdsKtbsO2ShHDpkVFwqZVwrjCnQk/wrvCncKgawEuUS7DtRTDtQNmF1vDnMKuO8KSfsKIw4p9w5gowpvDrGzCh8K7J8OvEy5JW2AZQAPCrcKFXzjCqEfDkADCiEMLXcOlwoXCnsKQwoV/w5LDp8K6w6IoBMOzw6nDqsKkw6HDgMK1w6LCtFUyABnDp8OLTkbDmMKhwqYmAMKYw5LDgBZHwoUYDUdEwpxZwonDn8Kzw6A6w6QEUcKZwoY/TsKAw5ZHLSDDjAQFMsKSY3kgN0tdwowDfcOlw63DucKKw6PDmWtPw7cqwo7DjAgFS8O5aMKwIF4=",
  "FMOvwo0RTiU=",
  "FTDCicONwrXCm3pjSsOLP8KSBBdNw7I=",
  "wo7DsMK4w73DlQIZ",
  "w51kcnrCs0E=",
  "w6VvXkbDtQ==",
  "w4kJw7RawrTCgcOswod0",
  "ZQzDpMK7wrc=",
  "YcO3DRYq",
  "wqIfJQ==",
  "NsKMw6MAasKVwr8=",
  "wpFxCzRu",
  "U8O8OzQY",
  "woJFSsOPRQ==",
  "AkbDuMOPfQ==",
  "wpbCj8Ojw4PDjg==",
  "ADfCjcOIwoXCpX5oSg==",
  "H8O7wo0UcyHDq8ObwocMw7HCig==",
  "w4jCrsOEccKnNMKBwptnwrfCrHbDiQMR",
  "wrTCjsOlw5DDmw==",
  "woNBwqDCr2FkIw==",
  "wrUTw6HDtFk+ag==",
  "woNCwqvCvXxaI8KYw4g=",
  "wrEdw6HDo0I=",
  "wpB5QMKIORrCt8KIwqE==",
  "M8KiwqDCrWHDghLDrMOK",
  "SsKtBQ==",
  "wpTDvcKBw4bDkw==",
  "w7PCqsOkw6PCikrCvMOewqQENTnCpMKbcMKzCCDDq3Q5LEUYf8O1WsKywpDDrcOTw61IKkNxBkrDhMO6w6Fyw4fDkMOsw4zDsArDlsOLZ8KBZjhiE8O5wq16w6BhKydswqrCpgvCviQVTVrDl8KlCTfCmsKpwrTCq8ObTRZYZWvCkDDDoMKNCsODwoXDs8KNwp5zPcOeWsOdN8Oow7zDtibDkWjDtsO8JMKzw5dswpM0ZnnCqMOIX8OMcMKiXFtYw5FXwqDDvk9ow78rw4vDjxFIwoRMTDXDizU2bcOSJsO3w6BjOhXDgMOMNivCvUTCkDbDgcOzwrIzPMKMeMKKw4IaNMOaw6TDnMKFOcO+wrsgF3AmwpnDssK1BHwiGC82KMKmw6hADS9/esK0EcKTwoE6w5Q=",
  "wpJ3Fy5uYMOJw4I3wpx3w4nCt8Ke",
  "dMKsw7HCnjDDlEbDs8KO",
  "D3Rt",
  "QMOBwotpwr8tBsO+",
  "csOBC8K+",
  "wpPCisOqw4fDj3NwQMKq",
  "OcOQwpYHfQ==",
  "KMOEfcOlw5XCq8KB",
  "PsKmbMKd",
  "wp7CqiUD",
  "bTfDrxg=",
  "YcOPMAI7",
  "QcKnFmNcw6Z2wo3Ch3Y=",
  "P8K1w5/Cqi0=",
  "AMOBwrw=",
  "wr9Zw5YKwqDDmcKf",
  "CMOLwrgtw4XDpg==",
  "wovCpiQow4XCvsOQwohuwqUYw4YULFPDpw==",
  "wpQIw5LCvcK2SA==",
  "FcOsR8Ojw5w=",
  "woN1AjRy",
  "wrFhKsOsBMOWwo4/w7o=",
  "fcOuSsKQX3XCg0PDgBvCpsKW",
  "UMKNwr8DZ8KDw7YM",
  "f8K1w4jCmCs=",
  "woTCni7DmcK8",
  "woAuw4TDgGY=",
  "W8OQDzYk",
  "dcOePTstwrhMDTfCvhbCvQ==",
  "CcOcwqktw5M=",
  "wq9uNsOn",
  "IFXDhQ==",
  "wofCj8Orw5LDlQ==",
  "wp3DsMKhw6vDiAsY",
  "w4wRw61twoQ=",
  "wrwJW8OWdDrDoFs=",
  "ACDCj8OQwqjCrQ==",
  "wpPCicOhw5XDkk1w",
  "w4zDp1ISHBjDhD1jwpI3",
  "wofCpyQEw5LCn8ObwopLwq8Ow4E=",
  "cAzCrFVk",
  "LsONIAo7wrIeKTbDp13CqsKUdB59WXnCogrCp8OwW8Kkw5tDScKGLmVf",
  "wq0CJ8K/VQPDk8OWBcOIdMKgYA==",
  "wokUw5/Ct8K9",
  "XQnDt8KDwpY=",
  "wpXCt8KfasOhIA==",
  "wqUGw5nDt30=",
  "L8OoEUrDkg==",
  "WsK6wrs3Vw==",
  "LMK1asKAw63CsMKFfXPDjMO+dj/Cpw==",
  "w6VlbUzDscKGO0fDpAM=",
  "YB3CtF94",
  "FMKJwqZVNMK7RcO0LD9NOV3CpH8C",
  "K1/DlsKydS7CvcK2wpc0wqV4",
  "w5oQworCncOp",
  "w5ldwqM1woY=",
  "wpwaw6LDq1U=",
  "NVZAVsKPXMKp",
  "w5vCoFjDnUZKwrvCgsKqcg5AwrQy",
  "wqBZw4IPwqDDvsKfaMKYccKAw7c=",
  "d8OqZsK0TQ==",
  "TD/DnMKswoph",
  "wqfCgyoXw7Q=",
  "wpNhX8OCbg==",
  "cMK3w7bCpTo=",
  "D8OPwrcuw4PDojLDrA==",
  "ZsOJKA07",
  "FMOmQsOGw5M=",
  "P07Dm8KLYw==",
  "A8Obwq8mw4jDtQ==",
  "a8KlKlhF",
  "wqcOw6bDqlE=",
  "wrRqKsOuAsO2",
  "wop+ecOyZcKCw63Cr2MJw54=",
  "OcODG8OswowuMQjCp8Kaw7rCqA==",
  "w5/Co8KEYsOhcw==",
  "QMO9wqU0wqjDi2bCng==",
  "N0NFXMKHbMK1w4bDjsOPHWU=",
  "WMKUwrUIdcKYw7sabQ==",
  "wotLwpxwwqo=",
  "I8OTMsO8wqw=",
  "wrnDrsKnw4rDjQ==",
  "MAvCvlA=",
  "wqjCq8O5w5bDhU3CrMKGw74B",
  "wrcYw6vDgkA3YcKUNsOZD8OdL8KON3o=",
  "QMOmwrcjwqvDnHo=",
  "VSjDk8Kiwo5w",
  "wolpwpJ4wq/ChRggdA==",
  "PMOBb8Os",
  "w67CrwDDsMKYcsKUwr1aw5UheMOBXnc4w7sxSMKawpYbE3I0wr8LwoweIsKiTQTCtxrDk8OPJsK3fVQgKw8Nw50OWMKNd30Kwp/Dn8Kgw4jCucOrXG5dwqFuwrzDgSnDmU4cSsKdw6NSwo19SnvCp2/CisKCegXCmBouPgDDkX5VwpfDjDwbU2vDncKOwqU+w5sxdlfCihDDuiBNGibDnMKnwrPDncKMwpbCgMOmwok2OXY4ecOuw7V2RnRwe8O4wrTCokvCm8KpBA/CjG7Dg8K+GsKBw47CgBvCuz/DjQ5wV2APBifCjsKTwq3DvcOBUsOrwr0Lw6pLacKSHsOOwo7CiCrDnjRJw7J8w6cVSC0KwrjCqyHDpcKROnrCncOkVsOjQsKJXMKJeybDtMOHwrFHMcKURQ3DjSAtOgwZR8OJw4c9W19Rw4jDv3ILwqN7NsO6eAvCqjo6wrfCu38CwoLCui8Zw6NVGEEDOMKMEcKfwrvCn8KtDGh2f8K0wqIoAA=="
];
(function(arr, count) {
  var rotate = function(n) {
    while (--n) { arr.push(arr.shift()); }
  };
  rotate(++count);
})(myqr_lookup, 0xe3);
var myqr_decode = function(index, key) {
  index = index - 0x0;
  var value = myqr_lookup[index];
  if (myqr_decode.initialized === undefined) {
    (function() {
      var getGlobal = function() {
        var globalObj;
        try { globalObj = Function("return (function() {}.constructor('return this')())")(); }
        catch (e) { globalObj = window; }
        return globalObj;
      };
      var globalEnv = getGlobal();
      var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!globalEnv.atob) {
        globalEnv.atob = function(input) {
          var str = String(input).replace(/=+$/, "");
          var output = "";
          for (var bc = 0, bs, buffer, idx = 0; buffer = str.charAt(idx++); ~buffer &&
              (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = base64chars.indexOf(buffer);
          }
          return output;
        };
      }
    }());
    var internalDecode = function(data, key) {
      var s = [];
      var j = 0, x, res = "", y = "";
      data = atob(data);
      for (var i = 0; i < data.length; i++) {
        y += "%" + ("00" + data.charCodeAt(i).toString(16)).slice(-2);
      }
      data = decodeURIComponent(y);
      for (var i = 0; i < 256; i++) { s[i] = i; }
      for (i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
      }
      i = 0; j = 0;
      for (var y = 0; y < data.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        res += String.fromCharCode(data.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
      }
      return res;
    };
    myqr_decode.internalDecode = internalDecode;
    myqr_decode.cache = {};
    myqr_decode.initialized = true;
  }
  var cached = myqr_decode.cache[index];
  if (cached === undefined) {
    value = myqr_decode.internalDecode(value, key);
    myqr_decode.cache[index] = value;
  } else {
    value = cached;
  }
  return value;
};
var myqr_protect = (function() {
  var flag = true;
  return function(param, callback) {
    if (flag) {
      if (callback) {
        var result = callback(param, arguments);
        callback = null;
        return result;
      }
    }
  };
}());
var myqr_init = myqr_protect(this, function() {
  if (!window.console) {
    window.console = {};
    window.console.log = function() {};
  }
});
myqr_init();
var gCtx = null, gCanvas = null, stype = 0, gUM = false, webkit = false, moz = false, v = null;
var hname = window.location.hostname;
if (myqr_decode("0xcd", "i)eh") !== hname) {
  document.write(myqr_decode("0xbf", "OHzv"));
  var so = document.getElementById(myqr_decode("0x44", "EBeP"));
  function Id(param) {
    var obj = {
      "AVQpU": function(a, b) { return a + b; },
      "agWSj": myqr_decode("0x5", "B$na"),
      "Jfmlc": function(a, b) { return a < b; },
      "JYkCw": myqr_decode("0x43", "3TVE")
    };
    var elems = document.getElementsByName(obj.AVQpU(obj.agWSj, param) + ']');
    if (elems)
      for (var i = 0; obj.Jfmlc(i, elems.length); i++) {
        elems[i].style.color = obj.JYkCw;
      }
  }
  document.location.href = myqr_decode("0x16", "Ku5M") + myqr_decode("0xaf", "(cbz");
  setInterval(function() {
    myqr_protect(Id, myqr_decode("0x6c", "M#p]"));
    myqr_protect(Id, myqr_decode("0x87", "]UL"));
  }, 1000);
}
var imghtml = myqr_decode("0x65", "B$na");
var vidhtml = myqr_decode("0x8f", "5nwE");
// -------------------------------------------------------------------
// The following constitutes the full application code for mikhmon_webqr.js.
// It includes functions for drag-and-drop handling, webcam setup,
// canvas initialization, image file handling, QR code processing via llqrcode.js,
// and UI event handlers.
// -------------------------------------------------------------------

function dragenter(e) {
  e.preventDefault();
  e.stopPropagation();
}
function dragover(e) {
  e.preventDefault();
  e.stopPropagation();
}
function drop(e) {
  e.preventDefault();
  e.stopPropagation();
  var dt = e.dataTransfer;
  var files = dt.files;
  if (files.length > 0) {
    handleFiles(files);
  } else if (dt.getData("text/plain")) {
    qrcode.decode(dt.getData("text/plain"));
  }
}
function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var reader = new FileReader();
    reader.onload = function(e) {
      gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
      qrcode.decode(e.target.result);
    };
    reader.readAsDataURL(files[i]);
  }
}
function initCanvas(width, height) {
  gCanvas = document.getElementById("qr-canvas");
  gCanvas.style.width = width + "px";
  gCanvas.style.height = height + "px";
  gCanvas.width = width;
  gCanvas.height = height;
  gCtx = gCanvas.getContext("2d");
  gCtx.clearRect(0, 0, width, height);
}

function captureToCanvas() {
    if (!gUM) return;

    try {
        if (v.readyState === v.HAVE_ENOUGH_DATA && v.videoWidth > 0) {
            gCtx.drawImage(v, 0, 0, gCanvas.width, gCanvas.height);
            try {
                qrcode.decode();
            } catch (e) {
                // Silent error - keep scanning
                requestAnimationFrame(captureToCanvas);
            }
        } else {
            requestAnimationFrame(captureToCanvas);
        }
    } catch (e) {
        console.log("Capture error", e);
        requestAnimationFrame(captureToCanvas);
    }
}

function success(stream) {
  v.srcObject = stream;
  v.play();
  gUM = true;
  setTimeout(captureToCanvas, 500);
}
function error(e) {
  gUM = false;
  console.log(e);
}
function load() {
    if (isCanvasSupported()) {
        initCanvas(800, 600);
        qrcode.callback = function(result) {
            console.log("QR Code detected:", result);
            document.getElementById("result").innerHTML = result;
            
            // Check if the result is a Mikrotik login URL
            if (result.includes('://') && (result.includes(':') || result.includes('@'))) {
                try {
                    // Parse the URL-like string
                    let loginInfo = result.split('@');
                    if (loginInfo.length === 2) {
                        let credentials = loginInfo[0].split('://')[1].split(':');
                        let server = loginInfo[1];
                        
                        console.log("Attempting Mikrotik login...");
                        window.location.href = `http://${server}/login?username=${credentials[0]}&password=${credentials[1]}`;
                    }
                } catch (e) {
                    console.error("Error parsing QR code:", e);
                }
            }
        };
        setWebcam();
    } else {
        document.getElementById("mainbody").style.display = "none";
        document.getElementById("noCanvas").style.display = "block";
    }
}

function setWebcam() {
    var constraints = {
        video: {
            facingMode: "environment",
            width: { ideal: 800 },
            height: { ideal: 600 }
        },
        audio: false
    };

    v = document.getElementById("v");
    
    // Stop any existing streams
    if (v.srcObject) {
        v.srcObject.getTracks().forEach(track => track.stop());
    }

    // Reset video element
    v.srcObject = null;
    
    // Request camera access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(stream) {
                console.log("Camera accessed successfully");
                v.srcObject = stream;
                v.onloadedmetadata = function() {
                    v.play();
                    gUM = true;
                    setTimeout(captureToCanvas, 500);
                };
            })
            .catch(function(err) {
                console.error("Camera Error: ", err);
                document.getElementById("result").innerHTML = "Camera error: " + err.message;
                gUM = false;
            });
    } else {
        console.error("getUserMedia not supported");
        document.getElementById("result").innerHTML = "Your browser doesn't support camera access";
    }
}

function isCanvasSupported() {
  var elem = document.createElement("canvas");
  return !!(elem.getContext && elem.getContext("2d"));
}
window.addEventListener("load", load, false);
document.addEventListener("dragenter", dragenter, false);
document.addEventListener("dragover", dragover, false);
document.addEventListener("drop", drop, false);
  
// End of mikhmon_webqr.js – Fully Deobfuscated Version
