---
title: Class Analytics
---

## class Analytics

L’instance d’Analytics est accessible depuis `window.dsfr.analytics`

### PROPRIÉTÉS

##### page

_Page_

`window.dsfr.analytics.page`

Getter qui retourne l’instance de [Page](../page/index.md)

* * *

##### site

_Site_

`window.dsfr.analytics.site`

Getter qui retourne l’instance de [Site](../site/index.md)

* * *

##### user

_User_

`window.dsfr.analytics.user`

Getter qui retourne l’instance de [User](../user/index.md)

* * *


##### search

_Search_

`window.dsfr.analytics.search`

Getter qui retourne l’instance de [Search](../search/index.md)

* * *

##### funnel :

_Funnel_

`window.dsfr.analytics.funnel`

Getter qui retourne l’instance de [Funnel](../funnel/index.md)

* * *

##### cmp

_ConsentManagerPlatform_

`window.dsfr.analytics.cmp`

Getter qui retourne l’instance de [ConsentManagerPlatform](../../installation/cmp/index.md)

* * *

##### opt

_Opt_

`window.dsfr.analytics.opt`

Getter qui retourne l’instance de [Opt](../../installation/opt/index.md)

##### isReady

_Boolean_

`window.dsfr.analytics.isReady`

Getter qui retourne l'état de l'API, à savoir `true` quand elle est prête à être utilisée.

* * *

##### readiness

_Promise_

`window.dsfr.analytics.readiness`

Getter qui retourne une Promise permettant de se synchroniser sur l'API, lorsque celle-ci est prête à être utilisée.

    window.dsfr.analytics.readiness.then(() => { // start }, () => { // error } );

* * *

##### collection

_String_

`window.dsfr.analytics.collection`

Getter qui retourne le mode de récolte des données de la page. Défini dans la configuration (voir propriété `collection` de la [configuration](../../installation/configuration/index.md#collection))

* `manual` : Les données de pages ne sont pas envoyées. Attend l’execution de la fonction `collect()`.

* `load` : Les données de page sont envoyées automatiquement au chargement de la page. (par défaut)

* `full` : Les données sont envoyées à chaque changement de path dans l’URL, permettant le support des “Single-page
  application” (par défaut si dsfr en mode ‘vue’, ‘react’ ou ‘angular’)

* `hash` : Les données sont envoyées à chaque changement de hash dans l'URL

* * *

##### isActionEnabled

_Boolean_ ou _String_

`window.dsfr.analytics.isActionEnabled`

Permet d’activer / désactiver la mesure d'audience des actions au niveau global.

* Par défaut, la mesure d'audience des actions est désactivée.
* Si la valeur est `true` : la mesure d'audience des actions est activée.
* Si la valeur est `false` : la mesure d'audience des actions est désactivée.
* Si la valeur est `reduce` : la mesure d'audience des actions est activée uniquement sur les éléments ayant l'attribut `data-fr-analytics-action`. (voir [Activer les actions](../actions.md#Activer les actions))

Défini dans la configuration (voir propriété `isActionEnabled` de la [configuration](../../installation/configuration/index.md))
Voir [Activer les actions](../../actions/index.md#Activer-les-actions) pour plus d'informations sur l'activation ou la désactivation des actions au cas par cas.

* * *

##### isDebugging

_Boolean_

`window.dsfr.analytics.isDebugging`

Permet d’activer / désactiver le debug Eulerian.

⚠️ le debug Eulerian reste persistant sur la page par le biais du LocalStorage jusqu'à désactivation.

* * *

### MÉTHODES

##### push (type, layer)

`window.dsfr.analytics.push(type, layer)`

Alias de la fonction EA\_push d’Eulerian via le package. (voir doc Eulerian [https://eulerian.wiki/doku.php?id=fr:quickonboarding:installation:tag\_installation\_guide#types\_d\_appels](https://eulerian.wiki/doku.php?id=fr:quickonboarding:installation:tag_installation_guide#types_d_appels))

* * *

##### reset (clear = false)

`window.dsfr.analytics.reset(clear)`

Permet de remettre les données dans l'état d’origine de la configuration.

Si le paramètre `clear = true` => toutes les données sont remises en état indéfini.

* * *

###### collect {#collect}

`window.dsfr.analytics.collect()`

Envoie au collector le datalayer constitué par l’ensemble des données consolidées depuis :

* Page

* Site

* User

* Search

* Funnel

* * *

### USAGE

> [!NOTE]
> Le package Analytics repose sur 2 principes de fonctionnement pour traquer les pages :
> * Par le biais de la configuration, il est possible de définir toutes les données qui seront envoyées au chargement de la page (via le mode automatique)
> * Par le biais de l’API, on peut définir toutes les données propriété par propriété pour ensuite envoyer l’ensemble grâce à la méthode **collect**


```javascript
dsfr.analytics.readiness.then(() => { // l'API analytics est prête à l'utilisation
    dsfr.analytics.isDebugging = true; // active le debugging eulerian
    dsfr.analytics.reset(); // remet les données à l'état de configuration
    dsfr.analytics.user.connect('USER\_ID', 'ENCRYPTED\_EMAIL', true);
    dsfr.analytics.page.path = 'my/virtual/page';
    dsfr.analytics.page.isError = true;
    dsfr.analytics.page.template = 'page404';
    dsfr.analytics.collect(); // envoie les données
});
```
