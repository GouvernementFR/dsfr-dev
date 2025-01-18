---
title: Class Page
---

## class Page

L’instance de Page est accessible depuis

window.dsfr.analytics.page

### CONFIGURATION

```javascript
<script>
    window.dsfr = {
        analytics: {
            page: {
                path: 'path_name/from/url', // path for page tracking
                referrer: 'path_name/ref/url/', // referrer for virtual pages (not for real page, eulerian automatically collects document.referrer)
                id: 'page-id', // unique page id (string)
                title: 'page title', // page title for virtual pages
                name: 'page name', // equivalent to title if not defined
                author: 'John Doe', // page author name
                date: 'YYYY/MM/DD', // page creation date
                labels: ['label1', 'label2', 'label3', 'label4', 'label5'],
                tags: ['tag1', 'tag2', 'tagN'], // no tags limit
                template: 'nom template', // page template
                group: 'group', // page group. if not defined, fallback to template value
                segment: 'segment', // site segment. if not defined, fallback to template value
                subtemplate: 'sous template', // page subtemplate
                theme: 'theme page', // page theme
                subtheme: 'sous theme', // page subtheme
                related: 'page liée', // related page id
                depth: 2, // page depth
                isError: true, // is this an error page (404, 500, 503...)
                current: 4, // In case of pagination, current page number
                total: 40, // In case of pagination, total pages number
                filters: ['actualités', 'Dossier de presse'] // array of filters that were applied on the page (strings)
            },
        }
    };
</script>
```

### PROPRIÉTÉS
> [!NOTE]
> Les noms entre parenthèses (EA: …) correspondent au nom des variables restituées dans le datalayer et envoyées à Eulerian.


##### path

_String_ (EA: path)

`window.dsfr.analytics.page.path`

* Défini le chemin de la page

* Utilise `document.location.pathname/document.location.search` si non défini

* * *

##### referrer

_String_ (EA: referrer)

`window.dsfr.analytics.page.referrer`

* Défini la page précédente si différente de `document.referer` (si page virtuelle)

* * *

##### id

_String_ (EA: page_id)

`window.dsfr.analytics.page.id`

* Défini l'identifiant unique de la page

* * *

##### title

_String_ (EA: page_title)

`window.dsfr.analytics.page.title`

* Défini le titre de page si différent de la balise `title` de la page (si page virtuelle)

* * *

##### name

_String_ (EA: page_name)

`window.dsfr.analytics.page.name`

* Défini un nom de page (égal à title par défaut)

* * *

##### author

_String_ (EA: page_author)

`window.dsfr.analytics.page.author`

* Défini le nom de l'auteur de la page

* * *

##### date

_Date_ (EA: page_date)

`window.dsfr.analytics.page.date`

* Défini la date de publication de la page restituée au format de date calendaire [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) [YYYY-MM-DD]

* * *



##### labels

_Array`<String>`_ (EA: pagelabel)

`window.dsfr.analytics.page.labels`

* Liste de 5 regroupements de contenus maximum

* * *

##### categories

_Array`<String>`_ (EA: page_category1, page_category2, page_category1)

`window.dsfr.analytics.page.categories`

* Liste de 5 regroupements de contenus maximum

* Les 3 premiers labels servent à renseigner (EA: page_category1), (EA: page_category2), et (EA:
page_category3)

* * *

##### tags

_Array`<String>`_ (EA: page_tags)

`window.dsfr.analytics.page.tags`

* Défini les tags associés à la page. Si plusieurs tags, ils doivent être séparés par une virgule sans espaces (pas de limite)

* * *

##### template

_String_ (EA: template)

`window.dsfr.analytics.page.template`

* Permet de définir un nom de template

* * *

##### group

_String_ (EA: pagegroup)

`window.dsfr.analytics.page.group`

* Permet de définir un nom de groupe (par défaut égal à template)

* * *

##### segment

_String_ (EA: segment-site)

`window.dsfr.analytics.page.segment`

* Permet de définir un nom de segment (par défaut égal à template)

* * *

##### subtemplate

_String_ (EA: page_subtemplate)

`window.dsfr.analytics.page.subtemplate`

Apporte un niveau de détail supplémentaire lié au contenu pour les page_template comprenant beaucoup de pages sur des thèmes différents

* * *

##### theme

_String_ (EA: page_theme)

`window.dsfr.analytics.page.theme`

* Permet de définir le thème principal des contenus

* * *

##### subtheme

_String_ (EA: page_subtheme)

`window.dsfr.analytics.page.subtheme`

* Permet de définir un sous-theme

* * *

##### related

_String_ (EA: page_related)

`window.dsfr.analytics.page.related`

* Clé unique passée sur l'ensemble des pages avec des contenus liés

* * *

##### depth

_Integer_ (EA: page_depth)

`window.dsfr.analytics.page.depth`

Niveau de profondeur de la page (default: 0)

* * *

##### isError

_Boolean_ (EA: error) - default: false (required)

`window.dsfr.analytics.page.isError`

* Défini si la page est une page d’erreur (**obligatoire** si page d’erreur)

* * *

##### current

_Integer_ (EA: page_pagination)

`window.dsfr.analytics.page.current`

Numéro de page si au sein d’un découpage ou d’une pagination

* Récupération automatique depuis le composant Pagination si celui-ci est présent

* * *

##### total

_Integer_

`window.dsfr.analytics.page.total`

Nombre de page au sein du découpage ou de la pagination

Vient compléter la valeur envoyée à (EA: page_pagination) si renseignée (valant : “current / total”)
Si le composant Pagination est présent, la récupération automatique se fait de deux manière, dans l’ordre de priorité :

  - la valeur renseignée dans l’attribut data-fr-analytics-page-total sur le composant fr-pagination
  - la valeur la plus haute dans les numéros de pages présentés dans la pagination ((avertissement) attention de toujours avoir la dernière page dans les entrées de la navigation)

* * *

##### filters

* _Array`<String>`_ (EA: page_filters)

`window.dsfr.analytics.page.filters`

Défini les filtres appliqués à la page

* * *

### MÉTHODES

##### reset (clear = false)

`window.dsfr.analytics.page.reset(clear)`

Permet de remettre les données dans l'état d’origine de la configuration.

Si le paramètre `clear = true` => toutes les données sont remises en état indéfini.

* * *
