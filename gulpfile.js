const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');


gulp.task('scss', function(){
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions']
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        // .pipe(browserSync.reload({stream: true}))
});

gulp.task ('watch', function(){
    gulp.watch('app/sass/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
        //.pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
    return gulp.src('app/js/*.js')
        //.pipe(browserSync.reload({stream: true}))
});