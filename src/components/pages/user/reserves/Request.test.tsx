import { render } from "@testing-library/react";
import { Lesson } from "../../../../apis/models/lesson";
import { ReserveRequest } from "./Request";

const trainer = {
  name: "name",
  gender: "male",
  image: "image",
};

const lesson: Lesson = {
  id: 1,
  title: "title",
  price: 1000,
  category: "yoga",
  time: 50,
  content: "content",
  trainer: trainer,
};

describe("ReserveRequest", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(<ReserveRequest lesson={lesson} />);
    const paragraphs = container.getElementsByTagName("p");

    expect(paragraphs.length).toBe(3);
    expect(paragraphs[0].textContent).toBe(lesson.title);
    expect(paragraphs[1].textContent).toBe(
      `¥${lesson.price} / ${lesson.time}min`
    );
    expect(paragraphs[2].textContent).toBe(lesson.trainer.name);
  });
});
