import { render } from "@testing-library/react";
import Request from "../../../pages/user/reserves/request";

describe("request", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<Request />);
  });
});
