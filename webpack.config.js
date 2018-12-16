const path = require('path'); // Node method to get the path
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => { 
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' }); 

    return { // This is where we configure all of the details
    entry: ['babel-polyfill', './src/app.js'], // Where webpack should start
    output: {
        path: path.join(__dirname, 'public', 'dist'), // The ABSOLUTE path to where want to output the webapack file
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader:'babel-loader', // What module we want to load
            test: /\.js$/, // What types of files we want to load it into
            exclude: /node_modules/ // Where we want to exclude it from 
        }, {
            test: /\.s?css$/, // Targeting all of our scss files
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }] 
    },
    plugins: [
        CSSExtract,
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
        })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // More options can be found on the webpack website. this allows for better debugging
    devServer: {
        contentBase: path.join(__dirname, 'public'), // Where we want to host the live server
        historyApiFallback: true, // This tells the server we'll be handling routing via our client side code
        publicPath: '/dist/'
    }
};
};