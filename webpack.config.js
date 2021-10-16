const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        vendors: [
            "webpack-material-design-icons"
            ]
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pages/index.pug',
            // minify: {
            //     collapseWhitespace: isProd
            // }
        }),
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname,''),
        //         to: path.resolve(__dirname,'dist')
        //     }
        // ])
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                        options: {},
                }, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                  // compiles Less to CSS
                  "style-loader",
                  "css-loader",
                  "less-loader",
                ],
              },
            {
                test: /\.(png|jpg|gif)$/,   
                type: 'asset/resource',
                generator: {
                    filename: './images/[name][ext][query]'
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext][query]'
                }
            },
        ]
    }
}












// cross-env NODE_ENV=development
// cross-env NODE_ENV=production
// cross-env NODE_ENV=development
// cross-env NODE_ENV=development



