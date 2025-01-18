---
title: Code de la mise en exergue
---
# Mise en exergue

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant
Le composant Mise en exergue permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
    - Doit avoir la classe `fr-highlight`.
2. Une zone de contenu pour le texte de la mise en exergue :
    - Représentée par un élément `<p>`.

**Exemple de structure HTML**

```HTML
<div class="fr-highlight">
    <p>Lorem [...] elit ut.</p>
</div>
```

---

### CSS

#### Installation

Pour fonctionner correctement, le style CSS de la mise en exergue et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/highlight/highlight.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/highlight/highlight.legacy.min.css" rel="stylesheet">
```

#### Styles du composant

##### Variantes de taille
Le texte de la mise en exergue peut être de différentes tailles :
- Par défaut en taille md.
- `fr-text--sm` : Petit texte.
- `fr-text--lg` : Grand texte.

**Exemple de texte de différentes tailles**

```HTML
<div class="fr-highlight">
  <p class="fr-text--lg">Lorem [...] elit ut.</p>
</div>
```

##### Accentuation
Le composant Mise en exergue est accentuable, permettant le changement de la couleur de la bordure latérale. Pour cela, ajouter la classe `fr-highlight--NOM-COULEUR` au même niveau que la classe `fr-highlight`.

**Exemple de structure accentuée**

```HTML
<div class="fr-highlight fr-highlight--green-emeraude">
    <p>Lorem [...] elit ut.</p>
</div>
```

### JavaScript

Le composant **Mise en exergue** ne nécessite pas de JavaScript spécifique pour fonctionner.


---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclose+highlight+)

::dsfr-doc-changelog