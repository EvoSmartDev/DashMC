const Encore = require('@symfony/webpack-encore')

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('js/app', './resources/ts/app.ts')
  .addStyleEntry('tailwind', './resources/tailwind.css')
  .addStyleEntry('css/app', './resources/scss/app.scss')
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableIntegrityHashes(Encore.isProduction())
  .enableSassLoader()
  .enablePostCssLoader()
  .enableTypeScriptLoader()

module.exports = Encore.getWebpackConfig()
