$(function () {
    $('.bar').click(function () {
        // メニューの開閉状態を切り替える
        $('.Menu').toggleClass('open');

        // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
        $(this).toggleClass('active');
    });
});


/*-----------------------------------------------------------------*/

const maintext = [
    //会話１
    ['',['古森','⋯⋯古森です。'],['あなた','古森くん、お疲れ様！今度の日曜って空いてる？'],['古森','⋯⋯ごめん、その日は、用事⋯⋯あって。'],
    ['古森','また今度、オラから誘うから⋯⋯'],['あなた','そっか！大丈夫だよ。また今度ね'],'ピッ',
    'ツーツー',['あなた','古森くんも忙しいよね。'],['あなた','⋯そうだ、友達の誕生日に皆で花を贈るって言ってたっけ。'],
    ['あなた','ちょっと見に行ってみようかな。']],//0会話


    //会話２
    ['./image/00_5.png'],//2背景変更

    ['',['あなた','勢いで花屋さんに来てみたのは良いけど、'],['あなた','たくさんあって悩んじゃうかも。'],['あなた','ちょっと聞いてみようかな。'],
    ['あなた','すみませーん、花束を選んでみたいんですけど⋯⋯'],['店員','あ⋯⋯はいっ']],//0会話
    
    //スチル
    ['./image/02_1.png',['古森','⋯⋯えっ？'],['あなた','古森くん！？'],['あなた','どうしてここにいるの？'],
    ['古森','お、オラもアルバイト⋯⋯して、みるべかと思って。'],['古森','まさか君が来るなんて思ってねかった⋯⋯'],['あなた','ふふっ、私もびっくりしちゃった。'],
    ['古森','えっと…花、見に来てくれたの？']],//3スチルと会話

    [''],//7スチル削除

    ['',['あなた','どんな花束を選んでもらおうかな？']],//6立ち絵表示と会話

    //分岐１
    ['','華やかな花束','落ち着いた花束'],//1分岐

    //会話３
    ['',['あなた','じゃあ、店員さん。華やかな花束、選んでもらえますか？'],['古森','あの、はいっ⋯⋯。が⋯⋯頑張りますっ'],['古森','⋯⋯こんな感じで、選んでみた。'],
    ['古森','気さ、入ってけた⋯⋯？'],['あなた','うん！すっごく華やかで素敵！'],['あなた','古森君が選んだなんてちょっと意外かも。'],
    ['あなた','このまま買って帰りたいな。お会計もお願いしていいですか？'],['古森','も、もちろん。あの、そのあと⋯⋯少しだけ、待ってて。'],['あなた','？　わかった。待ってるね']],//0会話


    //暗転
    ['./image/00_0.jpg','⋯⋯⋯⋯'],//3スチルとセリフ

    [''],//7スチル消去

    [''],//12スキップ
    //-------------会話３ここまで

    //会話４
    ['',['あなた','じゃあ、店員さん。落ち着いた雰囲気の花束、選んでもらえますか？'],['古森','うん。⋯⋯任せてください'],['古森','⋯⋯こんな感じで、選んでみた。'],
    ['古森','気さ、入ってけた⋯⋯？'],['あなた','うん！控えめですごくかわいい！'],['あなた','古森君らしいシンプルで上品なチョイスで素敵。'],
    ['あなた','このまま買って帰りたいな。お会計もお願いしていいですか？'],['古森','も、もちろん。あの、そのあと⋯⋯少しだけ、待ってて。'],['あなた','？　わかった。待ってるね']],//0会話

    //暗転
    ['./image/00_0.jpg','⋯⋯⋯⋯'],//3スチルとセリフ

    [''],//7スチル消去-------------会話4ここまで

    //会話５
    ['./image/00_4.png'],//2背景変え

    ['',['古森','ごめん、⋯おまたせ。'],['あなた','ううん、平気だよ。'],['古森','ちょうど⋯アルバイト、終わるとこだったはんで⋯'],
    ['古森','一緒に、帰ろう。'],['あなた','もちろん！']],//0会話

    //暗転
    ['./image/00_0.jpg','⋯⋯⋯⋯'],//3スチルとセリフ

    ['./image/00_3.png'],//2背景かえ

    [''],//7スチル消去

    ['',['古森','急に呼び止めて、ごめん。'],['あなた','全然！私も一緒に帰れてうれしい。'],['あなた','古森くん、すごいね。お家のことも、バイトもしてて。'],
    ['古森','そんなこと⋯⋯ない。オラ、ぐずだはんで⋯'],['あなた','まだ始めたばっかりでしょ?これからだよ！'],['古森','⋯うん。'],
    ['古森','また、来てくれる？']],//0会話----------会話５ここまで

    //分岐２
    ['','約束！','機会があったら寄ってみるね'],

    //会話６
    ['',['あなた','約束！今度は私に似合う花を選んでもらおうかな？'],['古森','う⋯⋯うまくできるかわかんねけど、頑張る'],['あなた','楽しみにしてるね！']],

    //会話８
    ['./image/00_2.png'],//2背景変え

    ['',['古森','あの⋯'],['あなた','？'],['古森','どうして、オラに優しくするの？'],
    ['あなた','え？'],['古森','突然、転校してきて⋯なんも知らねのに、なんで⋯'],['古森','そったら、優しくできるの？'],
    ['あなた','なんでって⋯'],['あなた','わかったからだよ、古森くんが良い人だって。'],['古森','どうして？⋯オラ、初め⋯ひどいこと⋯'],
    ['あなた','古森くん、初めて会った日のこと、覚えてる？'],['古森','え？'],['あなた','あの日、古森くんすっごい緊張してて…'],
    ['あなた','思わず私が声かけた後の放課後に'],['あなた','わざわざありがとうって伝えてくれたよね'],['あなた','その時、きっといい人なんだろうなって思ったの。'],
    ['あなた','だから話せばわかってくれるって思って頑張ったんだよ'],['古森','⋯⋯⋯⋯'],['古森','敵わねや、君には⋯'],
    ['古森','⋯⋯送ってく。家まで。']],

    [''],//-------------会話８ここまで


    //会話７
    ['',['あなた','機会があったら寄ってみるね。'],['古森','⋯うん。待ってるから']],

    //会話９
    ['./image/00_2.png'],//2背景変え

    ['',['古森','オラ、頼りねえはんで⋯もっとしっかりせねば。'],['古森','先生や、君の優しさに、甘えて⋯'],['古森','自分の力で歩き出さねば、って⋯思った。'],
    ['古森','まだまだ、足りねけど⋯これから、もっと頑張るから'],['古森','また⋯待っててくれる？'],['あなた','うん。頑張ってね。'],
    ['古森','⋯⋯送ってく。家まで。']],//-----------会話９ここまで

    //エンディング
    ['','程なくして、古森くんは高校を卒業し、私と同じ大学に入学した。大学生になった今でも、お花屋さんのバイトは続けているらしい。','古森くんは勉強とバイトで忙しそうだけど、一緒にいる時間は前よりずっと増えた。','2人とも、もう待つだけの時間は終わり。お互いに歩み寄りながら、自分の将来に向けて動き始めている。'],

    ['']
            ];

const type = [
    //会話１
    [0,0,0,0,
        0,0,0,
        0,0,0,
        0
    ],

    //会話２
    [2],

    [0,0,0,0,
        0,0
    ],

    //スチル
    [3,0,0,0,
        0,0,0,
        0],

    [7],

    [6,0],
    
    //分岐１
    [1,1,5],

    
    //会話3
    [0,0,3,4,
        0,0,0,
        0,7,0],

    //暗転    
    [3,0],
    [7],
    [12,4],//会話３ここまで

    //会話４
    [0,0,3,4,
        0,0,0,
        0,7,0],

    //暗転    
    [3,0],
    [7],//会話４ここまで

    //会話５
    [2],

    [0,9,0,12,
        0,0],

    //暗転    
    [3,0],

    [2],

    [7],

    [0,15,0,0,
        9,0,11,
        14],//------------会話５ここまで

    //分岐２
    [1,1,5],

    //会話６
    [0,0,13,0],

    //会話８
    [2],

    [0,9,0,0,
        0,0,0,
        0,0,15,
        13,0,0,
        0,0,0,
        0,13,10,
        11],

    [12,4],//-----------会話８ここまで

    //会話７
    [0,0,11],

    //会話９
    [2],

    [0,9,0,0,
        0,14,0,
        11],

    //エンディング
    [13,0,0,0],

    [10]
        ];

let count1 = 0;
let count2 = 0;
let isTyping = false;
let currentTypeIt = null;

/*進行用--------------------------------------------------------------------------- */

var Check = function(){
    console.log("here is [" + count1 + "]");

    if(count2 != 0){
        console.log("ERROR");
    }

    num = type[count1][0];

    if(num == 0){//テキスト表示
        console.log("0_texts");
        Textflow();
    }
    else if(num == 1){//分岐
        console.log("1_brunch");
        MakeBrunchButton([maintext[count1][1],maintext[count1][2]]);
    }
    else if(num == 2){//背景がえ
        ChangeBackground(maintext[count1][0]);
    }
    else if(num == 3){//スチルを表示し、セリフを流す
        ChangeMainpic(maintext[count1][0]);
        Textflow();
    }
    else if(num == 4){//スチルを削除しセリフを流す
        eraceMainpic();
        Textflow();
    }
    else if(num == 5){/*(5->スチル前面にエンディングテキストを表示)*/
        ChangeMainpic(maintext[count1][0]);
        Textflow();
    }
    else if(num == 6){//6->立ち絵表示しテキスト表示
        console.log("6_texts");
        var pic = document.getElementById("mainpic1");
        pic.style.opacity = "1";
        Textflow();

    }
    else if(num == 7){//スチルを削除
        eraceMainpic();
        count1++;
        Check();
    }
    else if(num == 11){//スチル2を削除
        eraceMainpic2();
        count1++;
        Check();
    }
    else if(num == 8){//スチルを表示
        ChangeMainpic(maintext[count1][0]);
        count1++;
        Check();
    }
    else if(num==9){//スチルを切り替えてセリフ
        ChangeMainpic2(maintext[count1][0]);
        Textflow();
    }
    else if(num==12){//指定回数スキップする
        count1 += type[count1][1];
        Check();

    }
    else if(num==13){//エンディングテキストを表示する
        endflow();
    }
    else if(num == 10){/*エンドへ飛ぶ */
        Ending();
    }
}

var Textflow = async function(){
    count2++;
    do{
        document.getElementById("maintextbox").innerText = "";
        if((buf = type[count1][count2]) != 0){
            ChangeMainpeople(buf);
        }
        ShowText(maintext[count1][count2]);
        await waitClick(document.body,maintext[count1][count2]);

        count2++;
    }while(count2 < type[count1].length);
    
    if(count2 == type[count1].length){

        console.log("ended the roop");
        count2 = 0;
        count1++;

        Check();
    }
}

var ShowText = function(text){

    //return new Promise((resolve => {
    if(Array.isArray(text)){
        console.log("show text by " + text[0]);
        console.log("below..." + text[1]);

        document.getElementById("maintextbox").style.borderTop = "none";

        document.getElementById("maintextbox").innerText = "";
        document.getElementById("nametextbox").innerText = text[0];
        document.getElementById("nametextbox").hidden = false;
        isTyping = true;
        currentTypeIt = new TypeIt("#maintextbox", {
            strings: text[1],
            speed: 100,
            loop: false,
            afterComplete: function (){
                console.log("complete");

                isTyping = false;
            }
        }).go();
    }
    else if(typeof text === "string"){
        console.log("show text below " + text);

        document.getElementById("maintextbox").style.borderTop = "10px solid #747474";

        document.getElementById("maintextbox").innerText = "";
        document.getElementById("nametextbox").hidden = true;
        isTyping = true;
        currentTypeIt = new TypeIt("#maintextbox", {
            strings: text,
            speed: 100,
            loop: false,
            afterComplete: function(){
                console.log("conplete");

                isTyping = false;
            }
        }).go();
    }
    else{
        console.log("ERROR");
    }//}))
}

var endflow = async function(){
    count2++;
    VagelyunShowPic(document.getElementById("mainpic1"));
    document.getElementById("nametextbox").style.opacity = 0;
    document.getElementById("maintextbox").style.opacity = 0;
    var buf = document.getElementById("endtext");
    buf.style.opacity = 1;
    buf.innerText = ""
    do{
        ShowendText(buf,maintext[count1][count2]);
        await waitendClick(document.body,maintext[count1][count2]);

        count2++;
    }while(count2 < type[count1].length);
    
    if(count2 == type[count1].length){

        console.log("ended the roop");
        count2 = 0;
        count1++;

        Check();
    }
}

var ShowendText = function(obj,text){

    //return new Promise((resolve => {
        obj.innerText = "";
    if(typeof text === "string"){
        console.log("show text below " + text);
        isTyping = true;
        currentTypeIt = new TypeIt("#endtext", {
            strings: text,
            speed: 100,
            loop: false,
            afterComplete: function(){
                console.log("conplete");

                isTyping = false;
            }
        }).go();
    }
    else{
        console.log("ERROR");
    }//}))
}

var ChangeMainpeople = function(num){//人物の表情を変える
    console.log("change main people to ./image/01_" + num + ".png");

    const buf = document.getElementById("mainpic1");
    buf.src = "./image/01_" + num + ".png";

    Bouncepic(buf);
}

var ChangeMainpic = function(filepass){//スチル表示用
    console.log("change main pic to " + filepass);

    const buf = document.getElementById("stil");
    buf.src = filepass;

    VagelyShowPic(buf);
}

var ChangeMainpic2 = function(filepass){//スチル表示用
    console.log("change main pic2 to " + filepass);

    const buf = document.getElementById("stil2");
    buf.src = filepass;

    VagelyShowPic(buf);
}

var eraceMainpic = function(){
    console.log("erace main pic");

    const buf = document.getElementById("stil");
    VagelyunShowPic(buf);
}

var eraceMainpic2 = function(){
    console.log("erace main pic2");

    const buf = document.getElementById("stil2");
    VagelyunShowPic(buf);
}

var ChangeBackground = function(filepass){
    console.log("change background to " + filepass);

    document.getElementById("homebackground").src = filepass;

    count1++;
    count2 = 0;
    Check();
}

var MakeBrunchButton = function(texts){
    console.log("make new buttons to branch");

    document.onclick = null;

    //document.getElementById("mainpic1").style.opacity = 0.6;
    document.getElementById("nametextbox").style.opacity = 0.5;
    document.querySelector(".textBox").style.opacity = 0.5;

    const b1 = document.querySelector(".branch1");
    b1.innerText = texts[0];
    b1.addEventListener("click",SelectBrunch_1);

    const b2 = document.querySelector(".branch2");
    b2.innerText = texts[1];
    b2.addEventListener("click",SelectBrunch_2);

    ShownewButton1(b1);
    ShownewButton2(b2);

}

var SelectBrunch_1 = function(){
    console.log("Selected 1st root");

    afterBrunch();

    count1 = count1 + type[count1][1];
    count2 = 0;

    Check();
}

var SelectBrunch_2 = function(){
    console.log("Selected 2nd root");

    afterBrunch();

    count1 = count1 + type[count1][2];
    count2 = 0;

    Check();
}

var afterBrunch = function(){
    document.getElementById("nametextbox").style.opacity = 0.7;
    document.querySelector(".textBox").style.opacity = 0.7;

    document.querySelector(".branch1").removeEventListener("click",SelectBrunch_1);
    document.querySelector(".branch2").removeEventListener("click",SelectBrunch_2);

    VanishButton1(document.querySelector(".branch1"));
    VanishButton2(document.querySelector(".branch2"));
}

var waitClick = function(element,text){
    return new Promise(resolve => {
        function handler(){//クリックされた時の挙動を書く
            if(isTyping == true){//Typingならば
                isTyping = false;
                console.log("clicked in typing");
                currentTypeIt.destroy();
                if(Array.isArray(text)){
                document.getElementById("maintextbox").innerText = maintext[count1][count2][1];
                }
                else{
                    document.getElementById("maintextbox").innerText = maintext[count1][count2];
                }

                return;
            }
            else{
                element.removeEventListener("click",handler);

                resolve();
            }
        }

        element.addEventListener("click",handler);
    }

    );
}

var waitendClick = function(element,text){
    return new Promise(resolve => {
        function handler(){//クリックされた時の挙動を書く
            if(isTyping == true){//Typingならば
                isTyping = false;
                console.log("clicked in typing");
                currentTypeIt.destroy();
                    document.getElementById("endtext").innerText = maintext[count1][count2];

                return;
            }
            else{
                element.removeEventListener("click",handler);

                resolve();
            }
        }

        element.addEventListener("click",handler);
    }

    );
}

var Ending = function(){
    location.href = "./endcard.html"
}

/*装飾要素------------------------------------------- */
var Bouncepic = function(pic){//要素そのものを入れる
    pic.animate(
        [
            {transform : "scale(1,1)"},
            {transform : "scale(1,1.1)"},
            {transform : "scale(1,0.97)"},
            {transform : "scale(1,1)"}
        ],
        {duration : 120
        }
    );
}

var VagelyShowPic = function(pic){//要素そのものを入れる
    pic.animate(
        [
            {opacity : 0},
            {opacity : 1}
        ],
        {duration : 1000,
        fill: "forwards"
        }
    );
}

var VagelyunShowPic = function(pic){//要素そのものを入れる
    pic.animate(
        [
            {opacity : 1},
            {opacity : 0}
        ],
        {duration : 500,
        fill: "forwards"
        }
    );
}

var ShownewButton1 = function(button){
    button.style.opacity = 1;

    button.animate(
        [
            {opacity: 1,
                transform : "translate(-50%,-170%) scale(1)"},
            {opacity: 1,
                transform : "translate(-50%,-170%) scale(1.1)"},
            {opacity:1,
                transform : "translate(-50%,-170%) scale(1)"}
        ],
        {duration : 120,
            fill: "forwards"

        }
    );
}

var ShownewButton2 = function(button){
    button.style.opacity = 1;
    

    button.animate(
        [
            {opacity:1,
                transform : "translate(-50%,-50%) scale(1)"},
            {opacity:1,
                transform : "translate(-50%,-50%) scale(1.1)"},
            {opacity:1,
                transform : "translate(-50%,-50%) scale(1)"}
        ],
        {duration : 120,
            fill: "forwards"

        }
    );
}

var VanishButton1 = function(button){

    button.animate(
        [
            {transform : "translate(-50%,-170%) scale(1)"},
            {transform : "translate(-50%,-170%) scale(1.1)"},
            {transform : "translate(-50%,-170%) scale(1)"},
            {opacity : 0}
        ],
        {duration : 120,
        fill : "forwards"
        }
    );
}

var VanishButton2 = function(button){

    button.animate(
        [
            {transform : "translate(-50%,-50%) scale(1)"},
            {transform : "translate(-50%,-50%) scale(1.1)"},
            {transform : "translate(-50%,-50%) scale(1)"},
            {opacity : 0}
        ],
        {duration : 120,
        fill : "forwards"
        }
    );
}


/*ロード後実行位置-------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    Check();
});