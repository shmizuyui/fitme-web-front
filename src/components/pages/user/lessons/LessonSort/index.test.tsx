import { render } from "@testing-library/react";
import { LessonSort } from ".";
import { Lesson } from "../../../../../apis/models/lesson";
import { FormParams } from "../LessonSearch";

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
const fetchLessons = (
  pageIndex: number,
  formParams: FormParams,
  order: string
) => console.log(pageIndex, formParams, order);
const formParams = {
  categories: [lesson.category],
  minPrice: lesson.price | 0,
  maxPrice: lesson.price | 0,
  genders: [trainer.gender],
};
const setOrder = (params: string) => console.log(params);

describe("LessonSort", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(
      <LessonSort
        fetchLessons={fetchLessons}
        formParams={formParams}
        setOrder={setOrder}
      />
    );
    const options = container.getElementsByTagName("option");

    expect(options.length).toBe(3);
    expect(options[0].textContent).toBe("新着順");
    expect(options[1].textContent).toBe("価格が低い順");
    expect(options[2].textContent).toBe("価格が高い順");
  });
});
