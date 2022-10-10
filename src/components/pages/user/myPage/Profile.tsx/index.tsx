import { useContext } from "react";
import { AuthContext } from "../../../../../hooks/user/useCurrentUser";
import { handleRouter } from "../../../../../utils/router";

export const Profile = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);

  return (
    <div className="mx-auto mt-12">
      <div className="border-b-2 text-center mb-3">
        <img
          src={currentUser?.avatar?.url ?? "/default.png"}
          alt=""
          className="block mx-auto rounded-md"
          width={150}
        />
        {isSignedIn && currentUser && (
          <p className="text-2xl my-5 font-bold">{currentUser?.name}</p>
        )}
        <button
          onClick={handleRouter("/user/editUser")}
          className="w-1/5 border-2 mb-2"
        >
          プロフィール編集
        </button>
      </div>
    </div>
  );
};
