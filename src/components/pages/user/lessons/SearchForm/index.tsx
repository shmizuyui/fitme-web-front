import { useForm } from "react-hook-form";
import { Loading } from "../../../../common/Loading";
import { useLessonSearch } from "../../../../../hooks/user/useLessonSearch";
import { Errors } from "../../../../common/Errors";
import { Lesson } from "../../../../../apis/models/lesson";
import { Trainer } from "../../../../../apis/models/trainer";
import { genderBy } from "../../../../../utils/genderBy";
import { categoryBy } from "../../../../../utils/categoryBy";
import { Others } from "../../../../../hooks/user/useLessons";

export type FormParams = {
  categories: Lesson["category"][];
  minPrice: Lesson["price"];
  maxPrice: Lesson["price"];
  genders: Trainer["gender"][];
};
type Props = Pick<Others, "fetchLessons" | "setFormParams">;
export const SearchForm = ({ fetchLessons, setFormParams }: Props) => {
  const { data, error, isLoading } = useLessonSearch();

  const { handleSubmit, register } = useForm<FormParams>({
    mode: "onChange",
  });

  const onSubmit = (params: FormParams) => {
    setFormParams(params);
    fetchLessons(1, params);
  };

  if (error) return <Errors>{error}</Errors>;

  return (
    <div className="container mx-auto flex justify-center items-center p-2 mt-4">
      <div className="border border-gray-300 p-6 bg-white rounded-lg mx-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              <div className="flex items-center">
                <span>カテゴリー</span>
                <div className="ml-4">
                  {data.categories.map((category) => (
                    <span key={category}>
                      <input
                        id={category}
                        className="ml-2"
                        type="checkbox"
                        value={category}
                        {...register("categories")}
                      />
                      <label>{categoryBy(category)}</label>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span>性別</span>
                <div className="ml-4">
                  {data.genders.map((gender) => (
                    <span key={gender}>
                      <input
                        id={gender}
                        className="ml-2"
                        type="checkbox"
                        value={gender}
                        {...register("genders")}
                      />
                      <label>{genderBy(gender)}</label>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span>料金</span>
                <div className="flex items-center ml-4">
                  <input
                    type="number"
                    min="0"
                    className="w-full h-8 border border-gray-300 rounded shadow-sm focus:outline-none"
                    {...register("minPrice")}
                  />
                  <span className="mr-2">円</span>
                  〜
                  <input
                    type="number"
                    min="0"
                    className="w-full h-8 border border-gray-300 rounded shadow-sm focus:outline-none"
                    {...register("maxPrice")}
                  />
                  <span>円</span>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="p-2 border w-1/4 bg-gray-800 text-white"
            >
              検索
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
