import { useContext } from "react";
import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Reservation } from "../../apis/models/Reservation";
import { handleErrorMessage } from "../../utils/errorMessage";
import { BaseResponse } from "../BaseResponse";
import { AuthContext } from "./useCurrentUser";

type ReserveResponse = {
  reservations: Reservation[];
};

export const useReservations = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.id;
  const { data, error } = useSWR(
    `/api/v1/user/reservations?user_id=${userId}`,
    fetcher
  );
  return {
    data: data?.data,
    error: handleErrorMessage(error, data?.error),
    isLoading: !error && !data,
  } as BaseResponse<ReserveResponse>;
};
