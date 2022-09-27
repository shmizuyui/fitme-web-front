import { render } from "@testing-library/react";
import { AboutForm } from "./AboutForm";

describe("AboutForm", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<AboutForm />);
  });
});
