---
title: Code du Badge
---
# Badge

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant
Le composant Badge est un élément visuel destiné à fournir des informations contextuelles ou des indicateurs d'état.
Sa structure est la suivante :
- Le Badge est un élément HTML `<p>` avec la classe `fr-badge`.
- Son contenu est textuel et doit être succinct (exemple : "Label badge").

**Exemple de structure HTML**

```HTML
<p class="fr-badge">Label badge</p>
```

---
### CSS

#### Installation

Pour fonctionner correctement, les styles CSS du core et des badges doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/badge/badge.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :
```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/badge/badge.legacy.min.css" rel="stylesheet">
```

#### Styles du composant

Le composant Badge propose des déclinaisons visuelles pour exprimer différents états contextuels ou tailles.

##### Variantes systèmes

Les badges systèmes peuvent avoir des styles définis pour différents status. Pour appliquer une variante système, ajoutez une des classes suivantes à l'élément `<p class="fr-badge">` :
- `fr-badge--info` : Indique une information.
- `fr-badge--warning` : Indique un avertissement.
- `fr-badge--error` : Indique une erreur.
- `fr-badge--success` : Indique un succès.
- `fr-badge--new` : Indique une nouveauté

Les badges système sont liés à une icône, celle-ci n'est pas modifiable mais peut être retirée, pour cela utilisez la classe : `fr-badge--no-icon`

**Exemples de badges systèmes**

```HTML
<p class="fr-badge fr-badge--info">Information</p>
<p class="fr-badge fr-badge--warning">Avertissement</p>
<p class="fr-badge fr-badge--error">Erreur</p>
<p class="fr-badge fr-badge--success">Succès</p>
<p class="fr-badge fr-badge--new">Nouveau</p>
```

##### Variantes d'accentuation

Les badges sont disponibles dans toutes les couleurs d'accentuation via la classe : `fr-badge--NOM-COULEUR`.
Retrouver la liste des couleurs d'accentuation sur la [page couleurs](TODO-lien-couleur).

**Exemples de badges systèmes**

```HTML
<p class="fr-badge fr-badge--yellow-moutarde">intitulé</p>
<p class="fr-badge fr-badge--green-menthe">intitulé</p>
```

##### Variantes de taille

Les badges peuvent être affichés dans deux tailles différentes. Par défaut, la taille standard est utilisée, mais il est possible d'ajouter la classe suivante pour ajuster la taille :
- `fr-badge--sm` : Petit badge.

**Exemples de tailles de badges**

```HTML
<p class="fr-badge fr-badge--sm">Petit badge</p>
<p class="fr-badge">Badge moyen</p>
```

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclose+badge+)

::dsfr-doc-changelog