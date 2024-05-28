import api from '../../api.js';

export const TableSelector = {
  TABLE: api.internals.ns.selector('table'),
  SHADOW: api.internals.ns.selector('table__shadow'),
  SHADOW_LEFT: api.internals.ns.selector('table__shadow--left'),
  SHADOW_RIGHT: api.internals.ns.selector('table__shadow--right'),
  ELEMENT: [`${api.internals.ns.selector('table')}:not(${api.internals.ns.selector('table--no-scroll')}) table`, `${api.internals.ns.selector('table')} ${api.internals.ns.selector('table__container')}`],
  CAPTION: `${api.internals.ns.selector('table')} table caption`,
  ROW: `${api.internals.ns.selector('table')} tbody tr`,
  COL: `${api.internals.ns.selector('table')} thead th`
};
