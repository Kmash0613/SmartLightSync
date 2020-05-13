$(function() {
    // 2スライダーを適用
    $('#color_slider').slider({
        min: 0,
        max: 100,
        step: 2,
        value: 0,
        // 3スライダーの変化時にテキストボックスの値表示を更新
        change: function(e, ui) {
            $('#num').val(ui.value);
        },
        // 4スライダーの初期化時に、その値をテキストボックスにも反映
        create: function(e, ui) {
            $('#num').val($(this).slider('option', 'value'));
        }
    });
    //
    $('#video_slider').slider({
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        // 3スライダーの変化時にテキストボックスの値表示を更新
        slide: function(e, ui) {

            slideFader(ui.value);
        }
    });
    //
    $('#master_light_slider').slider({
        orientation: 'vertical',
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        // 3スライダーの変化時にテキストボックスの値表示を更新
        slide: function(e, ui) {
            changeMasterDimmer(ui.value);
        }
    });
    //
    $('#master_screen_slider').slider({
        orientation: 'vertical',
        min: 0,
        max: 100,
        step: 2,
        value: 50,
        // 3スライダーの変化時にテキストボックスの値表示を更新
        change: function(e, ui) {
            $('#num').val(ui.value);
        },
        // 4スライダーの初期化時に、その値をテキストボックスにも反映
        create: function(e, ui) {
            $('#num').val($(this).slider('option', 'value'));
        }
    });
    //


    //以下外部に逃がす

    tmp_nowCh = 1; //
    //グローバル変数
    bal = 0; //バランスA&B
    //dim=255;マスターディマー(廃止)
    masterRGB = [0, 0, 0, 0]; //マスター[1ch,2c,...]=[R,G,B,Dimmer]
    //初期化
    function initialize() {
            confirmRGB(masterRGB);
        }
        //文字列rgb(r,g,b)から配列[r,g,b]に
    function cssToRgb(cssColor) {
            var tmp_RGB = masterRGB;
            tmp_RGB = cssColor.replace('rgb', "").replace('(', "").replace(')', "").replace(/ /g, "").split(',');
            return tmp_RGB;
        }
        //対象要素名と配列RGB[r,g,b]を渡すと、その要素の背景色をその色に変更
    function changeBG(target, bgRGB) {
            var tmp_bgColor = 'rgb(' + bgRGB[0] + ',' + bgRGB[1] + ',' + bgRGB[2] + ')';
            var tmp_Opacity = bgRGB[3] / 255;
            $(target).css({
                'backgroundColor': tmp_bgColor,
                'opacity': tmp_Opacity
            });
        }
        //2つのRGB値から指定割合でのRGBを検出
    function calRGB(RgbAch, RgbBch, Bal) {
        var tmp_RGB = masterRGB;
        Bal = Bal / 100;
        tmp_RGB[0] = RgbAch[0] * (1 - Bal) + RgbBch[0] * Bal;
        tmp_RGB[1] = RgbAch[1] * (1 - Bal) + RgbBch[1] * Bal;
        tmp_RGB[2] = RgbAch[2] * (1 - Bal) + RgbBch[2] * Bal;
        tmp_RGB[0] = Math.round(tmp_RGB[0]);
        tmp_RGB[1] = Math.round(tmp_RGB[1]);
        tmp_RGB[2] = Math.round(tmp_RGB[2]);
        //tmp_RGB[3]=dim;
        return tmp_RGB;
    }

    //最終的なプッシュ
    function confirmRGB(setRGB) {
            //masterRGBに値をセット
            masterRGB = setRGB;
            sendMessage(masterRGB, 0, 0, 0);
            changeBG('#ch_a', masterRGB);
        }
        //=====▲整理済み======//

    //スイッチボタンを押した時の挙動
    function switchBtn() {
        var bgcolorB = $('#color_ch_b').css('background-color');
        var bgcolorA = $('#color_ch_a').css('background-color');
        var tmp_RGB = masterRGB;
        tmp_RGB = masterRGB;
        bgcolorA = cssToRgb(bgcolorA);
        bgcolorB = cssToRgb(bgcolorB);
        if (tmp_nowCh != 2) {
            bal = 100;
            tmp_nowCh = 2;

        } else {
            bal = 0;
            tmp_nowCh = 1;
        }
        $('#video_slider>span').css({
            left: bal + '%'
        });
        tmp_RGB = calRGB(bgcolorA, bgcolorB, bal);

        confirmRGB(tmp_RGB);
    }

    //スライダーをスライド時に実行
    function slideFader(balance) {
            var tmp_RGB = masterRGB;
            var bgcolorB = $('#color_ch_b').css('background-color');
            var bgcolorA = $('#color_ch_a').css('background-color');
            bgcolorA = cssToRgb(bgcolorA);
            bgcolorB = cssToRgb(bgcolorB);
            tmp_RGB = calRGB(bgcolorA, bgcolorB, balance);
            bal = balance;
            confirmRGB(tmp_RGB);
        }
        //マスターディマースライド時に実行
    function changeMasterDimmer(tmp_Dim) {
        var tmp_RGB = masterRGB;
        tmp_RGB[3] = tmp_Dim;
        confirmRGB(tmp_RGB);
    }



    $(document).ready(function() {
        initialize();
        $(window).off('.noScroll');
        //スイッチクリック  
        $('.switch').click(function() {
            switchBtn();
        });
        //タップしたカラーパレットをアクティブに
        $('.color').click(function() {
            $('.color').removeClass('active');
            $(this).addClass('active');
        });
        //SET-Aをタップ
        $('#color_ch_a_set').click(function() {
            var tmp_RGB = masterRGB;
            var tmp_Bal = bal;
            activePalletBg = $('.active').css('background-color');
            $('#color_ch_a').css('background-color', activePalletBg);
            slideFader(tmp_Bal);
            confirmRGB(tmp_RGB);
        });
        //SET-Bをタップ
        $('#color_ch_b_set').click(function() {
            var tmp_RGB = masterRGB;
            var tmp_Bal = bal;
            activePalletBg = $('.active').css('background-color');
            $('#color_ch_b').css('background-color', activePalletBg);
            slideFader(tmp_Bal);
            confirmRGB(tmp_RGB);
        });
        //Boutをタップ
        $('#led_bout').click(function() {
            changeMasterDimmer(0);
            $('#master_light_slider').slider("value", 0);
        });
        //Woutをタップ
        $('#led_wout').click(function() {
            changeMasterDimmer(255);
            $('#master_light_slider').slider("value", 255);

        });

    });

});