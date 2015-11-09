var gulp       = require("gulp");
var fs         = require("fs")
var browserify = require('browserify');

gulp.task('browserify', function() {
  browserify("./app.es6")
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(fs.createWriteStream("bundle.js"));
});

gulp.task('watch', function() {
  gulp.watch('./*.es6', ['babel'])
});

gulp.task('default', ['babel', 'watch']);
