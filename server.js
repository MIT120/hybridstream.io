const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log('New user connected');
  console.log('GOSHE');

  socket.on('message', (message) => {
    console.log(message);
    var mysql = require('mysql')
    var connection = mysql.createConnection({
    host: 'studmysql01.fhict.local',
    user: 'dbi358717',
    password: 'katinar4e',
    // database: 'dbi358717'
    })

    // connection.connect(function(err) {
    //   if (err) {
    //     throw err;
    //   } 
    //   console.log("Connected!");
    // });
    // // if (connection.)
    // console.log("DB MAINA", connection.config);
    // connection.query('SELECT * FROM `account`;', function (err, rows, fields) {
    //   console.log(rows);
    //   console.log(fields);
    //   if (err) {
    //     console.log(err);
    //   } 
    //   console.log('The solution is: ', rows);
    // })

    // connection.end()
  });

  socket.on('disconnect', () => {
    console.log('User disconnected')
  });
});

server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
