import { render, screen } from "@testing-library/react";
import { GlobalNav } from ".";

describe("GlobalNav", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<GlobalNav />);

    expect(screen.getByRole("img")).toHaveAttribute("src", "/logo.png");

    const { container } = render(<GlobalNav />);
    const buttons = container.getElementsByTagName("button");
    const lists = container.getElementsByTagName("li");

    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toBe("ログイン");
    expect(buttons[1].textContent).toBe("新規登録");

    expect(lists.length).toBe(4);
    expect(lists[0].textContent).toBe("ホーム");
    expect(lists[1].textContent).toBe("Fitmeとは");
    expect(lists[2].textContent).toBe("トレーナー一覧");
    expect(lists[3].textContent).toBe("レッスン一覧");
  });
});
