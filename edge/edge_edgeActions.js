　　/***********************
 * Adobe Edge Animate コンポジションアクション
 *
 * このファイルを編集する際には注意が必要です。必ず関数シグニチャと
 * 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
 * 操作可能な状態にしておいてください。
 *
 ***********************/
(function($, Edge, compId) {
    var Composition = Edge.Composition,
        Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

    //Edge symbol: 'stage'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${btnPlay}", "click", function(sym, e) {
            // マウスクリックのコードをここに挿入します
            sym.play();
            $('#Stage_GageInner').width(0);
            setInterval('monitorGetter();',1);

            

        });
        //Edge binding end



        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
            // コードをここに挿入
            stop();
            
                     
                     //$('#Stage').click();
            

        });
        //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // コードをここに挿入
         
         gageTrigger=1;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25763, function(sym, e) {
         // コードをここに挿入
          gageTrigger=0;
          if(countUp==countLimit){
          console.log('success!');
          $('#Stage_miku').show();
         sym.getSymbol("msgComplete").play();
          }else{
          sym.getSymbol("Failed").play();
          }
         

      });
      //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'phone'
   (function(symbolName) {   
   
   })("phone");
   //Edge symbol end:'phone'

   //=========================================================
   
   //Edge symbol: 'triangle'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // タイムラインの最後で実行されるコードをここに挿入
         sym.play();

      });
      //Edge binding end

   })("triangle");
   //Edge symbol end:'triangle'

   //=========================================================
   
   //Edge symbol: 'TriMotion'
   (function(symbolName) {   
   
   })("TriMotion");
   //Edge symbol end:'TriMotion'

   //=========================================================
   
   //Edge symbol: 'TriMotion1Row'
   (function(symbolName) {   
   
   })("TriMotion1Row");
   //Edge symbol end:'TriMotion1Row'

   //=========================================================
   
   //Edge symbol: 'SubPhone'
   (function(symbolName) {   
   
   })("SubPhone");
   //Edge symbol end:'SubPhone'

   //=========================================================
   
   //Edge symbol: 'SubPhones'
   (function(symbolName) {   
   
   })("SubPhones");
   //Edge symbol end:'SubPhones'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Complete");
   //Edge symbol end:'Complete'

   //=========================================================
   
   //Edge symbol: 'Complete_1'
   (function(symbolName) {   
   
   })("Failed");
   //Edge symbol end:'Failed'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-28183762");