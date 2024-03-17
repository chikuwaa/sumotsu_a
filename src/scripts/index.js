// console.log("index.js");
document.querySelector('#enterPage').addEventListener('click', () => {
  enterPage();
});
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
