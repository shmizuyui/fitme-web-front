import { Category } from "./Category";

export const HomePage = () => {
  return (
    <>
      <div className="pt-28">
        <div
          className="bg-cover h-screen"
          style={{ backgroundImage: "url(/top.jpg)" }}
        >
          <div className="pt-72 bg-white/50 text-center h-screen">
            <h1 className="text-4xl">あなたに合ったフィットネスを</h1>
            <p>いつでもどこでもパーソナルトレーニングができる</p>
            <div className="bg-current w-1/6 mx-auto my-5">
              <p className="text-white text-xl">オンラインレッスン</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto mt-10">
        <h2 className="font-bold text-2xl text-center mb-3">ジャンル</h2>
        <ul className="flex flex-wrap justify-center text-center text-xl">
          <Category image="/muscle.jpg">筋トレ</Category>
          <Category image="/aerobic_exercise.jpg">有酸素運動</Category>
          <Category image="/yoga.jpg">ヨガ</Category>
          <Category image="/pilates.jpg">ピラティス</Category>
          <Category image="/stretch.jpg">ストレッチ</Category>
          <Category image="/meal.jpg">食事管理</Category>
          <Category image="/counseling.jpg">カウンセリング</Category>
        </ul>
      </div>
    </>
  );
};
