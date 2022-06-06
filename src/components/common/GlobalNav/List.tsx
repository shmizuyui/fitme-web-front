import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  link: string;
  className?: string;
};

export const List = ({ children, link, className }: Props) => {
  return (
    <Link href={link}>
      <a className={`w-1/4 border-l border-black ${className}`}>
        <li className="list-none p-2">{children}</li>
      </a>
    </Link>
  );
};
