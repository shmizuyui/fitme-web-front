export const AboutForm = () => {
  return (
    <div className="text-center text-xl mt-10 leading-loose">
      <p>
        <span className="text-2xl font-bold">Fitme</span>
        とは教えたい方と学びたい方をつなぐ
        <span className="text-2xl font-bold">
          フィットネスマッチングサービス
        </span>
        です
      </p>
      <div className="my-3">
        <p className="font-bold text-emerald-500">教えたい方</p>
        <p>自分のやり方を知ってもらいたい</p>
        <p>トレーナーとしての経験を生かしたい・広げたい</p>
        <p>自分に合った仕事スタイルがしたい！</p>
      </div>
      <div className="my-3">
        <p className="font-bold text-blue-500">学びたい方</p>
        <p>痩せたい...筋肉をつけたい...健康維持のために...</p>
        <p>近くにジムがない、ジムに行く時間がない</p>
        <p>自分に合ったトレーナーやトレーニングを見つけたい!</p>
      </div>
      <p className="my-5">
        <span className="text-2xl font-bold">オンライン</span>
        だからいつでもどこでもできる！
      </p>
    </div>
  );
};
