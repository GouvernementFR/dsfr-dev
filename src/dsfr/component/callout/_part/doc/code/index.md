---
title: Code de la mise en avant
---
# Mise en avant

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant
Le composant Mise en avant permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
    - Doit avoir la classe `fr-callout`.
    - Peut avoir une classe `fr-icon-NOM-ICONE` pour ajouter une icône avant le titre.
2. Un titre pour la mise en avant :
    - Représenté par un élément `<hx>`, suivant le niveau d'entête voulu, avec la classe `fr-callout__title`.
3. Une zone de contenu pour le texte de la mise en avant :
    - Représentée par un élément `<p>` avec la classe `fr-callout__text`.
4. D'autres éléments facultatifs comme un lien ou un bouton.

**Exemple de structure HTML**

```HTML
<div class="fr-callout">
  <h3 class="fr-callout__title">Titre de la mise en avant</h3>
  <p class="fr-callout__text">Contenu de la mise en avant.</p>
  <button type="button" class="fr-btn">Libellé bouton</button>
</div>
```

---

### CSS

#### Installation

Pour fonctionner correctement, le style CSS de la mise en avant et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/callout/callout.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/callout/callout.legacy.min.css" rel="stylesheet">
```

#### Styles du composant

- **Ajout d'icône** : Le composant Mise en avant peut intégrer une icône, il suffit pour cela d'ajouter la classe `fr-icon-NOM-ICON` au même niveau que la classe `fr-callout`.
- **Accentuation** : Le composant est accentuable, permettant le changement de la couleur de fond et de la bordure latérale. Pour cela, ajouter la classe `fr-callout-NOM-COULEUR` au même niveau que la classe `fr-callout`. ex:
  ```HTML
  <div class="fr-callout fr-callout--green-emeraude">
  ```

### JavaScript

Le composant **Mise en avant** ne nécessite pas de JavaScript spécifique pour fonctionner.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclose+callout+)

::dsfr-doc-changelog