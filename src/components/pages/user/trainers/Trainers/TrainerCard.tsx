import Link from 'next/link';
import {Trainer} from '../../../../../apis/models/trainer';
import {categoryBy} from '../../../../../utils/categoryBy';

type Props = {
  trainer: Trainer;
};

export const TrainerCard = ({trainer}: Props) => {
  const categories = [
    ...new Set(trainer.lessons.map((lesson) => lesson.category)),
  ];
  return (
    <Link href={`/user/trainers/${trainer.id}`}>
      <a className="w-3/6">
        <li className="flex m-2 p-2 border-2 border-gray-500">
          <img src={trainer.image} alt="" height={180} width={180} />
          <div
            className="flex flex-col justify-between
          flex-auto text-center pl-2"
          >
            <div>
              <p className="text-2xl font-bold bg-teal-200">{trainer.name}</p>
              <p className="border-gray-500 border-b-2 text-gray-400">
                {trainer.name_kana}
              </p>
            </div>
            <p className="text-xl">トレーナー歴：{trainer.history_year}年</p>
            <ul>
              <li>
                {categories.map((category: string) => (
                  <span className="rounded border-2 p-1 ml-1" key={trainer.id}>
                    {categoryBy(category)}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </li>
      </a>
    </Link>
  );
};
