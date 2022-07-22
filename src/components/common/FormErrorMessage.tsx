import { ReactNode } from "react";

type Props = {
  errorMessage: ReactNode;
};

export const FormErrorMessage = ({ errorMessage }: Props) => {
  return <p className="text-sm text-red-600">{errorMessage}</p>;
};
