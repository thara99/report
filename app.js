//console.log('Hello world');
/*const os = require('os');

console.log(os.arch());
console.log(os.cpus().length);
console.log(os.platform());*/

const fs = require('fs');

/*const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data.toString());
})

const data = fs.readFileSync(fileName);
console.log(data.toString());*/

const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data=>{
    console.log(data.toString());
});


