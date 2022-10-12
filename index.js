'use strict';
// mainListの情報を取得している
// const mainList = document.getElementById('mainList');
// // divを生成している
// const div = document.createElement('div');
// // 上記で生成したdivをmainListへ入れ込んでいる。
// mainList.append(div); //append追加

// ----------------------------------------------------------
// あん１
// inputTaskの情報を取得し、クリックをしたらクローンが作成される関数を作成
// const inputTask = (document.getElementById('inputTask').onclick = () => {
//   inputTask.cloneNode(true);
// });
// mainList.append(inputTask); //append追加

// あん２
const inputTask = (document.getElementById('inputTask')
// 取得したinputTaskの情報をもとに、クリックしたらクローンが作成されるというイベントを発生させている。
inputTask.addEventListener('click', () => {
  inputTask.cloneNode(true);
});
mainList.append(); //append追加
