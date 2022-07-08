import {Trainer} from '../../../../../apis/models/trainer';
import {categoryBy} from '../../../../../utils/categoryBy';
import {genderBy} from '../../../../../utils/genderBy';
import {LessonCard} from '../../lessons/Lessons/LessonCard';

type Props = {
  trainer: Trainer;
};

export const TrainerDetail = ({trainer}: Props) => {
  const categories = [
    ...new Set(trainer.lessons.map((lesson) => lesson.category)),
  ];
  return (
    <>
      <div className="flex">
        <div className="w-1/3 mr-2">
          <img src={trainer.image} alt="" className="w-screen" />
        </div>
        <div className="flex-auto">
          <div className="mb-4">
            {categories.map((category: string) => (
              <span className="rounded border-2 p-1 mr-1" key={trainer.id}>
                {categoryBy(category)}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400">{trainer.name_kana}</p>
          <p
            className=
              "text-center text-2xl font-bold border-b-4 border-teal-500 mb-2"
          >
            {trainer.name}
          </p>
          <div className="flex mt-2">
            <p className="flex-auto text-lg">
              トレーナー歴：{trainer.history_year}年
            </p>
            <span className="text-right text-lg px-2 bg-gray-200 rounded">
              {genderBy(trainer.gender)}
            </span>
          </div>
          <div className="mt-8">
            <p className="mb-4 border-b-2 text-lg">経歴</p>
            <p>{trainer.career}</p>
          </div>
          <div className="mt-8">
            <p className="mb-4 border-b-2 text-lg">メッセージ</p>
            <p>{trainer.message}</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p
          className=
            "my-4 border-b-4 text-2xl text-center font-bold border-yellow-200"
        >
          このトレーナーのレッスン一覧
        </p>
        <ul className="flex flex-wrap">
          {trainer.lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} trainer={trainer}/>
          ))}
        </ul>
      </div>
    </>
  );
};
