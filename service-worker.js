/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4eb530756583d9167525573afc637bea"
  },
  {
    "url": "assets/css/4.styles.15eb791f.css",
    "revision": "93284a8eec78fc3c9ea51ef30bb9d82f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.f120fe76.js",
    "revision": "d9e845a6fb4ffa96e8584180b3a44af5"
  },
  {
    "url": "assets/js/1.dc68e2a7.js",
    "revision": "22a922f9376039d7e82e887d7c4e7883"
  },
  {
    "url": "assets/js/2.63b97faf.js",
    "revision": "2db7c05e5bfffdc9ac7741b443593981"
  },
  {
    "url": "assets/js/3.a9416558.js",
    "revision": "573f1f8d030337b9161c050f615eae1c"
  },
  {
    "url": "assets/js/app.56871020.js",
    "revision": "9449a57f431fd0deebaa02fe84e177ff"
  },
  {
    "url": "config/index.html",
    "revision": "bc7c735dd502f7d58c8f851338c3b77e"
  },
  {
    "url": "guide/index.html",
    "revision": "c7cbc1c78d7e87ef4c53626551569f75"
  },
  {
    "url": "guide/markdown.html",
    "revision": "77a311d6784ddc3805ad3cdc954349a6"
  },
  {
    "url": "index.html",
    "revision": "1d46992558cfbbd2ecb5e44a4ddd9691"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
