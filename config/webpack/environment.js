const { environment } = require('@rails/webpacker')
environment.entry.set('application', './app/javascript/packs/application.js');
module.exports = environment
