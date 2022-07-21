import { render } from "@testing-library/react";
import SignUp from "../../pages/user/signUp";

describe("signUp", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<SignUp />);
  });
});
