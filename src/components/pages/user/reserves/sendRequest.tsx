export const SendRequest = () => {
  return (
    <div className="h-screen w-2/3 mx-auto">
      <div className="pt-40 text-center">
        <h1 className="text-2xl mb-10">予約リクエストを送信しました</h1>
        <div className="mb-2">
          <a href="/user/home" className="border-b-2 text-blue-700">
            トップに戻る
          </a>
        </div>
        <div>
          <a href="/user/myPage" className="border-b-2 text-blue-700">
            予約一覧
          </a>
        </div>
      </div>
    </div>
  );
};
