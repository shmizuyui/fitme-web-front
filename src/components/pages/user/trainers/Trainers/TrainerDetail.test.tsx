import {render, screen} from '@testing-library/react';
import {TrainerDetail} from './TrainerDetail';

const lesson = {
  id: 1,
  title: 'title',
  price: 1000,
  category: 'yoga',
  time: 50,
  content: 'content',
};

const trainer = {
  id: 1,
  name: 'name',
  name_kana: 'name_kana',
  gender: 'male',
  history_year: 10,
  career: 'career',
  image: 'image',
  message: 'message',
  lessons: [lesson],
};

describe('TrainerDetail', () => {
  test('コンポーネントをレンダリングすること', () => {
    render(<TrainerDetail trainer={trainer} />);

    expect(screen.getByText('トレーナー')).toBeTruthy();
    // expect(screen.getByRole('img')).toHaveAttribute('src', trainer.image);
    // expect(screen.getByRole('img')).toHaveAttribute('src', '/sample.jpg');
    const {container} = render(<TrainerDetail trainer={trainer} />);
    const paragraphs = container.getElementsByTagName('p');
    const contents = container.getElementsByTagName('span');

    expect(paragraphs.length).toBe(10);
    expect(paragraphs[0].textContent).toBe(trainer.name_kana);
    expect(paragraphs[1].textContent).toBe(trainer.name);
    expect(paragraphs[2].textContent).toBe(
        `トレーナー歴：${trainer.history_year}年`,
    );
    expect(paragraphs[3].textContent).toBe('経歴');
    expect(paragraphs[4].textContent).toBe(trainer.career);
    expect(paragraphs[5].textContent).toBe('メッセージ');
    expect(paragraphs[6].textContent).toBe(trainer.message);
    expect(paragraphs[7].textContent).toBe('このトレーナーのレッスン一覧');

    expect(contents.length).toBe(3);
    expect(contents[0].textContent).toBe('ヨガ');
    expect(contents[1].textContent).toBe('男性');
  });
});
