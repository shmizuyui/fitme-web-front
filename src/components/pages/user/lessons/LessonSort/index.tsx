import React from "react";
import { FormParams } from "../LessonSearch";

type Props = {
  fetchLessons: (
    pageIndex: number,
    formParams: FormParams,
    order: string
  ) => void;
  formParams: FormParams;
  setOrder: (params: string) => void;
};

export const LessonSort = ({ fetchLessons, setOrder, formParams }: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setOrder(value);
    fetchLessons(1, formParams, value);
  };
  return (
    <div className="text-right mx-2 mb-5 bg-gray-300">
      <div>
        <select className="p-1 m-2 rounded text-center" onChange={onChange}>
          <option value={"created_at_desc"}>新着順</option>
          <option value={"low_price"}>価格が低い順</option>
          <option value={"high_price"}>価格が高い順</option>
        </select>
      </div>
    </div>
  );
};
