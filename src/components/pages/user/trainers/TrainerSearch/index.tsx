import { useForm } from "react-hook-form";
import { Lesson } from "../../../../../apis/models/lesson";
import { Trainer } from "../../../../../apis/models/trainer";
import { Others } from "../../../../../hooks/user/useTrainers";
import { useTrainerSearch } from "../../../../../hooks/user/useTrainerSearch";
import { categoryBy } from "../../../../../utils/categoryBy";
import { genderBy } from "../../../../../utils/genderBy";
import { Errors } from "../../../../common/Errors";
import { SearchButton } from "../../../../common/SearchButton";

export type FormParams = {
  genders: Trainer["gender"][];
  categories: Lesson["category"][];
  minHistoryYear: Trainer["history_year"];
};

type Props = Pick<Others, "fetchTrainers" | "setFormParams">;

export const TrainerSearch = ({ fetchTrainers, setFormParams }: Props) => {
  const { data, error, isLoading } = useTrainerSearch();
  const { register, handleSubmit } = useForm<FormParams>({
    mode: "onChange",
  });
  const onSubmit = (params: FormParams) => {
    setFormParams(params);
    fetchTrainers(1, params);
  };

  if (error) return <Errors>{error}</Errors>;
  return (
    <>
      <div className="mx-16 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border-2">
            <div className="flex border-b-2">
              <span className="w-24  m-2 text-center">カテゴリー</span>
              <div className="my-2 pl-3 border-l-2">
                {!isLoading &&
                  data.categories.map((category) => (
                    <label key={category} className="mr-2">
                      <input
                        id="category"
                        type="checkbox"
                        value={category}
                        className="mr-1"
                        {...register("categories")}
                      />
                      {categoryBy(category)}
                    </label>
                  ))}
              </div>
            </div>
            <div className="flex border-b-2">
              <span className="w-24 m-2 text-center">性別</span>
              <div className="my-2 pl-3 border-l-2">
                {!isLoading &&
                  data.genders.map((gender) => (
                    <label key={gender} className="mr-2">
                      <input
                        id="gender"
                        type="checkbox"
                        value={gender}
                        className="mr-1"
                        {...register("genders")}
                      />
                      {genderBy(gender)}
                    </label>
                  ))}
              </div>
            </div>
            <div className="flex">
              <span className="w-24 m-2 text-center">トレーナー歴</span>
              <div className="my-2 pl-3 border-l-2">
                <input
                  type="number"
                  min={0}
                  className="border-gray-300 border-2 w-32"
                  {...register("minHistoryYear")}
                />
                年以上
              </div>
            </div>
          </div>
          <SearchButton />
        </form>
      </div>
    </>
  );
};
