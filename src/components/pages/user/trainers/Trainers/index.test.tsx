import { render, screen } from "@testing-library/react";
import { Trainers } from ".";

const lesson = {
  id: 1,
  title: "title",
  price: 1000,
  category: "yoga",
  time: 50,
  content: "content",
};

const trainers = [
  {
    id: 1,
    name: "name",
    name_kana: "name_kana",
    gender: "gender",
    history_year: 10,
    career: "career",
    image: "image",
    message: "message",
    lessons: [lesson],
  },
];

describe("Trainers", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<Trainers trainers={trainers} />);

    expect(screen.getByText("トレーナー一覧")).toBeTruthy();
  });
});
