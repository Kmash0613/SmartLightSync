//重力加速度を取得して送信
pre_x = 0;
window.addEventListener("devicemotion", function(evt) {
    var x = evt.accelerationIncludingGravity.x; // 横方向の傾斜
    //var y = evt.accelerationIncludingGravity.y;	// 縦方向の傾斜
    //var z = evt.accelerationIncludingGravity.z;	// 上下方向の傾斜
    var abs_x = Math.abs(pre_x - x);
    if (abs_x > 5) {
        pre_x = x;
        x = Math.round(x);
        abs_x = Math.round(abs_x);
        sendCount(1);
    }
}, true);
//初期画面
function done() {
    $('#pre').fadeOut();
}

//docureaday
$(document).ready(function(e) {
    //	$(this).gShake(function() { 
    //        sendCount();
    //    });
    sendInitial();
    setTimeout("done()", 1000);
    //draw();
});