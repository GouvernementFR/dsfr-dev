import { checkboxesGroupArgs, checkboxesGroupArgTypes, checkboxesGroupProps } from './checkboxes-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';

const render = (args) => renderFieldset({ fieldset: checkboxesGroupProps(args) });

export default {
  id: 'checkboxes-group',
  title: 'DSFR/Component/Checkbox/Checkboxes-Group',
  render: render,
  argTypes: checkboxesGroupArgTypes,
  args: checkboxesGroupArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const SmStory = {
  tags: ['!dev'],
  args: {
    size: 'sm'
  }
};

export const DisabledStory = {
  tags: ['!dev'],
  args: {
    disabled: true
  }
};

export const ErrorStory = {
  tags: ['!dev'],
  args: {
    status: 'error'
  }
};

export const SuccessStory = {
  tags: ['!dev'],
  args: {
    status: 'valid'
  }
};