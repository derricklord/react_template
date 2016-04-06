var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var compression = require('compression');

var connections = [];
var title = 'New Presentation';

app.use(express.static('./client/'));
app.use(express.static('./node_modules/bootstrap/dist'));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'index.html'))
});

io.sockets.on('connect', function(socket){
    
    socket.once('disconnect', function(){
       connections.splice(connections.indexOf(socket), 1);
       socket.disconnect(); 
       console.log('socket disconnected: ' + socket.id);
       console.log('total connections: ' + connections.length);
    });
    
    socket.emit('welcome', {title:title});
   
   connections.push(socket);
   console.log('socket connected: ' + socket.id); 
   console.log('total connections: ' + connections.length);
});


http.listen(3000, function(){
   console.log('Polling Server listening on port: ' + 3000); 
});