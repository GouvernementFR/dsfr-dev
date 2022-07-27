import api from '../../api.js';
import { PasswordEmission } from './password-emission.js';

class PasswordToggle extends api.core.Instance {
  static get instanceClassName () {
    return 'PasswordToggle';
  }

  init () {
    this.listen('click', this.toggle.bind(this));
    this.isSwappingFont = true;
    this.ascend(PasswordEmission.ADJUST, this.width);
    console.log('------------------', this.width);

    this._isChecked = this.isChecked;
    console.log('------------------', this._isChecked);
  }

  get width () {
    const style = getComputedStyle(this.node.parentNode);
    console.log(style);
    return parseInt(style.width);
  }

  get isChecked () {
    return this.node.checked;
  }

  set isChecked (value) {
    this._isChecked = value;
    this.ascend(PasswordEmission.TOGGLE, value);
    console.log('--------------ascend ----', value);
  }

  toggle () {
    this.isChecked = !this._isChecked;
    // this.node.checked = this.isChecked;
    console.log('------------------', this.isChecked);
  }

  swapFont (families) {
    this.ascend(PasswordEmission.ADJUST, this.width);
    console.log('------------------ascend', this.width);
  }
}

export { PasswordToggle };
