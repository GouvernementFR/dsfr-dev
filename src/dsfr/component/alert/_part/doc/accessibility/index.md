---
title: Accessibilité de l'Alerte
---
# Alerte

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le système d'alerte utilise les bonnes pratiques d'accessibilité pour les composants informatifs et suit les critères du RGAA.

### Interactions clavier

- `Tab` : Permet de naviguer vers l’alerte si elle contient des éléments interactifs (comme un bouton pour fermer ou un lien).
- `Entrer` ou `Espace` : Active l’élément focalisé à l’intérieur de l’alerte (par exemple, un bouton ou un lien).

### Règles d'accessibilités

- Une alerte ajouté dynamiquement, après le chargement de la page, doit être rendue automatiquement visible à l'utilisateur sans interaction. Pour ce faire :
  - L’alerte doit avoir un `role="alert"` pour signaler son importance aux technologies d’assistance.
  - Les alertes critiques peuvent utiliser `role="alertdialog"` si elles nécessitent une interaction utilisateur ou un retour explicite.
- Les alertes refermables doivent inclure un bouton clairement identifiable pour fermer l'alerte.
  - Le bouton de fermeture doit avoir un label explicite via un texte caché et un attribut `title`.
- Les alertes doivent être incluses dans un conteneur facilement identifiable visuellement et sémantiquement :
  - L'ajout d'attributs `aria-live=assertive` et `aria-atomic=true` n'est pas nécessaire car implicite avec le `role=alert`.
- Si l'alerte est temporaire (par exemple, affichée pendant quelques secondes), une alternative doit être disponible pour les utilisateurs ayant besoin de plus de temps pour lire son contenu.

### Contenu de l'alerte
- Le contenu de l'alerte doit être concis, lisible et ne pas contenir d'éléments non nécessaires susceptibles de distraire l'utilisateur.
- Le type d'alerte (info, error, success, warning) doit être indiqué textuellement dans le contenu de l'alerte par les termes : "information", "erreur", "succès", ou "attention".

### Références
- [https://www.w3.org/WAI/ARIA/apg/patterns/alert/](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)