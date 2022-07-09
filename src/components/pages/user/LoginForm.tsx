import { useForm } from "react-hook-form";
import { useLogin } from "../../../hooks/user/useLogin";
import { FormErrorMessage } from "../../common/FormErrorMessage";

export type FormParams = {
  email: string;
  password: string;
};
export const LoginForm = () => {
  const { loginUser } = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormParams>({
    mode: "onChange",
  });

  const onSubmit = (params: FormParams) => {
    loginUser(params);
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-2 mt-4">
      <div className="border border-gray-300 p-6 bg-white rounded-lg mx-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
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
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="p-2 border w-1/3 bg-gray-800 text-white"
            >
              ログイン
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
