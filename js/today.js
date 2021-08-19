
// 参考にしたサイト：https://lab.syncer.jp/Web/JavaScript/Snippet/3/
// 参考にしたサイト：https://algorithm.joho.info/programming/javascript/alert-new-line/


var date = new Date () ;

var day = date.getDate();
// console.log(day);

if(day === 5 || day === 15 || day === 25){
    alert("今日は5の日です\n鯛めしはいかがですか？");
    // console.log("今日は5の日です\n鯛めしはいかがですか？");
}


if(day === 2 || day === 12 || day === 22){
    alert("今日は2の日です\n鶏めしはいかがですか？");
    // console.log("今日は5の日です\n鯛めしはいかがですか？");
}



function any(n){
    var num = Math.floor(Math.random()*n+1);
    return num;
}

var all = any(5);
// console.log( t );
console.log(all);

var image_name;
if (no == 1) {
    image_name = "img/mentai.JPG";
} else if (no == 2) {
    image_name = "img/akina.JPG";
} else if (no == 3) {
    image_name = "img/ume.JPG";
} else {
    image_name = "img/ikura.JPG";
}

alert(" おみくじが出ました！さて結果は？ ");
// 画像と文字列の差し替え
document.getElementById("result").src = "img/" + image_name;
// document.getElementById("playBtn").innerHTML = " やりなおす";


// function nohot(n){
//     var num = Math.floor(Math.random()*n+1);
//     return num;
// }

var nothot = any(5);
// console.log( t );
console.log(nothot);


// function allergy(n){
//     var num = Math.floor(Math.random()*n+1);
//     return num;
// }

var allergy = any(5);
// console.log( t );
console.log(allergy);



// const btn1 = document.querySelector ("#btn1");
// btn1.onclick = function (e){
//     console.log(e);
//     alert("好き嫌いナシ、了解しました！");
// }


// $("#btn1").on("click",function(){
//     const r = Math.ceil(Math.random()*5+1);
//     console.log(r);
//     let view = "";
// });

// $("#omikuji").html();




// // 2.IF分岐
// let view();

// if(r === 0){
//     view("大吉");
// }
// else if(r === 1){
//     view("中吉");
// }
// else if(r === 2){
//     view("小吉");
// }
// else if(r === 3){
//     view("末吉");
// }
// else if(r === 4){
//     view("凶");
// }

// // 3.結果表示
// $("#result").html(view);


// const btn2 = document.querySelector ("#btn2");
// btn2.onclick = function (e){
//     console.log(e);
//     alert("辛いのNG、了解しました！");
// }

// const btn3 = document.querySelector ("#btn3");
// btn3.onclick = function (e){
//     console.log(e);
//     alert("アレルギーあり、了解しました！");
// }





function play() {
    // 0 ～ 4 の範囲のランダムな値を得る
    var no = Math.floor(Math.random() * 5);

    // ランダム値に応じて表示する画像を変える
    var image_name;
    if (no == 0) {
        image_name = "ume.JPG";
    } else if (no == 1) {
        image_name = "akina.JPG";
    } else if (no == 2) {
        image_name = "ikura.JPG";
    } else if (no == 3) {
        image_name = "mentai.JPG";
    } else {
        image_name = "shake.JPG";
    }

    alert(" おみくじが出ました！さて結果は？ ");
    // 画像と文字列の差し替え
    document.getElementById("omikuji").src = "img/" + image_name;
    // document.getElementById("playBtn").innerHTML = " やりなおす";
}