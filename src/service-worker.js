// Importing Workbox itself from Google CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// Precaching and setting up the routing
workbox.precaching.precacheAndRoute([]);
workbox.precaching.addPlugins([
  new workbox.broadcastUpdate.Plugin('app-shell')
]);
