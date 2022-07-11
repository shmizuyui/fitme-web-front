import { render } from "@testing-library/react";
import { Errors } from "./Errors";

const children = "test";

describe("Errors", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<Errors>{children}</Errors>);
  });
});
