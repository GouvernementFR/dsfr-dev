---
title: Accessibilité du lien
---
# Lien

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::


## Accessibilité

Le composant **Lien** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le Lien :
- `Entrée` : Actionne le Lien.
  - Redirige vers la destination définie par l'attribut `href`.
  - Déplace le focus vers la page de destination.
  - Si le lien est en `target="_blank"`, ouvre la destination dans un nouvel onglet.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le lien doit avoir un attribut `href`. Le lien est un élément de navigation, il doit être utilisé uniquement pour cet usage.
- Le lien doit avoir un **libellé accessible**.
  - L’intitulé doit doit être explicite, c’est à dire exprimer clairement ce qui va se passer pour l’utilisateur et lui permettre de comprendre la destination ou la fonction du lien.
  - Éviter les intitulés non explicites. Les termes trop génériques, comme “Cliquez ici”, “En savoir plus”, “Lire la suite”, etc, ne permettent pas à l’utilisateur d’identifier la destination ou la fonction du lien. Si vraiment aucune alternative n’est possible , il est possible d’ajouter un attribut `title` ajoutant des éléments de compréhension à l’intitulé non explicite : `<a href=”…” title=”Lire la suite : comment faire ma demande de carte grise”>`.
  - De préférence utiliser un libellé court et direct, notamment lors de son usage hors du contenu.
  - Un lien peut être rendu explicite grâce à son contexte : [RGAA 4 : contexte du lien](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/glossaire/#contexte-du-lien)
  - Le nom accessible est calculé à partir de tout contenu textuel à l'intérieur du lien. Cependant, il peut également être fourni avec les attributs `aria-labelledby` ou `aria-label`.
- Les **liens externes** doivent :
  - S'ouvrir dans une nouvelle fenêtre via l'attribut `target="_blank"`.
  - Avoir la mention "nouvelle fenêtre" dans le `title` (ex : `title="libellé lien - nouvelle fenêtre"`).
  - Il est conseillé d'ajouter l'attribut `rel="noopener external"` par mesure de sécurité, empêchant le site externe de contrôler la page d'origine et ainsi prévenir d'éventuelles attaques par phishing si le navigateur n'est pas à jour.
- Le **lien de téléchargement** doit contenir la mention "Télécharger". Il doit aussi indiquer des informations sur le fichier dans la partie détail avec notamment le type ou l'extension du fichier, son poids, et sa langue si différente de la page.
- Si une **description** de la fonction du lien est présente, la lier au lien via un `aria-describedby` défini sur l'ID de l'élément contenant la description.
- Pour **désactiver** un Lien, retirer le `href` rendra le lien visuellement désactivé, mais il est nécessaire d'ajouter les attributs `role="link"` et `aria-disabled="true"` pour indiquer aux technologies d'assistance qu'il s'agit d'un lien désactivé.
- Limiter l'usage des **liens avec icône seule**. Ils peuvent être utilisés uniquement pour les actions récurrentes, et facilement identifiables (ex : le symbole chaîne représentant un hyperlink). Ce lien doit contenir un libellé, qui sera ainsi lu par les technologies d'assistance. L'attribut `title` reprenant l'intitulé du lien peut être ajouté pour permettre l'affichage d'une infobulle au survol.


> [!NOTE]
> Un lien est un élément qui permet aux utilisateurs de naviguer vers une autre page ou section. Éviter au maximum l'utilisation du style du Bouton pour déclencher une redirection. Il est important que l'apparence et le rôle d'un composant correspondent à la fonction qu'il fournit. Néanmoins, il arrive qu'un lien `<a href>` ait le style visuel d'un bouton mais effectuent l'action d'un lien. Dans ce cas, le contexte ou le libellé doit être suffisamment clair pour ne pas tromper l'utilisateur sur l'action. Cependant, une meilleure solution consiste souvent à ajuster la conception visuelle afin qu'elle corresponde à la fonction et au rôle ARIA.

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://www.w3.org/WAI/ARIA/apg/patterns/link/](https://www.w3.org/WAI/ARIA/apg/patterns/link/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)