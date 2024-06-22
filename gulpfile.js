// Loading required goods
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concatCSS = require('gulp-concat-css');

// Defining task function
function style() {
    // (Ignore this code, it's for me only or if you're debugging your theme with Dorion)
    const fs = require('fs');
    const path = 'C:/Users/Administrator/dorion/themes/cache';
    if (fs.existsSync(path)) {
        fs.rmSync(path, {
            recursive: true
        });
    }

    // Fetching all Scss files
    return gulp.src('./src/*')
        // Run the Sass compiler
        .pipe(sass().on('error', sass.logError))

        // Concatenating all CSS files into one
        .pipe(concatCSS('ForgottenKeep.css'))

        // Minification of the CSS
        // .pipe(cleanCSS({compatibility: 'ie8'}))

        // Output of final CSS file
        .pipe(gulp.dest('./dist'))
}

// Default export
exports.default = style;