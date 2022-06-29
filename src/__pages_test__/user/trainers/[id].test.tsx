import {render} from '@testing-library/react';
import Trainer from '../../../pages/user/trainers/[id]';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: {},
    };
  },
}));

describe('Trainer', () => {
  test('詳細画面をレンダリングすること', () => {
    render(<Trainer />);
  });
});
