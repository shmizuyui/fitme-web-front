import {Lesson} from '../../../../../apis/models/lesson';
import {LessonCard} from './LessonCard';

type Props = {
  lessons: Lesson[];
};
export const Lessons = ({lessons}: Props) => {
  return (
    <ul className="flex flex-wrap items-center">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </ul>
  );
};
