import { render, screen } from "@testing-library/react";
import { Reservations } from ".";

const datetime = new Date();
const reservations = [
  {
    id: 1,
    start_at: datetime,
    lesson_id: 1,
    user_id: 1,
    status: "requested",
    lesson: {
      time: 50,
      title: "title",
      trainer: {
        name: "name",
      },
    },
  },
];
describe("Reservations", () => {
  test("コンポーネントをレンダリングすること", () => {
    render(<Reservations reservations={reservations} />);
    expect(screen.getByText("予約一覧")).toBeTruthy();

    const { container } = render(<Reservations reservations={reservations} />);
    const spans = container.getElementsByTagName("span");

    expect(spans.length).toBe(10);
    expect(spans[0].textContent).toBe("リクエスト状況");
    expect(spans[1].textContent).toBe("開始日時");
    expect(spans[2].textContent).toBe("時間(分)");
    expect(spans[3].textContent).toBe("タイトル");
    expect(spans[4].textContent).toBe("トレーナー");
  });
});
