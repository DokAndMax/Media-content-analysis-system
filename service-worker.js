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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b3f87ea3f57822a8585cfb1089c41d4f"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.a70168f2.css",
    "revision": "27ca46ce9ab37b4c32fe74ad2498e1f9"
  },
  {
    "url": "assets/img/1.5d8ef1c2.png",
    "revision": "5d8ef1c2409b945eb67a5ebf08f5c380"
  },
  {
    "url": "assets/img/2.c7da0389.png",
    "revision": "c7da038937e7bf3502929f7490bce973"
  },
  {
    "url": "assets/img/3.fffac689.jpeg",
    "revision": "fffac689045fdd44d4ec87d77e30d356"
  },
  {
    "url": "assets/img/4.72b9545e.png",
    "revision": "72b9545ef0b6df1f3be232474fb4de02"
  },
  {
    "url": "assets/img/5.d8167bd1.jpg",
    "revision": "d8167bd17662a89f5715e931ec2f90bc"
  },
  {
    "url": "assets/img/6.d93a5335.jpeg",
    "revision": "d93a533534ec0300810db49d03917334"
  },
  {
    "url": "assets/img/7.8b5e636c.png",
    "revision": "8b5e636cf9b81ffbddbfa911d1b39ab2"
  },
  {
    "url": "assets/img/8.8442e556.png",
    "revision": "8442e5569f619996c365516cb52eb5a6"
  },
  {
    "url": "assets/img/eer4.b038da56.png",
    "revision": "b038da563a8644012e76252dd5e86642"
  },
  {
    "url": "assets/img/get.e130cce4.png",
    "revision": "e130cce4097896d1ad4146a39af8567e"
  },
  {
    "url": "assets/img/getall.c181679a.png",
    "revision": "c181679ad49a05dffe449a5a3f38befd"
  },
  {
    "url": "assets/img/post.5686f8c6.png",
    "revision": "5686f8c6b58a6587082d7c2eff713ee8"
  },
  {
    "url": "assets/img/put.19bc5b65.png",
    "revision": "19bc5b65b2f8ec9f899224c4d5b20e72"
  },
  {
    "url": "assets/img/result.47c2c108.png",
    "revision": "47c2c1080847cccf286930186792c532"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.578029e3.js",
    "revision": "b5817dd687d0a296c1b03fa816b5456e"
  },
  {
    "url": "assets/js/11.7089fb2b.js",
    "revision": "fcebd0f6d18bbe38a9424312350c59fa"
  },
  {
    "url": "assets/js/12.5aa4344e.js",
    "revision": "91acd1b77415cacf313984d05499f024"
  },
  {
    "url": "assets/js/13.a7c10e50.js",
    "revision": "e028cf4d80045f267b1784093b0d1295"
  },
  {
    "url": "assets/js/14.a6f67018.js",
    "revision": "8c8bcee59bb7fed51b2a529d6766a034"
  },
  {
    "url": "assets/js/15.2eac638b.js",
    "revision": "c028cb2de0b1d5762dbfce1db003b989"
  },
  {
    "url": "assets/js/16.d675dde1.js",
    "revision": "ba1617c96666b6578903dbe5d08461a4"
  },
  {
    "url": "assets/js/17.e9f12b40.js",
    "revision": "5ed258953d7552b48666cda6dcae1dd0"
  },
  {
    "url": "assets/js/18.5af8c7a5.js",
    "revision": "d3dfd59d2f5cf3d4375f7f68d3e0f889"
  },
  {
    "url": "assets/js/19.00a49181.js",
    "revision": "d61248fda60a9f5ecfcfdc7242605fb9"
  },
  {
    "url": "assets/js/2.ba84e56d.js",
    "revision": "007613fce01b47f429990a2d80a4c8ee"
  },
  {
    "url": "assets/js/20.5c5ac0ed.js",
    "revision": "a360a6007ec7a13393a6950794654cc5"
  },
  {
    "url": "assets/js/21.b62a2cfe.js",
    "revision": "f70cd8c17b7a6f48730cc8bce82fe53f"
  },
  {
    "url": "assets/js/22.b77cfeba.js",
    "revision": "74a2347782b26f1d290e8b8ffe310957"
  },
  {
    "url": "assets/js/23.ce9255bc.js",
    "revision": "012468fbeb1655a0e303197f4f5e4ee9"
  },
  {
    "url": "assets/js/24.ce349e83.js",
    "revision": "98e838a5229c6ced64b84679a6f26e00"
  },
  {
    "url": "assets/js/26.35053981.js",
    "revision": "1469ab94686da817902ea819baa38dc5"
  },
  {
    "url": "assets/js/3.7aa3762a.js",
    "revision": "f32aed8a6ac509431e16a81bd296b9e9"
  },
  {
    "url": "assets/js/4.478f3150.js",
    "revision": "e6ee1af009a72b1aec517d2ccfabcfda"
  },
  {
    "url": "assets/js/5.e43b25f5.js",
    "revision": "f3f530be8d843b20564ddfbdca978d6a"
  },
  {
    "url": "assets/js/6.20079aae.js",
    "revision": "de40e822bca1be63f9d920790386a8bc"
  },
  {
    "url": "assets/js/7.8fd3e675.js",
    "revision": "ada3c59d27582580b4f3d74fc040820f"
  },
  {
    "url": "assets/js/8.69b40389.js",
    "revision": "012fea40040f5203d465bbe84d5ecd8a"
  },
  {
    "url": "assets/js/9.9adf0b87.js",
    "revision": "88beb2ce452bfff3ce8c484d22b07161"
  },
  {
    "url": "assets/js/app.6e3351c6.js",
    "revision": "10de9015394d68ba2b820eb8e36c9c3d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ba6949995b6bbeae21e0f860e34e41d5"
  },
  {
    "url": "design/index.html",
    "revision": "b8dc92f9a4826435915c40c86778dfab"
  },
  {
    "url": "index.html",
    "revision": "00018bb926eb478987899621b9714c07"
  },
  {
    "url": "intro/index.html",
    "revision": "8af90342f212163368d92d5c960a0715"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "175d3c4da8e1e33c4d087ac366ae6614"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "d3e87a5d20af1afb3a455bb4d8a6f892"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "12aca354b360324dc79f133cf0bb3ec1"
  },
  {
    "url": "software/index.html",
    "revision": "de3bf55a61510c7542145935f6bd8417"
  },
  {
    "url": "test/index.html",
    "revision": "0d800877267693fbe911d702ed043517"
  },
  {
    "url": "use cases/index.html",
    "revision": "dc4cbaa0a41d2f9007d1b8d1d36f3e6a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
