import Link from "next/link";
import { Lesson } from "../../../../../apis/models/lesson";
import { categoryBy } from "../../../../../lib/categoryBy";

type Props = {
  lesson: Lesson;
};

export const LessonCard = ({ lesson }: Props) => {
  return (
    <Link href={`/user/lessons/${lesson.id}`}>
      <a className="w-5/16 m-3 text-center">
        <li
          className="p-3 border-2 border-black rounded-lg"
          style={{ height: "24rem" }}
        >
          <img src="/sample.jpg" className="h-2/5 mx-auto" />
          <p className="text-lg font-bold mt-4">{lesson.title}</p>
          <p className="text-lg font-bold mt-4">
            {lesson.price}円 / {lesson.time}min
          </p>
          <p className="mt-4">{lesson.content}</p>
          <div className="mt-4">
            <span>{categoryBy(lesson.category)}</span>
          </div>
        </li>
      </a>
    </Link>
  );
};
