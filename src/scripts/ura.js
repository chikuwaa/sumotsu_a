/**
 * 裏ページでのパスワード認証
 */
document.querySelector('#passCheck').addEventListener('click', () => {
  passCheck();
});

function passCheck(){
  const inputPassword = document.querySelector('#pass').value;
  loginFunc(inputPassword);

}

function loginFunc(p) {
  const searchResult = document.querySelector('#search-result');
  const targetUrl = sessionStorage.getItem('sumotsu_url');
  console.log(targetUrl);
  sha256(p).then(function(hash){
    if(hash == "2ac9a6746aca543af8dff39894cfe8173afba21eb01c6fae33d52947222855ef"){
      searchResult.textContent = '認証しました';
      //ターゲットへ遷移
      setTimeout(function(){
        window.location.href = targetUrl;
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
