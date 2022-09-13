import { render } from "@testing-library/react";
import { ReserveConfirm } from "./ReserveConfirm";

describe("ReserveConfirm", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<ReserveConfirm />);
  });
});
