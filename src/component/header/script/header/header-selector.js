import api from '../../api.js';

export const HeaderSelector = {
  HEADER: api.internals.ns.selector('header'),
  TOOLS_LINKS: api.internals.ns.selector('header__tools-links'),
  MENU_LINKS: api.internals.ns.selector('header__menu-links'),
  LINKS: `${api.internals.ns.selector('header__tools-links')} ${api.internals.ns.selector('btns-group')}`,
  MODALS: `${api.internals.ns.selector('header__search')}${api.internals.ns.selector('modal')}, ${api.internals.ns.selector('header__menu')}${api.internals.ns.selector('modal')}`
};
