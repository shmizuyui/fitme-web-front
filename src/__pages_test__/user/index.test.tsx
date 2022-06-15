import React from "react";
import { render } from "@testing-library/react";
import Login from "../../pages/user";

describe("Login", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<Login />);
  });
});
