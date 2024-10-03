import { renderFieldset } from '../../../form/template/stories/fieldset';
import { radiosGroupProps } from './radios-group-arg-types';

const getDisplayBody = () => {
  return `<div id="fr-display" class="fr-display">${renderFieldset({ fieldset: radiosGroupProps() })}</div>`;
};

const displayArgTypes = {
  id: {
    control: 'text',
    description: 'Identifiant unique du paramètre d\'affichage',
    type: {
      value: 'string'
    }
  }
};

const displayArgs = {
  id: 'display'
};

const displayProps = (args) => {
  const display = {
    id: args.id || displayArgs.id,
    title: 'Paramètres d’affichage',
    size: 'sm',
    body: getDisplayBody()
  };

  return display;
};

export { displayArgTypes, displayArgs, displayProps };