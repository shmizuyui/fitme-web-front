import { Lesson } from "../../../../../apis/models/lesson";
import { categoryBy } from "../../../../../utils/categoryBy";
import { genderBy } from "../../../../../utils/genderBy";

type Props = {
  lesson: Lesson;
};

export const LessonDetail = ({ lesson }: Props) => {
  return (
    <div>
      <div className="flex">
        <div className="mr-2">
          <img src={lesson.trainer.image} alt="" height={200} width={200} />
          <div className="text-center">
            <span className="text-xl">{lesson.trainer.name}</span>
            <span>({genderBy(lesson.trainer.gender)})</span>
          </div>
        </div>
        <div className="flex-auto">
          <div className="text-right">
            <span className="rounded border-2 text-xl p-1">
              {categoryBy(lesson.category)}
            </span>
          </div>
          <p
            className="text-center text-2xl font-bold
        mt-4 border-b-4 border-teal-500"
          >
            {lesson.title}
          </p>
          <p className="text-center text-2xl font-bold my-10">
            ¥{lesson.price}/{lesson.time}min
          </p>
          <div className="text-center">
            <button
              className="text-white rounded-md bg-teal-500
              py-2 px-4 text-xl font-bold"
            >
              予約リクエスト
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-4 py-1 border-b-2 text-xl">
        <p>内容</p>
      </div>
      <p className="text-xl">{lesson.content}</p>
    </div>
  );
};
