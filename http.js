const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Welcome to about us');
    } else {
        res.end(`<h1>Lol I Caught you </h1>
        <a href="/">Back to home</a>`);
    }

}) 

server.listen(5500,() => {
    console.log('Server is listening on port 5500');
})