import { Lesson } from "../../../../apis/models/lesson";
import { FormPrams } from "./Request";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  lesson: Lesson;
  values: FormPrams;
};
export const ReserveConfirm = ({
  isOpen,
  closeModal,
  lesson,
  values,
}: Props) => {
  return (
    <>
      {isOpen ? (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-25">
          <div className="h-screen w-2/3 mx-auto">
            <div className="pt-32">
              <div className="mx-40 p-2 bg-white">
                <h1 className="text-center font-bold mb-5 text-3xl">
                  予約リクエスト内容確認
                </h1>
                <div className="border-2 p-2">
                  <div className="flex mb-1">
                    <p className="pl-2 py-4 bg-gray-200 w-1/4">
                      選択したメニュー
                    </p>
                    <p className="p-2 py-4 font-bold">{lesson.title}</p>
                  </div>
                  <div className="flex mb-1">
                    <p className="pl-2 py-4 bg-gray-200 w-1/4">
                      金額 / 所要時間
                    </p>
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
                    <p className="pl-2 py-4 font-bold">
                      <span>日付：</span>
                      {values.date}
                      <span className="ml-2">開始時間：</span>
                      {values.time}〜
                    </p>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <div className="inline-flex flex-col">
                    <button className="bg-gray-700 text-white px-10 text-lg mb-2">
                      送信する
                    </button>
                    <button
                      className="bg-gray-700 text-white px-10"
                      onClick={closeModal}
                    >
                      戻る
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
