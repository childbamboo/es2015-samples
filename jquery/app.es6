// ES6
'use strict';

import Rx from 'rx'
import $ from 'jquery'

// stream の定義。ボタンのクリックイベントを起点とする
var hogeStream = Rx.Observable.fromEvent($('#execute'), 'click')
  .flatMap(
    () => {
      // Qiitaの新着投稿１０件を取得
      let promise = $.ajax('http://qiita.com/api/v1/items?per_page=10');
      return Rx.Observable.fromPromise(promise);
    }
  );

// stream の購読
hogeStream.subscribe(
  (res) => {
    // 結果(複数件)に対して１件づつ処理
    res.forEach(
      (element, index, array) => {
        console.log(index + ":" + element.title);
      }
    );
  }
);
