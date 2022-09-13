import { render, screen } from "@testing-library/react";
import { SendRequest } from "./sendRequest";

describe("sendRequest", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<SendRequest />);

    expect(screen.getByRole("heading")).toBeInTheDocument();

    const { container } = render(<SendRequest />);
    const anchors = container.getElementsByTagName("a");

    expect(anchors.length).toBe(1);
    expect(anchors[0].textContent).toBe("トップに戻る");
  });
});
