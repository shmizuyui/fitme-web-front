import { render } from "@testing-library/react";
import { SignButton } from "./SignButton";

const children = "test";

describe("SignButton", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<SignButton>{children}</SignButton>);
  });
});
