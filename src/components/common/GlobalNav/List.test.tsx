import { render } from "@testing-library/react";
import { List } from "./List";

const link = "url";
const children = "test";
describe("List", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(<List link={link}>{children}</List>);
    const lists = container.getElementsByTagName("li");

    expect(lists.length).toBe(1);
    expect(lists[0].textContent).toBe(children);
  });
});
