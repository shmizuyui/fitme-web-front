import { render, screen } from "@testing-library/react";
import { HomePage } from ".";

describe("HomePage", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<HomePage />);
    expect(screen.getByText("ジャンル")).toBeInTheDocument();
  });
});
