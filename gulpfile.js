/* Variaveis */
var gulp = require('gulp'); 
var browserSync = require('browser-sync').create();
var reload = browserSync.reload; 
var concat = require('gulp-concat');
var sass = require('gulp-sass');  
var autoprefixer = require('gulp-autoprefixer');
var image = require('gulp-image');


/* Caminhos */
const app = 'app';
const structure = {
    allFile_html: '**/*.html',
    allFile_php: '**/*.php',
}
const css = {
    name: 'estilo.css',
    past: 'styles', 
    src:  'scss',
    allFile: '**/*.scss',
    file_Grid: 'layout/sass.grid.scss',
}
const javascript = {
    name: 'main.js',
    past: 'scripts',
    src: 'src',
    allFile: '**/*.js',
}
const images = {
    name: '',
    past: 'images',
    src: 'originais',
    allFile: '**/*',
}


/*-TASK - SERVE -*/
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: app,
        }
    }); 
    console.log("SERVE - OK!");  
});


/*-TASK - STYLES - GRID -*/
/*
gulp.task('styles-grid', function(){
    gulp.src( app +'/'+ css.past +'/'+ css.src + '/layout/sass-grid.scss') 
    .pipe( sass() )
    .pipe(concat('grid.scss'))
    .pipe(gulp.dest( app +'/'+ css.past +'/'+ css.src + '/layout/'))
    console.log("GRID OK!"); 
});
*/


/*-TASK - STYLES - MINI -*/
gulp.task('styles-mini',  function() {  
    gulp.src( app +'/'+ css.past +'/'+ css.name)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe( sass({
        outputStyle: 'compressed'
    }) )  
    .pipe(gulp.dest( app +'/'+ css.past ))
    console.log("STYLES - MINI OK!"); 
});


/*-TASK - STYLES -*/
gulp.task('styles', function() {  
    gulp.src( app +'/'+ css.past +'/'+ css.src +'/'+ 'init.scss' )
    .pipe( sass() )
    // .pipe(autoprefixer({
    //     browsers: ['last 2 versions'],
    //     cascade: false
    // }))
    .pipe(concat( css.name ))
    .pipe(gulp.dest( app +'/'+ css.past ))
    .pipe(browserSync.stream());
    console.log("STYLES OK!"); 
});


/*-TASK - SCRIPTS -*/
gulp.task('scripts',  function() {
    gulp.src( app +'/'+javascript.past +'/'+ javascript.src + javascript.allFile) 
    .pipe(concat( javascript.name ))
    .pipe(gulp.dest( app +'/'+javascript.past ))
    .pipe(browserSync.stream());
    console.log("SCRIPTS OK!"); 
});


/*-TASK - IMAGES -*/
gulp.task('images',  function() {
    gulp.src( app +'/'+ images.past + images.src + images.allFile)
    .pipe(image({ optimizationLevel: 5, progressive: true, interlaced: true }) )
    .pipe(gulp.dest( app +'/'+ images.past ))
    .pipe(browserSync.stream());
    console.log("IMAGES OK!"); 
});


/*-TASK - HTML -*/
gulp.task('html', function(){ 
    browserSync.stream();
}); 


/*-TASK DEFAULT-*/
gulp.task('default', () => {
 
    // gulp.run('styles-grid');
    gulp.run('styles');
    gulp.run('scripts');
    gulp.run('images'); 
    gulp.run('serve')  
    console.log("GULP START OK!"); 
 
    gulp.watch( app +'/'+ css.past +'/'+ css.src +'/'+ css.allFile ,['styles']);
    gulp.watch( app +'/'+ javascript.past +'/'+ javascript.src +'/'+ javascript.allFile ,['scripts']);
    gulp.watch( app +'/'+ javascript.past +'/'+ javascript.allFile ).on('change', reload);
    // gulp.watch( app +'/'+ images.past +'/'+ images.src +'/'+ images.allFile ,['images']);
    // gulp.watch( app +'/'+ structure.allFile_html ,['html']);
    gulp.watch( app +'/'+ structure.allFile_html ).on('change', reload);
    console.log("WACTH OK!"); 

});
 

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// TASK TESTES
gulp.task('teste', function(){  
    gulp.watch( app +'/'+ css.past +'/'+ css.src +'/'+ css.allFile ,['styles']);
    // gulp.watch( app +'/'+ javascript.past +'/'+ javascript.src +'/'+ javascript.allFile ,['scripts']);
    gulp.watch( app +'/'+ images.past +'/'+ images.src +'/'+ images.allFile ,['images']);
    gulp.watch( app +'/'+ structure.allFile_html ,['html']);
}); 
//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --