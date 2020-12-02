'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "94fe09996d8cd1367c4452e8b14255d0",
"index.html": "0ec8454871598b5b2c51a68dbcf0ddaf",
"/": "0ec8454871598b5b2c51a68dbcf0ddaf",
"main.dart.js": "e2c72920316e767a71b2667608d746d4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dbb6c8a9f3e5640636734b3d6245cb8d",
"assets/plus.png": "04e70f5e8bafaab18e41934a1cdf1bee",
"assets/add_image.png": "2b5b359e2614a79519c3588210fb8dec",
"assets/add_white.png": "c8148335bbc68c06950fa9d2f1df5477",
"assets/add_map.png": "7acc1cd36f5b124798e193b710924a38",
"assets/checkbox_off.png": "02e453cd31ce6143d6f4d7f9d0700786",
"assets/bottom_arrow.png": "35e1680fdf8ca4df0aecc1f7c1b43edb",
"assets/search_close.png": "1c54809d71b089efc0ebc5ab92d8d567",
"assets/plane.png": "cf7df518530f488a390732706186c7ab",
"assets/indicator.png": "3c8a073373d7cad838f9add94540294f",
"assets/instagram.png": "083662d6a826194ee32fb8c7347938f0",
"assets/drag_and_drop.png": "329059d882fc4e6d160bf3b33cfa624b",
"assets/post_grid_placeholder.png": "d583db69eaa02bcad62fb07c37c38104",
"assets/vk.png": "b0161ffaab11a3aa2e14718904f197bc",
"assets/right_arrow.png": "3e342d3151e68c680a5b8c3da44724c1",
"assets/clear.png": "631cb5e4381f276bae1de384aae13da4",
"assets/checkbox_on.png": "e0542f5f87ccdbb51bd1d1718795e644",
"assets/cancel.png": "498dc812ed1eeeeb99c8eb1c31558637",
"assets/profile_on.png": "af9327a260fe4618942afd4f1d96a096",
"assets/AssetManifest.json": "fef5f963f38a9cc97ecf61a90ce07e1a",
"assets/home_on.png": "939bd43d7c572ace549530d9789a08ae",
"assets/profile_off.png": "187d83a0b39e660e710d9b7574a18983",
"assets/add_photo.png": "9d7df1d8e1f3234735b095c900b20440",
"assets/NOTICES": "8420e4728e2534a9eb34e888550c23eb",
"assets/search.png": "481fb4b9e78a969f79fa13e3445db758",
"assets/big_marker.png": "db44ed1c81abb6d91913de04d13c0d7a",
"assets/apple.png": "f4a94e1c1abcb71e555400c2d77fdff6",
"assets/add_black.png": "5e0d3c5aca8559e2c3fb80c1e1258956",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/cross.png": "1c54809d71b089efc0ebc5ab92d8d567",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/gohere_common/assets/1.5x/logo.png": "983d878bcff398b8576911c2f7114d0c",
"assets/packages/gohere_common/assets/2.0x/logo.png": "2226a67704b7a57dbaeb80df49412dc2",
"assets/packages/gohere_common/assets/3.0x/logo.png": "430aae184775b742aa200f3417e735ca",
"assets/packages/gohere_common/assets/logo.png": "46e625f96d766b57a0a11852e2e3222b",
"assets/share.png": "11a577e158a3203c5f8372fa58040496",
"assets/my_location.png": "05ff6687b46e84d546a1a63c88c6f037",
"assets/home_off.png": "edce8cc831fc941a83338dac13be6b9c",
"assets/edit.png": "c84597c4cee407885152fe746ee6d769",
"assets/small_marker.png": "366b1772a28aa9ea0e699bc7936fb387",
"assets/heart_small.png": "0e2ceb1e1b72873deb4974892ff11228",
"assets/more.png": "a112c2e95a3c2443432310f2c45b457f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/google.png": "564ef2b22e5ce3c2fe22b573f3847436",
"assets/assets/search.svg": "284eca8e1820d57f66dc433b061ab89b",
"assets/assets/add_photo.svg": "8e8c389de9ff3124c5ff33a8dc225202",
"assets/assets/avatar_placeholder.png": "02cccaa82e109da4b8a169c42475a3e6",
"assets/assets/profile_off.svg": "ed771f20a85fb27ae55f014c85351ec8",
"assets/assets/home_on.svg": "43f8fd7a0671facea8b62146d5d0f129",
"assets/assets/profile_on.svg": "85a41e784ceea3c2fbb9942e0942b6e9",
"assets/assets/cancel.svg": "321c0e2fa98f11dd76fcf1581bd45a5d",
"assets/assets/checkbox_on.svg": "d69f3011922cdb28032add74357bd01c",
"assets/assets/clear.svg": "086477c9bbbea4a694bd851a2140b32e",
"assets/assets/right_arrow.svg": "2949028fdaadfb0e64b5fdb7fd79998a",
"assets/assets/vk.svg": "6c532a8e5efde2c7e30b84e356ae2856",
"assets/assets/2.0x/avatar_placeholder.png": "12ba5719b0c861ebc41a8da4c2a5fe5b",
"assets/assets/2.0x/feedback.png": "620647ae5a1c02d5ee0b3046a48ac58e",
"assets/assets/2.0x/likes_background.jpg": "19f0633e223a5e8ec956f54ba9f3d8be",
"assets/assets/2.0x/end_of_feed.png": "4c9d9e881b9eaeb12b6e14eb2382b940",
"assets/assets/2.0x/subscriptions_background.jpg": "0a80872b8e84b8296201bc5e2fbeee67",
"assets/assets/2.0x/update_app.png": "d38a755481b782fffaf9cc45a24d365b",
"assets/assets/drag_and_drop.svg": "8efc8d8fffa637773d66bca2676a0008",
"assets/assets/post_grid_placeholder.svg": "6479376e9a9a02cb24e6b7b5b66d3092",
"assets/assets/indicator.svg": "d4c1d42773b3936dbbcfb0173e0a8dd3",
"assets/assets/plane.svg": "4051fa3cce4c1fa2bfeb5c26b949a150",
"assets/assets/instagram.svg": "b5fef1d08e91bce24f053f791b72e4cc",
"assets/assets/search_close.svg": "3303a306e13284d2dd61f970347c685e",
"assets/assets/checkbox_off.svg": "43752c0fa952fd2cb57cb1604b6357bf",
"assets/assets/bottom_arrow.svg": "d64c63e8370b6d2b10dfa17f189f4111",
"assets/assets/add_map.svg": "71ddf7a2cb18f140975f5f6c7359ce58",
"assets/assets/add_white.svg": "d2762625f0a9f5697185d9bd9e064bbd",
"assets/assets/plus.svg": "0fe2c1833426af6bbd8b121bdbe93a45",
"assets/assets/3.0x/avatar_placeholder.png": "12ba5719b0c861ebc41a8da4c2a5fe5b",
"assets/assets/3.0x/feedback.png": "d5be662557d9ea9e737b22cf1ed72a8a",
"assets/assets/3.0x/likes_background.jpg": "41200f20f69e66c0832d4873c1161bf5",
"assets/assets/3.0x/end_of_feed.png": "705395300b4e716507a5a071680ab8a0",
"assets/assets/3.0x/subscriptions_background.jpg": "2e2c0591c022a18c87883be6bb83632a",
"assets/assets/3.0x/update_app.png": "b58846a242c69d95e4275d5edd43ef50",
"assets/assets/add_image.svg": "6479376e9a9a02cb24e6b7b5b66d3092",
"assets/assets/back.svg": "8aee957f8e1c7c1772e8484db55aa338",
"assets/assets/google.svg": "7b7b27b61b4206492b426d8e52c2373c",
"assets/assets/more.svg": "b79b231b405e99087891bff39d273a46",
"assets/assets/edit.svg": "175726d24e29edde42f6a83cbc05d719",
"assets/assets/small_marker.svg": "dbeb2dfb5277b3725cd6607845733bfe",
"assets/assets/superman.png": "a645b980294733efbac114f27029b23e",
"assets/assets/home_off.svg": "9046d263fe4b04f1adbdc4f9f984a1fa",
"assets/assets/my_location.svg": "13934bb3763290f2fc6427c9c39b2212",
"assets/assets/on_review.svg": "3e0e7862cd4b159b93aca65e2dd15df7",
"assets/assets/rejected.svg": "30a3d3f3ab89e91d7a5b3308de92024c",
"assets/assets/profile.svg": "5bbd9bfe5f9c055df4246d12bb7bdcf4",
"assets/assets/share.svg": "f8c8a1ae2827296a3644b291ee675288",
"assets/assets/cross.svg": "331bd7fbbaa6c4c5c3e35888f046833a",
"assets/assets/dark_map.json": "6876001d19bd0000b42606e51dcc1093",
"assets/assets/feedback.png": "86661b2b1baabdf188c3b4d123252e32",
"assets/assets/likes_background.jpg": "8e3abbc06f6c2c4fa2c576094c55298d",
"assets/assets/end_of_feed.png": "c4b96e2010bd0949dd18235fb3397616",
"assets/assets/add_black.svg": "13b66ad4575b764013d7889d972b920d",
"assets/assets/apple.svg": "067811264e966e4a22a10ba3126e5db6",
"assets/assets/big_marker.svg": "1308bca1a68d0eb05c40f410c5f9f7c4",
"assets/assets/subscriptions_background.jpg": "8656e84293e818e6254230cf7f686159",
"assets/assets/update_app.png": "37c659ea1e0c4744b3be7985ef53a79f",
"assets/assets/heart.svg": "0ce06d2c5b44935b7bce5a7fdef55b29",
"assets/heart_big.png": "8faabaa4fecde814c85fa3c7130b0e16",
"assets/back.png": "8c02ff78153f31f756936752eaadaa2e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
