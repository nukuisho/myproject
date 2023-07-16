// ハンバーガーメニュー
jQuery('.drawer-icon').on('click', function() {

    //クリックした時にis－activeクラスを付与する
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');

    return false;
});

jQuery('.drawer-menu a').on('click',function() {
    jQuery('.drawer-icon').removeClass('is-active');
    jQuery('.drawer-content').removeClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
});

// // スライダー
jQuery(".slider").slick({
    // autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    dots: true, // スライド下部にインジケーターを表示
});





// // テキストタイピング
// //テキストごとにspanタグを生成する
// var element = $(".typing");
// var thisChild = ""
// element.each(function () {
//    var text = $(this).html();
//    var textbox = "";
//    text.split('').forEach(function (target) {
//      if (target !== " ") {
//        textbox += '<span>' + target + '</span>';
//      } else {
//        textbox += target;
//      }
//    });
//    $(this).html(textbox);
// });

// // タイピングアニメーション
// $(element).each(function () {
//     thisChild = $(this).children(); //生成したspanタグを取得  
//     thisChild.each(function (i) {
//       var time = 100;
//       // $(this).delay(time * i).fadeIn(time);
//       // $(this).delay(time * 1).fadeIn(time);
//       $(this).fadeIn(time);
//     });
// });




// const typewriter = (param) => {
//   let el = document.querySelector(param.el);
//   let string = param.string.split("");
//   let speed = param.speed;
//   let el2 = document.querySelector(param.el2);
//   let string2 = param.string2.split("");
//   let speed2 = param.speed2;
//   string.forEach((char, index) => {
//       setTimeout(() => {
//           el.textContent += char;
//       }, speed * index);
//   });
//   string2.forEach((char, index) => {
//       setTimeout(() => {
//           el2.textContent += char;
//       }, speed2 * index);
//   });
// };
// typewriter({
//   el: "#typewriter", //要素
//   string: "AIといっしょに学ぶ", //文字列
//   el2: "#typewriter2", //要素
//   string2: "Bigistantは大規模言語モデル（Large Language Models、LLM）を利用した学習支援サ―ビスです。", //文字列
//   speed: 100, //速度
//   speed2: 70 //速度
// });




// type 
// let speed = 100;
// let speed2 = 50;


// type initial
// const typewriter1 = (param) => {
//   let el = document.querySelector(param.el);
//   let string = param.string.split("");
//   let speed = param.speed;

//   let el2 = document.querySelector(param.el2);
//   let string2 = param.string2.split("");
//   let speed2 = param.speed2;

//   console.log('point10_'+string2);
//   string.forEach((char, index) => {
//       setTimeout(() => {
//           el.textContent += char;
//       }, speed * index);
//   });

//   for (let index = 0; index < string2.length; index++) {
//     const char = string2[index];
//     const timeout = speed2 * index;
  
//     setTimeout(() => {
//       el2.textContent += char;
//     }, timeout);
//   }
// };
// typewriter1({
//   el: "#typewriter1_1", //要素
//   string: "AIといっしょに学ぶ", //文字列
//   el2: "#typewriter1_2", //要素
//   string2: "Bigistantは大規模言語モデル（Large Language Models、LLM）を利用した学習支援サ―ビスです。", //文字列
//   speed: 100, //速度
//   speed2: 50 //速度
// });


let string1_1 = 'AIといっしょに学ぶ'.split("");
let string1_2 = 'Bigistantは大規模言語モデル（Large Language Models、LLM）を利用した学習支援サ―ビスです。'.split("");
let st1_2len = string1_2.length;
let breaksign = 0;
let speed = 100;
let speed2 = 50;
let memory = 0;/* after時参照用　前回のスライダー番号　初期値0 */

$('.slider').on('afterChange', function(slick, currentSlide) {
  
  console.log('point_'+currentSlide['currentSlide']);

  if(memory !== currentSlide['currentSlide']){
    console.log('afterchange');  
    document.getElementById('typewriter1_1').textContent = "";
    document.getElementById('typewriter1_2').textContent = "";
    document.getElementById('typewriter2_1').textContent = "";
    document.getElementById('typewriter2_2').textContent = "";


    /* slide0 */
    if(currentSlide['currentSlide'] == 0){
      const typewriter1 = (param) => {
        let el = document.querySelector(param.el);
        let el2 = document.querySelector(param.el2);

        string1_1.forEach((char, index) => {
            setTimeout(() => {
                el.textContent += char;
            }, speed * index);
        });

        for (let index = 0; index < string1_2.length; index++) {
          const char = string1_2[index];
          const timeout = speed2 * index;

          if(currentSlide['currentSlide'] !== 0){
          // if(breaksign == 1 && currentSlide['currentSlide'] !== 0){
            console.log('point20_breakします');
            break;
          }
        
          setTimeout(() => {
            el2.textContent += char;
          }, timeout);
        }
      };
      typewriter1({
        el: "#typewriter1_1", //要素
        el2: "#typewriter1_2", //要素
        // string: "AIといっしょに学ぶ", //文字列
        // string2: "Bigistantは大規模言語モデル（Large Language Models、LLM）を利用した学習支援サ―ビスです。", //文字列
        speed: 100, //速度
        speed2: 50 //速度
      });
    }
}

  
  
  const typewriter2 = (param) => {
    let el = document.querySelector(param.el);
    let string = param.string.split("");
    let speed = param.speed;
  
    let el2 = document.querySelector(param.el2);
    let string2 = param.string2.split("");
    let speed2 = param.speed2;
    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
    string2.forEach((char, index) => {
        setTimeout(() => {
            el2.textContent += char;
        }, speed2 * index);
    });
  };
  typewriter2({
    el: "#typewriter2_1", //要素
    string: "text", //文字列
    el2: "#typewriter2_2", //要素
    string2: "orange banana apple", //文字列
    speed: 100, //速度
    speed2: 70 //速度
  });



  // memory更新
  memory = currentSlide['currentSlide'];

});
  
  
$('.slider').on('beforeChange', function(slick,currentSlide,nextSlide) {

  // breaksign =1;
  // console.log('point25_'+breaksign);
    // //スライドが切り替わる直前に実行する処理を書く
    // $(element).each(function () {
    //   thisChild = $(this).children(); //生成したspanタグを取得  
    //   thisChild.hide();  
    // });
  
});