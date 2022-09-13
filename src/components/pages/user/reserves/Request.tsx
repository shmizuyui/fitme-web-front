import { useForm } from "react-hook-form";
import { Lesson } from "../../../../apis/models/lesson";
import { useConfirm } from "../../../../hooks/user/useConfirm";
import { ReserveConfirm } from "./ReserveConfirm";

type Props = {
  lesson: Lesson;
};
export type FormParams = {
  date: number;
  startTime: number;
};
export const ReserveRequest = ({ lesson }: Props) => {
  const { isOpen, openModal, closeModal } = useConfirm();

  const { register, getValues } = useForm<FormParams>({});
  return (
    <>
      <div className="mx-40 p-2 border-2 relative">
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
            <label className="font-bold">
              日付
              <input
                type="date"
                className="border-2 mx-1"
                {...register("date")}
              />
            </label>
            <label className="font-bold">
              開始時間
              <input
                type="time"
                className="border-2 mx-1"
                {...register("startTime")}
              />
            </label>
            <span className="font-bold">〜</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          className="bg-gray-700 text-white px-10 text-lg"
          onClick={openModal}
        >
          予約確認へ
        </button>
      </div>
      <ReserveConfirm
        isOpen={isOpen}
        closeModal={closeModal}
        lesson={lesson}
        values={getValues()}
      />
    </>
  );
};
