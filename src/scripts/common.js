// console.log("common.js");
window.onload = function(){
  const login_status = sessionStorage.getItem('sumotsu_login');

  // ログインしてなかったらログインページに戻る
  if( ! login_status ){
    window.location.href = '/';
  }
}
