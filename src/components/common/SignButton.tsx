import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SignButton = ({ children }: Props) => {
  return (
    <div className="text-center">
      <button type="submit" className="bg-gray-700 text-white px-10 text-lg">
        {children}
      </button>
    </div>
  );
};
