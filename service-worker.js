"use strict";var precacheConfig=[["/Clicky-Game-React/index.html","9476be3f82844348497ec57e6ebe212f"],["/Clicky-Game-React/static/css/main.c039ea98.css","1540db2164ad429252ad5e23d8202fc3"],["/Clicky-Game-React/static/js/main.8e12b57c.js","df344422aa24af5776b955cf75557fe2"],["/Clicky-Game-React/static/media/ganondorf.90a606fb.jpg","90a606fb2f2b924387fed57ce977e7d5"],["/Clicky-Game-React/static/media/happymasksalesmanresized.d4779d7f.jpg","d4779d7f1e642adc10c38b0a373c4ca3"],["/Clicky-Game-React/static/media/linkresized.b7e1709e.jpg","b7e1709ee96211c38f1ab5602558149d"],["/Clicky-Game-React/static/media/malonresized.5ab9ade8.jpg","5ab9ade8316a6dad172abbb9f4611be6"],["/Clicky-Game-React/static/media/midnaresized.7d66207a.jpg","7d66207a29cf3621933c6cb7ddcaa8b7"],["/Clicky-Game-React/static/media/owl.94e4fac1.jpg","94e4fac1878d44a11fb3c5381ef39216"],["/Clicky-Game-React/static/media/princesszeldaresized.c600b1f3.jpg","c600b1f3d64eded7f5994af4200582e3"],["/Clicky-Game-React/static/media/sariaresized.1e81ec68.jpg","1e81ec68550236f18c41b143b2d9b207"],["/Clicky-Game-React/static/media/shiekresized.43701c4f.jpg","43701c4f3328a6f33db171a0f3f49639"],["/Clicky-Game-React/static/media/skullkidresized.72ff7b47.jpg","72ff7b47bb28dea6588f1bae008ed9d6"],["/Clicky-Game-React/static/media/tingleresized.507c161d.jpg","507c161d8a08a29acf9209cff1ea95cd"],["/Clicky-Game-React/static/media/zantresized.a4a2de9b.jpg","a4a2de9bc1884cc2707fbb261d16fc9d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/Clicky-Game-React/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});