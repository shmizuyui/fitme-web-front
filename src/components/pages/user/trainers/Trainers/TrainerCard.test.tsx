import { render, screen } from "@testing-library/react";
import { TrainerCard } from "./TrainerCard";
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
    image: 'image',
    name: 'name',
    gender: 'male',
  },
>>>>>>> レッスン検索機能
};

const trainer = {
  id: 1,
  name: "name",
  name_kana: "name_kana",
  gender: "gender",
  history_year: 10,
  career: "career",
  image: "image",
  message: "message",
  lessons: [lesson],
};

describe("TrainerCard", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<TrainerCard trainer={trainer} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", trainer.image);
    const { container } = render(<TrainerCard trainer={trainer} />);
    const paragraphs = container.getElementsByTagName("p");
    const contents = container.getElementsByTagName("span");

    expect(paragraphs.length).toBe(3);
    expect(paragraphs[0].textContent).toBe(trainer.name);
    expect(paragraphs[1].textContent).toBe(trainer.name_kana);
    expect(paragraphs[2].textContent).toBe(
      `トレーナー歴：${trainer.history_year}年`
    );

    expect(contents.length).toBe(1);
    expect(contents[0].textContent).toBe("ヨガ");
  });
});
