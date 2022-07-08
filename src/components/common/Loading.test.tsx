import {render} from '@testing-library/react';
import {Loading} from './Loading';

describe('Loading', () => {
  test('コンポーネントをレンダリングすること', () => {
    const {container} = render(<Loading/>);
    const paragraphs = container.getElementsByTagName('p');

    expect(paragraphs.length).toBe(1);
    expect(paragraphs[0].textContent).toBe('Loading...');
  });
});
