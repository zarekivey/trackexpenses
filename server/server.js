const path = require('path');
const express = require('express'); //  importing in node
const app = express();
const publicPath = path.join(__dirname, '..', 'public') // this is to serve up express to all apps in this directory

app.use(express.static(publicPath));

app.get('*', (req, res) => { // * acts as a link to the directory
    res.sendFile(path.join(publicPath, 'index.html')); // this is directing the user to index.html
}); 

app.listen(3000, () => { //  where the server will run 
    console.log('server is up')
});