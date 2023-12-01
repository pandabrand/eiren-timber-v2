let mix = require('laravel-mix');

mix
.js('assets/src/js/app.js', 'assets/dist/js')
.sass('assets/src/sass/app.scss', 'assets/dist/css')
.browserSync({
    proxy: "ec-wp.test",
    files: [
        "./assets/dist/*",
        "./assets/src/js/**/*.js",
        "./assets/src/scss/**/*.scss",
        "./assets/src/img/**/*.+(png|jpg|svg)",
        "./**/*.+(html|php)",
        "./views/**/*.+(html|twig)"
    ]
})
