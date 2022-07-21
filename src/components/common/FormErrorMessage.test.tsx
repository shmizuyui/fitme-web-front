import { render } from "@testing-library/react";
import { FormErrorMessage } from "./FormErrorMessage";

const errorMessage = "test";

describe("FormErrorMessage", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(
      <FormErrorMessage errorMessage={errorMessage} />
    );
    const paragraphs = container.getElementsByTagName("p");

    expect(paragraphs.length).toBe(1);
    expect(paragraphs[0].textContent).toBe(errorMessage);
  });
});
