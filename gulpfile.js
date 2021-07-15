const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
const replaceQuote = require('gulp-replace-quotes');
const removeComments = require('./gulp-remove-comments');
gulp.task('sprite', function() {
  const spriteData = gulp.src('./src/assets/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    padding: 5
  }));
   
  return spriteData.pipe(gulp.dest('./src/assets/images'));
});

gulp.task('default', function() {
  gulp.src('src/assets/images/sprite.scss')
  .pipe(replaceQuote({
    quote:'double'
  })).pipe(removeComments())
  .pipe(gulp.dest('build'))
});
