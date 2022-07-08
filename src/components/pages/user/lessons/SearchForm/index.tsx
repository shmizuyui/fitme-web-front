import { useForm } from "react-hook-form";
import { Lesson } from "../../../../../apis/models/lesson";
import { Trainer } from "../../../../../apis/models/trainer";
import { Others } from "../../../../../hooks/user/useLessons";
import { useLessonSearch } from "../../../../../hooks/user/useLessonSearch";
import { categoryBy } from "../../../../../utils/categoryBy";
import { genderBy } from "../../../../../utils/genderBy";
import { Errors } from "../../../../common/Errors";

export type FormParams = {
  categories: Lesson["category"][];
  minPrice: Lesson["price"];
  maxPrice: Lesson["price"];
  genders: Trainer["gender"][];
};

type Props = Pick<Others, "fetchLessons" | "setFormParams">;

export const SearchForm = ({ fetchLessons, setFormParams }: Props) => {
  const { data, error, isLoading } = useLessonSearch();
  const { register, handleSubmit } = useForm<FormParams>({
    mode: "onChange",
  });
  const onSubmit = (params: FormParams) => {
    setFormParams(params);
    fetchLessons(1, params);
  };

  if (error) return <Errors>{error}</Errors>;

  return (
    <>
      <div className="mx-16 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border-2">
            <div className="flex border-b-2">
              <span className="w-20  m-2 text-center">カテゴリー</span>
              <div className="my-2 pl-3 border-l-2">
                {!isLoading &&
                  data.categories.map((category) => (
                    <span key={category}>
                      <input
                        id="category"
                        type="checkbox"
                        value={category}
                        className="mr-1"
                        {...register("categories")}
                      />
                      <label className="mr-2">{categoryBy(category)}</label>
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex border-b-2">
              <span className="w-20  m-2 text-center">性別</span>
              <div className="my-2 pl-3 border-l-2">
                {!isLoading &&
                  data.genders.map((gender) => (
                    <span key={gender}>
                      <input
                        id="gender"
                        type="checkbox"
                        value={gender}
                        className="mr-1"
                        {...register("genders")}
                      />
                      <label className="mr-2">{genderBy(gender)}</label>
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex">
              <span className="w-20 m-2 text-center">料金</span>
              <div className="my-2 pl-3 border-l-2">
                <input
                  type="number"
                  min={0}
                  className="border-gray-300 border-2 ml-1"
                  {...register("minPrice")}
                />
                <span className="mr-2">円</span>
                〜
                <input
                  type="number"
                  min={0}
                  className="border-gray-300 border-2 ml-2"
                  {...register("maxPrice")}
                />
                <span>円</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-1 mb-10">
            <button type="submit" className="bg-yellow-200 px-10 text-lg">
              検索
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
