import { render } from "@testing-library/react";
import { Pagination } from "./Pagination";

const onClick = () => console.log("click");

describe("Pagination", () => {
  test("isFirstPageがfalseの場合", () => {
    const { container } = render(
      <Pagination
        isFirstPage={false}
        isLastPage={true}
        onPageBack={onClick}
        onPageNext={onClick}
      />
    );
    const buttons = container.getElementsByTagName("button");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("前へ");
  });

  test("isFirstPageとisLastPageがfalseの場合", () => {
    const { container } = render(
      <Pagination
        isFirstPage={false}
        isLastPage={false}
        onPageBack={onClick}
        onPageNext={onClick}
      />
    );
    const buttons = container.getElementsByTagName("button");

    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toBe("前へ");
    expect(buttons[1].textContent).toBe("次へ");
  });

  test("isLastPageがfalseの場合", () => {
    const { container } = render(
      <Pagination
        isFirstPage={true}
        isLastPage={false}
        onPageBack={onClick}
        onPageNext={onClick}
      />
    );
    const buttons = container.getElementsByTagName("button");

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("次へ");
  });
});
