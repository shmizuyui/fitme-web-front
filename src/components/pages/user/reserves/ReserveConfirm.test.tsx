import { render, screen } from "@testing-library/react";
import { Lesson } from "../../../../apis/models/lesson";
import { FormParams } from "./Request";
import { ReserveConfirm } from "./ReserveConfirm";

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
const onClick = () => console.log("click");
const values: FormParams = {
  date: 2022 - 12 - 12,
  startTime: 12,
};

describe("ReserveConfirm", () => {
  test("isOpenがtrueの場合", () => {
    render(
      <ReserveConfirm
        lesson={lesson}
        isOpen={true}
        closeModal={onClick}
        values={values}
      />
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();

    const { container } = render(
      <ReserveConfirm
        lesson={lesson}
        isOpen={true}
        closeModal={onClick}
        values={values}
      />
    );
    const buttons = container.getElementsByTagName("button");
    const paragraphs = container.getElementsByTagName("p");

    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toBe("送信する");
    expect(buttons[1].textContent).toBe("戻る");

    expect(paragraphs.length).toBe(7);
    expect(paragraphs[0].textContent).toBe("選択したメニュー");
    expect(paragraphs[1].textContent).toBe(lesson.title);
    expect(paragraphs[2].textContent).toBe("金額 / 所要時間");
    expect(paragraphs[3].textContent).toBe(
      `¥${lesson.price} / ${lesson.time}min`
    );
    expect(paragraphs[4].textContent).toBe("トレーナー");
    expect(paragraphs[5].textContent).toBe(lesson.trainer.name);
    expect(paragraphs[6].textContent).toBe("開始日時");
  });
});
