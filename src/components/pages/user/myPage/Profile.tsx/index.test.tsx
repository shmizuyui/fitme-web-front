import { render } from "@testing-library/react";
import { Profile } from ".";

describe("Profile", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(<Profile />);
    const buttons = container.getElementsByTagName("button");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("プロフィール編集");
  });
});
