const gulp            = require('gulp');
const browserSync     = require('browser-sync').create();
const concat          = require('gulp-concat');
const sass            = require('gulp-sass');
const autoprefixer    = require('gulp-autoprefixer');
const babel           = require('gulp-babel');
const uglify          = require('gulp-uglify');

const app = 'app';
const structure = {
    allFile_html: '**/*.html', 
}
const css = {
    name: 'estilo.css',
    name_min: 'estilo-min.css',
    past: 'styles',
    src: 'scss',
    allFile: '**/*.scss', 
}
const javascript = {
    name: 'main.js',
    name_min: 'main-min.js',
    past: 'scripts',
    src: 'src',
    allFile: '**/*.js',
}

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: app,
        }
    });
    console.log("serve");
});

gulp.task('styles-min', function () {
    gulp.src(app + '/' + css.past + '/' + css.name)
        .pipe(concat(css.name_min))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(gulp.dest(app + '/' + css.past))
    console.log("styles-min");
});

gulp.task('styles', function () {
    gulp.src(app + '/' + css.past + '/' + css.src + '/' + 'init.scss')
        .pipe(concat(css.name))
        .pipe(sass())
        .pipe(gulp.dest(app + '/' + css.past))
    console.log("styles");
});

gulp.task('scripts-min', function () {
    gulp.src(app + '/' + javascript.past + '/' + javascript.name)
        .pipe(concat(javascript.name_min))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(app + '/' + javascript.past))
    console.log("scripts-min");
});

gulp.task('scripts', function () {
    gulp.src(app + '/' + javascript.past + '/' + javascript.src + javascript.allFile)
        .pipe(concat(javascript.name))
        .pipe(gulp.dest(app + '/' + javascript.past))
    console.log("scripts");
});

gulp.task('default', () => {
    gulp.run('styles', 'styles-min', 'scripts', 'scripts-min', 'serve');
    console.log('default');
    gulp.watch(app + '/' + css.past + '/' + css.src + '/' + css.allFile, ['styles', 'styles-min']).on('change', browserSync.reload);
    gulp.watch(app + '/' + javascript.past + '/' + javascript.src + '/' + javascript.allFile, ['scripts', 'scripts-min']).on('change', browserSync.reload);
    gulp.watch(app + '/' + structure.allFile_html).on('change', browserSync.reload);
    console.log("wacth!");
});