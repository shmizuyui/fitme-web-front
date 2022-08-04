import { render } from "@testing-library/react";
import EditUser from "../../pages/user/editUser";

describe("EditUser", () => {
  test("編集画面をレンダリングすること", () => {
    render(<EditUser />);
  });
});
