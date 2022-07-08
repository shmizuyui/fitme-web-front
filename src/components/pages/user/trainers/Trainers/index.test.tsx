<<<<<<< HEAD
import { render, screen } from "@testing-library/react";
import { Trainers } from ".";
=======
import {render} from '@testing-library/react';
import {Trainers} from '.';
>>>>>>> レッスン検索機能

const lesson = {
  id: 1,
  title: "title",
  price: 1000,
  category: "yoga",
  time: 50,
<<<<<<< HEAD
  content: "content",
=======
  content: 'content',
  trainer: {
    name: 'name',
    gender: 'male',
    image: 'image',
  },
>>>>>>> レッスン検索機能
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
<<<<<<< HEAD

    expect(screen.getByText("トレーナー一覧")).toBeTruthy();
=======
>>>>>>> レッスン検索機能
  });
});
