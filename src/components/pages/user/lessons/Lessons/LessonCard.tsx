import Link from 'next/link';
import {Lesson} from '../../../../../apis/models/lesson';
import {categoryBy} from '../../../../../utils/categoryBy';

type Props = {
  lesson: Lesson;
};
export const LessonCard = ({lesson}: Props) => {
  return (
    <Link href={`/user/lesson/${lesson.id}`}>
      <a className="w-3/6">
        <li className="flex m-2 p-2 border-2 border-gray-500">
          <img src="/sample.jpg" alt="" className="w-5/12" />
          <div
            className="flex flex-col justify-between
          text-xl flex-auto text-center my-3"
          >
            <p className="font-bold">{lesson.title}</p>
            <p className="font-bold">
              {lesson.price}円/{lesson.time}min
            </p>
            <span>{categoryBy(lesson.category)}</span>
          </div>
        </li>
      </a>
    </Link>
  );
};
