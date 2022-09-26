import Router from "next/router";
import { ReactNode } from "react";

type Props = {
  image: string;
  children: ReactNode;
  value: string;
};

export const Category = ({ image, children, value }: Props) => {
  const onClick = () => {
    localStorage.setItem("category", value);
    Router.push("/user/lessons");
  };
  return (
    <button onClick={onClick}>
      <li className="mx-1 mb-5">
        <img src={image} alt="" width={230} />
        <p>{children}</p>
      </li>
    </button>
  );
};
