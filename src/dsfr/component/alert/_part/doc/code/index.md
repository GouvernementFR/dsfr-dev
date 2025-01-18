---
title: Code de l'Alerte
---
# Alerte

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant
Le composant Alerte est utilisé pour afficher des messages contextuels comme des informations, avertissements, erreurs ou succès. Il est composé de trois éléments principaux :
- Un conteneur principal de type `<div>` avec la classe `fr-alert`, représentant l'alerte elle-même.
- Un titre facultatif contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hérarchie dans la page (par défaut h3), avec la classe `fr-alert__title`, qui décrit la nature du message.
- Un paragraphe `<p>` qui contient le texte du message.
- Un bouton de fermeture facultatif `<button>` de type "button" pour permettre à l'utilisateur de fermer l'alerte. Ce bouton doit être lié à une fonction JavaScript pour supprimer l'alerte du DOM lorsqu'il est cliqué.

Le composant Alerte utilise des classes spécifiques pour définir son type (info, warning, error, success) et sa taille (sm, md).

**Exemple de structure HTML**

```HTML
<div id="alert-1079" class="fr-alert">
  <h3 class="fr-alert__title">Titre de l'alerte</h3>
  <p>Description de l'alerte</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
</div>
```


#### Déclinaisons d'alertes

Le composant "Alerte" propose plusieurs variations en fonction du type de message :
- **info** : pour les messages d'information
- **warning** : pour les messages d'avertissement
- **error** : pour les messages d'erreur
- **success** : pour les messages de succès

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :
- `fr-alert--info`
- `fr-alert--warning`
- `fr-alert--error`
- `fr-alert--success`

**Exemple de structure HTML avec des déclinaisons**

```HTML
<div id="alert-1080" class="fr-alert fr-alert--error">
  <h3 class="fr-alert__title">Erreur critique</h3>
  <p>Une erreur est survenue, veuillez réessayer plus tard.</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
</div>
```

#### Taille des alertes

Le composant Alerte peut être utilisé avec différentes tailles :
- **SM** (small) : pour les alertes petites
- **MD** (medium) : pour les alertes de taille normale (par défaut)

Les tailles sont définies par l'ajout des classes :
- Par défaut, les alertes sont de taille moyenne
- `fr-alert--sm` pour les alertes petites

**Exemple de structure HTML avec taille SM**
```HTML
<div id="alert-1081" class="fr-alert fr-alert--success fr-alert--sm">
  <h3 class="fr-alert__title">Succès</h3>
  <p>Votre demande a été traitée avec succès.</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
</div>
```

---
### CSS

#### Installation

Pour garantir le bon affichage de l'alerte et de ses variations, le style CSS de ce composant doit être importé. L'import doit se faire avant le contenu de la page, dans la partie `<head>`, de préférence avec le fichier minifié pour une meilleure performance.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/alert/alert.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :
```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/alert/alert.legacy.min.css" rel="stylesheet">
````

#### Styles du composant

L'alerte dispose des variations visuelles suivantes en fonction du type de message :
- `fr-alert--info` : pour un message informatif (bleu)
- `fr-alert--warning` : pour un message d'avertissement (jaune)
- `fr-alert--error` : pour un message d'erreur (rouge)
- `fr-alert--success` : pour un message de succès (vert)

Chaque type d'alerte se distingue par une couleur de fond et une icône spécifique.

Les tailles d'alerte sont définies par :
- `fr-alert--sm` pour les alertes petites, qui ont une hauteur réduite et un espacement intérieur plus petit.
- La taille est médium par défaut.

---
### JavaScript

Le composant "Alerte" nécessite un JavaScript minimal pour la gestion de la fermeture de l'alerte. En cliquant sur le bouton de fermeture, l'alerte est retirée du DOM grâce à un événement JavaScript. Le DSFR ne gère pas cette fonctionnalité car trop dépendant de la technologie utilisée.

#### Fermeture de l'alerte

Le bouton de fermeture doit être lié à une fonction JavaScript pour supprimer l'alerte du DOM. Voici un exemple de code en javascript vanilla pour gérer la suppression de l'alerte :

```HTML
document.querySelector('.fr-alert__close').addEventListener('click', function() {
  this.closest('.fr-alert').remove();
});
```

Dans l'exemple HTML fourni, cette fonction est déjà intégrée directement dans l'attribut `onclick` du bouton de fermeture.


---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclose+alert+)

::dsfr-doc-changelog