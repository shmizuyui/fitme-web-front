import { render } from "@testing-library/react";
import { statusBy } from "../../../../../utils/statusBy";
import { ReservationList } from "./reservationList";

const datetime = new Date();
const reservation = {
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
};
const year = datetime.getFullYear();
const month = (datetime.getMonth() + 1).toString().padStart(2, "0");
const day = datetime.getDate().toString().padStart(2, "0");
const hour = datetime.getHours().toString().padStart(2, "0");
const minutes = datetime.getMinutes().toString().padStart(2, "0");

describe("ReservationList", () => {
  test("コンポーネントをレンダリングすること", () => {
    const { container } = render(<ReservationList reservation={reservation} />);
    const spans = container.getElementsByTagName("span");

    expect(spans.length).toBe(5);
    expect(spans[0].textContent).toBe(statusBy(reservation.status));
    expect(spans[1].textContent).toBe(
      `${year}/${month}/${day} ${hour}:${minutes}〜`
    );
    expect(spans[2].textContent).toBe(`${reservation.lesson.time}分`);
    expect(spans[3].textContent).toBe(reservation.lesson.title);
    expect(spans[4].textContent).toBe(reservation.lesson.trainer.name);
  });
});
