/*
 * Level
 * Copyright (c) 2016 Michele Reho, Tobias Haussener, Gérard Tyedmers
 * Licensed under the MPL License
 */

/*jslint devel: true, browser: true */ /*global  self  */

var CACHE_NAME = "level-cache";
var CACHE_VERSION = "v1.3";
var CACHE = CACHE_NAME + "-" + CACHE_VERSION;

var urlsToCache = [
    "index.html",
    "css/stylesheet.css",
    "img/apple-touch-icon-57x57.png",
    "img/apple-touch-icon-76x76.png",
    "img/apple-touch-icon-120x120.png",
    "img/apple-touch-icon-152x152.png",
    "img/apple-touch-icon-180x180.png",
    "img/apple-touch-icon-192x192.png",
    "img/background.png",
    "img/favicon.ico",
    "js/orientation.js"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE)
            .then(function (cache) {
                console.log("Opened cache");
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                var fetchRequest = event.request.clone();
                return fetch(fetchRequest).then(
                    function (response) {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== "basic") {
                            return response;
                        }
                        var responseToCache = response.clone();
                        caches.open(CACHE)
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    }
                );
            })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function (cacheName) {
                if (cacheName.indexOf(CACHE_NAME) === 0 && cacheName.indexOf(CACHE_VERSION) === -1) {
                    console.log(cacheName + " deleted");
                    return caches.delete(cacheName);
                }
            }));
        })
    );
});
