const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // Split code into separate chunks
        },
    },
    output: {
        filename: '[name].bundle.js', // Use [name] to ensure unique filenames
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, './public'),
        open: true,
        port: 8564,
    },
    plugins: [
        new CleanWebpackPlugin(), // Clean the public folder before each build
        new HtmlWebpackPlugin({
            title: 'Holberton Dashboard',
            filename: 'index.html', // Output filename
            chunks: ['header', 'body', 'footer'], // Include specific chunks
        }),
    ],
}