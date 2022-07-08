import {render, screen} from '@testing-library/react';
import {Lesson} from '../../../../../apis/models/lesson';
import {LessonCard} from './LessonCard';

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

describe('LessonCard', () => {
  test('コンポーネントをレンダリングすること', () => {
    render(<LessonCard lesson={lesson} />);

    expect(screen.getByRole('img'))
        .toHaveAttribute('src', lesson.trainer.image);
    const {container} = render(<LessonCard lesson={lesson} />);
    const paragraphs = container.getElementsByTagName('p');
    const contents = container.getElementsByTagName('span');

    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0].textContent).toBe(lesson.title);
    expect(paragraphs[1].textContent).toBe(
        `${lesson.price}円/${lesson.time}min`,
    );
    expect(contents.length).toBe(3);
    expect(contents[0].textContent).toBe(lesson.trainer.name);
    expect(contents[1].textContent).toBe('(男性)');
    expect(contents[2].textContent).toBe('ヨガ');
  });
});
