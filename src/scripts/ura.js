// console.log("ura.js");

function passCheck(){
  const inputPassword = document.querySelector('#pass').value;
  loginFunc(inputPassword);

}

function loginFunc(p) {
  const searchResult = document.querySelector('#search-result');
  const targetUrl = sessionStorage.getItem('sumotsu_url');
  console.log(targetUrl);
  sha256(p).then(function(hash){
    if(hash == "fa3cfb3f1bb823aa9501f88f1f95f732ee6fef2c3a48be7f1d38037b216a549f"){
      // sessionStorage.setItem('sumotsu_ura', true );
      searchResult.textContent = '認証しました';
      //ターゲットへ遷移
      setTimeout(function(){
        window.location.href = './'+targetUrl+'.html';
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
