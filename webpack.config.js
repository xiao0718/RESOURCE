const path = require('path')
// console.log(path.resolve())
// console.log(path.join(__dirname,'./dist'))
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin  = require('copy-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,'./dist')
    },
    module:{
        rules: [
            {
                test:/\.(scss|sass)$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                loader: "babel-loader"
            },

        ]
    },
    devServer: {
        hot:true
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}),new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "template.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(__dirname, 'assets'),
                        to: 'assets'
                    }
                ]
            }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[id].css'
        })
    ]

}