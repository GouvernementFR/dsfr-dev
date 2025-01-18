---
title: Installation
---

## Installation

#### Au sein du DSFR

Pour installer le système d’analytics, il suffit d’importer le fichier javascript :
`/dist/analytics/analytics.module.js` **après** `dsfr.module.js`

Fonctionnalités disponibles :
- Intégration CMP
- Optout
- Collecte de pages
- Actions dans les composants
- Actions hors composants

Le script d’Eulerian est automatiquement chargé au sein du package, attention à ne pas l’insérer dans la page afin d'éviter les doublons.

> [!IMPORTANT]
> Pour les versions du dsfr inférieures à dsfr-1.9.0 (minimum 1.3.0), il est nécessaire d’ajouter le fichier : `/dist/patch/patch.module.js` **avant** `dsfr.module.js`

Il est préférable d'utiliser l'api dans ses dernières versions pour profiter des optimisations et correctifs

Analytics est un package à part, il n’est pas compris dans le fichier js global du DSFR. Il n'est cependant pas totalement autonome et est dépendant du core du DSFR (compris dans le fichier global du DSFR)

#### Version standalone

Pour installer la version standalone du système d’analytics, il suffit d’importer le fichier javascript :
`/standalone/analytics/analytics.module.standalone.js`

Fonctionnalités disponibles :
- Intégration CMP
- Optout
- Collecte de pages
- ~~Actions dans les composants~~
- ~~Actions hors composants~~

Cette version permet d’effectuer la mesure d'audience sans dépendance au DSFR et peut fonctionner de manière autonome.

> [!IMPORTANT]
> La mesure des actions n'est pas disponible dans cette version

#### Pour aller plus loin

Pour le fonctionnement du package Analytics, une configuration particulière du dsfr est nécessaire :
[Configuration](configuration/index.md)

Le package Analytics doit être lié à une plateforme de consentement et l'API propose des utilitaires à cet effet : [ConsentManagementPlatform](cmp/index.md)

Afin de respecter la possibilité pour l'utilisateur de refuser la collecte de données, l'API implémente également l'Opt-out mis à disposition par Eulerian : [Opt](opt/index.md)
