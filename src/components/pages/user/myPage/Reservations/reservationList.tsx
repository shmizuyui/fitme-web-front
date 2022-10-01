import { Reservation } from "../../../../../apis/models/Reservation";
import { statusBy } from "../../../../../utils/statusBy";

type Props = {
  reservation: Reservation;
};

export const ReservationList = ({ reservation }: Props) => {
  const date = new Date(reservation.start_at);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return (
    <li className="border-b-2">
      <div className="flex text-center p-1">
        <span className="w-1/5 border-r-2">{statusBy(reservation.status)}</span>
        <span className="w-1/5">
          {year}/{month}/{day} {hour}:{minutes}〜
        </span>
        <span className="w-1/5">{reservation.lesson.time}分</span>
        <span className="w-1/5 truncate">{reservation.lesson.title}</span>
        <span className="w-1/5">{reservation.lesson.trainer.name}</span>
      </div>
    </li>
  );
};
