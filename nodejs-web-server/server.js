/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
*/

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    
    const { method, url } = request;
 
    if(url === '/'){
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message : 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message : `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message : 'Halo! Ini adalah halaman about',
            }));
        } else if (method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
       
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message : `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message : `Halaman tidak dapat diakses menggunakan ${method} request`,
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message : 'Halaman tidak ditemukan!',
        }));
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
// curl -X GET http://localhost:5000/about
// // output: <h1>Halo! Ini adalah halaman about</h1>
// curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
// // output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
// curl -X PUT http://localhost:5000/about
// // output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
// curl -X DELETE http://localhost:5000/about
// // output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>