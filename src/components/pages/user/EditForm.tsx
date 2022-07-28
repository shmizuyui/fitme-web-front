import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../hooks/user/useCurrentUser";
import { useEdit } from "../../../hooks/user/useEdit";
import { SignButton } from "../../common/SignButton";

export type FormParams = {
  name: string;
  nameKana: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  avatar: string;
};
export const EditForm = () => {
  const { currentUser } = useContext(AuthContext);
  const { editUser } = useEdit();
  const { register, handleSubmit } = useForm<FormParams>({
    mode: "onChange",
  });
  const onSubmit = (params: FormParams) => {
    editUser(params);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-40 py-5">
        <div className="mb-5 mx-40">
          <span>名前</span>
          <div className="mb-3">
            <input
              id="name"
              type="text"
              defaultValue={currentUser?.name}
              className="border-2 w-full p-1"
              {...register("name")}
            />
          </div>
          <span>フリガナ</span>
          <div className="mb-3">
            <input
              id="nameKana"
              type="text"
              defaultValue={currentUser?.name_kana}
              className="border-2 w-full p-1"
              {...register("nameKana")}
            />
          </div>
          <div className="mb-3">
            <span className="block">性別</span>
            <p>{currentUser?.gender}</p>
          </div>
          <span>メールアドレス</span>
          <div className="mb-3">
            <input
              id="email"
              type="email"
              defaultValue={currentUser?.email}
              className="border-2 w-full p-1"
              {...register("email")}
            />
          </div>
          {/* <span>パスワード</span>
          <div className="mb-3">
            <input
              id="password"
              type="password"
              className="border-2 w-full p-1"
              {...register('password')}
            />
          </div>
          <span>パスワード(確認)</span>
          <div className="mb-3">
            <input
              id="passwordConfirmation"
              type="password"
              className="border-2 w-full p-1"
              {...register('passwordConfirmation')}
            />
          </div> */}
          <span>プロフィール画像</span>
          <input type="file" className="mt-1" />
        </div>
        <SignButton>編集</SignButton>
      </div>
    </form>
  );
};
