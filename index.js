'use strict';
// mainListの情報を取得している;
const mainList = document.getElementById('mainList');
// divを生成している
const div = document.createElement('div');
// 上記で生成したdivをmainListへ入れ込んでいる。
mainList.append(div); //append追加

// ----------------------------------------------------------
// ●アドイベントリスナーを使用し、クリック後にインプットが増える仕様にしたい！
// 案１
// inputTaskの情報を取得し、クリックをしたらクローンが作成される関数を作成
// const inputTask = (document.getElementById('inputTask').addEventListener(click,()=>{
//   inputTask.cloneNode(true)
// }
// inputTask.append(inputTask)

// 案２
// inputTaskの情報を取得している。
const inputTask = document.getElementById('inputTask');
// クリックをしたらinputTask要素が複製される
inputTask.addEventListener('click', () => {
  const inputTaskClone = inputTask.cloneNode(true);
  mainList.append(inputTaskClone); //append追加
});

// 上記をmainListへ入れ込む

// 案３
// inputTaskの情報を取得している。
// const inputTask = document.getElementById('inputTask');
// // クリックをしたらinputTask要素が複製される
// inputTask.onclick = () => {
//   inputTask.cloneNode(true);
// };
// mainList.append(inputTask); //append追加
