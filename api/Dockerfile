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

# アプリケーションを起動
CMD ["npm", "run", "start"]

# 使用するポートを指定
EXPOSE 3000