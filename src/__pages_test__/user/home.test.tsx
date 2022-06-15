import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/user/home";

describe("Home", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<Home />);
  });
});
