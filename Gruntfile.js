module.exports = function(grunt) {
    // config project
    grunt.initConfig({
        pgk: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '<% pgk.name %> as well as <% pgk.description %> '
            }
        }
    });
};