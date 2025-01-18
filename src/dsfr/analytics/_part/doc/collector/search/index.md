---
title: Class Search
---

## class Search

L’instance de Search est accessible depuis :

`window.dsfr.analytics.search`

### CONFIGURATION

```javascript
<script>
    window.dsfr = {
        analytics: {
            search: {
                engine: 'principal',
                results: 486,
                terms: 'télécharger le cerfa 1234',
                category: 'categorie',
                theme: 'theme',
                type: 'type',
                method: ''
            },
        }
    };
</script>
```

### PROPRIÉTÉS

> [!NOTE]
> Les noms entre parenthèses (EA: …) correspondent au nom des variables restituées dans le datalayer et envoyées à Eulerian.

> [!NOTE]
> [paramètre supplémentaire] indique qu’il s’agit d’un paramètre supplémentaire du moteur de recherche.
> L'ajout de cette nouvelle variable nécessite l'implémentation d'un couple de paramètres isearchkey et isearchdata, isearchkey contenant le nom du paramètre et isearchdata la valeur.
> On retrouve en sortie dans le datalayer 4 valeurs ['isearchkey', ‘PARAMETER\_NAME', ‘isearchdata’, 'PARAMETER\_VALUE’\]


##### engine

_String_ (EA: isearchengine)

`window.dsfr.analytics.search.engine`

Nom du moteur de recherche configuré dans Eulerian.

* * *

##### results

_Int_ (EA: isearchresults)

`window.dsfr.analytics.search.results`

Nombre de résultats sur une page de résultat suite à une recherche dans la barre de recherche.

* * *

##### terms

_String_ (EA: isearchkey, search\_terms, isearchdata) [paramètre supplémentaire]

`window.dsfr.analytics.search.terms`

Termes de la recherche.

* * *

##### category

_String_ (EA: isearchkey, search\_category, isearchdata) [paramètre supplémentaire]

`window.dsfr.analytics.search.category`

Catégorie de la recherche (lorsqu’un sélecteur de catégorie est disponible).

* * *

##### theme

_String_ (EA: isearchkey, search\_theme, isearchdata) [paramètre supplémentaire]

`window.dsfr.analytics.search.theme`

Thème de la recherche (lorsqu’un sélecteur de thème est disponible).

* * *

##### type

_String_ (EA: isearchkey, search\_type, isearchdata) [paramètre supplémentaire]

`window.dsfr.analytics.search.type`

Type de recherche si le moteur de recherche permet d’appliquer un type particulier (ex: uniquement documents, uniquement les 30 derniers jours)

* * *

##### method

_String_ (EA: isearchkey, search\_method, isearchdata) [paramètre supplémentaire]

`window.dsfr.analytics.search.method`

Défini la méthode de recherche utilisée, un envoi standard ou au clic sur une suggestion.

* _standard_

* _autocomplete_

* * *

### MÉTHODES

##### reset (clear = false)

`window.dsfr.analytics.search.reset(clear)`

Permet de remettre les données dans l'état d’origine de la configuration.

Si le paramètre `clear = true` => toutes les données sont remises en état indéfini.

* * *
