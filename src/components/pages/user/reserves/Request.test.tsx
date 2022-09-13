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
    const buttons = container.getElementsByTagName("button");

    expect(paragraphs.length).toBe(7);
    expect(paragraphs[0].textContent).toBe("選択したメニュー");
    expect(paragraphs[1].textContent).toBe(lesson.title);
    expect(paragraphs[2].textContent).toBe("金額 / 所要時間");
    expect(paragraphs[3].textContent).toBe(
      `¥${lesson.price} / ${lesson.time}min`
    );
    expect(paragraphs[4].textContent).toBe("トレーナー");
    expect(paragraphs[5].textContent).toBe(lesson.trainer.name);
    expect(paragraphs[6].textContent).toBe("ご希望の日時");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("予約確認へ");
  });
});
