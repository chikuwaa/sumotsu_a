/**
 * ログインページ以外で現在ログインしているか確認し、
 * ログインしていなかったらログインページに戻す
 *
 * sumotsu_login : index.jsで設定
 */
window.onload = function(){
  const login_status = sessionStorage.getItem('sumotsu_login');

  // ログインしてなかったらログインページに戻る
  if( ! login_status ){
    window.location.href = '/';
  }
}
