---
title: Actions
---

## Actions

Les actions correspondent aux évènements et aux interactions que l’on souhaite mesurer. Le suivi de conversion couvre les besoins suivants :

* Suivi d'action immédiate comme un clic sur un bouton, un téléchargement de fichier, …

* Suivi d'action avec une entrée (début=in) et une sortie (validation=out) (voir taux d'interaction)

* Captation de paramètres associés à cette action comme des textes renseignés ou des cases cochées.

* Possibilité de gérer des séquences de conversion - création d'un funnel étape par étape.

* Les actions d'interaction sont limitées dans leur envoi à la seule première interaction avec l'élément dans la page, sauf si la donnée associée à l'envoi change. Par exemple, un bouton particulier dans le menu enverra des données au premier click, puis sera limité. Si la page change, il enverra de nouveau des données au premier click. Dans le cas d'un composant de recherche, chaque interaction enverra une requête de recherche différente et passera outre la règle de limitation. Si la requête de recherche est identique à la précédente, celle-ci ne sera pas envoyée.

> [!NOTE]
> Les actions ne sont pas supportées dans la [version standalone](../installation/index.md#Version-standalone). Pour mesurer les actions avec l'API analytics, utiliser la version complète du DSFR

#### ActionName

Lorsqu’une action est émise, un actionName est envoyé à Eulérian.
Ce nom d’action est constitué de 3 éléments :
```
(type)_title_[id]
```
* Type : type d'action. (voir [types d'actions](custom-actions/index.md#ActionType) et [types d'actions sur les composants DSFR](component-actions/index.md))
* Title : la hiérarchie des intitulés des éléments ou la valeur de l'attribut `data-fr-analytics-action`
* Id : l'id de l'élément (correspondant à l'attribut `id`sur l'élément) - obligatoire.

> [!IMPORTANT]
> **Un id est obligatoire sur tous les éléments traqués** (retrouvez les éléments du dsfr nécessitant un id dans la colonne “element” du [tableau d'actions des composants du dsfr](component-actions/index.md)).
>Il est nécessaire que l’id soit :
>  * unique : L’id doit être unique au site, par exemple:
>    * Deux boutons différents ne doivent pas avoir le même id, même sur des pages différentes
>    * Le header peut avoir le même id sur toute les pages s’il est identique
>  * pérenne : L’id doit être le même pour tous les utilisateurs et figé dans le temps.

exemple d’actionName : `(click)_titre_niveau_2_›_titre_niveau_3_›_label_de_l_element_[button-id-1]`

> [!NOTE]
> Les espaces sont remplacé par des `_` [_ | low line (U+005F) @ Graphemica](https://graphemica.com/_)
> Les niveaux de hiérarchie sont séparé par des `›` [› | single right-pointing angle quotation mark (U+203A) @ Graphemica](https://graphemica.com/%E2%80%BA)
> Les caractères suivants `"'<>*$&~`|\?^~` étant restreints par Eulerian, ils sont remplacés par une équivalence en caractère fullwidth : [Graphemica | Halfwidth and Fullwidth Forms](https://graphemica.com/blocks/halfwidth-and-fullwidth-forms)

#### Activer les actions

Par défaut, l'envoi des actions est désactivé. Le paramètre de configuration `isActionEnabled` permet de l'activer. (voir [isActionEnabled dans Analytics](../collector/analytics/index.md#isActionEnabled)).
Il est possible de d'activer l'envoi sporadiquement sur un élément particulier en utilisant l'attribut `data-fr-analytics-action`, qui permet également de donner une valeur spécifique au title de l'[ActionName](#ActionName).
À l'inverse, il est possible de désactiver l'envoi d'actions sur un élément particulier en utilisant l'attribut `data-fr-analytics-action="false"` lorsque l'envoi d'actions est activé au global.

> [!NOTE]
> Dans le cas spécifique où la présence de nombreux éléments dans le DOM pourrait générer de la latence et qu'une optimisation des instances de tracking est nécessaire, il est possible de passer la valeur `reduce` à la propriété `isActionEnabled` pour que seules les instances ayant l'attribut `data-fr-analytics-action` soient générées par l'API.

#### Taux d'interaction

L’API analytics utilise des actions pour suivre les interactions de l’utilisateur dans et en dehors des composants.

L'ajout de l'attribut `data-fr-analytics-rating` sur élément particulier permet d'activer la mesure du taux d’interaction sur cet élément, à savoir le rapport entre le nombre de fois où il a été affiché et le nombre de fois où une interaction a eu lieu.

> [!IMPORTANT]
> Cette fonctionnalité entraîne un envoi de donnée plus important, la donnée d'affichage étant automatiquement envoyée tandis que l'envoi de la donnée d'interaction se fait à l'intervention de l'utilisateur. Pour rappel, le modèle de facturation dépend du volume d'appels envoyés à Eulerian et l'envoi de multiples affichages de composants entraîne donc une hausse de la consommation de données. Il est important de s’assurer de la pertinence de chaque élément où cette fonctionnalité est activée afin d'optimiser l'envoi de données.
