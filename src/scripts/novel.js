function nameChangeOpen(){
  const nameChangeElem = document.getElementById("nameChangeBlock");
  const nameChangeInElem = document.getElementById("nameChangeBlock").children;
  // console.log(nameChangeInElem[0].clientHeight);

  if(nameChangeElem.classList.contains("open")){
    nameChangeElem.style.height = "0px";
    nameChangeElem.classList.remove("open");
  }else{
    nameChangeElem.style.height = nameChangeInElem[0].clientHeight + "px";
    nameChangeElem.classList.add("open");
  }
}
function changeBtn(){
  const checkBoxStatus = document.getElementById("record_check").checked;
  const btn01 = document.getElementById("charmset");
  const btn02 = document.getElementById("charmsession");
  console.log(checkBoxStatus);
  if(checkBoxStatus){
    btn01.style.display = "inline-block";
    btn02.style.display = "none";
  }else{
    btn01.style.display = "none";
    btn02.style.display = "inline-block";
  }
}
