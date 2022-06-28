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
      <h1 className="text-center font-bold text-3xl mb-12">トレーナー</h1>
      <div className="flex">
        <div className="mr-2">
          <img src={trainer.image} alt="" className="mb-2" />
          <img src="/sample.jpg" alt="" />
        </div>
        <div className="flex-auto">
          <div className="border-b-4 border-teal-500">
            <p className="text-center">{trainer.name_kana}</p>
            <p className="text-center mt-1 text-center text-2xl font-bold">
              {trainer.name}
            </p>
          </div>
          <div className="flex my-4">
            <ul>
              <li>
                {categories.map((category: string) => (
                  <span className="rounded border-2 p-1 ml-1" key={trainer.id}>
                    {categoryBy(category)}
                  </span>
                ))}
              </li>
            </ul>
            <span className="flex-auto text-right text-xl">
              {genderBy(trainer.gender)}
            </span>
          </div>
          <p className="text-xl">トレーナー歴：{trainer.history_year}年</p>
          <div className="mt-8">
            <p className="flex mb-4 py-1 border-b-2">経歴</p>
            <p>{trainer.career}</p>
          </div>
          <div className="mt-8">
            <p className="flex mb-4 py-1 border-b-2">メッセージ</p>
            <p>{trainer.message}</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="my-4 border-b-2 text-xl text-center font-bold">
          このトレーナーのレッスン一覧
        </p>
        <ul className="flex flex-wrap">
          {trainer.lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </ul>
      </div>
    </>
  );
};
