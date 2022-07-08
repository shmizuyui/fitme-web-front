import { render } from "@testing-library/react";
import { FormParams, SearchForm } from ".";
<<<<<<< HEAD

// const FormParams = {
//   categories: ['yoga'],
//   minPrice: 1000,
//   maxPrice: 5000,
//   genders: ['female'],
// };
=======
import { useLessonSearch } from "../../../../../hooks/user/useLessonSearch";
>>>>>>> レッスン検索機能、テスト

jest.mock("../../../../../hooks/user/useLessonSearch");
const useLessonSearchMock = useLessonSearch as jest.Mock;
const fetchLessons = (pageIndex: number, formParams: FormParams) =>
  console.log(pageIndex, formParams);
const setFormParams = (params: FormParams) => console.log(params);

describe("SearchForm", () => {
<<<<<<< HEAD
=======
  useLessonSearchMock.mockImplementationOnce(() => {
    return {
      data: { categories: ["muscle"], genders: ["male"] },
      error: null,
      isLoading: false,
    };
  });
>>>>>>> レッスン検索機能、テスト
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(
      <SearchForm fetchLessons={fetchLessons} setFormParams={setFormParams} />
    );
<<<<<<< HEAD
    console.log(container);
    const contents = container.getElementsByTagName("span");
    const buttons = container.getElementsByTagName("button");

    expect(contents.length).toBe(7);
    expect(contents[0].textContent).toBe("カテゴリー");
    expect(contents[1].textContent).toBe("");
    expect(contents[2].textContent).toBe("性別");
    expect(contents[3].textContent).toBe("");
    expect(contents[4].textContent).toBe("料金");
    expect(contents[5].textContent).toBe("円");
    expect(contents[6].textContent).toBe("円");
=======
    const contents = container.getElementsByTagName("span");
    const buttons = container.getElementsByTagName("button");

    expect(contents.length).toBe(5);
    expect(contents[0].textContent).toBe("カテゴリー");
    expect(contents[1].textContent).toBe("性別");
    expect(contents[2].textContent).toBe("料金");
    expect(contents[3].textContent).toBe("円");
    expect(contents[4].textContent).toBe("円");
>>>>>>> レッスン検索機能、テスト

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("検索");
  });
});
