import {Lesson} from '../../../../../apis/models/lesson';
import {LessonCard} from './LessonCard';

type Props = {
  lessons: Lesson[];
};
export const Lessons = ({lessons}: Props) => {
  return (
    <div>
      <h1 className="text-center font-bold mb-3 text-3xl">レッスン一覧</h1>
      <ul className="flex flex-wrap items-center">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </ul>
    </div>
  );
};
