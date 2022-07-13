import { render } from "@testing-library/react";
import { FormParams, LessonSearch } from ".";
import { useLessonSearch } from "../../../../../hooks/user/useLessonSearch";

jest.mock("../../../../../hooks/user/useLessonSearch");
const useLessonSearchMock = useLessonSearch as jest.Mock;
const fetchLessons = (pageIndex: number, formParams: FormParams) =>
  console.log(pageIndex, formParams);
const setFormParams = (params: FormParams) => console.log(params);

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
      <LessonSearch fetchLessons={fetchLessons} setFormParams={setFormParams} />
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
