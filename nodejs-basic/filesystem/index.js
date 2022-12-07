// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('notes.txt', 'UTF-8', fileReadCallback);
// path.resolve(__dirname, 'notes.txt');

// Alternatif
// const fs = require('fs');
 
// const data = fs.readFileSync('notes.txt', 'UTF-8');
// console.log(data);

// Execute using :
// node ./filesystem/index.js