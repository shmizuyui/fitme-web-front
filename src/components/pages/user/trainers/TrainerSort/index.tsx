import { FormParams } from "../TrainerSearch";

type Props = {
  fetchTrainers: (
    pageIndex: number,
    formParams: FormParams,
    order: string
  ) => void;
  formParams: FormParams;
  setOrder: (params: string) => void;
};

export const TrainerSort = ({ fetchTrainers, formParams, setOrder }: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setOrder(value);
    fetchTrainers(1, formParams, value);
  };
  return (
    <div className="text-right mx-2 mb-5 bg-gray-300">
      <div>
        <select className="p-1 m-2 rounded text-center" onChange={onChange}>
          <option value={"created_at_desc"}>新着順</option>
          <option value={"low_history"}>トレーナー歴が短い順</option>
          <option value={"high_history"}>トレーナー歴が長い順</option>
        </select>
      </div>
    </div>
  );
};
