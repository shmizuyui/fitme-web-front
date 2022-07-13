import { render } from "@testing-library/react";
import { SearchButton } from "./SearchButton";

describe("SearchButton", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<SearchButton />);
  });
});
