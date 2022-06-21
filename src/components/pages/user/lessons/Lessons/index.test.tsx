import {render, screen} from '@testing-library/react';
import {Lessons} from '.';

const lessons = [
  {
    id: 1,
    title: 'title',
    price: 1000,
    category: 'yoga',
    time: 50,
    content: 'content',
  },
];

describe('Lessons', () => {
  test('コンポーネントをレンダリングすること', () => {
    render(<Lessons lessons={lessons} />);

    expect(screen.getByText('レッスン一覧')).toBeTruthy();
  });
});
