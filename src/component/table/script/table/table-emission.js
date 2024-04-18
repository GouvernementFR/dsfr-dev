import api from '../../api.js';

export const TableEmission = {
  SCROLLABLE: api.internals.ns.emission('table', 'scrollable'),
  CHANGE: api.internals.ns.emission('table', 'change'),
  TABLE_HEIGHT: api.internals.ns.emission('table', 'tableheight'),
  CAPTION_HEIGHT: api.internals.ns.emission('table', 'captionheight'),
  CAPTION_WIDTH: api.internals.ns.emission('table', 'captionwidth'),
  ROW_SELECT: api.internals.ns.emission('table', 'rowselect'),
  COL_SELECT: api.internals.ns.emission('table', 'colselect'),
  COL_HOVER: api.internals.ns.emission('table', 'colhover')
};
