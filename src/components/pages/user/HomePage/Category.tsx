import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  image: string;
  children: ReactNode;
  category: string;
};

export const Category = ({ image, children, category }: Props) => {
  return (
    <Link href={`/user/lessons?categories[]=${category}`}>
      <a className="w-1/4">
        <li className="mx-1 mb-5">
          <img src={image} alt="" width={250} />
          <p>{children}</p>
        </li>
      </a>
    </Link>
  );
};
