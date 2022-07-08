<<<<<<< HEAD
import Link from "next/link";
import { Lesson } from "../../../../../apis/models/lesson";
import { categoryBy } from "../../../../../utils/categoryBy";
=======
import Link from 'next/link';
import {Lesson} from '../../../../../apis/models/lesson';
import {Trainer} from '../../../../../apis/models/trainer';
import {categoryBy} from '../../../../../utils/categoryBy';
import {genderBy} from '../../../../../utils/genderBy';
>>>>>>> レッスン検索機能

type Props = {
  lesson: Lesson;
  trainer?: Trainer;
};
<<<<<<< HEAD
export const LessonCard = ({ lesson }: Props) => {
=======
export const LessonCard = ({lesson, trainer}: Props) => {
>>>>>>> レッスン検索機能
  return (
    <Link href={`/user/lessons/${lesson.id}`}>
      <a className="w-3/6">
        <li className="flex m-2 p-2 border-2 border-gray-500">
          <div>
            <img
              src={trainer ? trainer.image : lesson.trainer.image}
              alt=""
              height={200}
              width={200}
            />
            <div className='text-center'>
              <span className='text-xl'>
                {trainer ? trainer.name : lesson.trainer.name}
              </span>
              <span>
                ({genderBy(trainer ? trainer.gender : lesson.trainer.gender)})
              </span>
            </div>
          </div>
          <div
            className="flex w-3/4 flex-col justify-between
          text-xl my-3 ml-2"
          >
            <p className="mx-auto font-bold">{lesson.title}</p>
            <p className="font-bold text-center">
              {lesson.price}円/{lesson.time}min
            </p>
            <div className='text-center'>
              <span className='rounded border-2 p-1'>
                {categoryBy(lesson.category)}
              </span>
            </div>
          </div>
        </li>
      </a>
    </Link>
  );
};
