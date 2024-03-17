# SUMOTSU テンプレート

Astroを利用した夢小説用のサイトテンプレートです。

[作者のサイト（未公開）](#)で使っています。同様のサイトを作りたい方向けに、ソースの参考になればと思い公開しました。

## 機能

* 簡易ログイン ... パスワード認証のみ
* 裏ページ前のワンクッション ... パスワード認証のみ
* 名前変換
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
│   ├── txt/short ... 短編目次ページ(動)（mdファイルから反映）
│   │   ├── txt/short/[作品名] ... 小説ページ(md)
│   │   :
│   │   └── txt/short/[作品名] ... 小説ページ(md)
│   └── txt/claplog.html ... 過去拍手目次ページ(動)（mdファイルから反映）
│       ├── txt/claplog/[作品名].html ... 小説ページ(md)
│       :
│       └── txt/claplog/[作品名].html ... 小説ページ(md)
├── policy.html ... サイトポリシー
└── clap/clap01.html ... 拍手送信結果ページ(md)
    └── clap/clap02.html ... 拍手ページ(md) 01へのweb拍手を設置
```

## 利用したライブラリ・参考にしたサイト

Astro
[https://docs.astro.build/ja/tutorial/0-introduction/]

名前変換機能（ライセンスあり）
[Charm.js](https://lanama.net/scripts/charm/)

問い合わせフォームhtml/css
[https://www.legit.co.jp/contact_css/17931]

チェックボックスcss
[https://creative.eccom.jp/941/]

Web拍手
[https://blog.comilab.net/post/2020-05-26/]

簡易ログイン
[https://emotopi.com/javascript%E3%81%AE%E3%81%BF%E3%81%A7%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E7%94%BB%E9%9D%A2%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95%E3%80%90%E7%B0%A1%E5%8D%98%E3%82%B3%E3%83%94/]
[https://qiita.com/economist/items/768d2f6a10d54d4fa39f]
[https://qiita.com/uralogical/items/ade858ccfa164d164a3b]

サイトポリシーの記載
[https://www.xserver.ne.jp/blog/write-privacy-policy/]

パンくず
[https://arcuss-service.com/knowledge/how-to-implement-breadcrumb.html]

最新記事順に並べ替え
[https://evoworx.dev/blog/astro-sorted-posts/]

ページネーション
https://route360.dev/ja/post/astro-prevnext-posts/
https://zenn.dev/chabatake_i/articles/astro-microcms

## 動作環境

* html5
* CSS3
* JavaScript
* Astro 4.0 (予定) ... [公式ページ](https://docs.astro.build/ja/getting-started/)
* Netlify (予定) ... [公式ページ](https://docs.netlify.com/)

Web拍手、メッセージフォームでNetlify formsを使わない場合、Netlifyを使う必要はありません。

## 使い方

zipをダウンロード、またはクローンして利用してください
サイト名など、ダミーになっていない箇所はおいおい更新予定です...
一部のみのコピペなどもご自由にどうぞ
夢小説機能については[配布元](https://lanama.net/scripts/charm/)のガイドを見た方がわかりやすいと思います

簡易ログイン機能は知識のある人がソースを見れば簡単にハックできます。
**「不特定多数に公開してもよい情報」**にワンクッションを付ける目的以外では**利用しないでください**。
個人情報の公開などには**決して利用しないでください**。

## 作った人

* 作成者 げそ
* Web [https://chikuwaa.github.io/]

## ライセンス

非商用目的に限り無料で利用できます。
改修その他使いやすいように変更していただいて問題ないです。一部のみのコピペもOK。
再配布などソースコードの公開についても制限はありません。
ソースコード内の著作権表示は利用ライブラリの物もありますので、削除しないでください。
このテンプレートを利用して発生したあらゆる問題に対して、補償・補填はいたしません。

また、利用ライブラリのライセンスも併せてご確認ください。