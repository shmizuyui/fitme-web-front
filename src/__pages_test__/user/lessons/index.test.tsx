import React from "react";
import { render } from "@testing-library/react";
import Lessons from "../../../pages/user/lessons";

describe("Lessons", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<Lessons />);
  });
});
