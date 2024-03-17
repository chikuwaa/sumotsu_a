function recordUrl(u){
  // パスワード認証した後に遷移するURLを記録
  sessionStorage.setItem('sumotsu_url', u );
}
// ページ内から`js-novelLink`クラスを持つすべての要素を探す。(一覧ページの場合)
const titLink = document.querySelectorAll('.js-novelLink');
// ページ内から`js-pagenationLink`クラスを持つすべての要素を探す。(ページネーションの場合)
const pagenationLink = document.querySelectorAll('.js-pagenationLink');

// 各タイトルがクリックされたときのハンドリング
titLink.forEach((tit) => {
  // ID要素があるときだけ
  if(tit.children[0].id){
    tit.children[0].addEventListener('click',function(){
      // console.log(window.location.href+tit.children[0].id+"/");
      recordUrl(window.location.href+tit.children[0].id)
    });
  }

});
// ページネーションがクリックされたときのハンドリング
pagenationLink.forEach((tit) => {
  // ID要素があるときだけ
  if(tit.children[0].id){
    tit.children[0].addEventListener('click',function(){
      let originHref = window.location.href.split('/')
      originHref.pop();
      const targetHref = originHref.join('/')
      recordUrl(targetHref+"/"+tit.children[0].id)
    });
  }

});