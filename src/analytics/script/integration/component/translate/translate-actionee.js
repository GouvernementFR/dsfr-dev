import { ComponentActionee } from '../component-actionee';
import { TranslateSelector } from './translate-selector';
import { TranslateButtonActionee } from './translate-button-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class TranslateActionee extends ComponentActionee {
  constructor () {
    super(Type.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'TranslateActionee';
  }

  init () {
    this.register(`[aria-controls="${this.id}"]`, TranslateButtonActionee);
    this._instance = this.element.getInstance('Collapse');
    this.listenDisclose();
  }

  get label () {
    const translateBtn = this.node.querySelector(TranslateSelector.BTN);
    return translateBtn.getAttribute('title') || 'Sélecteur de langue';
  }

  get component () {
    return ID;
  }
}

export { TranslateActionee };