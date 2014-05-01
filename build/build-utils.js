({
  baseUrl: '../js',
  name: 'lib/almond',
  include: ['utils'],
  insertRequire: ['utils'],
  out: '../js/mylibrary.utils-min.js',
    wrap: {
      startFile: 'header.frag',
      endFile: 'footer.frag'
    },
  removeCombined: true
})
