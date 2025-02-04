'use strict';

var asset = require('./controllers/asset.js');
var images = require('./controllers/images.js');
var middleware = require('./middleware');
var search = require('./controllers/search.js');
var json = require('./controllers/json.js');
var xml = require('./controllers/xml.js');
var elasticsearch = require('./controllers/elasticsearch.js');

/**
 * Application routes
 */
module.exports = function(app) {
    // Json stuff
    app.route('/suggest.json').get(json.suggest);

    // Page templates
    app.route('/').get(search.index);
    // Get the catalogs for the main menu
    app.route('/catalogs').get(search.mainmenu);
    // A safe proxy for the elastic search index.
    app.route('/es/*').get(elasticsearch.proxy);

    // XML stuff
    app.route('/:catalog/sitemap.xml').get(xml.sitemap);

    // Image handling
    app.route('/:catalog/:id/download/:size/:filename').get(images.download_image);
    app.route('/:catalog/:id/download/:filename').get(images.download);

    app.route('/:catalog/:id/image/:size').get(images.image);
    app.route('/:catalog/:id/thumbnail').get(images.thumbnail);

    app.route('/:catalog/infinite').get(search.infinite);
    app.route('/:catalog/:id').get(asset.index);
    app.route('/:catalog').get(search.catalog);
};
