import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Errors = ({ children }: Props) => {
  return <p className="pt-32 w-2/3 mx-auto">{children}</p>;
};
