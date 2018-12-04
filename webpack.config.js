const path = require('path'); // Node method to get the path

module.exports = { // This is where we configure all of the details
    entry: './src/app.js', // Where webpack should start
    output: {
        path: path.join(__dirname, 'public'), // The ABSOLUTE path to where want to output the webapack file
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', // What module we want to load
            test: /\.js$/, // What types of files we want to load it into
            exclude: /node_modules/ // Where we want to exclude it from 
        }, {
            test: /\.s?css$/, // Targeting all of our scss files
            use: [ // use allows for an array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }] 
    },
    devtool: 'cheap-module-source-map', // More options can be found on the webpack website. this allows for better debugging
    devServer: {
        contentBase: path.join(__dirname, 'public'), // Where we want to host the live server
        historyApiFallback: true, // This tells the server we'll be handling routing via our client side code
    }
};
