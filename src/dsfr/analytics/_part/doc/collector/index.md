---
title: Collector
---

## Collector

Le collector permet la collecte de données de page du site.
Chacune de ces données est répartie dans différentes catégories qui sont disponibles dans des objest qui sont concaténés au moment de la collecte.

### CONFIGURATION

```javascript
<script>
    window.dsfr = {
        analytics: {
            domain: 'mon.domainedetracking.com',
            // collection: 'manual',
            // isActionEnabled: false,
        }
    };
</script>
```

##### domain

_String_ (required)

Il est requis de définir la propriété `domain` avec le [domaine récupéré auprès d’Eulerian](https://eulerian.wiki/doku.php?id=fr:quickonboarding:installation:domain_implementation).

* * *

##### collection

_String_

Défini le mode de récolte des données de la page :

* `manual` : Les données de pages ne sont pas envoyées. Attend l’execution de la fonction `collect()`.

* `load` : Les données de page sont envoyées automatiquement au chargement de la page. (par défaut)

* `full` : Les données sont envoyées à chaque changement de path dans l’URL, permettant le support des “Single-page
  application” (par défaut si dsfr en mode ‘vue’, ‘react’ ou ‘angular’)

* `hash` : Les données sont envoyées à chaque changement de hash dans l'URL

* * *

##### isActionEnabled

_Boolean_

Défini si la mesure d'audience des actions est activée ou non.

* Par défaut, la mesure d'audience des actions est désactivée (`false`)

* * *
