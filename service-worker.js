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
    "url": "404.html",
    "revision": "b471f4e2d8be721d18aaeb27b568e4b3"
  },
  {
    "url": "assets/01.jpg",
    "revision": "d248211d78d640e2b46f4fbf3410d2c7"
  },
  {
    "url": "assets/02.jpg",
    "revision": "aadcf08b8e28cbe6222830662acfc8ba"
  },
  {
    "url": "assets/04.jpg",
    "revision": "71294221fa549aa0e5d54fe0a3d5b26a"
  },
  {
    "url": "assets/05.jpg",
    "revision": "072c0801091d26c9b36bdb1980013102"
  },
  {
    "url": "assets/06.jpg",
    "revision": "d11cc3aacd40aa2ec735e00071b9e1f5"
  },
  {
    "url": "assets/07.jpg",
    "revision": "5617919d73666c6b406e22bc30d86f50"
  },
  {
    "url": "assets/08.jpg",
    "revision": "7de8cba702401c742ac067543546dea5"
  },
  {
    "url": "assets/09.jpg",
    "revision": "098a166ba4111aa422117862def636c9"
  },
  {
    "url": "assets/1.png",
    "revision": "c93195a3f59809ae524cc6aa91c422b9"
  },
  {
    "url": "assets/1063909672.jpg",
    "revision": "7484c2433cf5e203420badcb2ecb8af4"
  },
  {
    "url": "assets/1562308995837.png",
    "revision": "5265fd7b06b39b5869a6656944512e05"
  },
  {
    "url": "assets/1562309077971.png",
    "revision": "5265fd7b06b39b5869a6656944512e05"
  },
  {
    "url": "assets/1562320196156.png",
    "revision": "693bc3ef840635d1c75995d815909b01"
  },
  {
    "url": "assets/1562320474038.png",
    "revision": "4f0a9f83509825a6fb9a114782d094bb"
  },
  {
    "url": "assets/1562320560113.png",
    "revision": "5704676dd45d2cfe989845857512265c"
  },
  {
    "url": "assets/1562467801336.png",
    "revision": "2d76084d6a24a19808a89b9b78986ff1"
  },
  {
    "url": "assets/1562486286272.png",
    "revision": "558a0067e1a4d25c0f88f142cc452ab7"
  },
  {
    "url": "assets/1562487921626.png",
    "revision": "36da71841ed7524f6b62b39e7cef721b"
  },
  {
    "url": "assets/1562549667046.png",
    "revision": "704bbe413db1963303bb303affd23f4b"
  },
  {
    "url": "assets/1562643979037.png",
    "revision": "29134198ad98220e24c837005aa8f888"
  },
  {
    "url": "assets/1562655656367.png",
    "revision": "77ecc410e494e1f548c8418aee07a45a"
  },
  {
    "url": "assets/1562809839407.png",
    "revision": "3c7255c1c47ec51855a59b429d6069d3"
  },
  {
    "url": "assets/1562810502368.png",
    "revision": "3c7255c1c47ec51855a59b429d6069d3"
  },
  {
    "url": "assets/1562812298134.png",
    "revision": "ded6250230fdde86315726a04565b549"
  },
  {
    "url": "assets/1563171688895.png",
    "revision": "de3ef01a3b5499ac39c17ccf83d643fb"
  },
  {
    "url": "assets/1563171981547.png",
    "revision": "a0db377e724660aa5f55a5b81f8687b8"
  },
  {
    "url": "assets/1563172064653.png",
    "revision": "63f47484947527fb76c231c5a5293748"
  },
  {
    "url": "assets/1563244750196.png",
    "revision": "2d1ed502301ee4075b1062b1f7a50850"
  },
  {
    "url": "assets/1563244775277.png",
    "revision": "e33d1d98ba2a6ec20e47e4b784f68dcb"
  },
  {
    "url": "assets/1563244841399.png",
    "revision": "5b0ccde3995f21e072959f6865cda906"
  },
  {
    "url": "assets/1563244872226.png",
    "revision": "960a99bbc6e837721e44dc51b7cbb71e"
  },
  {
    "url": "assets/1563244914478.png",
    "revision": "e9accfe4da512f88c95d9a57ae6bbee1"
  },
  {
    "url": "assets/1563343431530.png",
    "revision": "ff6b6315c0a5c0e28147298a5548c438"
  },
  {
    "url": "assets/1563343435308.png",
    "revision": "ff6b6315c0a5c0e28147298a5548c438"
  },
  {
    "url": "assets/1563344605888.png",
    "revision": "61bce9382fd3edf254c7526c78eb41c4"
  },
  {
    "url": "assets/1563344926021.png",
    "revision": "6d183663bbfd8e20dfff3590a64bffa0"
  },
  {
    "url": "assets/1563345223395.png",
    "revision": "b1277ffa421133960c6596b1835949fa"
  },
  {
    "url": "assets/1563674640784.png",
    "revision": "4ab08d435144fff81406a5daa30d22cd"
  },
  {
    "url": "assets/1563674724394.png",
    "revision": "6736eb01f93fc494fb0e508331de3fef"
  },
  {
    "url": "assets/1563677261864.png",
    "revision": "f218744db3cbcf702c169903be122682"
  },
  {
    "url": "assets/1563689210714.png",
    "revision": "460cf28d43fcc2ab2476f8eea6107f07"
  },
  {
    "url": "assets/1563689240668.png",
    "revision": "aa4749128f118cdef9f6671c48647f8b"
  },
  {
    "url": "assets/1563689958610.png",
    "revision": "17d2db4b0ce7a3fc5d246b0d8c9b1f21"
  },
  {
    "url": "assets/1563763385947.png",
    "revision": "f6988cd6adc8e49b933c6d5900e5a954"
  },
  {
    "url": "assets/1563763434958.png",
    "revision": "94a1bd6e7563b29e2807ad1896d30ef8"
  },
  {
    "url": "assets/1563763563444.png",
    "revision": "698b19175010db1499ecbe0a47e66fa1"
  },
  {
    "url": "assets/1563763649347.png",
    "revision": "774b54e5ea1d30ac6ada997744a28786"
  },
  {
    "url": "assets/1563764622339.png",
    "revision": "0d51142ab22e5013e2863fe4157d60f4"
  },
  {
    "url": "assets/1563764642393.png",
    "revision": "0d51142ab22e5013e2863fe4157d60f4"
  },
  {
    "url": "assets/1563764644202.png",
    "revision": "0d51142ab22e5013e2863fe4157d60f4"
  },
  {
    "url": "assets/1563764959851.png",
    "revision": "b35b627b91831b29e69e7bc155fbff74"
  },
  {
    "url": "assets/1563765866588.png",
    "revision": "ff3bb965a17baac8b57ca23366d1d07a"
  },
  {
    "url": "assets/1563766047967.png",
    "revision": "a3aad79fac893850f4dd76c8178b79a2"
  },
  {
    "url": "assets/1563766164656.png",
    "revision": "be06f046dd764ceabd953a242436478f"
  },
  {
    "url": "assets/1564036493086.png",
    "revision": "e950b552a75f0d223c005d055b863695"
  },
  {
    "url": "assets/1566696178681.png",
    "revision": "c6dc7d425b0e5f1a68170d76ba506fa3"
  },
  {
    "url": "assets/1566724124256.png",
    "revision": "464d4fadee92b97a4bcab11d2cf07d40"
  },
  {
    "url": "assets/1566809211910.png",
    "revision": "1e04284a452944e5f29af9696a3b3903"
  },
  {
    "url": "assets/1566894607785.png",
    "revision": "bb49e409905e09b6bf5de7c21e527ecd"
  },
  {
    "url": "assets/1566894644926.png",
    "revision": "17b59046a99a4440252ed65b37dfabd1"
  },
  {
    "url": "assets/1566903820629.png",
    "revision": "2ec764eeed8cd233c0ad9c4324fdb265"
  },
  {
    "url": "assets/1566903872453.png",
    "revision": "ff5233fe1838facff6c96f42a34e807c"
  },
  {
    "url": "assets/1566903985048.png",
    "revision": "8b602712ada4e35eef24e71d43147ad9"
  },
  {
    "url": "assets/1566904126039.png",
    "revision": "57f7a346b73313697872a74500b8fcfb"
  },
  {
    "url": "assets/1566980310279.png",
    "revision": "4f86d4d3176419cffdedeea0621cd0df"
  },
  {
    "url": "assets/1566982011884.png",
    "revision": "d1eac141d20cd1afb95e32fbb8b3a31e"
  },
  {
    "url": "assets/1566982105741.png",
    "revision": "7f62c53f1f82d11ac8a292ac53e6ccaf"
  },
  {
    "url": "assets/1566982196390.png",
    "revision": "ffecc01a1527a6d5b69c323886f33e06"
  },
  {
    "url": "assets/1566982312272.png",
    "revision": "ffbf614b9ae67887ba6d0a19aaccb8d7"
  },
  {
    "url": "assets/1567130793931.png",
    "revision": "c143283846afe4ca19588454964d0c86"
  },
  {
    "url": "assets/1567146077891.png",
    "revision": "3bb595fd65189d5b8540477cb52e2797"
  },
  {
    "url": "assets/1567217999700.png",
    "revision": "925b2df101f98dbdc11c7d9c177a1db8"
  },
  {
    "url": "assets/1567218209324.png",
    "revision": "a6aeb1c57b9a16bdbdf552f06b0c7695"
  },
  {
    "url": "assets/1567943856911.png",
    "revision": "5604e6a067faa92d77042ed53fd26ccf"
  },
  {
    "url": "assets/1567944197333.png",
    "revision": "2d106dedf809d8c46e193ff954aeff3c"
  },
  {
    "url": "assets/1567945104423.png",
    "revision": "37111e4163b8d88af97ff0d1dff24ed7"
  },
  {
    "url": "assets/1567990958758.png",
    "revision": "73399508e53119457e2c5da479cde110"
  },
  {
    "url": "assets/1569306384891.png",
    "revision": "9abb2e9c8626eef29ba4515d908b4391"
  },
  {
    "url": "assets/1569306827212.png",
    "revision": "338448d6f3f25dd7834049943b61ed81"
  },
  {
    "url": "assets/1569309760930.png",
    "revision": "46010a553c7ec6fb99b95bedfa12b7c7"
  },
  {
    "url": "assets/1569566130360.png",
    "revision": "d3235a8ba71420ffe9154813e6765a5f"
  },
  {
    "url": "assets/1569566459579.png",
    "revision": "78365cd1077f923e7fec942680598bbd"
  },
  {
    "url": "assets/1569569048821.png",
    "revision": "2a6f3fd138c0bfd092939d30107b29f2"
  },
  {
    "url": "assets/1569574450488.png",
    "revision": "9e620d52e0ba16b15b5ff33a02035ed9"
  },
  {
    "url": "assets/1569574786211.png",
    "revision": "d9dfb38f38f026efedba85a62b85c583"
  },
  {
    "url": "assets/1569651695910.png",
    "revision": "c757a7a5271509061ceb5615a8b0b043"
  },
  {
    "url": "assets/1569658853094.png",
    "revision": "ec3102278d85149cb7133ff761af72a0"
  },
  {
    "url": "assets/1569743560996.png",
    "revision": "ebca624056ad7b3971c38afdddcb255c"
  },
  {
    "url": "assets/1569749204573.png",
    "revision": "b99593ccfbbefa4ef0d84f39b76f858d"
  },
  {
    "url": "assets/1569749762023.png",
    "revision": "e84d7fa79f0abe257c2ec76b5c42cb36"
  },
  {
    "url": "assets/1570581626128.png",
    "revision": "6ef6a08e41674a5b9b5e0249eb0ba71c"
  },
  {
    "url": "assets/1570582251276.png",
    "revision": "1a85b2b6560551819f285537955df17f"
  },
  {
    "url": "assets/1570582608124.png",
    "revision": "4f0f636a34028591a5772b9c677c7cd6"
  },
  {
    "url": "assets/1570781168351.png",
    "revision": "d6e5cb58dc5d067751d2fca119920f03"
  },
  {
    "url": "assets/1570781746553.png",
    "revision": "c54099fb6a143d80fd7421c38fb40fa6"
  },
  {
    "url": "assets/1570871480754.png",
    "revision": "f977204117599cb4061822833422bbbc"
  },
  {
    "url": "assets/1571967374963-1584186436601.png",
    "revision": "52aab9a8662b2ad3051dab310224a35f"
  },
  {
    "url": "assets/1571967374963.png",
    "revision": "52aab9a8662b2ad3051dab310224a35f"
  },
  {
    "url": "assets/1571967801484.png",
    "revision": "6ba62433f4d0f0515603e93aec7c85c0"
  },
  {
    "url": "assets/1571968077925.png",
    "revision": "d6171f35a26dc83613024a2349e2f11d"
  },
  {
    "url": "assets/1571968264223.png",
    "revision": "83d58b351ff638ad65d272511e7dc1c1"
  },
  {
    "url": "assets/1571968833256.png",
    "revision": "a41123ea81a5f29dd1920ecfbc8eaff8"
  },
  {
    "url": "assets/1581569822626.png",
    "revision": "c84595845542650760b3cf30239328fb"
  },
  {
    "url": "assets/1581577087608.png",
    "revision": "366e0dec1714a0c1bb3679b645739a2e"
  },
  {
    "url": "assets/1581579439794.png",
    "revision": "5df15d8a0b2da8044ec11e4017e1513f"
  },
  {
    "url": "assets/1581579733603.png",
    "revision": "8e58adfe255046929f634361326ede74"
  },
  {
    "url": "assets/2.png",
    "revision": "5686cdc7c705fe5b053b4478221bccd8"
  },
  {
    "url": "assets/3.jpg",
    "revision": "d9413b41b66128c9f107f17ccb5973b4"
  },
  {
    "url": "assets/3.png",
    "revision": "56f126d125f86955a0b7e137d41c3a72"
  },
  {
    "url": "assets/3767180762-5c3c8f494952c_articlex.jpg",
    "revision": "9a6962d698c2509f32c20e2ed7b317a4"
  },
  {
    "url": "assets/4036922578.jpg",
    "revision": "cf8ae51a3c8dbe772d057fe88a391556"
  },
  {
    "url": "assets/appswiper01.gif",
    "revision": "87dc86cbe64e5df3724c2d2249db9ecb"
  },
  {
    "url": "assets/bg2015071001(1).gif",
    "revision": "0293a224e0b376ca4aa2cedee41c7c41"
  },
  {
    "url": "assets/bg2015071002.png",
    "revision": "16e9b4fa91b1f521d479a299d40f8a1f"
  },
  {
    "url": "assets/bg2015071003.jpg",
    "revision": "ba530dbfac44181fd454166204ff659c"
  },
  {
    "url": "assets/bg2015071004.png",
    "revision": "8b402883445b842ca38727fc09f60d00"
  },
  {
    "url": "assets/bg2015071005.png",
    "revision": "0ac377493a33869f2829c4b1d3d70100"
  },
  {
    "url": "assets/bg2015071006.png",
    "revision": "940f145a234cc9972dc232668bb96766"
  },
  {
    "url": "assets/bg2015071007.png",
    "revision": "7e8a06a9347193bcb4a969962ebfa3aa"
  },
  {
    "url": "assets/bg2015071008.jpg",
    "revision": "6215cf568af888a6442517b68a2825d8"
  },
  {
    "url": "assets/bg2015071009.jpg",
    "revision": "4a8a486060e81a05895277c987af5c96"
  },
  {
    "url": "assets/bg2015071010.png",
    "revision": "b1beedefc6a3eb52960a682ad0121926"
  },
  {
    "url": "assets/bg2015071011.png",
    "revision": "0ec9e81c35c66f66b23e724c6063fce8"
  },
  {
    "url": "assets/bg2015071012.png",
    "revision": "aade7abc9eb8c177c66d0128b1cc6ca9"
  },
  {
    "url": "assets/bg2015071013.png",
    "revision": "70f89eba41edc0a70278c44b74747294"
  },
  {
    "url": "assets/bg2015071014.png",
    "revision": "0c40e2971edc015685f43798e9a5b90f"
  },
  {
    "url": "assets/bg2015071015.jpg",
    "revision": "e24a8660e626cd488ee1e21645a92bb0"
  },
  {
    "url": "assets/bg2015071016.png",
    "revision": "0d93c40b34a77529f71ddd927dd49c82"
  },
  {
    "url": "assets/css/0.styles.64dad53c.css",
    "revision": "224f1f5ffe1a6535ed5a344e637b1435"
  },
  {
    "url": "assets/img_jquerydim.gif",
    "revision": "31086fb64f98e09d35a8c975ec68d24a"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.def91a3b.js",
    "revision": "4a7f3b1c9a5f5cb607981dc4a165bbd2"
  },
  {
    "url": "assets/js/10.08a199d8.js",
    "revision": "147f69edc51f1a461fdac553878b0047"
  },
  {
    "url": "assets/js/11.263777cd.js",
    "revision": "2432640cb8c3d06e8c2b291cde29ff28"
  },
  {
    "url": "assets/js/12.13bd9d3d.js",
    "revision": "179cc2a786b390480cc375116b6909e2"
  },
  {
    "url": "assets/js/13.fac25735.js",
    "revision": "207d0172b720067b7706be151f1fb4b6"
  },
  {
    "url": "assets/js/14.ec8a899f.js",
    "revision": "8ff93c6fd640dffe54ed63f514aaa5c7"
  },
  {
    "url": "assets/js/15.0fd25b17.js",
    "revision": "0253ba99450b636aff446cbe965ec7b4"
  },
  {
    "url": "assets/js/16.27061595.js",
    "revision": "1abc72d3b27ddcbdafe55949b71f64f9"
  },
  {
    "url": "assets/js/17.1b6b775b.js",
    "revision": "271c0a863df8aeaba3b1ffddcbb32aaa"
  },
  {
    "url": "assets/js/18.75f903c4.js",
    "revision": "b42754b533eafe9bb89622c98dc8650a"
  },
  {
    "url": "assets/js/19.4c0ea89a.js",
    "revision": "31d8ab70ac668153116e88e7014f93b8"
  },
  {
    "url": "assets/js/20.f40ec89e.js",
    "revision": "49e76abcc1e136fa4610e9ce0fdc2975"
  },
  {
    "url": "assets/js/21.9af0f13c.js",
    "revision": "c645a9432ac643c5b08f5c45f76aa12a"
  },
  {
    "url": "assets/js/22.7d70d846.js",
    "revision": "a4931531d1581130493424d88680bb91"
  },
  {
    "url": "assets/js/23.3a4d41a3.js",
    "revision": "54be177efd678ff68fc53183710c0bf6"
  },
  {
    "url": "assets/js/24.1682bed0.js",
    "revision": "4e506f5a56689f7f2c5a678cb350ffd0"
  },
  {
    "url": "assets/js/25.7439549e.js",
    "revision": "42514a0863297dbda0c9bf7672740d6b"
  },
  {
    "url": "assets/js/26.d59ae40d.js",
    "revision": "e15341ac3629a667b9f2082a3bfcf0f5"
  },
  {
    "url": "assets/js/27.fd8948e5.js",
    "revision": "faf7d4c1d4b07be3b6899affa8080dc6"
  },
  {
    "url": "assets/js/28.e1ef3f22.js",
    "revision": "792ab82638cd9fb9eb732bd0dd33fec8"
  },
  {
    "url": "assets/js/29.e4142ad2.js",
    "revision": "64506eb5ba9007876eac7d75dffa9da9"
  },
  {
    "url": "assets/js/3.bd460faa.js",
    "revision": "cece5c05497f828a5fcbcce19d7661bc"
  },
  {
    "url": "assets/js/30.e0a9b672.js",
    "revision": "496f55c08ddebc8a197a128bcbfc6144"
  },
  {
    "url": "assets/js/31.c082db2b.js",
    "revision": "2e2a824a558f969dbaa07dfd61ec193e"
  },
  {
    "url": "assets/js/32.321fd4f9.js",
    "revision": "4dba7772afd5094c309e86d3d76680ff"
  },
  {
    "url": "assets/js/33.dd04e0e6.js",
    "revision": "eb95f9543163f401730efd92fff48b53"
  },
  {
    "url": "assets/js/34.5ba1a0fb.js",
    "revision": "fc24d8cda02ea3bdb0664a550a6b7459"
  },
  {
    "url": "assets/js/35.05671695.js",
    "revision": "eabd05df042b8c56543671d6d1851afb"
  },
  {
    "url": "assets/js/36.d544e803.js",
    "revision": "6650f522bd1db56da15317850a1c39bd"
  },
  {
    "url": "assets/js/37.48be0b4f.js",
    "revision": "f9200e26b3405a2c97f155197cb1e599"
  },
  {
    "url": "assets/js/38.5a220b2c.js",
    "revision": "c7fa983a3b2487268d51331235903d50"
  },
  {
    "url": "assets/js/39.d38e5fce.js",
    "revision": "6e895d277a9f4fa1de95a77977fb85a6"
  },
  {
    "url": "assets/js/4.5ad09e69.js",
    "revision": "f24bf772bdee74612b8ef18613926db4"
  },
  {
    "url": "assets/js/40.a1e6608f.js",
    "revision": "af87f306b2a14e07cd5559d7879f606a"
  },
  {
    "url": "assets/js/41.e02cc0ed.js",
    "revision": "9efa340f91d0a4301b172d686936c766"
  },
  {
    "url": "assets/js/42.91bd595e.js",
    "revision": "343ab56405a5844f2b620a4991227c01"
  },
  {
    "url": "assets/js/43.a05a5d66.js",
    "revision": "fd1e2be7344efc8518868f38dd050d12"
  },
  {
    "url": "assets/js/44.0c18bf61.js",
    "revision": "f8d6202d8bc4a8e15af3d41cf1cec86e"
  },
  {
    "url": "assets/js/45.f44428e6.js",
    "revision": "b7675aae7230c70205fe5bf504e257f9"
  },
  {
    "url": "assets/js/46.c9d1aaac.js",
    "revision": "70e419de1bf28b4df62952d78c84370f"
  },
  {
    "url": "assets/js/47.0fa732ee.js",
    "revision": "5fa69be945687758277509119db094d7"
  },
  {
    "url": "assets/js/48.a6d4d507.js",
    "revision": "eada19bb7f1abfd0d51b4feab6b7b659"
  },
  {
    "url": "assets/js/49.51b963fc.js",
    "revision": "bab6686b69ee9207f68403092c7f08fe"
  },
  {
    "url": "assets/js/5.ee83b1ae.js",
    "revision": "04f12195ad57241701573811ce6dfbad"
  },
  {
    "url": "assets/js/50.49665ba3.js",
    "revision": "bc4a6eb7ca730badc6e5fb9babaaf36c"
  },
  {
    "url": "assets/js/51.1891be37.js",
    "revision": "b7e1cd8907c2d15e92484210b083bb19"
  },
  {
    "url": "assets/js/52.c98c6cac.js",
    "revision": "16a394fa4f93fd2ec64815deb6e26071"
  },
  {
    "url": "assets/js/53.b9bda6ea.js",
    "revision": "b3f77f94d956944e61978373061534a2"
  },
  {
    "url": "assets/js/54.f50e6ec5.js",
    "revision": "301401876a8b365bbfb3d8b9ac897723"
  },
  {
    "url": "assets/js/55.1907f1b7.js",
    "revision": "4ec4a7b6cf8ea7fe3dc75e4e54e3d655"
  },
  {
    "url": "assets/js/56.813988b9.js",
    "revision": "2938c41e6656b7871e8582e048a12719"
  },
  {
    "url": "assets/js/57.39792d54.js",
    "revision": "0c04c083047e8373cbf236595cf34c9a"
  },
  {
    "url": "assets/js/58.be4cc020.js",
    "revision": "4b5061273a67862371fec1be78123108"
  },
  {
    "url": "assets/js/59.5f443d70.js",
    "revision": "506494b03c5a2ea5ec923306198becfd"
  },
  {
    "url": "assets/js/6.e516f7a5.js",
    "revision": "84357cfa41c678241fcc51221b71dd93"
  },
  {
    "url": "assets/js/60.aa60207c.js",
    "revision": "e1da521a6b4a2b7d4ea2d75fbe3cc7f7"
  },
  {
    "url": "assets/js/61.58e90189.js",
    "revision": "b0e31108f0c8f444402ce7dcb2d3097a"
  },
  {
    "url": "assets/js/62.c25154f5.js",
    "revision": "dfec49de8f915fb3b13611b388c418ea"
  },
  {
    "url": "assets/js/63.0c3b6aa8.js",
    "revision": "2b934d92438e4f8c43c2d05e2f5f0bac"
  },
  {
    "url": "assets/js/64.fcc8b313.js",
    "revision": "4194edf36000c184186d9339efbd0be3"
  },
  {
    "url": "assets/js/65.4bc2c3ad.js",
    "revision": "484aa76b3e7832c0c9155f1bd0300537"
  },
  {
    "url": "assets/js/66.a24efccf.js",
    "revision": "471e0abc3808a661e0c59e80a3bfa58f"
  },
  {
    "url": "assets/js/67.c2251477.js",
    "revision": "389b88c850ff53a1084677e891af0721"
  },
  {
    "url": "assets/js/68.8e9a005b.js",
    "revision": "128616efb659433c4e593a18b7950b93"
  },
  {
    "url": "assets/js/69.e0b41ebd.js",
    "revision": "c95da9e4ecf419785010ef70e2830790"
  },
  {
    "url": "assets/js/7.d02c38f9.js",
    "revision": "f3167e68c1b5ea6e051aa62d4a1f3c6b"
  },
  {
    "url": "assets/js/70.3d86f8cc.js",
    "revision": "6923d178c8bb64813e8f768c88ada108"
  },
  {
    "url": "assets/js/71.b230a7bc.js",
    "revision": "65b32091284149121d0adac6f1a39b72"
  },
  {
    "url": "assets/js/72.9b3ebbd0.js",
    "revision": "b2430abf2367ec434824bda8ddb17729"
  },
  {
    "url": "assets/js/73.e64744ca.js",
    "revision": "026c162359cdaf73df80106f8f1c9574"
  },
  {
    "url": "assets/js/74.548be1f2.js",
    "revision": "0c28da8c6b5f50ed859822793acf1951"
  },
  {
    "url": "assets/js/75.6b1b6af6.js",
    "revision": "59c2ff83d84108a56f05ed35660c1999"
  },
  {
    "url": "assets/js/76.a96a3b62.js",
    "revision": "407cf63f8fd02b0881d8632b07db0603"
  },
  {
    "url": "assets/js/77.7ba4b72d.js",
    "revision": "ae42d43660892152412716375c091862"
  },
  {
    "url": "assets/js/78.3a802e85.js",
    "revision": "b14245620e18bf0775dee79be5445b78"
  },
  {
    "url": "assets/js/79.76c6ccad.js",
    "revision": "0aa4f9e1c8e66df68b929fd01155187c"
  },
  {
    "url": "assets/js/8.3614fb27.js",
    "revision": "7ef0c86b9cf88f02546eee2e28e64f09"
  },
  {
    "url": "assets/js/80.92eca30c.js",
    "revision": "bde02e6400f6c6009e043c02eac604b1"
  },
  {
    "url": "assets/js/81.5030b3b0.js",
    "revision": "127c76007a499a66f47ba6d50caea057"
  },
  {
    "url": "assets/js/82.2b8f010f.js",
    "revision": "65f28eb283dee1dda0f59f5121df9830"
  },
  {
    "url": "assets/js/83.948b3e46.js",
    "revision": "b6490efcb371bec5d3d957f8a4a99ad6"
  },
  {
    "url": "assets/js/84.740962cf.js",
    "revision": "e9290356b5c1acde1c92deb30295355f"
  },
  {
    "url": "assets/js/85.4518e8fc.js",
    "revision": "a7f71e980fb00141cce3bfd9ab97b83d"
  },
  {
    "url": "assets/js/86.5b3c4204.js",
    "revision": "d828ba7a83a73df9cb539597e3e31cb3"
  },
  {
    "url": "assets/js/87.480b9f16.js",
    "revision": "fce4808d9fb5bf1d15056b6c4aff5191"
  },
  {
    "url": "assets/js/88.04bf9a9d.js",
    "revision": "3343628a9b55e852e6fdd05b6e749837"
  },
  {
    "url": "assets/js/89.1a292cfc.js",
    "revision": "81cd5b950899783d33c5763f307b71a0"
  },
  {
    "url": "assets/js/9.7f31ba26.js",
    "revision": "3d484b8fd2ee9d64bcdb8493cb80faea"
  },
  {
    "url": "assets/js/90.b464dc2a.js",
    "revision": "08b08a9f60851e64ee47e8d684b878a9"
  },
  {
    "url": "assets/js/91.1250851a.js",
    "revision": "fce4b01f051ea02d3fab139314811210"
  },
  {
    "url": "assets/js/92.287b3ca5.js",
    "revision": "db07624f688ad42346adf8d3efdeb923"
  },
  {
    "url": "assets/js/93.cfa6c156.js",
    "revision": "c3e7d674ebf4b3a118813635a19654c5"
  },
  {
    "url": "assets/js/app.67d64c82.js",
    "revision": "efaec2ba9cbece164ed0cee58a6b98b4"
  },
  {
    "url": "assets/top_search_submit.gif",
    "revision": "c9ba48973fb3d2adfae975486913cf90"
  },
  {
    "url": "bgm/Jay/JayChou.jpg",
    "revision": "1ebf98e879198942dd1037f848d0e358"
  },
  {
    "url": "categories/index.html",
    "revision": "9c0cd2ed051716c4924d52432c3578a0"
  },
  {
    "url": "categories/开发者日志/index.html",
    "revision": "f4b9e40c6e1a472ece4da45034ee91db"
  },
  {
    "url": "categories/开发者日志/page/2/index.html",
    "revision": "ba43e3ff98ff7333d64bfe0b18b2f5c2"
  },
  {
    "url": "categories/开发者日志/page/3/index.html",
    "revision": "58fa9dd0fdbc0b7ea572c970a94b1441"
  },
  {
    "url": "categories/开发者日志/page/4/index.html",
    "revision": "cf68d6540642190d69e9f0053a59287c"
  },
  {
    "url": "categories/开发者日志/page/5/index.html",
    "revision": "52ce18d294a83318f636ef28b622ff2b"
  },
  {
    "url": "categories/开发者日志/page/6/index.html",
    "revision": "46693a625d7431d7af777cffcb222366"
  },
  {
    "url": "categories/开发者日志/page/7/index.html",
    "revision": "175ab3a9f0f1a455045b23519d2da9c0"
  },
  {
    "url": "categories/开发者日志/page/8/index.html",
    "revision": "c2c0c3452a813d75e34caa56a656e75e"
  },
  {
    "url": "categories/开发者日志/page/9/index.html",
    "revision": "1c9a23db5d1dd1ba1e7a1abc39ddbc05"
  },
  {
    "url": "icons/pwa_icon_192.png",
    "revision": "ee7ed175fde3c1b19d5d5e47331fc253"
  },
  {
    "url": "images/head.jpg",
    "revision": "2796290545556bcca85072265041fe87"
  },
  {
    "url": "images/post-bg-universe.png",
    "revision": "98331581c51c9cca2560223c805daccd"
  },
  {
    "url": "index.html",
    "revision": "5047251d856b8cf824e5d44eb30e2765"
  },
  {
    "url": "tag/index.html",
    "revision": "578dbe551c68ab28f500291819abcc09"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "683f7707f67162a40dee27bb7d74eebd"
  },
  {
    "url": "tags/Bootstrap/index.html",
    "revision": "1c027b87a2f329e344623a96b7a5c7a1"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "bfd77d9cdb1852b8a1122c0f38d97680"
  },
  {
    "url": "tags/CSS/page/2/index.html",
    "revision": "47781d5db235f0a719aa00a32f92d442"
  },
  {
    "url": "tags/DataBase-MySQL/index.html",
    "revision": "7a09505307acb6a06b64c17ed2c273a8"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "f02ffac9325982e6b261b1b03f198395"
  },
  {
    "url": "tags/Express/index.html",
    "revision": "c6150e6713055dc0002bbeaeb0a6fc34"
  },
  {
    "url": "tags/HTML/index.html",
    "revision": "0ea1efa716b67e510d10e4a25197f5b7"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "3eca9839a5b6cdcc943a6f0d5192068f"
  },
  {
    "url": "tags/JavaScript/page/2/index.html",
    "revision": "cf02e3bb178c3cde9855e7ef14202d52"
  },
  {
    "url": "tags/JavaScript/page/3/index.html",
    "revision": "ff7f4c7ac0eb57c8abcf5f504a3588b0"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "1875de16da1e785af9b94ebdbaf1255c"
  },
  {
    "url": "tags/NodeJs/index.html",
    "revision": "2c46a69a582cf87e640b9c0ce731ccda"
  },
  {
    "url": "tags/Sass/index.html",
    "revision": "c033e29bae6f8f049fcce3cf57c7d537"
  },
  {
    "url": "tags/Tools/index.html",
    "revision": "6776ff19408a1148a1ca5d4b56a48774"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "10a35759f9598d6227a254bf6ef1d70e"
  },
  {
    "url": "tags/Vuepress/index.html",
    "revision": "6bfa11f3b21c77e5b236d5cb3f98ec4d"
  },
  {
    "url": "tags/WebPack/index.html",
    "revision": "3b24b8abdb06816791638fdac6031c69"
  },
  {
    "url": "tags/微信小程序/index.html",
    "revision": "95af6a21e633f12f7217b47e4040036f"
  },
  {
    "url": "tags/移动端/index.html",
    "revision": "bba8df797235962f778869899f851f52"
  },
  {
    "url": "timeline/index.html",
    "revision": "a468a66cf7e42455675107e8d678b18a"
  },
  {
    "url": "views/Bootstrap_doc/bootstrap框架.html",
    "revision": "bf63d4f13d7b140e572b06fa3b2dda74"
  },
  {
    "url": "views/css_doc/01-1CSS的伪类与伪元素.html",
    "revision": "232a43a02de26f94e80fb64997491574"
  },
  {
    "url": "views/css_doc/01CSS基础.html",
    "revision": "c20112edf7373cd4ea672be07603dff8"
  },
  {
    "url": "views/css_doc/02-1CSS样式补充.html",
    "revision": "e45a425a09fb7fefb5f9d0cb3d043666"
  },
  {
    "url": "views/css_doc/02-2CSS3的clip-path属性.html",
    "revision": "6b4f276c284ba3e9794579a1f4b3c968"
  },
  {
    "url": "views/css_doc/02-3CSS补充点.html",
    "revision": "13fbba7b7e35faf3022fad0cbc0f29d5"
  },
  {
    "url": "views/css_doc/02CSS常见样式.html",
    "revision": "d2d60e339b5bfce148314d9af097dc7d"
  },
  {
    "url": "views/css_doc/03CSS盒子模型.html",
    "revision": "5834ce8a630f18c88104e90d676fb9c7"
  },
  {
    "url": "views/css_doc/04-1BFC.html",
    "revision": "e99404a708741817711c14e19d465946"
  },
  {
    "url": "views/css_doc/04浮动与定位.html",
    "revision": "4f3f00756c30b63dcf427f6d02131434"
  },
  {
    "url": "views/css_doc/05CSS特性.html",
    "revision": "2c6ac276d20dc72ee8b701b2b5bfc814"
  },
  {
    "url": "views/css_doc/06CSS过渡.html",
    "revision": "12603bb321d733c50bccf3424635548d"
  },
  {
    "url": "views/css_doc/07CSS变幻.html",
    "revision": "2e08b611c4ed71ab08ef8bd422a6017a"
  },
  {
    "url": "views/css_doc/08渐变.html",
    "revision": "9f50557485971766b411e63eeadabfcd"
  },
  {
    "url": "views/css_doc/09动画.html",
    "revision": "9b0e56d8c0d04f433bca1bfefae1a6f5"
  },
  {
    "url": "views/css_doc/10-1移动端布局注意事项.html",
    "revision": "63b32537d42e00434d57e0bd6930c5ab"
  },
  {
    "url": "views/css_doc/10移动端布局基础.html",
    "revision": "848814dfd8148224167a41dac633bf86"
  },
  {
    "url": "views/css_doc/11弹性布局.html",
    "revision": "1b566019d480322466cc237fbc4bb6a3"
  },
  {
    "url": "views/css_doc/12iconfont图标字体的使用.html",
    "revision": "e69b6640e404326b882b9802008e1138"
  },
  {
    "url": "views/css_doc/13媒体查询.html",
    "revision": "85f0d0275970c8425ca2737eece363a1"
  },
  {
    "url": "views/DataBase_doc/MySQL基础.html",
    "revision": "fc8f7f9c084f84edec26962e98ff5954"
  },
  {
    "url": "views/DataBase_doc/MySQL数据库DML语句.html",
    "revision": "e325fb70235a8ce11da67bae1119563f"
  },
  {
    "url": "views/DataBase_doc/MySQL数据类型.html",
    "revision": "b789cb6527574a787815d5a85e5cfa01"
  },
  {
    "url": "views/DataBase_doc/NodeJS操作MySQL数据库.html",
    "revision": "f4649da66da9b3fdbe9dd45292b42f4a"
  },
  {
    "url": "views/ES6/ES6.html",
    "revision": "d96cf7545db5ca9ab55de7c3d9700b8e"
  },
  {
    "url": "views/Express_doc/art-template在Express中的使用.html",
    "revision": "4a02afb6f2b7954ee7b002096cb988ba"
  },
  {
    "url": "views/Express_doc/art-template的使用.html",
    "revision": "471d6bff8468c986eb304e2029fe9f9d"
  },
  {
    "url": "views/Express_doc/Cookie与Session在Express项目中的使用.html",
    "revision": "04b5f85c5306237ab898ba154db72f8d"
  },
  {
    "url": "views/Express_doc/Express创建过程.html",
    "revision": "6254e07af74f781d926f9ce9ead47e6c"
  },
  {
    "url": "views/Express_doc/Express复习课.html",
    "revision": "fb44b8c880abf937cb3c4eeaaaa7b368"
  },
  {
    "url": "views/Express_doc/Express当中的JSON与JSONP.html",
    "revision": "d02614fc2da700e28758a733f7e217fa"
  },
  {
    "url": "views/Express_doc/Express文件上传.html",
    "revision": "f30f388f8abc9ac692678f86feca5c2e"
  },
  {
    "url": "views/Express_doc/Express里的路由.html",
    "revision": "b632ed7ef124555aced509cb13ca53f2"
  },
  {
    "url": "views/Express_doc/数据库操作中异步编程的实现.html",
    "revision": "1c5dc17e4477dde245e150cc62c04232"
  },
  {
    "url": "views/html_doc/HTML基础.html",
    "revision": "eb397805293182b3ed44b1c9d5bfbcbc"
  },
  {
    "url": "views/Jquery_doc/01-jQuery.html",
    "revision": "cb58c36b9a32f50514ed197b3612fe3a"
  },
  {
    "url": "views/Jquery_doc/02-jQuery扩展方法.html",
    "revision": "f4087ab33d369e4e12b92f670b39eb80"
  },
  {
    "url": "views/Jquery_doc/03-jQuery实现轮播图.html",
    "revision": "87e85eccd2f8146994e98dfea2acc428"
  },
  {
    "url": "views/Jquery_doc/04-jquery.validator使用.html",
    "revision": "7f89c1b93a070493038ecf14ab02bd62"
  },
  {
    "url": "views/Jquery_doc/Ajax.html",
    "revision": "0cdda76aa137b0bc6629e46daefd725f"
  },
  {
    "url": "views/js_doc/01JavaScript第一课.html",
    "revision": "3b5ac120eae387a4f476a6c75a732c3f"
  },
  {
    "url": "views/js_doc/02JavaScript第二课.html",
    "revision": "502e1e780015c73e36fb9108161bf2fc"
  },
  {
    "url": "views/js_doc/03JavaScript基础语法二.html",
    "revision": "f79c17398c934bda271bfe595f1743c1"
  },
  {
    "url": "views/js_doc/04语句.html",
    "revision": "dd17707294ba68cc24a14de5840157a8"
  },
  {
    "url": "views/js_doc/05数组.html",
    "revision": "03a6db6e6c17523a9c62aedaf2c83afa"
  },
  {
    "url": "views/js_doc/06二维数组.html",
    "revision": "90da08582ccdc88110253872832cde9a"
  },
  {
    "url": "views/js_doc/07函数.html",
    "revision": "cb03715586772d34b5719fdb1d847f52"
  },
  {
    "url": "views/js_doc/08对象与方法番外篇.html",
    "revision": "86cb88b2a7297f43410563d07d74f2a7"
  },
  {
    "url": "views/js_doc/09面向对象程序设计.html",
    "revision": "023b724d4b6b5407fb51277a4768b241"
  },
  {
    "url": "views/js_doc/10面向对象程序设计2.html",
    "revision": "0ea3d4ab7d664a4ae37af8fad60d0ed1"
  },
  {
    "url": "views/js_doc/11面向对象程序设计3.html",
    "revision": "f00252c767bc7435ffe7f4166e28c278"
  },
  {
    "url": "views/js_doc/12执行上下文栈.html",
    "revision": "65b4829445fd412a7a33c56b63b0f740"
  },
  {
    "url": "views/js_doc/13内置对象包装对象.html",
    "revision": "ffb7ea0c176b704b5c7db3b0f8c1d963"
  },
  {
    "url": "views/js_doc/14DOM.html",
    "revision": "7bbbe044335934bb74f0b6d3668e3d5a"
  },
  {
    "url": "views/js_doc/15DOM之Node节点补充.html",
    "revision": "07d200e2d327172dc620bf4816557a84"
  },
  {
    "url": "views/js_doc/16DOM事件.html",
    "revision": "b5feaff13fe5ab176abc36bef5d71ad5"
  },
  {
    "url": "views/js_doc/17封装自己的jQuery.html",
    "revision": "a3cfd2448ac09b6b129e6231dd251d2d"
  },
  {
    "url": "views/js_doc/18JS与CSS结合.html",
    "revision": "5481bfa0ac180d2929e5b2ad3553b9af"
  },
  {
    "url": "views/js_doc/19BOM.html",
    "revision": "6154fa6483b73d68472742e0e1620ed1"
  },
  {
    "url": "views/js_doc/20canvas.html",
    "revision": "9087855a74696df941baa11da475fb1e"
  },
  {
    "url": "views/js_doc/21音频视频.html",
    "revision": "3e32a17b4ef25a26f82fff858c50e3ea"
  },
  {
    "url": "views/js_doc/22移动端事件.html",
    "revision": "b0833b9a9a643807579fe4a1b3ed8d9f"
  },
  {
    "url": "views/Mini_Program/01微信小程序基础.html",
    "revision": "48464c1c5ebdbdf9af488d8179ec5803"
  },
  {
    "url": "views/Mini_Program/02微信小程序基础.html",
    "revision": "ab80cdb69275c3fec16424e665bf8ba7"
  },
  {
    "url": "views/NodeJs/NodeJS常用插件.html",
    "revision": "b38b2a1c667b12b63523ee21274fb520"
  },
  {
    "url": "views/NodeJs/NodeJS异步编程解决方案.html",
    "revision": "04cb3d46bc45973b6ba23803f25e27a3"
  },
  {
    "url": "views/NodeJs/NodeJS操作MySQL数据库.html",
    "revision": "4ddca4d5cf33a1cf46b528a3aef47bbe"
  },
  {
    "url": "views/Sass_doc/01-Sass基础知识.html",
    "revision": "9334df17660c43bccfc555a013e3e899"
  },
  {
    "url": "views/Sass_doc/02-Sass高级语法.html",
    "revision": "fc1a294979d1b240bdeef3bc07aa17d3"
  },
  {
    "url": "views/Tools/Typora使用.html",
    "revision": "fe2b891847cc85698cb9a5e7a9bf1c54"
  },
  {
    "url": "views/Vue_doc/01-Vue基础第一课.html",
    "revision": "35b5964e0fb75039b9ad9f2d1e9b77ef"
  },
  {
    "url": "views/Vue_doc/02-Vue基础第二课.html",
    "revision": "9b64f33f44cfb77dbff738bb26f3c5dd"
  },
  {
    "url": "views/Vue_doc/03-Vue中的数据请求.html",
    "revision": "fb747fa13f7981b15097013d953e9536"
  },
  {
    "url": "views/Vue_doc/04-Vue基础第四课.html",
    "revision": "d8c770c475134a3f8ace71c619f871ab"
  },
  {
    "url": "views/Vue_doc/05-Vue生命周期.html",
    "revision": "7025fcab44ac039c4ffdcd528cb190dd"
  },
  {
    "url": "views/Vuepress_doc/搭建Vuepress.html",
    "revision": "5f701efb23c8ed932d5532c21bb7955b"
  },
  {
    "url": "views/Webapck_doc/00-WebPack基础教程.html",
    "revision": "a52adf31e9f677b1853ab36d958f0537"
  },
  {
    "url": "views/Webapck_doc/01-WebPack入门教程一.html",
    "revision": "a8715b2610c45faf1efff9b8913489bd"
  },
  {
    "url": "views/Webapck_doc/02-WebPack入门教程二.html",
    "revision": "62b2c781488adcb9f9dde424bf8d1d00"
  },
  {
    "url": "views/Webapck_doc/03-webpack+sass+babel+postcss配置.html",
    "revision": "d94b4ee8fd75231babca9b1342f55451"
  },
  {
    "url": "views/Webapck_doc/04-WebPack多页面配置.html",
    "revision": "f13ed725b14deb5ecbe9d564e2c47475"
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
