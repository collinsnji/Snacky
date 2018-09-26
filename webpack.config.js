module.exports = {
    entry: './index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'snacky.min.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}