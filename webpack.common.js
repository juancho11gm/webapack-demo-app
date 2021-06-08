const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    output: {
        assetModuleFilename: 'images/[name].[hash].[ext]'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', // 3. Injects styles into DOM
                    'css-loader', // 2. Turns css into commonjs
                    'sass-loader' // 1. Turns sass into css
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    }
}