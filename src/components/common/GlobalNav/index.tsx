import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../../hooks/user/useCurrentUser";
import { useLogout } from "../../../hooks/user/useLogout";
import { handleRouter } from "../../../utils/router";
import { Button } from "../Button";
import { List } from "./List";

export const GlobalNav = () => {
  const { loading, isSignedIn } = useContext(AuthContext);
  const { logoutUser } = useLogout();
  const handleLogout = () => logoutUser();
  return (
    <header className="w-full h-32 fixed">
      <div className="h-20 bg-zinc-500 flex items-center">
        <div className="w-2/3 flex items-center justify-between mx-auto">
          <Link href="/user/home">
            <a>
              <img src="/logo.png" alt="" width={230} />
            </a>
          </Link>
          {!loading &&
            (isSignedIn ? (
              <div className="flex items-center text-xl text-white">
                <Button onClick={handleRouter("/user/myPage")}>
                  マイページ
                </Button>
                <Button onClick={handleLogout}>ログアウト</Button>
              </div>
            ) : (
              <div className="flex items-center text-xl text-white">
                <Button onClick={handleRouter("/user")}>ログイン</Button>
                <Button onClick={handleRouter("/user/signUp")}>新規登録</Button>
              </div>
            ))}
        </div>
      </div>
      <nav className="bg-yellow-200">
        <div className="w-2/3 mx-auto">
          <ul className="flex items-center justify-center text-xl text-center">
            <List link="/user/home">ホーム</List>
            <List link="/user/about">Fitmeとは</List>
            <List link="/user/trainers">トレーナー一覧</List>
            <List link="/user/lessons" className="border-r">
              レッスン一覧
            </List>
          </ul>
        </div>
      </nav>
    </header>
  );
};
