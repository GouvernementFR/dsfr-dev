---
title: Accessibilité de la mise en avant
---
# Mise en avant

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::


## Accessibilité

Le composant **Mise en avant** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Aucune interaction clavier n'est liée au composant.
Lorsque qu'un composant interactif est utilisé à l'intérieur, comme un bouton ou un lien, les interactions clavier correspondent à celles de cet élément.

### Règles d'accessibilité

- Hiérarchisez et sélectionnez votre contenu, afin d’utiliser une ou deux mises en avant maximum par page, sinon elles attireront moins l’œil de l’utilisateur.
- Le niveau d'en-tête du titre dépend du contexte (et ne sera pas toujours un `<h3>`).
- La mise en avant est illustrative, toutefois, un attribut `aria-label` peut être utilisé sur le conteneur principal pour indiquer qu'il s'agit d'un texte en avant (ex: information importante).
- L'icône est illustrative et n'a pas nécessité à être retranscrite sur lecteur d'écran.

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)