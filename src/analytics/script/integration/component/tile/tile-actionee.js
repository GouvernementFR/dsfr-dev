import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { TileSelector } from './tile-selector';
import ID from './id';

class TileActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION);
    this.handlingClick = this.handleClick.bind(this);
  }

  static get instanceClassName () {
    return 'TileActionee';
  }

  init () {
    const link = this.node.querySelector(TileSelector.LINK);
    if (link) {
      this.link = link;
      this.detectInteraction(link);
      this.link.addEventListener('click', this.handlingClick, { capture: true });
    }
  }

  get label () {
    const tileTitle = this.node.querySelector(TileSelector.TITLE);
    if (tileTitle) return tileTitle.textContent.trim();

    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const headings = this.node.querySelector(selector) ? [...this.node.querySelector(selector)].filter(heading => (this.node.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) : [];
    if (headings.length) return headings[0].textContent.trim();

    return null;
  }

  get component () {
    return ID;
  }

  dispose () {
    if (this.link) this.link.removeEventListener('click', this.handlingClick, { capture: true });
    super.dispose();
  }
}

export { TileActionee };
