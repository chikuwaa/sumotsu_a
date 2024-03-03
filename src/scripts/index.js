// console.log("index.js");
function enterPage(){
  const inputPassword = document.querySelector('#pass').value;
  loginFunc(inputPassword);
}

function loginFunc(p) {
  const searchResult = document.querySelector('#search-result');

  sha256(p).then(function(hash){
    if(hash == "85daaf6f7055cd5736287faed9603d712920092c4f8fd0097ec3b650bf27530e"){
      sessionStorage.setItem('sumotsu_login', true );
      searchResult.textContent = 'ログインしました';
      //トップ画面へ遷移
      setTimeout(function(){
        window.location.href = './top.html';
      },500);
    }else{
      searchResult.textContent = 'パスワードが違います';
    }
  });

}

// ハッシュ化関数
async function sha256(text){
  const uint8  = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', uint8)
  return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}

// $(function(){
//     var is_animated = false;
//     var current_posi = "top";
//     var position = ( $(window).height() / 3 ) * 2;  // 発火させたい位置
//     var ani_position = $(window).height() / 2;  // 発火させたい位置
//     // var top = $('.light').offset().top - ani_position;
//     var l_top;
//     var l_skills;
//     var l_price;
//     var l_contact;

//     //スムーススクロール
//     $('a[href^="#"]').click(function(){
//         var speed = 500;
//         var href= $(this).attr("href");
//         var target = $(href == "#" || href == "" ? 'html' : href);
//         var s_position = target.offset().top;
//         $("html, body").animate({scrollTop:s_position}, speed, "swing");
//         return false;
//     });

//     //SPメニュー
//     if (matchMedia('(max-width: 768px)').matches) {
//         // ウィンドウサイズが768px以下のとき
//         $(".sp_menu").on('click',function(){
//             var menu_item = $(this).prev('ul');
//             menu_item.slideToggle('slow');
//             $(this).toggleClass("opened");
//         });

//         $(".sp_contact,.sp_contact_link").on('click',function(){
//             $(".contactsLst").toggleClass("opened");
//         });
//         $("nav a").on('click',function(){
//             $("nav ul").slideToggle('slow');
//             $(".sp_menu").removeClass("opened");
//         });
//     }

//     $(window).scroll(function(){

//         //current移動
//         if (matchMedia('(max-width: 768px)').matches) {
//         // ウィンドウサイズが768px以下のとき
//         }else{
//             if( is_animated == true){
//                 // console.log("a");
//                 l_top = $('#top').offset().top  - position;
//                 l_skills = $('#skills').offset().top - position;
//                 l_price = $('#price').offset().top - position;
//                 l_contact = $('#contact').offset().top - position;

//                 if( $(window).scrollTop() > l_top && $(window).scrollTop() < l_skills ){
//                     $('header .current').removeClass("skl price con");
//                 }else if( $(window).scrollTop() > l_skills && $(window).scrollTop() < l_price ){
//                     $('header .current').removeClass("skl price con");
//                     $('header .current').addClass("skl");
//                 }else if( $(window).scrollTop() > l_price && $(window).scrollTop() < l_contact ){
//                     $('header .current').removeClass("skl price con");
//                     $('header .current').addClass("price");
//                 }else if( $(window).scrollTop() > l_contact ){
//                     $('header .current').removeClass("skl price con");
//                     $('header .current').addClass("con");
//                 }
//             }
//         }

//     });

// });
