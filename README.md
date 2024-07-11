# SUMOTSU テンプレート

Astroを利用した夢小説用のサイトテンプレートです。
ホームページサービス [ナノ](https://nanos.jp/) で配布されていたテンプレートをもとにカスタマイズして作成しています。

[作者のサイト](https://sumotsu.geso.work) で使用しています。同様のサイトを作りたい方向けに、ソースの参考になればと思い公開しました。

## デモサイト

https://www.geso.work/sumotsu_a/

## 機能

* 簡易ログイン ... パスワード認証のみ
* 裏ページ前のワンクッション ... パスワード認証のみ
* 名前変換
* RSS
* Web拍手 ... Netlify forms利用
* メッセージフォーム ... Netlify forms利用

## サイトマップ
* (md) ... マークダウンファイルと対応するページが作成されます
* (動) ... マークダウンファイルから情報を取得して動的に更新されます

```
index ... インデックスページ パスワードによるログインを設置
├── top ... トップページ
├── info ... インフォページ
│   ├── message ... メッセージフォーム
│   ├── re ... メッセージフォームへの返信(動)
│   │   └── re-X ... 返信詳細 (md)
│   ├── pixiv ... 外部リンク
│   └── log ... 外部リンク
├── txt/ ... 小説分岐
│   ├── txt/ura ... 裏小説前のワンクッションページ
│   ├── txt/[作品名]/ ... 長編/中編目次ページ(動)
│   │   ├── txt/[作品名]/novel1 ... 小説ページ(md)
│   │   :
│   │   └── txt/[作品名]/novelXX ... 小説ページ(md)
│   └── txt/short/ ... 短編目次ページ(動)
│       ├── txt/short/novel_a ... 小説ページ(md)
│       :
│       └── txt/short/novel_X ... 小説ページ(md)
├── policy/ ... サイトポリシー
├── clap/clap1/ ... 拍手ページ(md) 追加のコメントつきweb拍手を設置（お礼は1種のみです）
└── robots.txt ... 全て拒否で設定
```

## 利用したライブラリ・参考にしたサイト

| 機能    | 参考先                                                 |
| ------- | ----------------------------------------------------- |
| Astro   | https://docs.astro.build/ja/tutorial/0-introduction/  |
| 名前変換機能（ライセンスあり） | [Charm.js](https://lanama.net/scripts/charm/) |
| 問い合わせフォームhtml/css | https://www.legit.co.jp/contact_css/17931 |
| チェックボックスcss | https://creative.eccom.jp/941/ |
| Web拍手 | https://blog.comilab.net/post/2020-05-26/ |
| 簡易ログイン | https://emotopi.com/javascript%E3%81%AE%E3%81%BF%E3%81%A7%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E7%94%BB%E9%9D%A2%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95%E3%80%90%E7%B0%A1%E5%8D%98%E3%82%B3%E3%83%94/ |
|  | https://qiita.com/economist/items/768d2f6a10d54d4fa39f |
|  | https://qiita.com/uralogical/items/ade858ccfa164d164a3b |
| サイトポリシーの記載 | https://www.xserver.ne.jp/blog/write-privacy-policy/ |
| パンくず | https://arcuss-service.com/knowledge/how-to-implement-breadcrumb.html |
| 最新記事順に並べ替え | https://evoworx.dev/blog/astro-sorted-posts/ |
| ページネーション | https://route360.dev/ja/post/astro-prevnext-posts/ |
|  | https://zenn.dev/chabatake_i/articles/astro-microcms |
| 新着マーク表示         | https://www.it-the-best.com/entry/javascript-date-validate-range |

## 動作環境

* html5
* CSS3
* JavaScript
* Astro 4 ... [公式ページ](https://docs.astro.build/ja/getting-started/)
* Netlify ... [公式ページ](https://docs.netlify.com/)

Web拍手、メッセージフォームでNetlify formsを使わない場合、Netlifyを使う必要はありません。

## 使い方

zipをダウンロード、またはクローンして利用してください。ダミーになっていない箇所はおいおい更新予定です...

一部のみのコピペなどもご自由にどうぞ。

夢小説機能については[配布元](https://lanama.net/scripts/charm/)のガイドを見た方がわかりやすいと思います。


簡易ログイン機能は知識のある人がソースを見れば簡単にハックできます。**「不特定多数に公開してもよい情報」** にワンクッションを付ける目的以外では **利用しないでください** 。

個人情報の公開などには **決して利用しないでください**。

### ログインパスワードの変更
SHA-256でハッシュ化したものを比較しています。
index.js内で修正してください。

### 裏パスワードの変更
こちらもSHA-256でハッシュ化したものを比較しています。
ura.js内で修正してください。

### 小説の追加
任意のパスで追加できますが、レイアウトファイル内（サンプルでは「NovelLayout.astro」や「ShortnovelLayout.astro」）にマークダウンファイルへのパスが設定されていますので、そちらも併せて修正してください。

## 作った人

* 作成者 [げそ](https://github.com/chikuwaa)
* Web https://www.geso.work/
* OFUSE https://ofuse.me/08125c0c
* ko-fi https://ko-fi.com/sumotsu4376

## ライセンス

テンプレートとして利用する場合は、非商用目的に限り利用できます（検索除け設定が入っているため）。一部のコピペであれば商用・非商用問いません。

いずれの場合も無料で利用できます。改修その他使いやすいように変更していただいて問題ないです。再配布などソースコードの公開についても制限はしておりません。

ソースコード内の著作権表示は利用ライブラリの物もありますので、削除しないでください。また、利用ライブラリのライセンスも併せてご確認ください。

このテンプレートを利用して発生したあらゆる問題に対して、補償・補填はいたしません。

## 更新履歴

最新の内容は[リポジトリ](https://github.com/chikuwaa/sumotsu_a)をご確認ください。

- 2024/6/2 デモサイト公開
- 2024/3/19 公開
