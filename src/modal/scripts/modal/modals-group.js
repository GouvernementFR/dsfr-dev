import api from '../../api.js';
import { FocusTrap } from './focus-trap.js';

class ModalsGroup extends api.core.DisclosuresGroup {
  constructor () {
    super('Modal', false);
    this.trap = new FocusTrap();
  }

  apply (value, initial) {
    super.apply(value, initial);
    if (this.current === null) this.trap.untrap();
    else this.trap.trap(this.current.element);
  }
}

export { ModalsGroup };
