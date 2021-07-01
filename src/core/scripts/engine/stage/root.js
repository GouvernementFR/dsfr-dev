import { Element } from './element';
import { ns } from '../../global/namespace';

class Root extends Element {
  constructor () {
    super(document.documentElement, 'root');
    this.node.setAttribute(ns.attr('js'), true);
  }
}

const RootSelector = {
  ROOT: ':root'
};

export { Root, RootSelector };
