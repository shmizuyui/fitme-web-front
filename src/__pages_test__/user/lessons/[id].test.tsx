import {render} from '@testing-library/react';
import LessonDetail from '../../../pages/user/lessons/[id]';
jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: {},
    };
  },
}));

describe('LessonDetail', () => {
  test('詳細画面をレンダリングすること', () => {
    render(<LessonDetail/>);
  });
});
