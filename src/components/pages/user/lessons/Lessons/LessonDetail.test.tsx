import {render, screen} from '@testing-library/react';
import {Lesson} from '../../../../../apis/models/lesson';
import {LessonDetail} from './LessonDetail';

const trainer = {
  name: 'name',
  gender: 'male',
  image: 'image',
};

const lesson: Lesson = {
  id: 1,
  title: 'title',
  price: 1000,
  category: 'yoga',
  time: 50,
  content: 'content',
  trainer: trainer,
};

describe('LessonDetail', () => {
  test('コンポーネントをレンダリングすること', () => {
    render(<LessonDetail lesson={lesson} />);

    expect(screen.getByRole('img'))
        .toHaveAttribute('src', lesson.trainer.image);
    const {container} = render(<LessonDetail lesson={lesson} />);
    const paragraphs = container.getElementsByTagName('p');
    const contents = container.getElementsByTagName('span');
    const buttons = container.getElementsByTagName('button');

    expect(paragraphs.length).toBe(4);
    expect(paragraphs[0].textContent).toBe(lesson.title);
    expect(paragraphs[1].textContent).toBe(
        `¥${lesson.price}/${lesson.time}min`,
    );
    expect(paragraphs[2].textContent).toBe('内容');
    expect(paragraphs[3].textContent).toBe(lesson.content);

    expect(contents.length).toBe(3);
    expect(contents[0].textContent).toBe(lesson.trainer.name);
    expect(contents[1].textContent).toBe('(男性)');
    expect(contents[2].textContent).toBe('ヨガ');

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe('予約リクエスト');
  });
});
