import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Lesson } from "../../../../../apis/models/lesson";
import { Trainer } from "../../../../../apis/models/trainer";
import { useLessonSearch } from "../../../../../hooks/user/useLessonSearch";
import { categoryBy } from "../../../../../utils/categoryBy";
import { genderBy } from "../../../../../utils/genderBy";
import { Errors } from "../../../../common/Errors";
import { SearchButton } from "../../../../common/SearchButton";

export type FormParams = {
  categories: Lesson["category"][];
  minPrice: Lesson["price"] | null;
  maxPrice: Lesson["price"] | null;
  genders: Trainer["gender"][];
};
type Props = {
  setFormParams: (params: FormParams) => void;
  fetchLessons: (pageIndex: number, formParams: FormParams) => void;
  formParams: FormParams;
};
export const LessonSearch = ({
  setFormParams,
  fetchLessons,
  formParams,
}: Props) => {
  const { data, error, isLoading } = useLessonSearch();
  const { register, handleSubmit, setValue } = useForm<FormParams>({
    mode: "onChange",
  });
  const onSubmit = (params: FormParams) => {
    setFormParams(params);
    fetchLessons(1, params);
  };

  useEffect(() => {
    if (formParams) {
      setValue("categories", formParams.categories);
    }
  }, [formParams, setValue]);

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
              <span className="w-20  m-2 text-center">性別</span>
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
          <SearchButton />
        </form>
      </div>
    </>
  );
};
