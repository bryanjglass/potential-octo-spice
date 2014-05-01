# RequireJS w/ AlmondJS

This is a quick example to demonstrate exporting modules compatible with non-AMD JavaScript.  Check out [index.html](https://rawgit.com/bryanjglass/potential-octo-spice/master/index.html) to see the results.

## Building

The *-min.js files have been committed to this repo, but ordinarily you would want to build them using the RequireJS optimizer (build/r.js).

### Ordinary optimization (for RequireJS users)

Configuration for the normal build is in `build/build.js`. To compile:

`node build/r.js -o build/build.js`

This produces `js/main-min.js` which will include all of the necessary dependencies (sans RequireJS itself).

### Optimizing for non-AMD

To be compatible outside of RequireJS, we use AlmondJS and export the module under the global variable, `mylibrary`

`node build/r.js -o build/build-utils.js`

This produces `js/mylibrary.utils-min.js`, and can be included just like any regular 'ole JS file.
