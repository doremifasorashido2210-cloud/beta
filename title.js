$(function () {
    $('.bar').click(function () {
        // メニューの開閉状態を切り替える
        $('.Menu').toggleClass('open');

        // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
        $(this).toggleClass('active');
    });
});

const text = ['・・・・・・',['あなた','今日は日曜日！'],['あなた','誰かに電話してみようかな']];
let count = 0;
let Selectedroot = "";

var StarttheGame = function(){
    console.log("lets start the game");
    document.removeEventListener("click",StarttheGame);

    VagelyunShowPic(document.getElementById("startbutton"));
    document.getElementById("startbutton").removeEventListener;
    VagelyShowPic(document.getElementById("homebackground"));

    VagelyShowPic(document.getElementById("maintextbox"));
    VagelyShowPic(document.getElementById("nametextbox"));

    Textflow();
}

var Textflow = async function(){
    do{
        document.getElementById("maintextbox").innerText = "";
        ShowText(text[count]);
        await waitClick(document.body,text[count]);

        count++;
    }while(count < 3);
    
    if(count == 3){

        console.log("ended the roop");
        count = 0;

        Selectroot();
    }
}

var Selectroot = function(){
    console.log("Select the root");
    VagelyShowPic(document.querySelector(".phone"));

    attouchButton(document.getElementById("phone0"),"0");
    attouchButton(document.getElementById("phone1"),"1");
    attouchButton(document.getElementById("phone2"),"2");
    attouchButton(document.getElementById("phone3"),"3");
    attouchButton(document.getElementById("phone4"),"4");
    attouchButton(document.getElementById("phone5"),"5");
    attouchButton(document.getElementById("phone6"),"6");
    attouchButton(document.getElementById("phone7"),"7");
    attouchButton(document.getElementById("phone8"),"8");
    attouchButton(document.getElementById("phone9"),"9");
    attouchButton(document.getElementById("phoneOK"),"OK");
}

var ShowText = function(text){

    //return new Promise((resolve => {
    if(Array.isArray(text)){
        console.log("show text by " + text[0]);
        console.log("below..." + text[1]);

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

var waitClick = function(element,text){
    return new Promise(resolve => {
        function handler(){//クリックされた時の挙動を書く
            if(isTyping == true){//Typingならば
                console.log("clicked in typing");
                currentTypeIt.destroy();
                isTyping = false;
                if(Array.isArray(text)){
                document.getElementById("maintextbox").innerText = text[count];
                }
                else{
                    document.getElementById("maintextbox").innerText = text[count];
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

var attouchButton = function(pic,num){//要素そのものと該当する文字列数字列を入れる
    pic.addEventListener("click",function(){addNumtoSelectedroot(num)});
}

var addNumtoSelectedroot = function(num){
    if(num == "OK"){
        console.log("fine the selection");
        console.log("Selected root is " + Selectedroot);
        VagelyunShowPic(document.querySelector(".phone"));
        JumptoStory();
    }
    else{
        console.log("attouch the root num " + num);
        Selectedroot = Selectedroot + num;
        console.log("Selected root is " + Selectedroot);

        document.getElementById("maintextbox").innerText = Selectedroot;
    }
}

var JumptoStory = function(){//--------------------------------------------------ルート追加の際は加筆のほど
    if(Selectedroot == "19860616625071"){
        console.log("jump to 19860616625071");
        location.href = "./19860616625071/index.html"
    }
    else if(Selectedroot == "123819751106"){
        console.log("jump to 123819751106");
        location.href = "./123819751106/index.html"
    }
    else if(Selectedroot == "21001"){
        console.log("jump to 21001");
        location.href = "./21001/index.html"
    }
    else{
        console.log("Error");
        location.href = "./title.html"
    }

}


document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", StarttheGame)
});