import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};
export const Button = ({children, className, onClick}: Props) => {
  return (
    <button
      type="button"
      className={`border-b-2 ml-12 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
