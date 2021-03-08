console.log('Hello World');

const os = require('os');
console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

//////////////03
const fs = require('fs');
const fileName = 'C:/Users/DELL/WebstormProjects/untitled2' + '/test.txt';
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    }

    console.log(data.toString());
});

const data = fs.readFileSync(fileName);
console.log(data.toString());

//////04
const fileName_ = 'C:/Users/DELL/WebstormProjects/untitled2' + '/test.txt';
const outFileName = 'C:/Users/DELL/WebstormProjects/untitled2' + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});

///////////////////05
/*const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);*/


const http_ = require('http');
http_.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, () => {
    console.log('Server is listening to port 3000')
});