---
title: Accessibilité du bouton
---
# Bouton

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::


## Accessibilité

Le composant **Bouton** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le Bouton :
- `Entrée` ou `Espace` : Actionne le Bouton.
  - Le focus reste généralement sur le bouton après l'activation.
  - Si l'activation du bouton ouvre une boîte de dialogue, le focus se déplace à l'intérieur de la boîte de dialogue. (voir [Modal](../../modal/)).
  - Si l'activation du bouton ferme une boîte de dialogue, le focus revient généralement sur le bouton qui a ouvert la boîte de dialogue, sauf si la fonction exécutée dans le contexte de la boîte de dialogue mène logiquement à un autre élément.
  - Si l'action du bouton indique un changement de contexte, comme passer à l'étape suivante ou ajouter un autre critère de recherche, il est souvent approprié de déplacer le focus vers le point de départ de cette action.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + tab` : Place le focus sur l'élément focalisable précédent.


### Règles d'accessibilité

- Le bouton doit avoir un attribut `type`, généralement `type=button`. Par défaut, le type est `submit` ce qui peut avoir un comportement non désiré lorsque le bouton est placé dans un formulaire.
- Le bouton doit avoir un **libellé accessible**. Le nom accessible est calculé à partir de tout contenu textuel à l'intérieur du bouton. Cependant, il peut également être fourni avec les attributs `aria-labelledby` ou `aria-label`.
- Si une description de la fonction du bouton est présente, la lier au bouton via un `aria-describedby` défini sur l'ID de l'élément contenant la description.
- Si le bouton contrôle l'ouverture d'un élément, comme une modale, l'attribut `aria-controls` défini sur l'ID de l'élément contrôlé doit être présent.
- Si le bouton est **désactivé**, l'attribut `disabled` suffit à le signaler aux technologies d'assistance. Dans le cas d'un lien `<a href>` utilisant le style d'un Bouton, retirer le href rendra le bouton visuellement désactivé, mais il est nécessaire d'ajouter les attributs `role="link"` et `aria-disabled="true"` pour indiquer aux technologies d'assistance qu'il s'agit d'un lien désactivé.
- Limiter l'usage des **boutons avec icône seule**. Ils peuvent être utilisés uniquement pour les actions récurrentes, et facilement identifiable (ex : engrenage pour les paramètres ou loupe pour la recherche). Ce button doit contenir un libellé, qui sera ainsi lu par les technologies d'assistance. L'attribut `title` reprenant l'intitulé du bouton peut être ajouté pour permettre l'affichage d'une infobulle au survol.


> [!NOTE]
> Un bouton est un widget qui permet aux utilisateurs de déclencher une action ou un événement, généralement en javascript, ou nativement en fonction du `type` du bouton, pour l'envoi d'un formulaire (submit) ou la suppression du contenu des champs de formulaire (reset). Éviter au maximum l'utilisation du style du Bouton pour rediriger vers une autre page. Il est important que l'apparence et le rôle d'un composant correspondent à la fonction qu'il fournit. Néanmoins, il arrive qu'un lien `<a href>` ait le style visuel d'un Bouton mais effectuent l'action d'un lien. Dans ce cas, le contexte ou le libellé doit être suffisamment clair pour ne pas tromper l'utilisateur sur l'action. Cependant, une meilleure solution consiste souvent à ajuster la conception visuelle afin qu'elle corresponde à la fonction et au rôle ARIA.

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://www.w3.org/WAI/ARIA/apg/patterns/button/](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)