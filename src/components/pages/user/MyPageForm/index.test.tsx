import { render } from "@testing-library/react";
import { MyPageForm } from ".";

describe("MyPageForm", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(<MyPageForm />);
    const buttons = container.getElementsByTagName("button");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("プロフィール編集");
  });
});
