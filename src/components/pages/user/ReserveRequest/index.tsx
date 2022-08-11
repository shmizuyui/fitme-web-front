import { Lesson } from "../../../../apis/models/lesson";

type Props = {
  lesson: Lesson;
};

export const ReserveRequest = ({ lesson }: Props) => {
  return (
    <form>
      <div className="mx-40 p-2 border-2">
        <div className="flex mb-1">
          <p className="pl-2 py-4 bg-gray-200 w-1/4">選択したメニュー</p>
          <p className="p-2 py-4 font-bold">{lesson.title}</p>
        </div>
        <div className="flex mb-1">
          <p className="pl-2 py-4 bg-gray-200 w-1/4">金額 / 所要時間</p>
          <p className="pl-2 py-4 font-bold">
            ¥{lesson.price} / {lesson.time}min
          </p>
        </div>
        <div className="flex mb-1">
          <p className="pl-2 py-4 bg-gray-200 w-1/4">トレーナー</p>
          <p className="pl-2 py-4 font-bold">{lesson.trainer.name}</p>
        </div>
        <div className="flex">
          <p className="pl-2 py-4 bg-gray-200 w-1/4">ご希望の日時</p>
          <div className="pl-2 py-4">
            <input type="datetime-local" className="border-2" />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="bg-gray-700 text-white px-10 text-lg">
          予約確認へ
        </button>
      </div>
    </form>
  );
};
