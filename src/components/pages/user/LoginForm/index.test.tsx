import { render } from "@testing-library/react";
import { LoginForm } from ".";

describe("LoginForm", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<LoginForm />);
    expect(document.getElementById("email")).toBeInTheDocument();
    expect(document.getElementById("password")).toBeInTheDocument();

    const { container } = render(<LoginForm />);
    const buttons = container.getElementsByTagName("button");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("ログイン");
  });
});
