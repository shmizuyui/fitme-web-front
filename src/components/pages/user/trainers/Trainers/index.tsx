import { Trainer } from "../../../../../apis/models/trainer";
import { TrainerCard } from "./TrainerCard";

type Props = {
  trainers: Trainer[];
};

export const Trainers = ({ trainers }: Props) => {
  return (
    <ul className="flex flex-wrap items-center">
      {trainers.map((trainer) => (
        <TrainerCard key={trainer.id} trainer={trainer} />
      ))}
    </ul>
  );
};
