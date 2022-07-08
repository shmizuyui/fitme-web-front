import { render } from "@testing-library/react";
import { GlobalContainer } from "./GlobalContainer";

const title = "title";
const children = "test";

describe("GlobalContainer", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(
      <GlobalContainer title={title}>{children}</GlobalContainer>
    );
    const headings = container.getElementsByTagName("h1");

    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toBe(title);
  });
});
