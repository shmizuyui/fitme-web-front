import Router from "next/router";
import { apiClient } from "../../apis/client";
import { Reservation } from "../../apis/models/Reservation";
import { useApiBase } from "./useApiBase";

type ReservationsResponse = {
  reservation: Reservation;
};

export const useRequest = () => {
  const { setData, error, setError, setIsLoading } =
    useApiBase<ReservationsResponse>();
  const reserveRequest = async (params: {
    lesson_id: number;
    start_at: Date;
  }) => {
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
