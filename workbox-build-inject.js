// We will use injectManifest mode
const {
  injectManifest
} = require('workbox-build');

// Sample configuration with the basic options
var workboxConfig = {
  globDirectory: 'dist/book-store/',
  globPatterns: [
    '**/*.{txt,png,ico,html,js,json,css'
  ],
  swSrc: 'src/service-worker.js',
  swDest: 'dist/book-store/service-worker.js',
};

// Calling the method and output the result
injectManifest(workboxConfig).then(({
  count,
  size
}) => {
  console.log(`Generated ${workboxConfig.swDest}, which will precache ${count} files, ${size} bytes.`)
})
