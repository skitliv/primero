const { src, dest, watch, series } = require('gulp');
// const sass = require('gulp-sass');
// const postcss = require('gulp-postcss');
// const cssnano = require('cssnano');
// const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
// function scssTask(){
//   return src('app/scss/style.scss', { sourcemaps: true })
//     .pipe(sass())
//     .pipe(postcss([cssnano()]))
//     .pipe(dest('dist', { sourcemaps: '.' }));
// }

// JavaScript Task
// function jsTask(){
//   return src('app/js/index.js', { sourcemaps: true })
//     .pipe(terser())
//     .pipe(dest('dist', { sourcemaps: '.' }));
// }

// Browsersync Tasks
// function browsersyncServe(cb){
//   browsersync.init({
//     server: {
//       baseDir: '.'
//     }
//   });
//   cb();
// }

browsersync.init({
    proxy: "localhost/primero"
    // port: 8000  
 });// Watch Task
 

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}


function watchTask(){
  watch('index.php', browsersyncReload);
//   watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  watchTask
);