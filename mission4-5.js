function omikujishow(){
    var kichi = ["大吉","中吉","吉","吉","吉","小吉","小吉","凶"];
    var daikichiitem_list = ["水","現金","時計","ワイヤレスイヤホン","家の鍵"]
    var chukichiitem_list = ["5円玉","アクセサリー","笑顔","モバイル充電器",""]
    var kichiitem_list = ["黒い服","根性","眼鏡","くるぶしソックス","有線イヤホン"]
    var shokichiitem_list = ["優しさ","メモ帳","帽子","マスク","キャンディー"]
    var kyoitem_list = ["酒","絆創膏","ハンカチ","サングラス","ガム"]
    
    var number1 = Math.random();

    //おみくじ運勢
    var number2 = number1 * 7;
    var number3 = Math.round(number2);
    var omikuji = kichi[number3];

    //アイテム
    var number4 = number1 * 4;
    var number5 = Math.round(number4);

    if (number3 == 0) {     //大吉
        var item = daikichiitem_list[number5];
        var result = '<strong><span style="color:red">' + omikuji +  '</span></strong>' + "<br>ラッキーアイテムは" + item;
    }else if (number3 == 1) {     //中吉
        var item = chukichiitem_list[number5];
        var result = omikuji + "<br>ラッキーアイテムは" + item;
    }else if (1 < number3 < 5) {     //吉
        var item = kichiitem_list[number5];
        var result = omikuji + "<br>ラッキーアイテムは" + item;
    }else if (4 < number3 < 7) {     //小吉
        var item = shokichiitem_list[number5];
        var result = omikuji + "<br>ラッキーアイテムは" + item;
    }else if (number3 == 7) {     //凶
        var item = kyoitem_list[number5];
        var result = omikuji + "<br>ラッキーアイテムは" + item;
    }
    
    var object = document.getElementById("omikuji");
    object.innerHTML = result;
}