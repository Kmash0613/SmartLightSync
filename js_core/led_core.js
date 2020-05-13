 var s = io.connect(); //リモート
 //var s = io.connect('http://localhost:3000'); //ローカル
 //サーバから受け取るイベント
 s.on("connect", function() {}); // 接続時
 s.on("disconnect", function(client) {}); // 切断時
 s.on("S_to_C_message", function(data) {
     addMessage(data.value);
 });
 //ここから変数
 //var msg=new Array[3];

 //クライアントからイベント送信（イベント名は自由に設定できます）
 function sendMessage(c_1, c_2, c_3) {


     var msg = new Array(3);
     msg[0] = c_1;
     msg[1] = c_2;
     msg[2] = c_3;
     //var msg = $("#message").val(); //取得
     //$("#message").val(""); //空白にする
     s.emit("C_to_S_message", {
         value: msg
     }); //サーバへ送信
 }




 function sendBroadcast() {
     var msg = $("#message").val(); //取得
     $("#message").val(""); //空白にする
     s.emit("C_to_S_broadcast", {
         value: msg
     }); // サーバへ送信
 }

 //jqueryでメッセージを追加
 function addMessage(msg) {
     //console.log(msg[0]);
     rgb_s = msg[0];
     //rgb_raw=rgb_raw.replace(/rgb/g,'');
     //rgb_raw=rgb_raw.replace("(",'');
     //rgb_raw=rgb_raw.replace(")",'');
     //rgb_s = rgb_raw.split( "," );
     serial_cmd = '1c' + rgb_s[0] + 'w' + '2c' + rgb_s[1] + 'w' + '3c' + rgb_s[2] + 'w' + '4c' + rgb_s[3] + 'w';
     serial_cmd = serial_cmd.replace(/\s+/g, "");
     //コンソールにシリアル信号をoutput
     console.log(serial_cmd);
 }