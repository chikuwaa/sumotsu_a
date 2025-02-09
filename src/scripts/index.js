/**
 * ログインページ
 */
document.querySelector('#enterPage').addEventListener('click', () => {
  enterPage();
});
/**
 * enterボタンを押したときに実行
 */
function enterPage(){
  const inputPassword = document.querySelector('#pass').value;
  loginFunc(inputPassword);
}
/**
 * パスワード認証
 */
function loginFunc(p) {
  const searchResult = document.querySelector('#search-result');

  sha256(p).then(function(hash){
    if(hash == "2ac9a6746aca543af8dff39894cfe8173afba21eb01c6fae33d52947222855ef"){
      sessionStorage.setItem('sumotsu_login', true );
      searchResult.textContent = 'ログインしました';
      //トップ画面へ遷移
      setTimeout(function(){
        window.location.href = './top/';
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
