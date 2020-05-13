var io = require('socket.io');
var express = require('express');
var http = require('http');

var app = express();
app.use(express.static(__dirname + '/'));

var server = http.createServer(app).listen(80);
var io = io.listen(server);

io.sockets.on("connection", function(socket) {

    // メッセージ送信（送信者にも送られる）
    socket.on("C_to_S_message", function(data) {
        io.sockets.emit("S_to_C_message", {
            value: data.value
        });
    });

    // ブロードキャスト（送信者以外の全員に送信）
    socket.on("C_to_S_broadcast", function(data) {
        socket.broadcast.emit("S_to_C_message", {
            value: data.value
        });
    });

    // 切断したときに送信
    socket.on("disconnect", function() {
        //    io.sockets.emit("S_to_C_message", {value:"user disconnected"});
    });
});