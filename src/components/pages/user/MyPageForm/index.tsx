import { useContext } from "react";
import { AuthContext } from "../../../../hooks/user/useCurrentUser";
import { handleRouter } from "../../../../utils/router";

export const MyPageForm = () => {
  const { isSignedIn, currentUser, loading } = useContext(AuthContext);
  return (
    <div className="mx-auto mt-12">
      <div className="border-b-2 text-center mb-3">
        <img
          src="/test.jpg"
          alt=""
          className="block mx-auto rounded-full"
          width={150}
        />
        <p className="text-2xl my-5 font-bold">{currentUser?.name}</p>
        <button
          onClick={handleRouter("/user/userEdit")}
          className="w-1/6 border-2 mb-2 text-lg"
        >
          会員情報
        </button>
      </div>
      <div className="mx-20">
        <p className="text-xl font-bold">予約一覧</p>
      </div>
    </div>
  );
};
