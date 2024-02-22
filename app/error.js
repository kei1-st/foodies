// db からデータの読み出しに失敗した時など
"use client"; // クライアントサイドでもエラーを検知する必要がある

export default function Error({ error }) {
  // エラーの詳細をユーザーに提示したらセキュリティホールになるので表示はしない
  return (
    <main className="error">
      <h1> An error occured!!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
