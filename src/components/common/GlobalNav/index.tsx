import Link from 'next/link';
import {handleRouter} from '../../../utils/router';
import {Button} from '../Button';
import {List} from './List';

export const GlobalNav = () => {
  return (
    <header className="w-full h-32 fixed">
      <div className="h-20 bg-zinc-500 flex items-center">
        <div className="w-3/4 flex items-center justify-between mx-auto">
          <Link href="/user/home">
            <a>
              <img src="/logo.png" alt='' width={230}/>
            </a>
          </Link>
          <div className="flex items-center text-xl text-white">
            <Button onClick={handleRouter('/user')}>ログイン</Button>
            <Button onClick={handleRouter('/user')}>新規登録</Button>
          </div>
        </div>
      </div>
      <nav className="bg-yellow-200">
        <div className="w-3/4 mx-auto">
          <ul className="flex items-center justify-center text-xl text-center">
            <List link="/user/home">ホーム</List>
            <List link="/user/about">Fitmeとは</List>
            <List link="/user/trainers">トレーナー一覧</List>
            <List link="/user/lessons" className="border-r">レッスン一覧</List>
          </ul>
        </div>
      </nav>
    </header>
  );
};
