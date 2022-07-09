import { useForm } from "react-hook-form";
import { FormErrorMessage } from "../../../common/FormErrorMessage";

export type FormParams = {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  gender: string;
};
export const SingUpForm = () => {
  const { signUpUser } = useSignUp();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<FormParams>({
    mode: "onChange",
  });

  const onSubmit = (params: FormParams) => {
    signUpUser(params);
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-2 mt-4">
      <div className="border border-gray-300 p-6 bg-white rounded-lg mx-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex items-center">
              <span>名前</span>
              <div className="ml-4">
                <span>
                  <input
                    type="text"
                    className="w-full h-8 border border-gray-300 rounded shadow-sm focus:outline-none"
                    {...register("name", { required: true })}
                  />
                </span>
              </div>
            </div>
            <FormErrorMessage
              open={!!errors.name}
              errorMessage="名前を入力してください"
            />
            <div className="flex items-center">
              <span>性別</span>
              <div className="ml-4">
                <span>
                  {/* 選択肢はAPIから取得するようにする方がベター */}
                  <input
                    type="radio"
                    value="male"
                    defaultChecked={true}
                    {...register("gender", { required: true })}
                  />
                  <label>男性</label>
                  <input
                    type="radio"
                    value="female"
                    {...register("gender", { required: true })}
                  />
                  <label>女性</label>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span>メールアドレス</span>
              <div className="ml-4">
                <span>
                  <input
                    type="text"
                    className="w-full h-8 border border-gray-300 rounded shadow-sm focus:outline-none"
                    {...register("email", { required: true })}
                  />
                </span>
              </div>
            </div>
            <FormErrorMessage
              open={!!errors.email}
              errorMessage="メールアドレスを入力してください"
            />
            <div className="flex items-center">
              <span>パスワード</span>
              <div className="ml-4">
                <span>
                  <input
                    type="password"
                    className="w-full h-8 border border-gray-300 rounded shadow-sm focus:outline-none"
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "パスワードは6文字以上で入力してください",
                      },
                    })}
                  />
                </span>
              </div>
            </div>
            <FormErrorMessage
              open={!!errors.password}
              errorMessage="パスワードを入力してください"
            />
            <div className="flex items-center">
              <span>パスワード（再入力）</span>
              <div className="ml-4">
                <span>
                  <input
                    type="password"
                    className="w-full h-8 border border-gray-300 rounded shadow-sm focus:outline-none"
                    {...register("passwordConfirmation", {
                      required: true,
                      validate: (value) => value === getValues("password"),
                    })}
                  />
                </span>
              </div>
            </div>
            <FormErrorMessage
              open={!!errors.passwordConfirmation}
              errorMessage="パスワード（再入力）を正しく入力してください"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="p-2 border w-1/4 bg-gray-800 text-white"
            >
              登録する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
