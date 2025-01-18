---
title: Actions d’interaction hors composant
---

### Actions d’interaction hors composant

Il est possible de remonter à Eulérian des actions effectuées sur des éléments HTML hors composants du DSFR.

Pour ajouter un écouteur d'événement il suffit d’ajouter un attribut `data-fr-analytics-{action}` sur la
balise
HTML concernée.

#### Exemples d’ajout d’une action

```html
<p>Envoyez un événement lors du clic sur
<span data-fr-analytics-click="label à remonter">ce texte</span>.
</p>
```

```html
<p>
Envoyez un événement lors du clic sur
<a href="http://url-externe" data-fr-analytics-click>ce lien externe</span>.
</p>
```

#### ActionType

Les différents types d’action sont définis dans : src/dsfr/analytics/script/analytics/action/type.js

Il existe les types d'actions suivants :

##### click

`data-fr-analytics-click`

Mode : [out] | type : _interaction_

Interaction générique du clic.

De manière automatique, le type de l'action approprié sera sélectionné :
* `DOWNLOAD` s'il s'agit d'un anchor avec href et attribut download
* `INTERNAL` s'il s'agit d'un anchor avec href qui pointe sur le même domaine
* `EXTERNAL` s'il s'agit d'un anchor avec href qui pointe sur un domaine différent
* `CLICK` dans les autres cas

* * *

##### internal

`data-fr-analytics-internal`

Mode : [out] | type : _interaction_

Clique vers un lien interne, une ancre.
⚠️ _Sauf cas spécifique, préférez l’utilisation de ‘click’_

* * *

##### external

`data-fr-analytics-external`

Mode : [out] | type : _interaction_

Clique vers un lien externe.
⚠️ _Sauf cas spécifique, préférez l’utilisation de ‘click’_

* * *

##### download

`data-fr-analytics-download`

Mode : [out] | type : _interaction_

Clique sur un lien téléchargeable.
⚠️ _Sauf cas spécifique, préférez l’utilisation de ‘click’_

* * *

##### double-click

`data-fr-analytics-dblclick`

Mode : [out] | type : _interaction_

Interaction générique du double-clic.

* * *

##### change

`data-fr-analytics-change`

Mode : [out] | type : _event_

Événement au changement d'état (ex: select).

* * *
