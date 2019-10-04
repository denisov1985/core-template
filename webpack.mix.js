const mix = require('laravel-mix');
const glob = require('glob');

/**
 * Config paths
 * @type {{npmDir: string, public: string, resources: string, vueSource: string}}
 */
const config = {
    path: {
        npm: './node_modules',
        public: './public',
        resources: './resources',
        vue: './resources/js/',
        core: './resources/vendor/sigma/core/modules/',
    },
    entry: 'app.js'
};

/**
 * Load core modules
 */
for (const file of glob.sync(config.path.core + '*/' + config.entry)) {
    const segments = file.split(path.sep);
    let name = segments[segments.length - 2];
    mix.js(file, config.path.public + '/js/modules/' + name + '.js');
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
