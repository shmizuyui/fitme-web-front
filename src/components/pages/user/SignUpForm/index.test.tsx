import { render } from "@testing-library/react";
import { SignUpForm } from ".";

describe("SignUpForm", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<SignUpForm />);
    expect(document.getElementById("name")).toBeInTheDocument();
    expect(document.getElementById("nameKana")).toBeInTheDocument();
    expect(document.getElementById("gender")).toBeInTheDocument();
    expect(document.getElementById("email")).toBeInTheDocument();
    expect(document.getElementById("password")).toBeInTheDocument();
    expect(document.getElementById("passwordConfirmation")).toBeInTheDocument();

    const { container } = render(<SignUpForm />);
    const buttons = container.getElementsByTagName("button");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("新規登録");
  });
});
