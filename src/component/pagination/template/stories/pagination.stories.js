import { renderPagination } from './pagination';
import { paginationArgs, paginationArgTypes, paginationProps } from './pagination-arg-types';

const render = (args) => renderPagination({ pagination: paginationProps(args) });

export default {
  id: 'pagination',
  title: 'DSFR/Component/Pagination',
  render: render,
  argTypes: paginationArgTypes,
  args: paginationArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};
