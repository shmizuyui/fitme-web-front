import {render} from '@testing-library/react';
import {Button} from './Button';

const onClick = () => console.log('click');
const children = 'test';
describe('Button', () => {
  test('コンポーネントをレンダリングすること', () => {
    const {container} = render(<Button onClick={onClick}>{children}</Button>);
    const buttons = container.getElementsByTagName('button');

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe(children);
  });
});
