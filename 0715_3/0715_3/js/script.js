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


// テキストタイピング
let speed = 100;
let speed2 = 50;
let memory = 0;/* after時参照用　前回のスライダー番号　初期値0 */

// initial
const typewriter1 = (param) => {
  let el =   document.getElementById('typewriter1_1');
  let el2 =   document.getElementById('typewriter1_2');
  let string1 = "AIといっしょに学ぶ".split("");
  let string2 = "Bigistantは大規模言語モデル（Large Language Models、LLM）を利用した学習支援サ―ビスです。".split("");
  let snum = 0;


  document.getElementById('typewriter1_1').classList.add('is-active');
  document.getElementById('typewriter1_2').classList.add('is-active');

  // slide1_1
  for (let index = 0; index < string1.length; index++) {
    const char = string1[index];  
    setTimeout(() => {
      el.textContent += char;
    }, speed * index);
  }

  // slide1_2
  for (let index = 0; index < string2.length; index++) {
    const char = string2[index];     
    setTimeout(() => {
      el2.textContent += char;
    }, speed2 * index);
  }
};
typewriter1({
});

$('.slider').on('afterChange', function(slick, currentSlide) {


  
  document.getElementById('mv-mask').classList.add('is-active');
  setTimeout(function(){
    document.getElementById('mv-mask').classList.remove('is-active');
  },1000);



if(memory !== currentSlide['currentSlide']){

  const type = document.getElementsByClassName('typing');
  for (let i = 0; i < type.length; i++) {
    type[i].classList.remove('is-active');
  }

  setTimeout(function(){
    const type = document.getElementsByClassName('typing');
    for (let i = 0; i < type.length; i++) {
      type[i].classList.add('is-active');
    }
  },100);

  document.getElementById('typewriter1_1').textContent = "";
  document.getElementById('typewriter1_2').textContent = "";
  document.getElementById('typewriter2_1').textContent = "";
  document.getElementById('typewriter2_2').textContent = "";
  document.getElementById('typewriter3_1').textContent = "";
  document.getElementById('typewriter3_2').textContent = "";


  /* slide1 */
    const typewriter1 = (param) => {
      let el =   document.getElementById('typewriter1_1');
      let el2 =   document.getElementById('typewriter1_2');
      let string1 = "AIといっしょに学ぶ".split("");
      let string2 = "Bigistantは大規模言語モデル（Large Language Models、LLM）を利用した学習支援サ―ビスです。".split("");
      let snum = 0;

      // slide1_1
      for (let index = 0; index < string1.length; index++) {
        const char = string1[index];
        if(currentSlide['currentSlide'] !== snum){
          break;
        }
      
        setTimeout(() => {
          el.textContent += char;
        }, speed * index);
      }

      // slide1_2
      for (let index = 0; index < string2.length; index++) {
        const char = string2[index];
        if(currentSlide['currentSlide'] !== snum){
          break;
        }      
        setTimeout(() => {
          el2.textContent += char;
        }, speed2 * index);
      }
    };
    typewriter1({
    });


    // slide2
    const typewriter2 = (param) => {
      let el =   document.getElementById('typewriter2_1');
      let el2 =   document.getElementById('typewriter2_2');
      let string1 = "AIといっしょに教える".split("");
      let string2 = "Bigistantは大規模言語モデル（Large Language Models、LLM）を利用した学習支援サ―ビスです。".split("");
      let snum = 1;

      // slide2_1
      for (let index = 0; index < string1.length; index++) {
        const char = string1[index];
        if(currentSlide['currentSlide'] !== snum){
          break;
        }
      
        setTimeout(() => {
          el.textContent += char;
        }, speed * index);
      }

      // slide2_2
      for (let index = 0; index < string2.length; index++) {
        const char = string2[index];
        if(currentSlide['currentSlide'] !== snum){
          break;
        }
      
        setTimeout(() => {
          el2.textContent += char;
        }, speed2 * index);
      }
    };
    typewriter2({
    });

    // slide3
    const typewriter3 = (param) => {
      let el =   document.getElementById('typewriter3_1');
      let el2 =   document.getElementById('typewriter3_2');
      let string1 = "AIといっしょに振り返る".split("");
      let string2 = "Bigistantは大規模言語モデル（Large Language Models、LLM）を利用した学習支援サ―ビスです。".split("");
      let snum = 2;

      // slide3_1
      for (let index = 0; index < string1.length; index++) {
        const char = string1[index];
        if(currentSlide['currentSlide'] !== snum){
          break;
        }
      
        setTimeout(() => {
          el.textContent += char;
        }, speed * index);
      }

      // slide3_2
      for (let index = 0; index < string2.length; index++) {
        const char = string2[index];
        if(currentSlide['currentSlide'] !== snum){
          break;
        }
      
        setTimeout(() => {
          el2.textContent += char;
        }, speed2 * index);
      }
    };
    typewriter3({
    });

}

// memory更新
memory = currentSlide['currentSlide'];

});


$('.slider').on('beforeChange', function(slick,currentSlide,nextSlide) {

  // const type = document.getElementsByClassName('typing');
  // for (let i = 0; i < type.length; i++) {
  //   type[i].classList.remove('is-active');
  // }



// breaksign =1;
// console.log('point25_'+breaksign);
  // //スライドが切り替わる直前に実行する処理を書く
  // $(element).each(function () {
  //   thisChild = $(this).children(); //生成したspanタグを取得  
  //   thisChild.hide();  
  // });

});

// もっと見るボタン押下時(できること)
$(function () {
  // liの数を取得
  const listItems = $(".js-accordion-about li").length;
  $(".js-accordion-about").each(function () {
    // 最初に表示させるliの数
    let num = 1,
      // 閉じた時に表示させるliの数
      closeNum = num - 1;
    // 4行目まで表示
    $(this)
      .find("li:not(:lt(" + num + "))")
      .hide();
    // もっと見るボタンがクリックされた時
    $(".about-btn").click(function () {
      // numに+5ずつしていく = 5行ずつ追加する
      num += 1;
      $(this)
        .parent()
        .find("li:lt(" + num + ")")
        .slideDown();
    });
  });
});


// もっと見るボタン押下時(ニュース)
$(function () {
  // liの数を取得
  const listItems = $(".js-accordion-news li").length;
  $(".js-accordion-news").each(function () {
    // 最初に表示させるliの数
    let num = 4,
      // 閉じた時に表示させるliの数
      closeNum = num - 1;
    // 4行目まで表示
    $(this)
      .find("li:not(:lt(" + num + "))")
      .hide();
    // もっと見るボタンがクリックされた時
    $(".news-btn").click(function () {
      // numに+5ずつしていく = 5行ずつ追加する
      num += 2;
      $(this)
        .parent()
        .find("li:lt(" + num + ")")
        .slideDown();
    });
  });
});