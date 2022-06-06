import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      type="button"
      className={`rounded px-5 py-1 mx-2 border-2 border-sky-400 hover:bg-sky-400 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
