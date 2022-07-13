import { render } from "@testing-library/react";
import { FormParams, TrainerSearch } from ".";
import { useTrainerSearch } from "../../../../../hooks/user/useTrainerSearch";

jest.mock("../../../../../hooks/user/useTrainerSearch");
const useTrainerSearchMock = useTrainerSearch as jest.Mock;

const fetchTrainers = (pageIndex: number, formParams: FormParams) =>
  console.log(pageIndex, formParams);
const setFormParams = (params: FormParams) => console.log(params);

describe("TrainerSearch", () => {
  useTrainerSearchMock.mockImplementationOnce(() => {
    return {
      data: { categories: ["muscle"], genders: ["male"] },
      error: null,
      isLoading: false,
    };
  });
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(
      <TrainerSearch
        fetchTrainers={fetchTrainers}
        setFormParams={setFormParams}
      />
    );
    const contents = container.getElementsByTagName("span");
    const buttons = container.getElementsByTagName("button");

    expect(contents.length).toBe(3);
    expect(contents[0].textContent).toBe("カテゴリー");
    expect(contents[1].textContent).toBe("性別");
    expect(contents[2].textContent).toBe("トレーナー歴");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("検索");
  });
});
