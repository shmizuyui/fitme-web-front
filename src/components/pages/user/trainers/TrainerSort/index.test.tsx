import { render } from "@testing-library/react";
import { TrainerSort } from ".";
import { Lesson } from "../../../../../apis/models/lesson";
import { Trainer } from "../../../../../apis/models/trainer";
import { FormParams } from "../TrainerSearch";

const lesson: Lesson = {
  id: 1,
  title: "title",
  price: 1000,
  category: "yoga",
  time: 50,
  content: "content",
  trainer: {
    name: "name",
    gender: "male",
    image: "image",
  },
};
const trainer: Trainer = {
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
const fetchTrainers = (pageIndex: number, formParams: FormParams) =>
  console.log(pageIndex, formParams);
const formParams = {
  genders: [trainer.gender],
  categories: [lesson.category],
  minHistoryYear: trainer.history_year,
};
const setOrder = (order: string) => console.log(order);

describe("TrainerSort", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(
      <TrainerSort
        fetchTrainers={fetchTrainers}
        formParams={formParams}
        setOrder={setOrder}
      />
    );
    const options = container.getElementsByTagName("option");

    expect(options.length).toBe(3);
    expect(options[0].textContent).toBe("新着順");
    expect(options[1].textContent).toBe("トレーナー歴が短い順");
    expect(options[2].textContent).toBe("トレーナー歴が長い順");
  });
});
