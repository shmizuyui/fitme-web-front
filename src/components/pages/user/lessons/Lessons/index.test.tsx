import { render } from "@testing-library/react";
import { Lessons } from ".";

const trainer = {
  name: "name",
  gender: "male",
  image: "image",
};

const lessons = [
  {
    id: 1,
    title: "title",
    price: 1000,
    category: "yoga",
    time: 50,
    content: "content",
    trainer: trainer,
  },
];

describe("Lessons", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<Lessons lessons={lessons} />);
  });
});
