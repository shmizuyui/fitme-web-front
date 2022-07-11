import { render } from "@testing-library/react";
import { Empty } from "./Empty";

describe("Empty", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(<Empty />);
    const paragraphs = container.getElementsByTagName("p");

    expect(paragraphs.length).toBe(1);
    expect(paragraphs[0].textContent).toBe("見つかりませんでした");
  });
});
