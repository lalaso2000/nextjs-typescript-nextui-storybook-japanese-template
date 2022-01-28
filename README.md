# Next.js + TypeScript + Next UI + Storybook + Japanese Template

## 特徴

- [Next.js](https://nextjs.org/) + [NextUI](https://nextui.org/) の日本語対応テンプレート
- フォントは[Roboto](https://fonts.google.com/specimen/Roboto) + [Noto Sans Japanese](https://fonts.google.com/noto/specimen/Noto+Sans+JP)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)を併用してコードフォーマット
- [Storybook](https://storybook.js.org/)でコンポーネント設計

## development

### install

開発マシンに `node` `npm` `yarn` が必要です．

```bash
# モジュールのインストール
yarn
```

### Node のバージョン

```bash
$ node -v
v16.13.2

$ yarn -v
1.22.17
```

[Volta](https://volta.sh/)がインストールされているとバージョンが勝手に固定されます．

### コマンド

デザイン周りの開発は storybook を見ながら．

```bash
# storybookの起動
$ yarn storybook

# 開発サーバー起動
$ yarn dev

# ビルド
$ yarn build

# ビルドしたものを実行
$ yarn start

# 静的サイトとしてエクスポート
$ yarn export

# コード整形
$ yarn lint
$ yarn format
```

### 注意点

Next.js の `<Image>` コンポーネントは，今回は Vercel にデプロイしない場合は使わない

## directory

### public

- この中に画像やフォントなど，静的ファイルを入れる
- ここに置いたものはベース URL（`/`）から始まるコードで参照できる．
- **ここ以外に置いた静的ファイルは参照できないので注意！**
- [詳しくはこちら](https://nextjs.org/docs/basic-features/static-file-serving)

### out

- git には乗らない
- ビルドした静的サイトが吐き出されるディレクトリ
- この中身をサーバーに乗せればデプロイ完了

### resources

- csv など，配信しないけどビルド時に使用するファイル

### src

- ソースコード本体
  - components: コンポーネントが入る，[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)に基づいて配置
  - pages: Next.js のページが入る，このファイル名が URL になる
  - utils: 雑関数

### stories

- [Storybook](https://storybook.js.org/)の Story が入る．
- 内側のディレクトリの切り方は src と同じ

## 静的サイトの deploy

1. `yarn export` を実行
2. `out` ディレクトリの中身をサーバーの指定の場所に置く

（静的サイトなのでサーバー側に node 等のインストールは不要です．）

## Atomic Design

コンポーネントの分割は [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) の理念に基づいて行っています．
以下を参考にしました．

- https://note.com/tabelog_frontend/n/n4b8bcb44294c
- https://zenn.dev/sterashima78/articles/0cf4bb52112c7b

具体的な切り分け方の概念は以下のとおりです．

### atoms

- 汎用的な機能を提供
  - 何にでもなれるということ
  - 例えば，ボタンは「クリックされるもの」である
  - しかし，それ以上のこと（検索ボタンなのか，確定ボタンなのかなどは知らない）
- state はなるべく持たない
- 他のコンポーネントに依存しない
- MUI を使っているため，あまり出番がないかも
  - MUI のコンポーネントに対して，サイト内での共通のパラメータを予め与えておくのに使う

### molecules

- 特定のプロダクトについての知識を持たない
  - 例えば「検索フォーム」という物がある
  - 検索のために使われるテキストボックス＋ボタン＋ラベルの集まりである
  - 「検索のために使われる」ことは知っているが，「何の検索に使われるか」は知らない
- 他のコンポーネントに依存しても良い

### organisms

- 特定の部分にしか使われないものは基本的にここ
- state, effect を持っても良い
- useContext による Context 接続可
- API を叩くのもここ
- **とりあえず迷ったらここ**

### templates

- page に対するレイアウトを決定する
- CSS のレイアウトのみ記述し、state や effect などを持たない
