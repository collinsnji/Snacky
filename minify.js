const compressor = require('node-minify');
compressor.minify({
    compressor: 'clean-css',
    input: 'src/snacky.css',
    output: 'dist/snacky.min.css',
    callback: (err, min) => { }
});