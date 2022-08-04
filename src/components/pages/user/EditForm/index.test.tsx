import { render } from "@testing-library/react";
import { EditForm } from ".";

describe("EditForm", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<EditForm />);
    expect(document.getElementById("name")).toBeInTheDocument();
    expect(document.getElementById("nameKana")).toBeInTheDocument();
    expect(document.getElementById("email")).toBeInTheDocument();
    expect(document.getElementById("password")).toBeInTheDocument();
    expect(document.getElementById("passwordConfirmation")).toBeInTheDocument();
    expect(document.getElementById("avatar")).toBeInTheDocument();

    const { container } = render(<EditForm />);
    const buttons = container.getElementsByTagName("button");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("更新");
  });
});
