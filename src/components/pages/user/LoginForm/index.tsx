import { useForm } from "react-hook-form";
import { useLogin } from "../../../../hooks/user/useLogin";
import { FormErrorMessage } from "../../../common/FormErrorMessage";
import { SignButton } from "../../../common/SignButton";

export type FormPrams = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { loginUser } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPrams>({
    mode: "onChange",
  });
  const onSubmit = (params: FormPrams) => {
    loginUser(params);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-40 py-5 border-2">
        <div className="mb-5 mx-40">
          <span>メールアドレス</span>
          <div className="mb-3">
            <input
              id="email"
              type="email"
              className="border-2 w-full"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <FormErrorMessage errorMessage="メールアドレスを入力してください" />
            )}
          </div>
          <span>パスワード</span>
          <div className="mb-3">
            <input
              id="password"
              type="password"
              className="border-2 w-full p-1"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <FormErrorMessage errorMessage="パスワードを入力してください" />
            )}
          </div>
        </div>
        <SignButton>ログイン</SignButton>
      </div>
    </form>
  );
};
