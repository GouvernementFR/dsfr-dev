---
title: Accessibilité du badge
---
# Badge

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Anatomie](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::


## Accessibilité

Le composant Badge est conçu pour respecter les critères du RGAA et les bonnes pratiques d'accessibilité.

### Règles d'accessibilité

- Les badges doivent être utilisés pour fournir des informations complémentaires ou contextuelles sans représenter une information essentielle à elle seule.
- Le contenu textuel du badge doit être clair, concis et compréhensible.
- Éviter l’utilisation de lettre capitale (préférer l’ajout d’une classe css).
- Toujours utiliser la balise `<p>`, ou un `<span>` si celui-ci est à l'intérieur d'un `<p>`.
- La couleur du badge doit être accompagnées d’un contraste suffisant par rapport à son arrière-plan (au moins 4.5:1, selon le WCAG).
- Le Badge ne doit pas être utilisé comme élément interactif. Si une action est attendue, un autre composant interactif doit être préféré (exemple : bouton, lien, tag).
- Si un badge est utilisé pour indiquer un état important ou une alerte, cet état doit être communiqué autrement que visuellement (par exemple, via un texte ou un attribut ARIA dans le contexte environnant).

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)