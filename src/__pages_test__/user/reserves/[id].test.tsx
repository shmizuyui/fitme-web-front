import { render } from "@testing-library/react";
import Reserve from "../../../pages/user/reserves/[id]";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { id: 1 },
    };
  },
}));

describe("Reserve", () => {
  test("予約リクエストをレンダリングすること", () => {
    render(<Reserve />);
  });
});
