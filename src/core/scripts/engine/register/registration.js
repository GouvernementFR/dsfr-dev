import { Collection } from '../../global/collection';
import state from '../state';

class Registration {
  constructor (selector, InstanceClass, creator) {
    this.selector = selector;
    this.InstanceClass = InstanceClass;
    this.creator = creator;
    this.instances = new Collection();
    this.isIntroduced = false;
    const name = this.InstanceClass.name;
    this._property = name.substring(0, 1).toLowerCase() + name.substring(1);
  }

  introduce () {
    if (this.isIntroduced) return;
    this.isIntroduced = true;
    state.getModule('observe').parse(document.documentElement, this);
  }

  parse (node, nonRecursive) {
    const nodes = [];
    if (node.matches && node.matches(this.selector)) nodes.push(node);
    // eslint-disable-next-line no-useless-call
    if (!nonRecursive && node.querySelectorAll && node.querySelector(this.selector)) nodes.push.apply(nodes, [...node.querySelectorAll(this.selector)]);
    return nodes;
  }

  create (element) {
    if (!element.node.matches(this.selector)) return;
    const instance = new this.InstanceClass();
    this.instances.add(instance);
    return instance;
  }

  remove (instance) {
    this.instances.remove(instance);
  }

  dispose () {
    console.log('dispose registration', this.selector, this.instances);
    const instances = this.instances.collection;
    for (let i = instances.length - 1; i > -1; i--) instances[i]._dispose();
    this.creator = null;
  }

  get property () {
    return this._property;
  }
}

export { Registration };
