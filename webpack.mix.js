const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts('resources/ts/index.tsx', 'public/js')
  .sass('resources/sass/app.scss', 'public/css', [
    //
  ]);

if (mix.inProduction()) {
  // cachebuster
  mix.version();
}

// hot reload
mix.browserSync({
  proxy: {
    target: 'http://127.0.0.1:8000',
  },
  files: [
    // watch these files(not working for tsx files atm)
    'resources/views/**/*.blade.php',
    'resources/sass/*.scss',
    'resources/ts/*.tsx',
  ],
});
