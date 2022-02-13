import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";
import { clientsClaim } from "workbox-core";

clientsClaim();
self.skipWaiting();
console.log("test");

precacheAndRoute(self.__WB_MANIFEST);
