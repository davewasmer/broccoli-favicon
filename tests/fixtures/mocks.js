const rawObjectsMock = [
  {
    type: 'element',
    tagName: 'link',
    attributes: [
      {
        key: 'rel',
        value: 'shortcut icon'
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
        value: 'manifest'
      },
      {
        key: 'href',
        value: '/manifest.json'
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
        value: '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-320x460.png'
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
        value: '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-640x920.png'
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
        value: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-640x1096.png'
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
        value: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-750x1294.png'
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
        value: '(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1182x2208.png'
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
        value: '(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1242x2148.png'
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
        value: '(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-748x1024.png'
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
        value: '(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-768x1004.png'
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
        value: '(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1496x2048.png'
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
        value: '(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        key: 'href',
        value: '/apple-touch-startup-image-1536x2008.png'
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
        value: '228x228'
      },
      {
        key: 'href',
        value: '/coast-228x228.png'
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
  '<link rel="shortcut icon" href="/favicon.ico">',
  '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">',
  '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
  '<link rel="manifest" href="/manifest.json">',
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
  '<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="/apple-touch-startup-image-320x460.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-640x920.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-640x1096.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-750x1294.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="/apple-touch-startup-image-1182x2208.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="/apple-touch-startup-image-1242x2148.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="/apple-touch-startup-image-748x1024.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="/apple-touch-startup-image-768x1004.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-1496x2048.png">',
  '<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-1536x2008.png">',
  '<link rel="icon" type="image/png" sizes="228x228" href="/coast-228x228.png">',
  '<meta name="msapplication-TileColor" content="#fff">',
  '<meta name="msapplication-TileImage" content="/mstile-144x144.png">',
  '<meta name="msapplication-config" content="/browserconfig.xml">',
  '<link rel="yandex-tableau-widget" href="/yandex-browser-manifest.json">'
];

export default {
  rawObjectsMock,
  htmlArrayMock
}
