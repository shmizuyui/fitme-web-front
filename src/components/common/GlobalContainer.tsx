import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  title: string;
}
export const GlobalContainer = ({children, title}: Props) => {
  return (
    <div className="h-screen w-2/3 mx-auto">
      <div className="pt-32">
        <h1 className="text-center font-bold mb-3 text-3xl">{title}</h1>
        {children}
      </div>
    </div>
  );
};
