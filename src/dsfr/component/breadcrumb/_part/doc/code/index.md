---
title: Code du fil d'Ariane
---
# Fil d'Ariane

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::
### HTML

#### Structure du composant
Le composant Fil d’Ariane permet aux utilisateurs de comprendre leur position dans la hiérarchie d’un site. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<nav>` :
    - Doit avoir l’attribut `role="navigation"` pour indiquer sa fonction.
    - Utilise l’attribut `aria-label` pour fournir une description contextuelle, par exemple `aria-label="vous êtes ici :"`.
2. Un bouton d’affichage en mobile :
    - Représenté par un élément `<button>` avec la classe `fr-breadcrumb__button`.
    - Possède les attributs :
      - `aria-expanded` [true|false] pour indiquer si le fil d’Ariane est visible ou non.
      - `aria-controls` pour relier le bouton à l’élément `<div>` qui contient le fil d’Ariane.
3. Une zone de contenu avec le fil d’Ariane :
    - Représentée par une `<div>` avec la classe `fr-collapse`.
    - Doit inclure un identifiant unique (ex. `id="breadcrumb-1"`) pour être lié au bouton.
4. Une liste ordonnée `<ol>` avec la classe `fr-breadcrumb__list`, contenant les éléments du fil d’Ariane :
    - Chaque segment est un élément `<li>` :
      - Les segments avec des liens utilisent une balise `<a>` avec la classe `fr-breadcrumb__link`.
      - Le segment actuel utilise `aria-current="page"` pour indiquer la page courante.

**Exemple de structure HTML**

```HTML
<nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
    <button class="fr-breadcrumb__button" aria-expanded="false" aria-controls="breadcrumb-1">
        Voir le fil d’Ariane
    </button>
    <div class="fr-collapse" id="breadcrumb-1">
        <ol class="fr-breadcrumb__list">
            <li>
                <a class="fr-breadcrumb__link" href="#/">Accueil</a>
            </li>
            <li>
                <a class="fr-breadcrumb__link" href="#/segment-1/">Segment 1</a>
            </li>
            <li>
                <a class="fr-breadcrumb__link" href="#/segment-1/segment-2/">Segment 2</a>
            </li>
            <li>
                <a class="fr-breadcrumb__link" aria-current="page">Page Actuelle</a>
            </li>
        </ol>
    </div>
</nav>
```

#### Comportement en mobile
- En affichage mobile, seul le bouton avec la classe `fr-breadcrumb__button` est visible par défaut.
- Lors d’un clic sur ce bouton :
  - L’attribut `aria-expanded` passe de `false` à `true`.
  - La `<div>` avec la classe `fr-collapse` devient visible, affichant le contenu du fil d’Ariane.

---

### CSS

#### Installation

Pour fonctionner correctement, le style CSS du fil d’Ariane et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/breadcrumb/breadcrumb.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/breadcrumb/breadcrumb.legacy.min.css" rel="stylesheet">
```

#### Styles du composant

- **Affichage par défaut** : Le fil d’Ariane est masqué sur mobile, seul le bouton est visible.
- **Affichage étendu** : Lorsque l’attribut `aria-expanded` du bouton est à `true`, la classe `fr-collapse--expanded` est ajoutée au conteneur `<div>` pour le rendre visible.

---

### JavaScript

#### Installation

Le composant **Fil d’Ariane** nécessite JavaScript pour gérer son fonctionnement en mode mobile. Il repose sur le core JS du DSFR.

Les fichiers nécessaires doivent être inclus avant la balise de fermeture `</body>` :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/breadcrumb/breadcrumb.module.min.js"></script>
```

<small>NB : Pour un import global, vous pouvez utiliser le fichier `dsfr.module.js`.</small>

Pour la compatibilité avec Internet Explorer 11, les versions legacy en ES5 peuvent être ajoutées :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/breadcrumb/breadcrumb.nomodule.min.js"></script>
```

#### Fonctionnement

1. **Initialisation automatique** : Une fois le JavaScript chargé, le composant fonctionne sans configuration supplémentaire.
2. **Interaction mobile** :
   - Lorsqu’un utilisateur clique sur le bouton du fil d’Ariane :
     - L’attribut `aria-expanded` du bouton est mis à jour.
     - Le conteneur avec la classe `fr-collapse` passe à l’état visible (ajout de la classe `fr-collapse--expanded`).
3. **Attributs ajoutés** :
   - Chaque élément du composant est marqué avec un attribut `data-fr-js-*` pour indiquer son instanciation par le JavaScript DSFR.

#### API

L’API du composant **Fil d’Ariane** permet de manipuler ses comportements via JavaScript. Elle est accessible par la méthode `window.dsfr(instance)`.

##### Propriétés et méthodes disponibles

##### breadcrumb

:::dsfr-doc-table{valign=top scroll=false}
| disclose | |
|-------|----------------|
| Description | Ouvre le fil d’Ariane. |
| Type | function |
| Arguments | Aucun |
| Retour | Aucun |
| Exemple | dsfr(breadcrumb).breadcrumb.disclose() |
:::

:::dsfr-doc-table{valign=top scroll=false}
| node | |
|-------|----------------|
| Description | Retourne le nœud HTML de l'élément `<nav>`. |
| Type | property |
| Retour | DOMElement |
| Exemple | dsfr(breadcrumb).breadcrumb.node |
:::

##### collapseButton

:::dsfr-doc-table{valign=top scroll=false}
| focus | |
|-------|----------------|
| Description | Replace le focus sur le bouton. |
| Type | function |
| Arguments | Aucun |
| Retour | Aucun |
| Exemple | dsfr(breadcrumbButton).breadcrumbButton.focus() |
:::

:::dsfr-doc-table{valign=top scroll=false}
| node | |
|-------|----------------|
| Description | Retourne le nœud HTML correspondant au bouton. |
| Type | property |
| Retour | DOMElement |
| Exemple | dsfr(breadcrumbButton).breadcrumbButton.node |
:::



###### collapse

:::dsfr-doc-table{valign=top scroll=false}
| conceal | |
|:-----|:-----|
| Description | Ferme le collapse |
| Type | function |
| Arguments | none |
| Retour | none |
| Exemple | `dsfr(elem).collapse.conceal()` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| disclose | |
|:-----|:-----|
| Description | Ouvre le collapse |
| Type | function |
| Arguments | none |
| Retour | none |
| Exemple | `dsfr(elem).collapse.disclose()` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| isDisclosed | |
|:-----|:-----|
| Description | Retourne vrai si le collapse est ouvert |
| Type | property |
| Retour | Boolean |
| Exemple | `dsfr(elem).collapse.isDisclosed` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| isEnabled | |
|------|-----|
| Description | Défini si le fonctionnement du collapse est activé ou non |
| Type | property |
| Retour | true \| false |
| Exemple | `dsfr(elem).collapse.isEnabled = false` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| buttons | |
|:-----|:-----|
| Description | Retourne un tableau de boutons d'ouverture du collapse |
| Type | property |
| Retour | Array |
| Exemple | `dsfr(elem).collapse.buttons` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| focus | |
|:------|:-----|
| Description | Replace le focus sur le bouton du collapse |
| Type | function |
| Arguments | none |
| Retour | true \| false |
| Exemple | `dsfr(elem).collapse.focus()` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| parent | |
|:-----|:-----|
| Description | Retourne l'instance du dsfr parent, ici le breadcrumb |
| Type | property |
| Retour | object \| null |
| Exemple | `dsfr(elem).parent` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| children | |
|:-----|:-----|
| Description | Renvoie un tableau d'instances enfants |
| Type | property |
| Retour | Array |
| Exemple | `dsfr(elem).children` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| node | |
|------|-----|
| Description | Renvoie le noeud HTML de l'élément. |
| Type | property |
| Retour | DOMElement |
| Exemple | `dsfr(elem).collapse.node` |
:::

---

### Notes de version

- [Voir les évolutions sur GitHub](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+breadcrumb)

::dsfr-doc-changelog