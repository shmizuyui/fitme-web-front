import { render } from "@testing-library/react";
import { Category } from "./Category";

const image = "image";
const children = "test";
const value = "value";

describe("Category", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(
      <Category image={image} value={value}>
        {children}
      </Category>
    );
    const lists = container.getElementsByTagName("li");

    expect(lists.length).toBe(1);
    expect(lists[0].textContent).toBe(children);
  });
});
