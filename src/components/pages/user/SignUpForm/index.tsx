import { useForm } from "react-hook-form";
import { useSignUp } from "../../../../hooks/user/useSignUp";
import { FormErrorMessage } from "../../../common/FormErrorMessage";
import { SignButton } from "../../../common/SignButton";

export type FormPrams = {
  name: string;
  nameKana: string;
  gender: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const SignUpForm = () => {
  const { signUpUser } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormPrams>({
    mode: "onChange",
  });
  const onSubmit = (params: FormPrams) => {
    signUpUser(params);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-40 py-5 border-2">
        <div className="mb-5 mx-40">
          <span>名前</span>
          <div className="mb-3">
            <input
              id="name"
              type="text"
              className="border-2 w-full p-1"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <FormErrorMessage errorMessage="名前を入力してください" />
            )}
          </div>
          <span>フリガナ</span>
          <div className="mb-3">
            <input
              id="nameKana"
              type="text"
              className="border-2 w-full p-1"
              {...register("nameKana", { required: true })}
            />
            {errors.nameKana && (
              <FormErrorMessage errorMessage="フリガナを入力してください" />
            )}
          </div>
          <div className="mb-3">
            <span className="block">性別</span>
            <label className="mr-2">
              <input
                id="gender"
                type="radio"
                value="male"
                defaultChecked={true}
                className="border-2"
                {...register("gender", { required: true })}
              />
              男性
            </label>
            <label>
              <input
                id="gender"
                type="radio"
                value="female"
                className="border-2"
                {...register("gender", { required: true })}
              />
              女性
            </label>
          </div>
          <span>メールアドレス</span>
          <div className="mb-3">
            <input
              id="email"
              type="email"
              className="border-2 w-full p-1"
              {...register("email", {
                required: true,
                pattern: {
                  value: /[\w\d_-]+@[\w\d_-]+\.[\w\d._-]+/,
                  message: "正しいメールアドレスを入力してください",
                },
              })}
            />
            {errors.email && (
              <FormErrorMessage errorMessage={errors.email.message} />
            )}
          </div>
          <span>パスワード</span>
          <div className="mb-3">
            <input
              id="password"
              type="password"
              className="border-2 w-full p-1"
              placeholder="半角英数字6文字以上"
              {...register("password", {
                required: "パスワードを入力してください",
                minLength: {
                  value: 6,
                  message: "パスワードは6文字以上で入力してください",
                },
              })}
            />
            {errors.password && (
              <FormErrorMessage errorMessage={errors.password.message} />
            )}
          </div>
          <span>パスワード(確認)</span>
          <div className="mb-3">
            <input
              id="passwordConfirmation"
              type="password"
              className="border-2 w-full p-1"
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) => value === getValues("password"),
              })}
            />
            {errors.passwordConfirmation && (
              <FormErrorMessage errorMessage="パスワードが一致しません" />
            )}
          </div>
        </div>
        <SignButton>新規登録</SignButton>
      </div>
    </form>
  );
};
