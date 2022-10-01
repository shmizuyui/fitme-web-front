import { Reservation } from "../../../../../apis/models/Reservation";
import { ReservationList } from "./reservationList";

type Props = {
  reservations: Reservation[];
};

export const Reservations = ({ reservations }: Props) => {
  return (
    <div className="mx-20">
      <p className="text-xl font-bold">予約一覧</p>
      <div className="border-x-2 border-t-2">
        <div className="flex text-center border-b-2 font-bold">
          <span className="w-1/5">リクエスト状況</span>
          <span className="w-1/5">開始日時</span>
          <span className="w-1/5">時間(分)</span>
          <span className="w-1/5">タイトル</span>
          <span className="w-1/5">トレーナー</span>
        </div>
        <ul>
          {reservations.map((reservation) => (
            <ReservationList key={reservation.id} reservation={reservation} />
          ))}
        </ul>
      </div>
    </div>
  );
};
