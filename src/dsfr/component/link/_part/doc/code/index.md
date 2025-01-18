---
title: Code du lien
---
# Lien

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant
Le composant Lien est un élément interactif permettant de naviguer vers une autre page ou section. Sa structure est la suivante :
- Le Lien est un élément HTML `<a>` défini par la classe `fr-link`.
- Son contenu est textuel, il doit indiquer clairement sa destination.

**Exemple de structure HTML**

```HTML
<a href="#" class="fr-link">
  Libellé lien
</a>
```

#### Lien externe

Lorsque le lien redirige vers un site externe, celui-ci doit s'ouvrir dans un nouvelle fenêtre. Pour cela, il convient d'ajouter l'attribut `target="blank"` ainsi qu'un attribut `title="[intitulé du lien à modifier] - nouvelle fenêtre"` pour indiquer au survol que la page s'ouvrira dans un nouvelle fenêtre.
L'ajout d'un attribut `rel="noopener external"` sera aussi recommandé pour des raisons de sécurité.

**Exemple de lien externe**

```HTML
<a href="#" target="_blank" rel="noopener external" title="Libellé lien - nouvelle fenêtre" class="fr-link">
  Libellé lien
</a>
```

#### Lien de téléchargement

La variante lien de téléchargement permet de télécharger un fichier.
- Il est formé par un élément HTML `<a>` défini par la classe `fr-link` et la classe `fr-link--download`.
- Son contenu est constitué de :
  - un texte commençant par "Télécharger ..."
  - les détails du fichier : un élément HTML `<span>` avec la classe `fr-link__detail` et décrivant le type, le poids, et la langue du fichier (si différente).

**Exemples de lien de téléchargement**
```HTML
<a download="true" href="image.jpg" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">JPG – 61,88 ko</span>
</a>
```

Dans le cas d'un fichier en langue étrangère, l'attribut `hreflang` avec le code langue doit être ajouté, et la langue doit être indiquée dans le détail.

```HTML
<a hreflang="en" download="true" href="exemple.pdf" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">PDF – 1,81 Mo - Anglais</span>
</a>
```

Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` (Voir section [Javascript](#javascript)).


#### Lien au fil du texte

Au sein d'un texte, ne pas utiliser le composant Lien. Préférer l'ajout d'un lien standard sans la classe `fr-link`, celui-ci reprend les caractéristiques typographiques du texte (font, couleur, taille) tout en étant souligné.

**Exemples de liens au fil du texte**
```HTML
<p>Lorem ipsum <a href="#">lien dans le texte</a> dolor sit amet</p>
```


#### Groupes de liens

Les liens peuvent être regroupés pour former des ensembles de navigation. Le groupe est formé par la succession de liens enveloppés par l'élément HTML `<div>` et la classe `fr-links-group`.

**Exemple de groupe de liens**

```HTML
<div class="fr-links-group">
    <a href="#" class="fr-link">
        Lien 1
    </a>
    <a href="#" class="fr-link">
        Lien 2
    </a>
</div>
```

---

### CSS

#### Installation

Pour fonctionner correctement, les styles CSS du core et des liens doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :
```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/link/link.legacy.min.css" rel="stylesheet">
```


#### Variantes de taille

Le lien peut avoir différentes tailles qui auront un impact sur la taille du texte et des icônes :
- `fr-link--xs` : Très petit lien.
- `fr-link--sm` : Petit lien.
- Par défaut : Lien moyen.
- `fr-link--lg` : Grand lien.

**Exemples de variantes de taille**

```HTML
<a href="#" class="fr-link fr-link--xs">
    Très petit lien
</a>
<a href="#" class="fr-link fr-link--sm">
    Petit lien
</a>
<a href="#" class="fr-link">
    Lien moyen
</a>
<a href="#" class="fr-link fr-link--lg">
    Grand lien
</a>
```

#### Variantes d'icônes

Le Lien peut avoir une icône juxtaposé, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../fondamentaux/icones/)).

Cette classe peut être associée à une **classe de positionnement** de l'icône :
- Par défaut : Icône seule, le libellé est caché.
- `fr-link--icon-left`: L'icône apparaît à gauche du libellé.
- `fr-link--icon-right`: L'icône apparaît à droite du libellé.

Dans le cas d'un groupe de boutons, le positionnement de l'icône des boutons peut être généralisé au niveau du groupe avec les classes `fr-links-group--icon-left` ou `fr-links-group--icon-right`.

**Exemples de variantes d'icônes**

```HTML
<a href="#" class="fr-link fr-icon-info-line fr-link--icon-left">
    Lien avec icône à gauche
</a>
<a href="#" class="fr-link fr-icon-info-line fr-link--icon-right">
    Lien avec icône à droite
</a>
<a href="#" class="fr-link fr-icon-info-line">
    Lien icône seule (non recommandé)
</a>
```

#### Variante Lien externe

L'attribut `target="blank"` amène l'ajout d'une icône "lien externe" à droite du lien. Si une icône à droite était ajoutée, l'icône "lien externe" prend le dessus.

#### Variante désactivé

Le style désactivé du Lien est appliqué par le retrait de l'attribut `href` sur l'élément `<a>`. Le Lien est alors grisé et les effets au survol et au clic sont retirés. Le pointeur de la souris prend la valeur "not-allowed" au survol du bouton ce qui change sont style.
Sur le Lien désactivé, l'attribut `role="link"` et `aria-disabled` seront nécessaires pour les technologies d'assistance.

#### Variantes du groupe de lien

Le groupe de bouton vient avec de nombreuses variations, telles que :
- **Taille des liens** : Des variations de taille sont accessibles au niveau du groupe avec les classes :
  - `fr-links-group--sm`: Groupe de liens SM
  - `fr-links-group--lg`: Groupe de liens LG
- **Positionnement des icônes des liens** : Les variations de position de l'icône des liens sont accessibles au niveau du groupe avec les classes :
  - `fr-links-group--icon-left` : Icône des liens à gauche
  - `fr-links-group--icon-right` : Icône des liens à droite
- **Groupe de liens horizontal** : Par défaut, le groupe de bouton positionne les liens les uns en dessous des autres sous forme de liste à puce. Les liens peuvent être placés en ligne par la classe `fr-links-group--inline` (avec passage à la ligne en cas de dépassement du conteneur)

**Exemple de groupe de lien**

```HTML
<ul class="fr-links-group fr-links-group--icon-left">
  <li>
    <a id="link-4612" href="#" class="fr-link fr-icon-info-line">Libellé lien 1</a>
  </li>
  <li>
    <a id="link-4613" href="#" class="fr-link fr-icon-success-line">Libellé lien 2</a>
  </li>
  <li>
    <a id="link-4614" href="#" class="fr-link fr-icon-warning-line">Libellé lien 3</a>
  </li>
</ul>
```

---

### JavaScript

Le composant lien **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **liens de téléchargement**.
Pour instancier le javascript de remplissage automatique du détail sur le lien de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien.
Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli.
Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

**Exemple**
<a data-fr-assess-file download="true" href="image.jpg" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">CE TEXTE EST REMPlACÉ</span>
</a>

#### Installation

Pour fonctionner, le **remplissage automatique du détail des liens de téléchargement** nécessite l'utilisation de JavaScript.
Cette fonctionnalité est disponible dans le core.

Il est donc nécessaire d'importer les fichiers js du core à la fin de la page (avant `</body>`) :
```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
```
<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :
```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### API

> [!NOTE]
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des liens de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.


---


### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclose+link+)

::dsfr-doc-changelog
