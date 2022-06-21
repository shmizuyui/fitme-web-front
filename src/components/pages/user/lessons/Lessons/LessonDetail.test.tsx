import {render, screen} from '@testing-library/react';
import {Lesson} from '../../../../../apis/models/lesson';
import {LessonDetail} from './LessonDetail';

const lesson: Lesson = {
  id: 1,
  title: 'title',
  price: 1000,
  category: 'yoga',
  time: 50,
  content: 'content',
};

describe('LessonDetail', () => {
  test('コンポーネントをレンダリングすること', () => {
    render(<LessonDetail lesson={lesson} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', '/sample.jpg');
    const {container} = render(<LessonDetail lesson={lesson} />);
    const paragraphs = container.getElementsByTagName('p');
    const contents = container.getElementsByTagName('span');
    const buttons = container.getElementsByTagName('button');

    expect(paragraphs.length).toBe(5);
    expect(paragraphs[0].textContent).toBe('トレーナーの名前');
    expect(paragraphs[1].textContent).toBe(lesson.title);
    expect(paragraphs[2].textContent).toBe(
        `¥${lesson.price}/${lesson.time}min`,
    );
    expect(paragraphs[3].textContent).toBe('内容');
    expect(paragraphs[4].textContent).toBe(lesson.content);

    expect(contents.length).toBe(1);
    expect(contents[0].textContent).toBe('ヨガ');

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe('予約リクエスト');
  });
});
