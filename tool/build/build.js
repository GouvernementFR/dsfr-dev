const { buildStyles } = require('./styles');
const { buildScript } = require('./scripts');
const { buildExample } = require('./example');
const { buildStorybook } = require('./storybook');
const { concatenate } = require('../generate/concatenate');
const { copyImages, copyIcons, copyAssets } = require('./copy');
const global = require('../../package.json');
const log = require('../utilities/log');
const testPa11y = require('../test/pa11y');
const { generateMarkdown } = require('../generate/markdown');
const { lint } = require('../test/lint');
const generateConfig = require('../generate/config');
const clean = require('../utilities/clean');
const { I18n } = require('../classes/i18n/i18n');
const { Config } = require('../classes/config/config');
const fs = require('fs');
const { execSync } = require('child_process');

const build = async (settings) => {
  log(36, `build ${global.config.namespace} - version ${global.version}`);
  if (settings.clean) clean();
  if (settings.clean || settings.config || !fs.existsSync('.config/config.json')) {
    await generateConfig();
    copyImages();
    copyIcons();
    copyAssets();
  }

  await I18n.merge();
  concatenate();

  const config = await Config.get();

  const packages = config.getPackagesByIds(settings.packages);

  if (settings.test) {
    log.section('lint');
    await lint(packages);
  }

  if (settings.styles) {
    log.section('styles', true);

    for (const pck of packages) {
      if (!pck.style) continue;
      log.info(pck.id.toLowerCase());
      try {
        await buildStyles(pck, settings.minify, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.scripts) {
    log.section('scripts', true);

    for (const pck of packages) {
      if (!pck.script) continue;
      log.info(pck.id.toLowerCase());

      try {
        await buildScript(pck, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.examples) {
    log.section('examples', true);

    for (const pck of packages) {
      if (pck.draft || !pck.example) continue;
      try {
        await buildExample(pck, settings.locale);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.storybook) {
    log.section('storybook', true);
    await buildStorybook();
  }

  if (settings.docs) {
    log.section('docs', true);
    await execSync('yarn dsfr configure && yarn dsfr interpret && yarn dsfr publish');
  }

  if (settings.markdowns) {
    log.section('markdowns', true);
    for (const pck of packages) {
      try {
        await generateMarkdown(pck, settings.locale);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.test) {
    log.section('pa11y');
    await testPa11y(packages);
  }
};

module.exports = build;
