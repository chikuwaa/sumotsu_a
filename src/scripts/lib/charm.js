/*!
 * Charm.js License (Revised January 14, 2024)
 * Copyright (c) Mizuna Shima
 * Website: https://lanama.net/scripts/charm/
 *
 * Subject to the conditions set forth below, anyone who obtains a copy of this script is granted permission to use it for commercial and non-commercial purposes free of charge.
 * Please adhere to the following usage rules:
 * 1. When used commercially or redistributed, significant parts must include the author's credit and the official distributor.
 * 2. Do not remove the credits and license text within the file.
 * 3. Do not sell the script, nor any product primarily based on this script.
 * 4. Do not use the saved data from this script for monetary claims or requests for goods.
 * Even if the user modifies this script, these rules must be followed.
 *
 * The author or copyright owner of this script shall not be liable for any damages or issues under any contract, tort, or other liabilities, in any case.
 */

// Charm.js ver 2.4.1

class Charm{

  /***************      設定変更可能 ここから      ***************/
  // 登録する名前の入力フォームアイテム共通Class
  static nameClass = 'charm';
  // 登録ボタンのId
  static setNameId = 'charmset';
  // 一時登録ボタンのId
  static setSessionId = 'charmsession';
  // 削除ボタンのId
  static unsetNameId = 'charmunset';
  // 一時登録の表記をするid
  static viewRegistSession = 'charmsessionmsg';
  // 一時保存の際に表示できるメッセージ
  static sessionString = '（一時保存しました）';

  // localStorageまたはsessionStorageの保存キー
  static storageKeyName = 'charm';

  // 登録できる最大文字数
  // この文字数を超える文字は「…」として登録されます。この機能を使用しない場合は0を設定します。
  static maxSize = 50;

  // 名前削除時にページを再読み込みをするかどうか
  // 再読み込みをする場合は1、再読み込みをしない場合は0を設定してください。
  static unsetReload = 1;
  // 名前登録時、ブラウザの設定で「Web Storage」が使えないときにウィンドウを出すかどうか
  // 出す場合は1を設定します。
  static showStorageError = 0;

  // 響き（欠けた名前を連呼する）回数のデフォルト
  static echoCountDefault = 2;
  // 詰まり回数のデフォルト
  static sttCountDefault = 2;

  // クラスモード使用時に設定するクラス名
  static charmClassList = {
    // 名前省略（1文字）
    charmShort : 'charm_short',
    // 区切り
    charmParse : 'charm_pause',
    // 響き
    charmEcho : 'charm_echo',
    // 詰まり
    charmStutter : 'charm_stutter',
    // カタカナ変換
    charmKana : 'charm_kana',
    // 最後の母音
    charmVowel : 'charm_vowel',
    // 最後の母音（小さい文字）
    charmVowelMin : 'charm_vowel_min',
    // 記号設定の共通部分
    charmSymbol : 'charm_symbol',
    // 回数設定の共通部分
    charmCount : 'charm_count',
  }
  // クラスモード使用時に設定する記号
  static symbols = [
    '&#8230;&#8230;', // ……
    '&#8230;', // …
    '&#12540;', // ー
    '&#8213;&#8213;', // ――
    '&#12336;&#12336;', // 〰〰
    '&#12336;', // 〰
    '&#12316;', // 〜
    '&#65281;', // ！
    '&#65281;&emsp;', // ！　（！の後ろに全角スペース）
    '&#65311;', // ？
    '&#65311;&emsp;', // ？　（？の後ろに全角スペース）
    '&#63;', // 半角の「?」
    '&#33;', // 半角の「!」
    '&#12289;', // 、
    '&#12290;', // 。
    '&#12539;', // ・
    '&#44;', // ,
    '&#65292;', // ，
    '&#8741;', // ∥
    '&#47;', // /
    '&#65295;', // ／
    '&#9675;&#9675;', // ○○
    '&#9675;', // ○
    '&#215;&#215;', // ××
    '&#215;', // ×
    '&#9734;&#9734;', // ☆☆
    '&#9734;', // ☆
    '&#9733;&#9733;', // ★★
    '&#9733;', // ★
    '&#9825;&#9825;', // ♡♡
    '&#9825;', // ♡
    '&#9734;&emsp;', // ☆（☆の後ろに全角スペース）
    '&#9733;&emsp;', // ★（★の後ろに全角スペース）
    '&#9825;&emsp;', // ♡（♡の後ろに全角スペース）
    '&#9834;', // ♪
    '&#9834;&emsp;', // ♪（♪の後ろに全角スペース）
    '&#65281;&#65311;', // ！？
    '&#65281;&#65311;&emsp;', // ！？（！？の後ろに全角スペース）
  ];

  /************** v1.2以前の設定ここから **************/
  // 登録ボタンのId
  static oldSetName = 'charm-setname';
  // 削除ボタンのId
  static oldUnsetName = 'charm-unsetname';

  /*************** 設定変更可能 ここまで 以降の行はシステム部分のため、触らないでください *******/

  constructor(){this.symbol={},this.charm={},this.tmpCharm={},this.isSession=!1,this.beforeList=[],this.countOption={};for(let t=1;t<=9;t++)this.countOption[`n${t}`]=t;this.strStutter="&#12289;",this.strPauseEcho="&#8230;&#8230;",this.attributeBeforeName="data-charm-before",this.vowels={},this.vowels.patternA1=/[あかさたなはまやらわがざだばぱゃぁゕゎ]/,this.vowels.patternA2=/[アカサタナハマヤラワガザダナパァヵㇵャㇻヮ]/,this.vowels.patternI1=/[いきしちにひみりゐぎじぢびぃヰ]/,this.vowels.patternI2=/[イキシチニヒミリギジヂビィㇱㇶㇼ]/,this.vowels.patternU1=/[うくすつぬふむゆるぐずづぶぷゅぅっ]/,this.vowels.patternU2=/[ウクスヌヌフムユルグズヅブプュゥㇰㇲッㇴㇷㇽ]/,this.vowels.patternE1=/[えけせてねへめれゑげぜでべぺぇゖ]/,this.vowels.patternE2=/[エケセテネヘメレゲゼデベペェヶㇸㇾ]/,this.vowels.patternO1=/[おこそとのほもよろをごぞどぼぽょぉ]/,this.vowels.patternO2=/[オコソトノホモヨロヲゴゾドボポョォㇳㇹㇺㇿ]/,this.vowels.patternN=/[んー〜ン]/,this.repVowelsUppercase=["あ","ア","い","イ","う","ウ","え","エ","お","オ"],this.repVowelsLowercase=["ぁ","ァ","ぃ","ィ","ぅ","ゥ","ぇ","ェ","ぉ","ォ"],Charm.symbols.forEach((t,e)=>{this.symbol[`c${String(e+1).padStart(2,"0")}`]=t}),this.nameTransformation=new NameTransformation(this)}static run=()=>{let t=new Charm;return t.start(),t};start=()=>{let t=document.cookie;if(t){let e=t.split("; "),r=new Date;r.setTime(r.getTime()-864e5);for(let a=0;a<e.length;a++){let s=e[a].split("=");document.cookie=decodeURIComponent(s[0])+"=; path=/; expires="+r.toUTCString()}}let h=[{newId:Charm.setNameId,oldId:Charm.oldSetName,handler:this.setNameHandler(!0)},{newId:Charm.setSessionId,oldId:null,handler:this.setNameHandler(!1)},{newId:Charm.unsetNameId,oldId:Charm.oldUnsetName,handler:this.unsetNameHandler}];h.forEach(({newId:t,oldId:e,handler:r})=>{let a=document.getElementById(t);!a&&e&&(a=document.getElementById(e)),a&&(a.removeEventListener("click",r,!1),a.addEventListener("click",r,!1))}),this.viewName()};unsetStorage=()=>{let t=document.querySelectorAll("."+Charm.nameClass);if(t.forEach(t=>{t.value=""}),this.charm||this.tmpCharm){try{localStorage.removeItem(Charm.storageKeyName),sessionStorage.removeItem(Charm.storageKeyName)}catch(e){}Charm.unsetReload?location.reload(!0):this.resetElements(),this.beforeList=[]}};resetElements=()=>{let t=document.querySelectorAll(`[${this.attributeBeforeName}]`);t.forEach(t=>{let e=parseInt(t.getAttribute(`${this.attributeBeforeName}`));this.writeText(t,this.beforeList[e]),t.removeAttribute(this.attributeBeforeName)});document.getElementById(Charm.viewRegistSession).textContent="",this.beforeList=this.charm=this.tmpCharm={}};setNameHandler=t=>()=>{this.setStorage(t)&&this.viewName()};unsetNameHandler=()=>{this.unsetStorage()};setStorage=(t=!0)=>{let e=document.getElementsByClassName(Charm.nameClass),r={};for(let a=0;a<e.length;a++){let s=e[a];if(!s||s.value.length<1)continue;let h=s.value;void 0!==Charm.maxSize&&0!==Charm.maxSize&&h.length>Charm.maxSize&&(h=h.slice(0,Charm.maxSize)+"…"),r[s.id]=this.tmpCharm[s.id]=encodeURIComponent(h)}try{let i=t?localStorage:sessionStorage,n=t?sessionStorage:localStorage;i.setItem(Charm.storageKeyName,JSON.stringify(r)),n.removeItem(Charm.storageKeyName)}catch(m){Charm.showStorageError&&alert("Web Storageが利用できません。ブラウザの設定を確認してください。")}return!0};viewName=()=>{if(this.readName(),this.charm){for(let t in this.charm)this.replaceEdit(t,this.charm[t]),this.setFormName(t);this.setSessionMessage()}};replaceEdit(t,e){if(!e)return;let r=Array.from(document.getElementsByClassName(t));r.forEach(t=>{let r=this.nameTransformation.nameSplit(e),a=e,s=t.classList,h=t.dataset,i=!1,n=[{check:()=>this.nameTransformation.checkCharmShort(h,s),action:t=>this.nameTransformation.replaceShortArray(r,t).join("")},{check:()=>!i&&this.nameTransformation.checkCharmPause(h,s),action:t=>r.join(t)},{check:()=>!i&&this.nameTransformation.checkCharmEcho(h,s),action:t=>{let e=this.nameTransformation.getEchoSttCount(h,s,!0);return this.nameTransformation.replaceEcho(r,t,e)}},{check:()=>!i&&this.nameTransformation.checkCharmStutter(h,s),action:t=>{let e=this.nameTransformation.getEchoSttCount(h,s,!1);return this.nameTransformation.replaceStutter(r[0],t,e)}},{check:()=>!i&&this.nameTransformation.checkLastVowel(h,s,a),action:t=>t},{check:()=>this.nameTransformation.checkReplaceKana(h,s),action:()=>this.nameTransformation.replaceKana(a),final:!0}];n.forEach(t=>{t.check()&&(a=t.action(t.check()),i=!t.final)}),this.setBeforeStrIndex(t),this.writeText(t,a)})}writeText=(t,e)=>{let r=new DOMParser,a=r.parseFromString(e,"text/html"),s=a.body.textContent||"";t.textContent=s};setBeforeStrIndex=t=>{if(Charm.unsetReload)return;let e=t.getAttribute(this.attributeBeforeName);if(null===e||""===e){let r=this.beforeList.length;this.beforeList[r]=t.textContent,t.setAttribute(this.attributeBeforeName,r)}};readName=()=>{this.isSession=!1;let t=null,e;try{(t=JSON.parse(localStorage.getItem(Charm.storageKeyName)))||(t=JSON.parse(sessionStorage.getItem(Charm.storageKeyName)),this.isSession=!!t)}catch(r){if(e=Object.keys(this.tmpCharm),!t&&e.length<1)return;if(!t&&e.length>0)for(let a=0;a<e.length;a++)this.charm[[e[a]]]=decodeURIComponent(this.tmpCharm[e[a]]);return}if(null===t)return;let s=Object.keys(t);for(let h=0;h<s.length;h++)this.charm[s[h]]=decodeURIComponent(t[s[h]])};setSessionMessage=()=>{let t=document.getElementById(Charm.viewRegistSession);null!==t&&(this.isSession?t.textContent=Charm.sessionString:t.textContent="")};setFormName=t=>{let e=document.getElementById(t);e&&(e.value=this.charm[t])}}class NameTransformation{constructor(t){this.Charm=t}getOptCount=t=>{let e=Object.keys(this.Charm.countOption);for(let r=0;r<e.length;r++){let a=Charm.charmClassList.charmCount+String(e[r].slice(-1));if(t.contains(a))return this.Charm.countOption[e[r]]}return!1};getSymbol=t=>{let e=Object.keys(this.Charm.symbol);for(let r=0;r<e.length;r++){let a=Charm.charmClassList.charmSymbol+String(e[r].slice(-2));if(t.contains(a))return this.Charm.symbol[e[r]]}return!1};getEchoSttCount=(t,e,r=!0)=>{let a=1,s=r?Charm.echoCountDefault:Charm.sttCountDefault;return r&&t.charmEchCount?a=parseInt(t.charmEchCount)?parseInt(t.charmEchCount):s:!r&&t.charmSttCount?a=parseInt(t.charmSttCount)?parseInt(t.charmSttCount):s:(a=this.getOptCount(e))||Charm.echoCountDefault};checkCharmShort=(t,e)=>{let r=1;return t.charmShort&&parseInt(t.charmShort)?r=parseInt(t.charmShort)?parseInt(t.charmShort):1:!!e.contains(Charm.charmClassList.charmShort)&&((r=this.getOptCount(e))||1)};checkCharmPause=(t,e)=>{if("pause"===t.charmCall)return t.charmBreak?t.charmBreak:this.Charm.strPauseEcho;if(!e.contains(Charm.charmClassList.charmParse))return!1;let r;return this.getSymbol(e)||this.Charm.strPauseEcho};checkCharmEcho=(t,e)=>{if("echo"===t.charmCall)return t.charmBreak?t.charmBreak:this.Charm.strPauseEcho;if(!e.contains(Charm.charmClassList.charmEcho))return!1;let r;return this.getSymbol(e)||this.Charm.strPauseEcho};checkCharmStutter=(t,e)=>{if("stutter"===t.charmCall)return t.charmBreak?t.charmBreak:this.Charm.strStutter;if(!e.contains(Charm.charmClassList.charmStutter))return!1;let r;return this.getSymbol(e)||this.Charm.strStutter};checkLastVowel=(t,e,r)=>{if(!t.charmVowel&&!t.charmVowelMin&&!e.contains(Charm.charmClassList.charmVowel)&&!e.contains(Charm.charmClassList.charmVowelMin))return!1;let a=r.slice(-1),s="",h=!0;(t.charmVowelMin||e.contains(Charm.charmClassList.charmVowelMin))&&(h=!1);let i=Object.keys(this.Charm.vowels);for(let n=0;n<i.length;n++){let m=RegExp(this.Charm.vowels[i[n]]);if(a.match(m)){s=n<i.length-2?h?this.Charm.repVowelsUppercase[n]:this.Charm.repVowelsLowercase[n]:a;break}}var o=0,c=this.getOptCount(e);if(t.charmVowelCount)o=parseInt(t.charmVowelCount)?parseInt(t.charmVowelCount):1;else{if(!c)return s;o=c}var l=s;for(let u=0;u<o;u++)l+=s;return l};checkReplaceKana=(t,e)=>!!("on"===t.charmKana||"1"==t.charmKana||e.contains(Charm.charmClassList.charmKana));nameSplit=t=>{let e=t.split(""),r=[];for(let a=0;a<e.length;a++){let s=e[a];for(let h=a+1;h<e.length;h++)if(e[h].match(/[ぁぃぅぇぉゕゖっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮｧｨｩｪｫｬｭｮｯ・ー]/g))s+=e[h],a++;else break;r.push(s)}return r};replaceShortArray=(t,e)=>{if(t.length<e)return t;let r=[];for(let a=0;a<e;a++)a===e-1&&(t[a]=t[a].replace(/[\u3063|\u30c3|\u30FC|ｯ|・]/,"")),r.push(t[a]);return r};replaceEcho=(t,e,r)=>{let a=e,s;s=t.length-1>r?r:t.length-1;for(let h=1;h<=s;h++){for(let i=0;i<t.length;i++)i>s-h&&(a+=t[i]);a+=e}return a};replaceStutter=(t,e,r)=>{let a="";for(let s=0;s<r;s++)s!==r-1?a+=t+e:a+=t;return a};replaceKana=t=>t.replace(/[\u3041-\u3096]/g,t=>String.fromCharCode(t.charCodeAt(0)+96))
}
try {
  Charm.run();
} catch (error) {
  console.error('An error occurred while creating a Charm instance: ', error);
}
