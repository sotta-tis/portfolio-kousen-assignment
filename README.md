## リポジトリ概要

next 環境で静的ページを作成して github pages にあげる。

## 環境構築

### 依存

- pnpm : node パッケージ管理
- nvm : node バージョンの管理

### node_module の構築

node バージョンの指定とパッケージのインストール

```sh
nvm use
pnpm i
```

## ビルド,デプロイ方法

- ビルド

```sh
pnpm build
```

- デプロイ

```
pnpm run deploy
```
