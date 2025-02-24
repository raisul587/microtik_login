"use strict";

// Module loader function
(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }

        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        module.l = true;
        return module.exports;
    }

    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, { enumerable: true, get: getter });
        }
    };

    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports, "__esModule", { value: true });
    };

    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string") {
            for (var key in value) __webpack_require__.d(ns, key, function(k) { return value[k]; }.bind(null, key));
        }
        return ns;
    };

    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ?
            function() { return module.default; } :
            function() { return module; };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };

    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };

    __webpack_require__.p = "";

    __webpack_require__(100);
})({

    // Service Worker Initialization
    100: function(module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__.r(exports);
        var arcConfig = __webpack_require__(3);

        if (typeof ServiceWorkerGlobalScope !== "undefined") {
            var swScript = "https://arc.io" + arcConfig.coreScript;
            importScripts(swScript);
        } else if (typeof SharedWorkerGlobalScope !== "undefined") {
            var sharedWorkerScript = "https://arc.io" + arcConfig.sharedWorker;
            importScripts(sharedWorkerScript);
        } else if (typeof DedicatedWorkerGlobalScope !== "undefined") {
            var dedicatedWorkerScript = "https://arc.io" + arcConfig.dedicatedWorker;
            importScripts(dedicatedWorkerScript);
        }
    },

    // Arc.io Configuration and Constants
    3: function(module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__.d(exports, "assetTypes", function() { return assetTypes; });
        __webpack_require__.d(exports, "messages", function() { return messages; });
        __webpack_require__.d(exports, "serviceWorker", function() { return serviceWorker; });
        __webpack_require__.d(exports, "sharedWorker", function() { return sharedWorker; });
        __webpack_require__.d(exports, "dedicatedWorker", function() { return dedicatedWorker; });
        __webpack_require__.d(exports, "coreScript", function() { return coreScript; });
        __webpack_require__.d(exports, "database", function() { return database; });
        __webpack_require__.d(exports, "keyValueStore", function() { return keyValueStore; });
        __webpack_require__.d(exports, "cacheLimit", function() { return cacheLimit; });
        __webpack_require__.d(exports, "propertySessionApi", function() { return propertySessionApi; });
        __webpack_require__.d(exports, "mailboxApi", function() { return mailboxApi; });

        var assetTypes = {
            images: ["bmp", "jpeg", "jpg", "ttf", "pict", "svg", "webp", "eps", "svgz", "gif", "png", "ico", "tif", "tiff", "bpg"],
            video: ["mp4", "3gp", "webm", "mkv", "flv", "f4v", "f4p", "f4bogv", "drc", "avi", "mov", "qt", "wmv", "amv", "mpg", "mp2", "mpeg", "mpe", "m2v", "m4v", "3g2", "gifv", "mpv"],
            audio: ["mid", "midi", "aac", "aiff", "flac", "m4a", "m4p", "mp3", "ogg", "oga", "mogg", "opus", "ra", "rm", "wav", "webm", "f4a", "pat"],
            documents: ["pdf", "ps", "doc", "docx", "ppt", "pptx", "xls", "otf", "xlsx"],
            other: ["swf"]
        };

        var arcNamespace = "arc:";

        var messages = {
            COMLINK_INIT: `${arcNamespace}comlink:init`,
            NODE_ID: `${arcNamespace}:nodeId`,
            CDN_CONFIG: `${arcNamespace}cdn:config`,
            P2P_CLIENT_READY: `${arcNamespace}cdn:ready`,
            STORED_FIDS: `${arcNamespace}cdn:storedFids`,
            SW_HEALTH_CHECK: `${arcNamespace}cdn:healthCheck`,
            WIDGET_CONFIG: `${arcNamespace}widget:config`,
            WIDGET_INIT: `${arcNamespace}widget:init`,
            WIDGET_UI_LOAD: `${arcNamespace}widget:load`,
            BROKER_LOAD: `${arcNamespace}broker:load`,
            RENDER_FILE: `${arcNamespace}inlay:renderFile`,
            FILE_RENDERED: `${arcNamespace}inlay:fileRendered`
        };

        var serviceWorker = "serviceWorker";
        var sharedWorker = "/shared-worker.js";
        var dedicatedWorker = "/dedicated-worker.js";
        var coreScript = "/arc-sw-core.js";
        var database = "arc-db";
        var keyValueStore = "key-val-store";
        var cacheLimit = 131072;
        var propertySessionApi = "https://overmind.arc.io/api/propertySession";
        var mailboxApi = "https://warden.arc.io/mailbox/propertySession";
    }
});
