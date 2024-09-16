import { toggleArgs, toggleArgTypes, toggleProps } from './toggle-arg-types';
import { renderToggle } from './toggle';

const render = (args) => renderToggle({ toggle: toggleProps(args) });
const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'toggle',
  title: 'DSFR/Component/Toggle',
  render: render,
  argTypes: toggleArgTypes,
  args: toggleArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const LeftStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      hint: '',
      left: true
    }
  ])
};
