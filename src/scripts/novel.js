/**
 * 小説シリーズページ
 */
document.querySelector('#nameChangeOpen').addEventListener('click', () => {
  nameChangeOpen();
});
document.querySelector('#record_check').addEventListener('click', () => {
  changeBtn();
});

/**
 * 「名前変換はこちら」をクリックしたときに閉じたり開いたりする
 */
function nameChangeOpen(){
  const nameChangeElem = document.getElementById("nameChangeBlock");
  const nameChangeInElem = document.getElementById("nameChangeBlock").children;

  if(nameChangeElem.classList.contains("open")){
    nameChangeElem.style.height = "0px";
    nameChangeElem.classList.remove("open");
  }else{
    nameChangeElem.style.height = nameChangeInElem[0].clientHeight + "px";
    nameChangeElem.classList.add("open");
  }
}
/**
 * 「登録を保存する」をクリックしたときに、登録ボタンを切り替える
 */
function changeBtn(){
  const checkBoxStatus = document.getElementById("record_check").checked;
  const btn01 = document.getElementById("charmset");
  const btn02 = document.getElementById("charmsession");
  if(checkBoxStatus){
    btn01.style.display = "inline-block";
    btn02.style.display = "none";
  }else{
    btn01.style.display = "none";
    btn02.style.display = "inline-block";
  }
}
