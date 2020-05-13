const io = require('socket.io');
//var express = require('express');
const http = require('http');
//var app = express();
//app.use(express.static(__dirname + '/'));



http.createServer(
    function (request, response) {
    // リクエストを受けると以下のレスポンスを送信する
    response.writeHead(200, {'Content-Type': 'text/plain'}); //レスポンスヘッダーに書き込み
    response.end('Hello World\n'); // レスポンスボディに書き込み＆レスポンス送信を完了する
}
).listen(process.env.PORT || 8080); //公開ポートで待ち受け
