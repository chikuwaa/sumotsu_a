function recordUrl(u){
  // パスワード認証した後に遷移するURLを記録
  sessionStorage.setItem('sumotsu_url', u );
}
// ページ内から`tit_middle`クラスを持つすべての要素を探す。
const titLink = document.querySelectorAll('.tit_middle');

// 各タイトルがクリックされたときのハンドリング
titLink.forEach((tit) => {
  // ID要素があるときだけ
  if(tit.children[0].id){
    tit.children[0].addEventListener('click',function(){
      recordUrl(tit.children[0].id)
    });
  }

});