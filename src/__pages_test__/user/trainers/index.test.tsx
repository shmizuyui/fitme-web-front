import React from 'react';
import {render} from '@testing-library/react';
import Trainers from '../../../pages/user/trainers';

describe('Trainers', () => {
  test('コンポーネントをレンダリングすること', () => {
    render(<Trainers />);
  });
});
