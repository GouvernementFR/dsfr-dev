import { ComponentActionee } from '../component-actionee';
import api from '../../../../api.js';
import ID from './id';

class InputActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'InputActionee';
  }

  init () {
    this.setImpressionType();
    this._input = this.querySelector(api.internals.ns.selector('input'));
    this._label = this.querySelector(api.internals.ns.selector('label'));
    this._inputWrap = this.querySelector(api.internals.ns.selector('input-wrap'));

    if (this._inputWrap) this.listenInputValidation(this._inputWrap);
  }

  get label () {
    if (this._label) return this.getFirstText(this._label);

    return 'Champ de saisie';
  }

  get component () {
    return ID;
  }
}

export { InputActionee };