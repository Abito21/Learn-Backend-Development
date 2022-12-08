/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
*/

const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    // GET
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    // POST
    if(method === 'POST') {
        let body = [];
    
        request.on('data', (chunk) => {
            body.push(chunk);
        });
       
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
          });
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// Keterangan :
// Selamat! Anda berhasil membuat HTTP Server pertama menggunakan Node.js.
// Anda bisa coba melakukan request pada server tersebut melalui cURL seperti ini:
// curl -X POST http://localhost:5000
// // output: <h1> Halo HTTP Server!</h1>
// curl -X PUT http://localhost:5000
// // output: <h1> Halo HTTP Server!</h1>
// curl -X DELETE http://localhost:5000
// // output: <h1> Halo HTTP Server!</h1>
// curl -X GET http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>