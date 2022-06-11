import { Lesson } from "../../../../../apis/models/lesson";
import { LessonCard } from "./LessonCard";

type Props = {
  lessons: Lesson[];
};

export const Lessons = ({ lessons }: Props) => {
  return (
    <div className="pt-32">
      <h1 className="font-bold my-2">レッスン一覧</h1>
      <ul className="flex flex-wrap items-center">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </ul>
    </div>
  );
};
