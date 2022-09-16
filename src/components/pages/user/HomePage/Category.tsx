import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  image: string;
  children: ReactNode;
};

export const Category = ({ image, children }: Props) => {
  return (
    <Link href="/user/lessons">
      <a className="w-1/4">
        <li className="mx-1 mb-5">
          <img src={image} alt="" width={250} />
          <p>{children}</p>
        </li>
      </a>
    </Link>
  );
};
