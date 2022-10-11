'use strict';
// mainListの情報を取得している
const mainList = document.getElementById('mainList');
// divを生成している
const div = document.createElement('div');
// 上記で生成したdivをmainListへ入れ込んでいる。
mainList.append(div); //append追加

// ----------------------------------------------------------
//元となるものを取得
// 複製（調べる）
// 複製したものを画面に追加する
const hoge = document.getElementById('hoge');
// 複製
const hogeClone = document.createElement('div');
mainList.append(hogeClone); //append追加
