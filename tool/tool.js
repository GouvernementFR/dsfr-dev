#!/usr/bin/env node

const { Changelog } = require('./classes/changelog/changelog');

const yargs = require('yargs');
const build = require('./build/build');
const buildRouting = require('./generate/routing');
const { deployFavicons, deployFiles, deployRobots, deployStorybook,
  deployDocs
} = require('./build/copy');
const { test } = require('./test/test');
const standalone = require('./build/standalone');
const { generateNewPictogram } = require('./generate/pictogram');
const { spawn} = require('child_process');
const log = require('./utilities/log');
const { updateChouquette } = require('./utilities/update')

/**
 * Build
 */
const buildBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0 -p core accordion')
    .example(
      '$0 -p core accordion -jcm',
      'compile les fichiers scripts et styles du package core et accordion en les minifiant'
    )
    .option('packages', {
      alias: 'p',
      describe: 'liste des id des packages à compiler. Si non renseigné, tous les packages sont compilés',
      type: 'array'
    })
    .option('scripts', {
      alias: '-j',
      describe: 'Filtre de compilation, inclue les scripts',
      type: 'boolean'
    })
    .option('styles', {
      alias: '-c',
      describe: 'Filtre de compilation, inclue les styles',
      type: 'boolean'
    })
    .option('examples', {
      alias: '-h',
      describe: 'Filtre de compilation, inclue les examples',
      type: 'boolean'
    })
    .option('minify', {
      alias: '-m',
      describe: 'Minifie les styles et les scripts',
      type: 'boolean'
    })
    .option('legacy', {
      alias: '-l',
      describe: 'Compilation des scripts supportant les systèmes antérieurs',
      type: 'boolean'
    })
    .option('sourcemap', {
      alias: '-s',
      describe: 'Compilation des scripts et styles avec sourcemaps',
      type: 'boolean'
    })
    .option('test', {
      alias: '-t',
      describe: 'Applique les tests de styles et d‘accessibilité',
      type: 'boolean'
    })
    .option('clean', {
      describe: 'Supprime le dossier public avant compilation pour repartir de zéro',
      type: 'boolean'
    })
    .option('config', {
      describe: 'génère la configuration',
      type: 'boolean'
    })
    .option('markdowns', {
      describe: 'Génère les fichiers readme',
      type: 'boolean'
    })
    .option('locale', {
      alias: 'loc',
      describe: 'Locale',
      type: 'string'
    });
};

const buildHandler = async (argv) => {
  const all = argv.scripts === undefined && argv.styles === undefined && argv.examples === undefined;

  const settings = {
    styles: argv.styles || all,
    scripts: argv.scripts || all,
    examples: argv.examples || all,
    packages: argv.packages || [],
    minify: argv.minify,
    legacy: argv.legacy,
    sourcemap: argv.sourcemap,
    clean: argv.clean,
    config: argv.config,
    test: argv.test,
    markdowns: argv.markdowns,
    locale: argv.locale
  };

  await build(settings);
};

/**
 * Release
 */

const releaseBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0')
    .example(
      '$0',
      ''
    )
    .option('locale', {
      alias: 'loc',
      describe: 'Locale',
      type: 'string'
    });
};

const releaseHandler = async (argv) => {
  await build({
    styles: true,
    scripts: true,
    examples: true,
    clean: true,
    test: true,
    minify: true,
    legacy: true,
    sourcemap: true,
    markdowns: true,
    locale: argv.locale,
    storybook: true,
    docs: true
  });
};

/**
 * Deploy
 */
const deployBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0')
    .example(
      '$0',
      ''
    ).option('locale', {
      alias: 'loc',
      describe: 'Locale',
      type: 'string'
    });
};

const deployHandler = async (argv) => {
  log.section('DEPLOY');
  await updateChouquette();
  await build({
    styles: true,
    scripts: true,
    examples: true,
    storybook: true,
    docs: true,
    clean: true,
    minify: true,
    legacy: true,
    locale: argv.locale
  });
  await standalone({
    styles: true,
    scripts: true,
    examples: true,
    clean: true,
    legacy: true,
    locale: argv.locale
  });
  await buildRouting();
  deployFavicons();
  deployFiles();
  deployRobots();
  deployStorybook();
  deployDocs();
};

/**
 * Test
 */
const testBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0 -p core accordion')
    .example(
      '$0 -p core accordion -jcm',
      'compile les fichiers scripts et styles du package core et accordion en les minifiant'
    )
    .option('packages', {
      alias: 'p',
      describe: 'liste des id des packages à compiler. Si non renseigné, tous les packages sont compilés',
      type: 'array'
    });
};

const testHandler = async (argv) => {
  const settings = {
    packages: argv.packages || []
  };

  await test(settings);
};

/**
 * Standalone
 */
const standaloneBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0')
    .example(
      '$0 -p connect',
      'compile les fichiers scripts et styles du package core et accordion en les minifiant'
    )
    .option('packages', {
      alias: 'p',
      describe: 'liste des id des packages à compiler. Si non renseigné, tous les packages sont compilés',
      type: 'array'
    })
    .option('scripts', {
      alias: '-j',
      describe: 'Filtre de compilation, inclue les scripts',
      type: 'boolean'
    })
    .option('styles', {
      alias: '-c',
      describe: 'Filtre de compilation, inclue les styles',
      type: 'boolean'
    })
    .option('examples', {
      alias: '-h',
      describe: 'Filtre de compilation, inclue les examples',
      type: 'boolean'
    })
    .option('minify', {
      alias: '-m',
      describe: 'Minifie les styles et les scripts',
      type: 'boolean'
    })
    .option('legacy', {
      alias: '-l',
      describe: 'Compilation des scripts supportant les systèmes antérieurs',
      type: 'boolean'
    })
    .option('sourcemap', {
      alias: '-s',
      describe: 'Compilation des scripts et styles avec sourcemaps',
      type: 'boolean'
    })
    .option('clean', {
      describe: 'Supprime le dossier public avant compilation pour repartir de zéro',
      type: 'boolean'
    })
    .option('config', {
      describe: 'génère la configuration',
      type: 'boolean'
    })
    .option('locale', {
      alias: 'loc',
      describe: 'Locale',
      type: 'string'
    });
};

const standaloneHandler = async (argv) => {
  const all = argv.styles === undefined && argv.examples === undefined;

  const settings = {
    styles: argv.styles || all,
    scripts: argv.scripts || all,
    examples: argv.examples || all,
    packages: argv.packages || [],
    minify: argv.minify,
    legacy: argv.legacy,
    sourcemap: argv.sourcemap,
    clean: argv.clean,
    config: argv.config,
    locale: argv.locale
  };

  await standalone(settings);
};

/**
 * Changelog
 */
const changelogBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0 -t X.X.X')
    .example(
      '$0 -t X.X.X',
      'génère le fichier changelog'
    )
    .option('tag', {
      alias: '-t',
      describe: 'prochain tag',
      type: 'string'
    });
};

const changelogHandler = async (argv) => {
  const settings = {
    tag: argv.tag
  };

  const changelog = new Changelog(settings.tag);
  await changelog.build();
};

/**
 * Pictogram converter
 * Permet de transformer l'ancienne structure des pictogrammes avec des <g> en une structure avec des <symbol> et <use>
 */
const newPictogramBuilder = (yargs) => {
  return yargs
    .usage('Usage: $0 -p [path/to/svg]')
    .example(
      '$0 -p [path/to/svg]',
      'convertit les pictogrammes en une structure avec des <symbol> et <use>'
    )
    .option('path', {
      alias: '-p',
      describe: 'chemin vers le dossier contenant les pictogrammes',
      type: 'string'
    });
};

const newPictogramHandler = async (argv) => {
  const settings = {
    path: argv.path
  };

  generateNewPictogram(settings.path || './src/dsfr/core/asset/artwork');
};

yargs
  .scriptName('tool')
  .command(
    'build',
    'compilation de package',
    buildBuilder,
    buildHandler
  )
  .command(
    'release',
    'compilation la plus complète pour livraison',
    releaseBuilder,
    releaseHandler
  )
  .command(
    'deploy',
    'compilation pour déploiement sur netlify',
    deployBuilder,
    deployHandler
  )
  .command(
    'test',
    'lint et test pa11y',
    testBuilder,
    testHandler
  )
  .command(
    'standalone',
    'compilation pour la version standalone de FranceConnect',
    standaloneBuilder,
    standaloneHandler
  )
  .command(
    'changelog',
    'génération du changelog',
    changelogBuilder,
    changelogHandler
  )
  .command(
    'pictogram-converter',
    'transforme les pictogrammes en une structure avec des <symbol> et <use>',
    newPictogramBuilder,
    newPictogramHandler
  )
  .help()
  .argv;
