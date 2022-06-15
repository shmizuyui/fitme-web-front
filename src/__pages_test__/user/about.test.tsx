import React from "react";
import { render } from "@testing-library/react";
import About from "../../pages/user/about";

describe("About", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<About />);
  });
});
