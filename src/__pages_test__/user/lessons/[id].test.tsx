import { render } from "@testing-library/react";
import Lesson from "../../../pages/user/lessons/[id]";
jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { id: 1 },
    };
  },
}));

describe("Lesson", () => {
  test("詳細画面をレンダリングすること", () => {
    render(<Lesson />);
  });
});
