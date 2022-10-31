const rawObjectsMock = [
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'icon'
      },
      {
        key: 'type',
        value: 'image/x-icon'
      },
      {
        key: 'href',
        value: '/favicon.ico'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'icon'
      },
      {
        key: 'type',
        value: 'image/png'
      },
      {
        key: 'sizes',
        value: '16x16'
      },
      {
        key: 'href',
        value: '/favicon-16x16.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'icon'
      },
      {
        key: 'type',
        value: 'image/png'
      },
      {
        key: 'sizes',
        value: '32x32'
      },
      {
        key: 'href',
        value: '/favicon-32x32.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'icon'
      },
      {
        key: 'type',
        value: 'image/png'
      },
      {
        key: 'sizes',
        value: '48x48'
      },
      {
        key: 'href',
        value: '/favicon-48x48.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'manifest'
      },
      {
        key: 'href',
        value: '/manifest.webmanifest'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'mobile-web-app-capable'
      },
      {
        key: 'content',
        value: 'yes'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'theme-color'
      },
      {
        key: 'content',
        value: '#fff'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'application-name'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '57x57'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-57x57.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '60x60'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-60x60.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '72x72'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-72x72.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '76x76'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-76x76.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '114x114'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-114x114.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '120x120'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-120x120.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '144x144'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-144x144.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '152x152'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-152x152.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '167x167'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-167x167.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '180x180'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-180x180.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-icon'
      },
      {
        key: 'sizes',
        value: '1024x1024'
      },
      {
        key: 'href',
        value: '/apple-touch-icon-1024x1024.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'apple-mobile-web-app-capable'
      },
      {
        key: 'content',
        value: 'yes'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'apple-mobile-web-app-status-bar-style'
      },
      {
        key: 'content',
        value: 'black-translucent'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'apple-mobile-web-app-title'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-640x1136.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1136x640.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-750x1334.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1334x750.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1125x2436.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2436x1125.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1170x2532.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2532x1170.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-828x1792.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1792x828.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1242x2688.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2688x1242.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1242x2208.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2208x1242.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1284x2778.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2778x1284.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1536x2048.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2048x1536.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1620x2160.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2160x1620.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1668x2388.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2388x1668.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1668x2224.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2224x1668.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2048x2732.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'apple-touch-startup-image'
      },
      {
        key: 'media',
        value: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-2732x2048.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'msapplication-TileColor'
      },
      {
        key: 'content',
        value: '#fff'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'msapplication-TileImage'
      },
      {
        key: 'content',
        value: '/mstile-144x144.png'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'meta',
    attributes: [
      {
        key: 'name',
        value: 'msapplication-config'
      },
      {
        key: 'content',
        value: '/browserconfig.xml'
      }
    ],
    children: []
  },
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'yandex-tableau-widget'
      },
      {
        key: 'href',
        value: '/yandex-browser-manifest.json'
      }
    ],
    children: []
  }
];

let htmlArrayMock = [
  '<link rel="icon" type="image/x-icon" href="/favicon.ico">',
  '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">',
  '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
  '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">',
  '<link rel="manifest" href="/manifest.webmanifest">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="theme-color" content="#fff">',
  '<meta name="application-name">',
  '<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">',
  '<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">',
  '<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">',
  '<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">',
  '<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">',
  '<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">',
  '<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">',
  '<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">',
  '<link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png">',
  '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">',
  '<link rel="apple-touch-icon" sizes="1024x1024" href="/apple-touch-icon-1024x1024.png">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">',
  '<meta name="apple-mobile-web-app-title">',
  '<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-touch-startup-image-640x1136.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/apple-touch-startup-image-1136x640.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-touch-startup-image-750x1334.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/apple-touch-startup-image-1334x750.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-touch-startup-image-1125x2436.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/apple-touch-startup-image-2436x1125.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-touch-startup-image-1170x2532.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/apple-touch-startup-image-2532x1170.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-touch-startup-image-828x1792.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/apple-touch-startup-image-1792x828.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-touch-startup-image-1242x2688.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/apple-touch-startup-image-2688x1242.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-touch-startup-image-1242x2208.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/apple-touch-startup-image-2208x1242.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-touch-startup-image-1284x2778.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/apple-touch-startup-image-2778x1284.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-touch-startup-image-1536x2048.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/apple-touch-startup-image-2048x1536.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-touch-startup-image-1620x2160.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/apple-touch-startup-image-2160x1620.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-touch-startup-image-1668x2388.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/apple-touch-startup-image-2388x1668.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-touch-startup-image-1668x2224.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/apple-touch-startup-image-2224x1668.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-touch-startup-image-2048x2732.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/apple-touch-startup-image-2732x2048.png">',
  '<meta name="msapplication-TileColor" content="#fff">',
  '<meta name="msapplication-TileImage" content="/mstile-144x144.png">',
  '<meta name="msapplication-config" content="/browserconfig.xml">',
  '<link rel="yandex-tableau-widget" href="/yandex-browser-manifest.json">'
];

export default {
  rawObjectsMock,
  htmlArrayMock
}
