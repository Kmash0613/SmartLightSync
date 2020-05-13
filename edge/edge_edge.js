/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function(compId) {

    "use strict";
    var im = 'images/',
        aud = 'media/',
        vid = 'media/',
        js = 'js/',
        fonts = {},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [],
        scripts = [],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [{
                        id: 'Rectangle2',
                        type: 'rect',
                        rect: ['-6px', '-19px', '819px', '479px', 'auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0, "rgb(0, 0, 0)", "none"]
                    }, {
                        id: 'SubPhones',
                        symbolName: 'SubPhones',
                        type: 'rect',
                        rect: ['1115px', '-295px', '382', '188', 'auto', 'auto']
                    }, {
                        id: 'monitor',
                        display: 'none',
                        type: 'rect',
                        rect: ['111px', '10px', '800px', '450px', 'auto', 'auto'],
                        opacity: '1',
                        fill: ["rgba(255,225,0,1.00)"],
                        stroke: [0, "rgba(0,0,0,1)", "none"],
                        transform: [
                            [],
                            ['90'],
                            [],
                            ['4.4', '4.4']
                        ]
                    }, {
                        id: 'miku',
                        display: 'none',
                        type: 'image',
                        rect: ['207px', '53px', '408px', '427px', 'auto', 'auto'],
                        opacity: '0.68',
                        fill: ["rgba(0,0,0,0)", im + "miku.svg", '0px', '0px'],
                        transform: [
                            [],
                            [],
                            [],
                            ['1.2', '1.2']
                        ]
                    }, {
                        id: 'TriMotion',
                        symbolName: 'TriMotion',
                        display: 'block',
                        type: 'rect',
                        rect: ['-46px', '-24px', '802', '451', 'auto', 'auto'],
                        opacity: '0',
                        transform: [
                            [],
                            [],
                            [],
                            ['0.88704', '0.88704']
                        ]
                    }, {
                        id: 'Text3',
                        display: 'none',
                        type: 'text',
                        rect: ['224px', '203px', 'auto', 'auto', 'auto', 'auto'],
                        text: "What is this?",
                        align: "left",
                        font: ['\'Lucida Console\', Monaco, monospace', [43, "px"], "rgba(255,255,255,1)", "700", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                    }, {
                        id: 'RoundRect',
                        display: 'block',
                        type: 'rect',
                        rect: ['327px', '273px', '149px', '45px', 'auto', 'auto'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(0,158,188,1.00)"],
                        stroke: [0, "rgb(0, 0, 0)", "none"]
                    }, {
                        id: 'btnPlay',
                        display: 'block',
                        type: 'text',
                        rect: ['313px', '278px', '175px', '34px', 'auto', 'auto'],
                        text: "PLAY",
                        align: "center",
                        font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "normal"]
                    }, {
                        id: 'bgm',
                        display: 'none',
                        type: 'audio',
                        tag: 'audio',
                        rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                        source: [aud + "bgm.mp3"],
                        preload: 'auto'
                    }, {
                        id: 'Text',
                        display: 'none',
                        type: 'text',
                        rect: ['266px', '293px', '268px', '32px', 'auto', 'auto'],
                        text: "SMART LIGHT SYNC",
                        align: "center",
                        font: ['Lucida Console, Monaco, monospace', [18, "px"], "rgba(0,158,188,1.00)", "900", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                    }, {
                        id: 'logo_bg_only',
                        display: 'none',
                        type: 'image',
                        rect: ['264px', '89px', '272px', '272px', 'auto', 'auto'],
                        fill: ["rgba(0,0,0,0)", im + "logo_bg_only.svg", '0px', '0px'],
                        transform: [
                            [],
                            [],
                            [],
                            ['0.5', '0.5']
                        ]
                    }, {
                        id: 'logo_only',
                        display: 'none',
                        type: 'image',
                        rect: ['264px', '89px', '272px', '272px', 'auto', 'auto'],
                        fill: ["rgba(0,0,0,0)", im + "logo_only.svg", '0px', '0px'],
                        transform: [
                            [],
                            [],
                            [],
                            ['0.5', '0.5']
                        ]
                    }, {
                        id: 'Rectangle3',
                        display: 'block',
                        type: 'rect',
                        rect: ['908px', '77px', '160px', '299px', 'auto', 'auto'],
                        fill: ["rgba(0,158,188,1.00)"],
                        stroke: [0, "rgb(0, 0, 0)", "solid"]
                    }, {
                        id: 'phone',
                        symbolName: 'phone',
                        display: 'none',
                        type: 'rect',
                        rect: ['899px', '55px', '176', '341', 'auto', 'auto'],
                        transform: [
                            [],
                            ['90'],
                            [],
                            ['4.7', '4.7']
                        ]
                    }, {
                        id: 'Text4',
                        display: 'none',
                        type: 'text',
                        rect: ['315px', '-108px', 'auto', 'auto', 'auto', 'auto'],
                        text: "Can control colors of <br>smart phone's monitor <br>in real time!",
                        align: "left",
                        font: ['Lucida Console, Monaco, monospace', [29, "px"], "rgba(0,158,188,1.00)", "700", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"],
                        textStyle: ["215px", "529px", "38px", ""]
                    }, {
                        id: 'Text4Copy',
                        display: 'none',
                        type: 'text',
                        rect: ['315px', '602px', 'auto', 'auto', 'auto', 'auto'],
                        text: "You can get amount of <br>shaking by connected <br>devices.",
                        align: "left",
                        font: ['Lucida Console, Monaco, monospace', [29, "px"], "rgba(0,168,156,0.99)", "700", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"],
                        textStyle: ["215px", "529px", "38px", ""]
                    }, {
                        id: 'logo_only2',
                        display: 'block',
                        type: 'image',
                        rect: ['940px', '176px', '97px', '97px', 'auto', 'auto'],
                        fill: ["rgba(0,0,0,0)", im + "logo_only.svg", '0px', '0px']
                    }, {
                        id: 'Text2',
                        display: 'none',
                        type: 'text',
                        rect: ['121px', '191px', '580px', '235px', 'auto', 'auto'],
                        text: "and also can control<br>LED Light with DMX512",
                        align: "left",
                        font: ['Lucida Console, Monaco, monospace', [43, "px"], "rgba(255,255,255,1.00)", "700", "none solid rgba(0, 168, 156, 0.992157)", "normal", "break-word", "normal"],
                        textStyle: ["", "", "58px", ""]
                    }, {
                        id: 'Gage',
                        display: 'none',
                        type: 'rect',
                        rect: ['241px', '110px', '382px', '43px', 'auto', 'auto'],
                        opacity: '1',
                        fill: ["rgba(0,0,0,0.00)"],
                        stroke: [1, "rgba(252,112,0,0.99)", "solid"],
                        c: [{
                            id: 'GageInner',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '382px', '43px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(252,112,0,0.99)"],
                            stroke: [0, "rgba(252,112,0,0.99)", "solid"]
                        }]
                    }, {
                        id: 'Text5',
                        display: 'none',
                        type: 'text',
                        rect: ['315px', '69px', '307px', '39px', 'auto', 'auto'],
                        text: "SHAKE YOUR PHONE!",
                        align: "left",
                        font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', [41, "px"], "rgba(68,0,252,1)", "700", "none solid rgb(68, 0, 252)", "normal", "break-word", ""],
                        textStyle: ["", "", "44px", ""]
                    }, {
                        id: 'msgComplete',
                        symbolName: 'Complete',
                        type: 'rect',
                        rect: ['356', '181', '351', '62', 'auto', 'auto']
                    }, {
                        id: 'Failed',
                        symbolName: 'Failed',
                        type: 'rect',
                        rect: ['356px', '181', 'undefined', 'undefined', 'auto', 'auto']
                    }, {
                        id: 'logo',
                        display: 'block',
                        type: 'image',
                        rect: ['172px', '176px', '462px', '62px', 'auto', 'auto'],
                        fill: ["rgba(0,0,0,0)", im + "logo.png", '0px', '0px']
                    }],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '450px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 63143.625,
                    autoPlay: false,
                    labels: {
                        "ラベル 1": 0
                    },
                    data: [
                        [
                            "eid610",
                            "display",
                            22220,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid611",
                            "display",
                            22418,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid612",
                            "display",
                            22593,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid613",
                            "display",
                            22794,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid614",
                            "display",
                            22970,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid621",
                            "display",
                            25763,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${Text3}",
                            '224px',
                            '-576px'
                        ],
                        [
                            "eid609",
                            "top",
                            21750,
                            251,
                            "linear",
                            "${Text4Copy}",
                            '602px',
                            '252px'
                        ],
                        [
                            "eid467",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '-24px',
                            '-24px'
                        ],
                        [
                            "eid64",
                            "left",
                            11000,
                            441,
                            "linear",
                            "${logo_only}",
                            '264px',
                            '-536px'
                        ],
                        [
                            "eid713",
                            "display",
                            1,
                            0,
                            "linear",
                            "${phone}",
                            'none',
                            'block'
                        ],
                        [
                            "eid531",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${monitor}",
                            '1',
                            '1'
                        ],
                        [
                            "eid589",
                            "line-height",
                            14167,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid70",
                            "top",
                            13248,
                            0,
                            "linear",
                            "${phone}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid89",
                            "top",
                            27530,
                            0,
                            "linear",
                            "${phone}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid582",
                            "background-color",
                            21750,
                            0,
                            "linear",
                            "${GageInner}",
                            'rgba(252,112,0,0.99)',
                            'rgba(252,112,0,0.99)'
                        ],
                        [
                            "eid583",
                            "background-color",
                            22000,
                            0,
                            "linear",
                            "${GageInner}",
                            'rgba(252,112,0,0.99)',
                            'rgba(68,0,252,0.9922)'
                        ],
                        [
                            "eid730",
                            "display",
                            1,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            7186,
                            264,
                            "linear",
                            "${logo_bg_only}",
                            '4.18',
                            '0.5'
                        ],
                        [
                            "eid625",
                            "left",
                            23250,
                            0,
                            "linear",
                            "${Text5}",
                            '315px',
                            '315px'
                        ],
                        [
                            "eid624",
                            "left",
                            21750,
                            250,
                            "linear",
                            "${Gage}",
                            '313px',
                            '312px'
                        ],
                        [
                            "eid27",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnPlay}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid729",
                            "display",
                            1,
                            0,
                            "linear",
                            "${logo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "height",
                            0,
                            0,
                            "linear",
                            "${monitor}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid84",
                            "height",
                            13248,
                            61,
                            "linear",
                            "${monitor}",
                            '450px',
                            '313px'
                        ],
                        [
                            "eid674",
                            "height",
                            13309,
                            14221,
                            "linear",
                            "${monitor}",
                            '313px',
                            '289px'
                        ],
                        [
                            "eid676",
                            "height",
                            28530,
                            0,
                            "linear",
                            "${monitor}",
                            '289px',
                            '313px'
                        ],
                        [
                            "eid670",
                            "height",
                            28780,
                            0,
                            "linear",
                            "${monitor}",
                            '313px',
                            '450px'
                        ],
                        [
                            "eid578",
                            "top",
                            21750,
                            250,
                            "linear",
                            "${Gage}",
                            '530px',
                            '180px'
                        ],
                        [
                            "eid595",
                            "display",
                            343,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid596",
                            "display",
                            14167,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid597",
                            "display",
                            14259,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid598",
                            "display",
                            14342,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid599",
                            "display",
                            14452,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid600",
                            "display",
                            14540,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid601",
                            "display",
                            14644,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid602",
                            "display",
                            14743,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid604",
                            "display",
                            25763,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            27530,
                            1000,
                            "linear",
                            "${monitor}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid668",
                            "rotateZ",
                            28780,
                            0,
                            "linear",
                            "${monitor}",
                            '90deg',
                            '0deg'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            7186,
                            264,
                            "linear",
                            "${logo_bg_only}",
                            '4.18',
                            '0.5'
                        ],
                        [
                            "eid533",
                            "opacity",
                            0,
                            3500,
                            "linear",
                            "${TriMotion}",
                            '0',
                            '0.34285714285714'
                        ],
                        [
                            "eid606",
                            "font-size",
                            14167,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid85",
                            "display",
                            13309,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid709",
                            "display",
                            0,
                            0,
                            "linear",
                            "${monitor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            7186,
                            0,
                            "linear",
                            "${monitor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            7450,
                            0,
                            "linear",
                            "${monitor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            13248,
                            0,
                            "linear",
                            "${monitor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            13309,
                            0,
                            "linear",
                            "${monitor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "display",
                            59500,
                            0,
                            "linear",
                            "${monitor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "width",
                            0,
                            0,
                            "linear",
                            "${monitor}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid83",
                            "width",
                            13248,
                            61,
                            "linear",
                            "${monitor}",
                            '800px',
                            '176px'
                        ],
                        [
                            "eid664",
                            "width",
                            28530,
                            0,
                            "linear",
                            "${monitor}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid669",
                            "width",
                            28780,
                            0,
                            "linear",
                            "${monitor}",
                            '176px',
                            '800px'
                        ],
                        [
                            "eid649",
                            "display",
                            59081,
                            0,
                            "linear",
                            "${TriMotion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid590",
                            "letter-spacing",
                            14167,
                            833,
                            "linear",
                            "${Text4Copy}",
                            '215px',
                            '0px'
                        ],
                        [
                            "eid545",
                            "word-spacing",
                            13916,
                            833,
                            "linear",
                            "${Text4}",
                            '529px',
                            '0px'
                        ],
                        [
                            "eid123",
                            "display",
                            27530,
                            0,
                            "linear",
                            "${logo_only2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${Rectangle3}",
                            '908px',
                            '108px'
                        ],
                        [
                            "eid66",
                            "left",
                            11000,
                            441,
                            "linear",
                            "${logo_bg_only}",
                            '264px',
                            '-536px'
                        ],
                        [
                            "eid592",
                            "color",
                            14167,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'rgba(0,168,156,0.9922)',
                            'rgba(0,168,156,0.9922)'
                        ],
                        [
                            "eid607",
                            "color",
                            14997,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'rgba(0,168,156,0.9922)',
                            'rgba(252,112,0,0.99)'
                        ],
                        [
                            "eid615",
                            "color",
                            21750,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'rgba(252,112,0,0.99)',
                            'rgba(252,112,0,0.99)'
                        ],
                        [
                            "eid608",
                            "color",
                            22000,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'rgba(252,112,0,0.99)',
                            'rgba(68,0,252,1.00)'
                        ],
                        [
                            "eid616",
                            "color",
                            22251,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'rgba(68,0,252,1.00)',
                            'rgba(68,0,252,0.99)'
                        ],
                        [
                            "eid554",
                            "display",
                            92,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid549",
                            "display",
                            13916,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid550",
                            "display",
                            14008,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid551",
                            "display",
                            14091,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid552",
                            "display",
                            14201,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid553",
                            "display",
                            14289,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid555",
                            "display",
                            14393,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid556",
                            "display",
                            14492,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid575",
                            "display",
                            22083,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            27622,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid732",
                            "display",
                            1,
                            0,
                            "linear",
                            "${Gage}",
                            'none',
                            'block'
                        ],
                        [
                            "eid647",
                            "display",
                            26250,
                            0,
                            "linear",
                            "${Gage}",
                            'block',
                            'none'
                        ],
                        [
                            "eid728",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '273px',
                            '273px'
                        ],
                        [
                            "eid725",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnPlay}",
                            '313px',
                            '313px'
                        ],
                        [
                            "eid577",
                            "top",
                            21750,
                            250,
                            "linear",
                            "${SubPhones}",
                            '55px',
                            '-295px'
                        ],
                        [
                            "eid24",
                            "display",
                            1,
                            0,
                            "linear",
                            "${btnPlay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            7450,
                            0,
                            "linear",
                            "${logo_only}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid51",
                            "display",
                            7186,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid731",
                            "display",
                            1,
                            0,
                            "linear",
                            "${GageInner}",
                            'none',
                            'block'
                        ],
                        [
                            "eid727",
                            "left",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid466",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '-46px',
                            '-46px'
                        ],
                        [
                            "eid543",
                            "letter-spacing",
                            13916,
                            833,
                            "linear",
                            "${Text4}",
                            '215px',
                            '0px'
                        ],
                        [
                            "eid56",
                            "left",
                            7186,
                            264,
                            "linear",
                            "${monitor}",
                            '0px',
                            '800px'
                        ],
                        [
                            "eid67",
                            "left",
                            11000,
                            441,
                            "linear",
                            "${monitor}",
                            '800px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${monitor}",
                            '0px',
                            '-800px'
                        ],
                        [
                            "eid81",
                            "left",
                            13248,
                            61,
                            "linear",
                            "${monitor}",
                            '-800px',
                            '100px'
                        ],
                        [
                            "eid677",
                            "left",
                            27530,
                            0,
                            "linear",
                            "${monitor}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid671",
                            "left",
                            28530,
                            250,
                            "linear",
                            "${monitor}",
                            '100px',
                            '0px'
                        ],
                        [
                            "eid667",
                            "left",
                            28780,
                            0,
                            "linear",
                            "${monitor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid680",
                            "left",
                            59250,
                            0,
                            "linear",
                            "${monitor}",
                            '111px',
                            '0px'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            7186,
                            0,
                            "linear",
                            "${monitor}",
                            '1',
                            '1'
                        ],
                        [
                            "eid80",
                            "scaleY",
                            13248,
                            0,
                            "linear",
                            "${monitor}",
                            '1',
                            '1'
                        ],
                        [
                            "eid105",
                            "scaleY",
                            27530,
                            1000,
                            "linear",
                            "${monitor}",
                            '1',
                            '4.4'
                        ],
                        [
                            "eid660",
                            "scaleY",
                            28780,
                            29846,
                            "linear",
                            "${monitor}",
                            '1',
                            '4.4'
                        ],
                        [
                            "eid691",
                            "scaleY",
                            59250,
                            237,
                            "linear",
                            "${monitor}",
                            '1',
                            '0'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            7186,
                            0,
                            "linear",
                            "${monitor}",
                            '1',
                            '1'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            13248,
                            9002,
                            "linear",
                            "${monitor}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            22250,
                            5280,
                            "linear",
                            "${monitor}",
                            '0.98',
                            '1'
                        ],
                        [
                            "eid104",
                            "scaleX",
                            27530,
                            1000,
                            "linear",
                            "${monitor}",
                            '1',
                            '4.4'
                        ],
                        [
                            "eid678",
                            "scaleX",
                            28780,
                            0,
                            "linear",
                            "${monitor}",
                            '4.4',
                            '1'
                        ],
                        [
                            "eid653",
                            "scaleX",
                            59250,
                            0,
                            "linear",
                            "${monitor}",
                            '1',
                            '1'
                        ],
                        [
                            "eid587",
                            "border-color",
                            21750,
                            0,
                            "linear",
                            "${Gage}",
                            'rgba(252, 112, 0, 0.992157)',
                            'rgba(252, 112, 0, 0.992157)'
                        ],
                        [
                            "eid588",
                            "border-color",
                            22000,
                            0,
                            "linear",
                            "${Gage}",
                            'rgba(252, 112, 0, 0.992157)',
                            'rgba(68,0,252,1.00)'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            7450,
                            0,
                            "linear",
                            "${logo_only}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid516",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${SubPhones}",
                            '1115px',
                            '315px'
                        ],
                        [
                            "eid707",
                            "color",
                            13834,
                            0,
                            "linear",
                            "${Text4}",
                            'rgba(0,158,188,1.00)',
                            'rgba(0,158,188,1.00)'
                        ],
                        [
                            "eid708",
                            "color",
                            14664,
                            0,
                            "linear",
                            "${Text4}",
                            'rgba(0,158,188,1.00)',
                            'rgba(252,112,0,0.99)'
                        ],
                        [
                            "eid127",
                            "color",
                            22000,
                            0,
                            "linear",
                            "${Text4}",
                            'rgba(252,112,0,0.99)',
                            'rgba(68,0,252,0.99)'
                        ],
                        [
                            "eid465",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '0.88704',
                            '0.88704'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            3500,
                            "linear",
                            "${monitor}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,158,188,1.00)'
                        ],
                        [
                            "eid18",
                            "background-color",
                            14654,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,158,188,1.00)',
                            'rgba(255,115,0,1.00)'
                        ],
                        [
                            "eid19",
                            "background-color",
                            22000,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,115,0,1.00)',
                            'rgba(68,0,255,1)'
                        ],
                        [
                            "eid20",
                            "background-color",
                            27530,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(68,0,255,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid22",
                            "background-color",
                            29546,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,0,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid225",
                            "background-color",
                            30451,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid229",
                            "background-color",
                            31379,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,225,0,1.00)'
                        ],
                        [
                            "eid230",
                            "background-color",
                            32284,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,225,0,1.00)',
                            'rgba(255,0,242,1.00)'
                        ],
                        [
                            "eid231",
                            "background-color",
                            33174,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,242,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid232",
                            "background-color",
                            34079,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid233",
                            "background-color",
                            35007,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,225,0,1.00)'
                        ],
                        [
                            "eid234",
                            "background-color",
                            35912,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,225,0,1.00)',
                            'rgba(255,0,242,1.00)'
                        ],
                        [
                            "eid235",
                            "background-color",
                            36750,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,242,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid236",
                            "background-color",
                            37655,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid237",
                            "background-color",
                            38583,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,225,0,1.00)'
                        ],
                        [
                            "eid238",
                            "background-color",
                            39488,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,225,0,1.00)',
                            'rgba(255,0,242,1.00)'
                        ],
                        [
                            "eid239",
                            "background-color",
                            40500,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,242,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid240",
                            "background-color",
                            41405,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid241",
                            "background-color",
                            42333,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,225,0,1.00)'
                        ],
                        [
                            "eid242",
                            "background-color",
                            43238,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,225,0,1.00)',
                            'rgba(255,0,242,1.00)'
                        ],
                        [
                            "eid193",
                            "background-color",
                            44312,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,242,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid194",
                            "background-color",
                            44766,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid195",
                            "background-color",
                            45217,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid196",
                            "background-color",
                            45688,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid197",
                            "background-color",
                            46145,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid198",
                            "background-color",
                            46599,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid199",
                            "background-color",
                            47050,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid200",
                            "background-color",
                            47521,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid201",
                            "background-color",
                            48006,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid202",
                            "background-color",
                            48460,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid203",
                            "background-color",
                            48911,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid204",
                            "background-color",
                            49382,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid205",
                            "background-color",
                            49797,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid206",
                            "background-color",
                            50250,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid207",
                            "background-color",
                            50701,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid208",
                            "background-color",
                            51172,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid209",
                            "background-color",
                            51766,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid210",
                            "background-color",
                            52220,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid211",
                            "background-color",
                            52671,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid212",
                            "background-color",
                            53142,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid213",
                            "background-color",
                            53599,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid214",
                            "background-color",
                            54053,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid215",
                            "background-color",
                            54504,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid216",
                            "background-color",
                            54975,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid217",
                            "background-color",
                            55460,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid218",
                            "background-color",
                            55914,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid219",
                            "background-color",
                            56365,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid220",
                            "background-color",
                            56836,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid221",
                            "background-color",
                            57250,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid222",
                            "background-color",
                            57704,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid223",
                            "background-color",
                            58155,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid654",
                            "background-color",
                            58626,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid655",
                            "background-color",
                            59500,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid626",
                            "top",
                            23250,
                            0,
                            "linear",
                            "${Text5}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "linear",
                            "${monitor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid82",
                            "top",
                            13248,
                            61,
                            "linear",
                            "${monitor}",
                            '0px',
                            '63px'
                        ],
                        [
                            "eid672",
                            "top",
                            13309,
                            15221,
                            "linear",
                            "${monitor}",
                            '63px',
                            '88px'
                        ],
                        [
                            "eid673",
                            "top",
                            28530,
                            250,
                            "linear",
                            "${monitor}",
                            '88px',
                            '0px'
                        ],
                        [
                            "eid661",
                            "top",
                            28780,
                            0,
                            "linear",
                            "${monitor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid684",
                            "top",
                            59250,
                            0,
                            "linear",
                            "${monitor}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid107",
                            "rotateZ",
                            27530,
                            1000,
                            "linear",
                            "${Text2}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            27530,
                            1000,
                            "linear",
                            "${phone}",
                            '1',
                            '4.7'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            27530,
                            1000,
                            "linear",
                            "${phone}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid122",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${logo_only2}",
                            '940px',
                            '140px'
                        ],
                        [
                            "eid464",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '0.88704',
                            '0.88704'
                        ],
                        [
                            "eid112",
                            "display",
                            11441,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            11608,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid244",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            11916,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid246",
                            "display",
                            12079,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid706",
                            "color",
                            42333,
                            0,
                            "linear",
                            "${Text}",
                            'rgba(0,158,188,1.00)',
                            'rgba(0,158,188,1.00)'
                        ],
                        [
                            "eid712",
                            "background-color",
                            0,
                            1,
                            "linear",
                            "${Rectangle2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(241,239,239,1)'
                        ],
                        [
                            "eid694",
                            "background-color",
                            58626,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(241,239,239,1)',
                            'rgba(241,239,239,1)'
                        ],
                        [
                            "eid695",
                            "background-color",
                            59081,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(241,239,239,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid547",
                            "font-size",
                            13916,
                            0,
                            "linear",
                            "${Text4}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid605",
                            "word-spacing",
                            14167,
                            833,
                            "linear",
                            "${Text4Copy}",
                            '529px',
                            '0px'
                        ],
                        [
                            "eid65",
                            "left",
                            11000,
                            441,
                            "linear",
                            "${Text}",
                            '266px',
                            '-534px'
                        ],
                        [
                            "eid548",
                            "line-height",
                            13916,
                            0,
                            "linear",
                            "${Text4}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid720",
                            "height",
                            0,
                            0,
                            "linear",
                            "${btnPlay}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            27530,
                            1000,
                            "linear",
                            "${phone}",
                            '1',
                            '4.7'
                        ],
                        [
                            "eid35",
                            "display",
                            7186,
                            0,
                            "linear",
                            "${logo_bg_only}",
                            'none',
                            'block'
                        ],
                        [
                            "eid726",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnPlay}",
                            '278px',
                            '278px'
                        ],
                        [
                            "eid627",
                            "display",
                            0,
                            0,
                            "linear",
                            "${miku}",
                            'none',
                            'none'
                        ],
                        [
                            "eid692",
                            "display",
                            59081,
                            0,
                            "linear",
                            "${miku}",
                            'none',
                            'none'
                        ],
                        [
                            "eid72",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${phone}",
                            '899px',
                            '100px'
                        ],
                        [
                            "eid88",
                            "left",
                            27530,
                            0,
                            "linear",
                            "${phone}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid644",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Gage}",
                            '1',
                            '1'
                        ],
                        [
                            "eid646",
                            "opacity",
                            25763,
                            487,
                            "linear",
                            "${Gage}",
                            '0',
                            '0.19'
                        ],
                        [
                            "eid36",
                            "display",
                            6569,
                            0,
                            "linear",
                            "${logo_only}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${logo_only}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            6857,
                            0,
                            "linear",
                            "${logo_only}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${logo_only}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            7186,
                            0,
                            "linear",
                            "${logo_only}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            28530,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            28780,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            29030,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid648",
                            "display",
                            59081,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid580",
                            "top",
                            21750,
                            250,
                            "linear",
                            "${Text4}",
                            '252px',
                            '-108px'
                        ],
                        ["eid11", "trigger", 0, function executeMediaFunction(e, data) {
                                this._executeMediaAction(e, data);
                            },
                            ['play', '${bgm}', []]
                        ],
                        ["eid468", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${TriMotion}', []]
                        ],
                        ["eid526", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${SubPhones}', []]
                        ]
                    ]
                }
            },
            "phone": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [{
                        rect: ['0px', '0px', '152px', '317px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        id: 'RoundRect',
                        stroke: [12, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(0,169,157,0.00)']
                    }, {
                        rect: ['10px', '300px', '161px', '32px', 'auto', 'auto'],
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(0,0,0,1.00)']
                    }, {
                        rect: ['10px', '8px', '161px', '32px', 'auto', 'auto'],
                        id: 'Rectangle2Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(0,0,0,1.00)']
                    }],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '176px', '341px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "triangle": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [{
                        type: 'image',
                        id: 'triangle',
                        rect: ['0px', '0px', '169px', '169px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/triangle.svg', '0px', '0px']
                    }],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '169px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 1846,
                    autoPlay: false,
                    data: [
                        [
                            "eid251",
                            "rotateZ",
                            673,
                            250,
                            "linear",
                            "${triangle}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid255",
                            "rotateZ",
                            1596,
                            250,
                            "linear",
                            "${triangle}",
                            '60deg',
                            '120deg'
                        ]
                    ]
                }
            },
            "TriMotion": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [{
                        rect: ['2px', '1px', '800px', '450px', 'auto', 'auto'],
                        type: 'rect',
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        display: 'none',
                        fill: ['rgba(192,192,192,1)']
                    }, {
                        type: 'rect',
                        id: 'TriMotion1Row',
                        symbolName: 'TriMotion1Row',
                        rect: ['-132', '0px', '1194', '169', 'auto', 'auto']
                    }, {
                        type: 'rect',
                        id: 'TriMotion1RowCopy2',
                        symbolName: 'TriMotion1Row',
                        rect: ['-132', '253px', '1194', '169', 'auto', 'auto']
                    }, {
                        type: 'rect',
                        id: 'TriMotion1RowCopy3',
                        symbolName: 'TriMotion1Row',
                        rect: ['-204px', '379px', '1194', '169', 'auto', 'auto']
                    }, {
                        type: 'rect',
                        id: 'TriMotion1RowCopy',
                        symbolName: 'TriMotion1Row',
                        rect: ['-57px', '126px', '1194', '169', 'auto', 'auto']
                    }, {
                        type: 'rect',
                        id: 'TriMotion1RowCopy4',
                        symbolName: 'TriMotion1Row',
                        rect: ['-57px', '-126px', '1194', '169', 'auto', 'auto']
                    }],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '802px', '451px']
                        }
                    }
                },
                timeline: {
                    duration: 1848,
                    autoPlay: false,
                    data: [
                        [
                            "eid461",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy3}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid462",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid480",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy4}",
                            '-126px',
                            '-126px'
                        ],
                        [
                            "eid459",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy2}",
                            '253px',
                            '253px'
                        ],
                        [
                            "eid476",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy3}",
                            '-204px',
                            '-204px'
                        ],
                        [
                            "eid478",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy4}",
                            '-57px',
                            '-57px'
                        ],
                        [
                            "eid456",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid475",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy}",
                            '-57px',
                            '-57px'
                        ],
                        ["eid482", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${TriMotion1Row}', []]
                        ],
                        ["eid485", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${TriMotion1RowCopy3}', []]
                        ],
                        ["eid484", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${TriMotion1RowCopy}', []]
                        ],
                        ["eid486", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${TriMotion1RowCopy2}', []]
                        ],
                        ["eid483", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${TriMotion1RowCopy4}', []]
                        ],
                        ["eid472", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${TriMotion1RowCopy2}', []]
                        ],
                        ["eid481", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${TriMotion1RowCopy4}', []]
                        ],
                        ["eid473", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${TriMotion1RowCopy3}', []]
                        ],
                        ["eid474", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${TriMotion1Row}', []]
                        ],
                        ["eid471", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${TriMotion1RowCopy}', []]
                        ]
                    ]
                }
            },
            "TriMotion1Row": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [{
                        userClass: 'tri',
                        id: 'triangle2',
                        symbolName: 'triangle',
                        rect: ['0px', '0px', '169', '169', 'auto', 'auto'],
                        type: 'rect'
                    }, {
                        userClass: 'tri',
                        id: 'triangle2Copy15',
                        symbolName: 'triangle',
                        rect: ['177px', '0px', '169', '169', 'auto', 'auto'],
                        type: 'rect'
                    }, {
                        userClass: 'tri',
                        id: 'triangle2Copy17',
                        symbolName: 'triangle',
                        rect: ['292px', '0px', '169', '169', 'auto', 'auto'],
                        type: 'rect'
                    }, {
                        userClass: 'tri',
                        id: 'triangle2Copy16',
                        symbolName: 'triangle',
                        rect: ['438px', '0px', '169', '169', 'auto', 'auto'],
                        type: 'rect'
                    }, {
                        userClass: 'tri',
                        id: 'triangle2Copy19',
                        symbolName: 'triangle',
                        rect: ['584px', '0px', '169', '169', 'auto', 'auto'],
                        type: 'rect'
                    }, {
                        userClass: 'tri',
                        id: 'triangle2Copy18',
                        symbolName: 'triangle',
                        rect: ['730px', '0px', '169', '169', 'auto', 'auto'],
                        type: 'rect'
                    }, {
                        userClass: 'tri',
                        id: 'triangle2Copy21',
                        symbolName: 'triangle',
                        rect: ['923px', '0px', '169', '169', 'auto', 'auto'],
                        type: 'rect'
                    }, {
                        userClass: 'tri',
                        id: 'triangle2Copy20',
                        symbolName: 'triangle',
                        rect: ['1069px', '0px', '169', '169', 'auto', 'auto'],
                        type: 'rect'
                    }],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1194px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 1847,
                    autoPlay: false,
                    data: [
                        [
                            "eid428",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy19}",
                            '586px',
                            '586px'
                        ],
                        [
                            "eid436",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy20}",
                            '1025px',
                            '1025px'
                        ],
                        [
                            "eid438",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy21}",
                            '879px',
                            '879px'
                        ],
                        [
                            "eid411",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy15}",
                            '146px',
                            '146px'
                        ],
                        [
                            "eid426",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy18}",
                            '732px',
                            '732px'
                        ],
                        [
                            "eid317",
                            "left",
                            1847,
                            0,
                            "linear",
                            "${triangle2}",
                            '0px',
                            '0px'
                        ],
                        ["eid445", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${triangle2Copy15}', []]
                        ],
                        ["eid442", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${triangle2Copy18}', []]
                        ],
                        ["eid446", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${triangle2Copy20}', []]
                        ],
                        ["eid256", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${triangle2}', []]
                        ],
                        ["eid441", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${triangle2Copy21}', []]
                        ],
                        ["eid443", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${triangle2Copy16}', []]
                        ],
                        ["eid444", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['stop', '${triangle2Copy19}', []]
                        ],
                        ["eid453", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${triangle2Copy21}', []]
                        ],
                        ["eid447", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${triangle2Copy20}', []]
                        ],
                        ["eid257", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${triangle2}', []]
                        ],
                        ["eid448", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${triangle2Copy19}', []]
                        ],
                        ["eid451", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${triangle2Copy18}', []]
                        ],
                        ["eid450", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${triangle2Copy16}', []]
                        ],
                        ["eid452", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${triangle2Copy15}', []]
                        ],
                        ["eid469", "trigger", 1, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${triangle2Copy17}', []]
                        ]
                    ]
                }
            },
            "SubPhone": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [{
                        type: 'rect',
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        rect: ['10px', '24px', '160px', '287px', 'auto', 'auto'],
                        fill: ['rgba(255,115,0,1.00)']
                    }, {
                        rect: ['0px', '0px', null, null, 'auto', 'auto'],
                        id: 'phone2',
                        symbolName: 'phone',
                        type: 'rect'
                    }],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '176px', '341px']
                        }
                    }
                },
                timeline: {
                    duration: 27530,
                    autoPlay: false,
                    data: [
                        [
                            "eid527",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,183,126,1)',
                            'rgba(0,158,188,1.00)'
                        ],
                        [
                            "eid566",
                            "background-color",
                            14654,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,158,188,1.00)',
                            'rgba(255,115,0,1.00)'
                        ],
                        [
                            "eid568",
                            "background-color",
                            22000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,115,0,1.00)',
                            'rgba(68,0,255,1.00)'
                        ],
                        [
                            "eid569",
                            "background-color",
                            27530,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(68,0,255,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid487",
                            "top",
                            14654,
                            0,
                            "linear",
                            "${phone2}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "SubPhones": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [{
                        type: 'rect',
                        id: 'SubPhone',
                        symbolName: 'SubPhone',
                        transform: [
                            [],
                            [],
                            [],
                            ['0.55114', '0.55114']
                        ],
                        rect: ['-219px', '-76px', '176', '341', 'auto', 'auto']
                    }, {
                        type: 'rect',
                        id: 'SubPhoneCopy',
                        symbolName: 'SubPhone',
                        transform: [
                            [],
                            [],
                            [],
                            ['0.55114', '0.55114']
                        ],
                        rect: ['-219px', '-76px', '176', '341', 'auto', 'auto']
                    }, {
                        type: 'rect',
                        id: 'SubPhoneCopy2',
                        symbolName: 'SubPhone',
                        transform: [
                            [],
                            [],
                            [],
                            ['0.55114', '0.55114']
                        ],
                        rect: ['-219px', '-77px', '176', '341', 'auto', 'auto']
                    }],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '382px', '188px']
                        }
                    }
                },
                timeline: {
                    duration: 27902,
                    autoPlay: false,
                    data: [
                        [
                            "eid503",
                            "top",
                            27902,
                            0,
                            "linear",
                            "${SubPhoneCopy}",
                            '-76px',
                            '-76px'
                        ],
                        [
                            "eid564",
                            "left",
                            13248,
                            502,
                            "linear",
                            "${SubPhoneCopy2}",
                            '-219px',
                            '246px'
                        ],
                        [
                            "eid514",
                            "left",
                            27902,
                            0,
                            "linear",
                            "${SubPhoneCopy2}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid505",
                            "scaleY",
                            27902,
                            0,
                            "linear",
                            "${SubPhone}",
                            '0.55114',
                            '0.55114'
                        ],
                        [
                            "eid513",
                            "scaleY",
                            27902,
                            0,
                            "linear",
                            "${SubPhoneCopy2}",
                            '0.55114',
                            '0.55114'
                        ],
                        [
                            "eid504",
                            "scaleX",
                            27902,
                            0,
                            "linear",
                            "${SubPhone}",
                            '0.55114',
                            '0.55114'
                        ],
                        [
                            "eid562",
                            "left",
                            13248,
                            502,
                            "linear",
                            "${SubPhone}",
                            '-219px',
                            '-39px'
                        ],
                        [
                            "eid509",
                            "left",
                            27902,
                            0,
                            "linear",
                            "${SubPhone}",
                            '-39px',
                            '-39px'
                        ],
                        [
                            "eid507",
                            "top",
                            27902,
                            0,
                            "linear",
                            "${SubPhone}",
                            '-76px',
                            '-76px'
                        ],
                        [
                            "eid501",
                            "scaleY",
                            27902,
                            0,
                            "linear",
                            "${SubPhoneCopy}",
                            '0.55114',
                            '0.55114'
                        ],
                        [
                            "eid510",
                            "scaleX",
                            27902,
                            0,
                            "linear",
                            "${SubPhoneCopy2}",
                            '0.55114',
                            '0.55114'
                        ],
                        [
                            "eid563",
                            "left",
                            13248,
                            502,
                            "linear",
                            "${SubPhoneCopy}",
                            '-219px',
                            '103px'
                        ],
                        [
                            "eid508",
                            "left",
                            27902,
                            0,
                            "linear",
                            "${SubPhoneCopy}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid511",
                            "top",
                            27902,
                            0,
                            "linear",
                            "${SubPhoneCopy2}",
                            '-76px',
                            '-76px'
                        ],
                        [
                            "eid500",
                            "scaleX",
                            27902,
                            0,
                            "linear",
                            "${SubPhoneCopy}",
                            '0.55114',
                            '0.55114'
                        ],
                        ["eid523", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${SubPhoneCopy2}', []]
                        ],
                        ["eid524", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${SubPhoneCopy}', []]
                        ],
                        ["eid525", "trigger", 0, function executeSymbolFunction(e, data) {
                                this._executeSymbolAction(e, data);
                            },
                            ['play', '${SubPhone}', []]
                        ]
                    ]
                }
            },
            "Complete": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [{
                        type: 'text',
                        id: 'complete',
                        text: 'COMPLETE!',
                        rect: ['0px', '0px', '351px', '62px', 'auto', 'auto'],
                        display: 'none',
                        align: 'left',
                        font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif', [41, 'px'], 'rgba(68,0,252,1)', '700', 'none solid rgb(68, 0, 252)', 'normal', 'break-word', 'normal'],
                        opacity: '1'
                    }],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '351px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 1780,
                    autoPlay: false,
                    data: [
                        [
                            "eid632",
                            "display",
                            500,
                            0,
                            "linear",
                            "${complete}",
                            'none',
                            'block'
                        ],
                        [
                            "eid633",
                            "display",
                            747,
                            0,
                            "linear",
                            "${complete}",
                            'block',
                            'none'
                        ],
                        [
                            "eid634",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${complete}",
                            'none',
                            'block'
                        ],
                        [
                            "eid636",
                            "display",
                            1254,
                            0,
                            "linear",
                            "${complete}",
                            'block',
                            'none'
                        ],
                        [
                            "eid637",
                            "display",
                            1492,
                            0,
                            "linear",
                            "${complete}",
                            'none',
                            'block'
                        ],
                        [
                            "eid638",
                            "display",
                            1780,
                            0,
                            "linear",
                            "${complete}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Failed": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [{
                        type: 'text',
                        id: 'complete',
                        text: 'FAILED...',
                        font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif', [41, 'px'], 'rgba(68,0,252,1)', '700', 'none solid rgb(68, 0, 252)', 'normal', 'break-word', 'normal'],
                        display: 'none',
                        rect: ['0px', '0px', '351px', '62px', 'auto', 'auto'],
                        opacity: '1',
                        align: 'left'
                    }],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '351px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 1780,
                    autoPlay: false,
                    data: [
                        [
                            "eid632",
                            "display",
                            500,
                            0,
                            "linear",
                            "${complete}",
                            'none',
                            'block'
                        ],
                        [
                            "eid633",
                            "display",
                            747,
                            0,
                            "linear",
                            "${complete}",
                            'block',
                            'none'
                        ],
                        [
                            "eid634",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${complete}",
                            'none',
                            'block'
                        ],
                        [
                            "eid636",
                            "display",
                            1254,
                            0,
                            "linear",
                            "${complete}",
                            'block',
                            'none'
                        ],
                        [
                            "eid637",
                            "display",
                            1492,
                            0,
                            "linear",
                            "${complete}",
                            'none',
                            'block'
                        ],
                        [
                            "eid638",
                            "display",
                            1780,
                            0,
                            "linear",
                            "${complete}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge_edgeActions.js");
})("EDGE-28183762");