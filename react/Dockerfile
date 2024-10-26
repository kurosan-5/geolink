# ベースイメージとしてNode.jsを指定
FROM node:20

# 作業ディレクトリの作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# ビルドを実行
RUN npm run build

# 開発サーバーを起動
CMD ["npm", "run", "dev"]

# 使用するポートを指定
EXPOSE 8080