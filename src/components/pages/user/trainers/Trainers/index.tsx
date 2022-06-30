import { Trainer } from "../../../../../apis/models/trainer";
import { TrainerCard } from "./TrainerCard";

type Props = {
  trainers: Trainer[];
};

export const Trainers = ({ trainers }: Props) => {
  return (
    <div>
      <h1 className="text-center font-bold mb-3 text-3xl">トレーナー一覧</h1>
      <ul className="flex flex-wrap items-center">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </ul>
    </div>
  );
};
