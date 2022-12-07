/// Untuk melihat memory usage yang digunakan (process.memoryUsage)
// const cpuInformation = process.memoryUsage();
// console.log(cpuInformation);

/// Untuk menjalankan process.argv
// const firstName = process.argv[2];
// const lastName = process.argv[3]; 
// console.log(`Hello ${firstName} ${lastName}`);

/// Untuk menjalankan process.env (untuk menyimpan manual data ke dalam process env)
/// dengan membuat properti NODE_ENV
// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });
/// Menjalankannya menggunakan CMD
// SET NODE_ENV=production && node app.js