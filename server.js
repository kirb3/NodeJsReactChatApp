// Chat App server file
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 4000;
// Tell the server to listen on port 4000
server.listen(port, () => console.log(`Running on port ${port}`));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    //Log the new connection
    const user = socket.handshake.query.user;
    console.log(`New client, ${user}, connected: `,socket.id);
    socket.on('clientMsg', (msg) => {
        //Log the msg in server console
        console.log(`${msg.user}: ${msg.msg}`);
        //A msg was received from client, so broadcast to other clients 
        socket.broadcast.emit('serverMsg',msg);

    });

    socket.on('disconnect', () => {
        console.log(`A client, (${user}), disconnected: `,socket.id);
    });

});