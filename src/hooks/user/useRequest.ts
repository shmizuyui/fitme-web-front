import Router from "next/router";
import { start } from "repl";
import { apiClient } from "../../apis/client";
import { Reservation } from "../../apis/models/Reservation";
import { useApiBase } from "./useApiBase";
import { useCurrentUser } from "./useCurrentUser";

type ReservationsResponse = {
  reservation: Reservation;
};

export const useRequest = () => {
  const { setData, error, setError, setIsLoading } =
    useApiBase<ReservationsResponse>();
  const reserveRequest = async (formParams: {
    lessonId: number;
    startAt: Date;
  }) => {
    const { currentUser } = useCurrentUser()
    const params = {
      lesson_id: formParams.lessonId,
      start_at: formParams.startAt,
      user_id: currentUser?.id
    }
    setIsLoading(true);
    await apiClient
      .post("/api/v1/user/reservations", params)
      .then((response) => {
        setData(response.data);
        Router.push("/user/reserves/request");
      })
      .catch((error) => setError(error));
    setIsLoading(false);
  };
  return {
    reserveRequest,
    error,
  };
};
