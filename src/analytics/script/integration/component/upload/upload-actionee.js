import { ComponentActionee } from '../component-actionee';
// import api from '../../../../api.js';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class UploadActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'UploadActionee';
  }

  init () {
    // this._label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    // if (this._label) return this._label.textContent.trim();
    return 'Ajout de fichier';
  }

  getData () {
    return { component_value: this.node.value.trim() };
  }

  get component () {
    return ID;
  }
}

export { UploadActionee };