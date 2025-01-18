---
title: Code du bouton
---
# Bouton

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant
Le composant Bouton est un élément interactif permettant de déclencher des actions. Sa structure est la suivante :
- Le Bouton est un élément HTML `<button>` défini par la classe `fr-btn`.
- Son contenu est textuel, il doit être succinct et indiquer clairement son action.

**Exemple de structure HTML**

```HTML
<button class="fr-btn">
    Libellé bouton
</button>
```


#### Groupes de boutons
Les boutons peuvent être regroupés pour former des ensembles d'actions. Le groupe est formé par la succession de boutons enveloppés par l'élément HTML `<div>` et la classe `fr-btns-group`.
Un groupe est dit **hiérarchisé** s'il dispose d'un bouton primaire et de boutons secondaires. Sauf cas exceptionnel, n'utiliser qu'un seul bouton primaire dans un groupe. Un groupe **non hiérarchisé** est lui constitué uniquement de boutons secondaires, tertiaires, et/ou tertiaires sans contours.

**Exemple de groupe de boutons**

```HTML
<div class="fr-btns-group">
    <button class="fr-btn">
        Bouton 1
    </button>
    <button class="fr-btn fr-btn--secondary">
        Bouton 2
    </button>
</div>
```

---

### CSS

#### Installation

Pour fonctionner correctement, les styles CSS du core et des boutons doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :
```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/button/button.legacy.min.css" rel="stylesheet">
```

#### Variantes de style

Le bouton peut avoir différents styles définis par les classes :
- Par défaut : Bouton primaire.
- `fr-btn--secondary` : Bouton secondaire.
- `fr-btn--tertiary` : Bouton tertiaire.
- `fr-btn--tertiary-no-outline` : Bouton tertiaire sans contour.

**Exemples de variantes de style**

```HTML
<button class="fr-btn">
    Bouton primaire
</button>
<button class="fr-btn fr-btn--secondary">
    Bouton secondaire
</button>
<button class="fr-btn fr-btn--tertiary">
    Bouton tertiaire
</button>
<button class="fr-btn fr-btn--tertiary-no-outline">
    Bouton tertiaire sans contour
</button>
```

#### Variantes de taille
Le Bouton peut avoir différentes tailles qui auront un impacte sur la taille du texte, de l'icône, et des espacements :
- `fr-btn--sm` : Petit bouton.
- Par défaut : Bouton moyen.
- `fr-btn--lg` : Grand bouton.

Dans le cas d'un groupe de boutons, la taille des boutons peut être généralisé au niveau du groupe avec les classes `fr-btns-group--sm` ou `fr-btns-group--lg`.

**Exemples de variantes de taille**

```HTML
<button class="fr-btn fr-btn--sm">
    Petit bouton
</button>
<button class="fr-btn">
    Bouton moyen
</button>
<button class="fr-btn fr-btn--lg">
    Grand bouton
</button>
```

#### Variantes d'icônes
Le Bouton peut avoir une icône à l'intérieur, elle est ajoutée via la classe utilitaire d'icône `fr-icon--NOM-ICONE` (voir [Icônes](../../fondamentaux/icones/)).

Cette classe peut être associée à une classe de positionnement de l'icône :
- Par défaut : Icône seule, le libellé est caché.
- `fr-btn--icon-left`: L'icône apparaît à gauche du libellé.
- `fr-btn--icon-right`: L'icône apparaît à droite du libellé.

Dans le cas d'un groupe de boutons, le positionnement de l'icône des boutons peut être généralisé au niveau du groupe avec les classes `fr-btns-group--icon-left` ou `fr-btns-group--icon-right`.


#### Variante désactivé

Le style désactivé du bouton est appliqué par l'ajout de l'attribut `disabled` sur l'élément `<button>`. Le bouton est alors grisé et les effets au survol et au clic sont retirés. Le pointeur de la souris prend la valeur "not-allowed" au survol du bouton ce qui change sont style.

#### Variantes du groupe de bouton

Le groupe de bouton vient avec de nombreuses variations, telles que :
- **Taille des boutons** : Les variations de taille sont accessibles au niveau du groupe avec les classes :
  - `fr-btns-group--sm`: Groupe de boutons SM
  - `fr-btns-group--lg`: Groupe de boutons LG
- **Positionnement des icônes des boutons** : Les variations de position de l'icône des boutons sont accessibles au niveau du groupe avec les classes :
  - `fr-btns-group--icon-left` : Icône des boutons à gauche
  - `fr-btns-group--icon-right` : Icône des boutons à droite
- **Alignement des boutons** : Les boutons d'un groupe sont, par défaut, alignés à gauche. Cet alignement peut être modifié par les classes suivantes :
  - `fr-btns-group--right`: Aligne les boutons à droite
  - `fr-btns-group--center` : Aligne les boutons au centre
- **Groupe de boutons horizontal** : Par défaut, le groupe de bouton positionne les boutons les uns en dessous des autres. Les boutons peuvent être placés en ligne par les classes suivantes :
  - `fr-btns-group--inline` : Aligne toujours les boutons horizontalement (avec passage à la ligne en cas de dépassement du conteneur)
  - `fr-btns-group--inline-sm` : Aligne les boutons horizontalement uniquement à partir du breakpoint SM (576px)
  - `fr-btns-group--inline-md` : Aligne les boutons horizontalement uniquement à partir du breakpoint MD (768px)
  - `fr-btns-group--inline-lg` : Aligne les boutons horizontalement uniquement à partir du breakpoint LG (992px)
- **Inversion du positionnement** : L'ordre des boutons peut être inversé lorsqu'ils sont alignés horizontalement. Il est donc possible d'associer une des classes au dessus avec la classe `fr-btns-group--inline-reverse`. L'ordre par défaut, et en alignement vertical, correspond à l'ordre des boutons dans le DOM.
- **Taille des boutons équivalente** : La classe `fr-btns-group--equisized`, grâce au javascript du bouton, ajuste la largeur des boutons du groupe à celle du bouton le plus large. Cela permet d'égaliser la taille des boutons.

Toutes ces classes peuvent être combinées entre elles.

---

### JavaScript

Le composant bouton nécessite l'utilisation de JavaScript uniquement dans le cas de l'utilisation d'une fonctionnalité avancée : **les groupes de boutons "equisized"**. Cette fonctionnalité permet de d'adapter automatiquement la taille des boutons d'un groupe à celle du bouton le plus large.
**En dehors de cette fonctionnalité l'inclusion du JS du bouton n'est pas utile.**

#### Installation

Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :
```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/button/button.module.min.js"></script>
```
<small>NB: Il est aussi possible d'importer le JS global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :
```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/button/button.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, la classe `fr-btn--equisized` fonctionne automatiquement.

#### Instances

Sur le bouton, les éléments suivants sont instanciés :
- Le groupe de boutons, via la classe : `btns-group--equisized`
- Les boutons, dans un groupe "equisized", via la classe : `fr-btn`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### equisizedsGroup

> [!NOTE]
> L'activation ou la désactivation de la fonction equisize n'est pas disponible en JS, elle se fait via l'ajout ou le retrait de la classe `fr-btns-group--equisized` sur le groupe.

:::dsfr-doc-table{valign=top scroll=false}
| node | |
|------|-----|
| Description | Renvoie le noeud HTML de l'élément. |
| Type | property |
| Retour | DOMElement |
| Exemple | `dsfr(btnGroup).equisizedsGroup.node` |
:::

###### equisized

:::dsfr-doc-table{valign=top scroll=false}
| node | |
|------|-----|
| Description | Renvoie le noeud HTML de l'élément. |
| Type | property |
| Retour | DOMElement |
| Exemple | `dsfr(btn).equisized.node` |
:::

### Note de version

- [Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclose+button+)

::dsfr-doc-changelog

