import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class TableActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'TableActionee';
  }

  get label () {
    const caption = this.node.querySelector('caption');
    if (caption) return caption.textContent.trim();
    return 'Tableau';
  }

  get component () {
    return ID;
  }
}

export { TableActionee };
