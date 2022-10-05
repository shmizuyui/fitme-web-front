import { render } from "@testing-library/react";
import { FormParams, LessonSearch } from ".";
import { Lesson } from "../../../../../apis/models/lesson";
import { useLessonSearch } from "../../../../../hooks/user/useLessonSearch";

jest.mock("../../../../../hooks/user/useLessonSearch");
const useLessonSearchMock = useLessonSearch as jest.Mock;
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
const setFormParams = (params: FormParams) => console.log(params);
const formParams = {
  categories: [lesson.category],
  minPrice: lesson.price | 0,
  maxPrice: lesson.price | 0,
  genders: [trainer.gender],
};
const order = "order";

describe("LessonSearch", () => {
  useLessonSearchMock.mockImplementationOnce(() => {
    return {
      data: { categories: ["muscle"], genders: ["male"] },
      error: null,
      isLoading: false,
    };
  });
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(
      <LessonSearch
        fetchLessons={fetchLessons}
        setFormParams={setFormParams}
        formParams={formParams}
        order={order}
      />
    );
    const contents = container.getElementsByTagName("span");
    const buttons = container.getElementsByTagName("button");

    expect(contents.length).toBe(5);
    expect(contents[0].textContent).toBe("カテゴリー");
    expect(contents[1].textContent).toBe("性別");
    expect(contents[2].textContent).toBe("料金");
    expect(contents[3].textContent).toBe("円");
    expect(contents[4].textContent).toBe("円");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("検索");
  });
});
