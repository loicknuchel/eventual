module.exports = function(grunt) {
    "use strict";
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        assetsDir: 'app',
        distDir: 'dist',
        playDistDir: '../public/dist',
        playIndex: '../app/views/index.scala.html',

        clean: {
            options: {
                force: true
            },
            dist: [
                '.tmp',
                '<%= distDir %>',
                '<%= assetsDir %>/css',
                '<%= playDistDir %>',
                '<%= playIndex %>'
            ]
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= assetsDir %>',
                    dest: '<%= distDir %>/',
                    src: [
                        'index.html',
                        'img/**'
                    ]
                }]
            },
            playIndex: {
                src: '<%= assetsDir %>/index.html',
                dest: '<%= playIndex %>'
            },
            playJs: {
                expand: true,
                cwd: '<%= assetsDir %>/js',
                dest: '<%= playDistDir %>/js/',
                src: '**/*.js'
            },
            playCss: {
                expand: true,
                cwd: '<%= assetsDir %>/css',
                dest: '<%= playDistDir %>/css/',
                src: '**/*.css'
            },
            playHtml: {
                expand: true,
                cwd: '<%= assetsDir %>/views',
                dest: '<%= playDistDir %>/views/',
                src: '**/*.html'
            },
            playBower: {
                expand: true,
                cwd: '<%= assetsDir %>/bower_components',
                dest: '<%= playDistDir %>/bower_components/',
                src: '**/*.{js,css,eot,svg,ttf,woff}'
            }
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/js',
                    src: '*.js',
                    dest: '.tmp/concat/js'
                }]
            }
        },
        useminPrepare: {
            html: '<%= assetsDir %>/index.html',
            options: {
                dest: '<%= distDir %>'
            }
        },
        usemin: {
            html: '<%= distDir %>/index.html'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all : {
                src : ['<%= assetsDir %>/js/**/*.js']
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= distDir %>/js/{,*/}*.js',
                        '<%= distDir %>/css/{,*/}*.css'
                    ]
                }
            }
        },
        watch: {
            scss: {
                files : ['<%= assetsDir %>/scss/**/*.scss'],
                tasks: ['sass:all']
            },
            playIndex: {
                files: ['<%= assetsDir %>/index.html'],
                tasks: ['copy:playIndex']
            },
            playJs: {
                files: ['<%= assetsDir %>/js/**/*.js'],
                tasks: ['copy:playJs']
            },
            playCss: {
                files: ['<%= assetsDir %>/css/**/*.css'],
                tasks: ['copy:playCss']
            },
            playHtml: {
                files: ['<%= assetsDir %>/**/*.html'],
                tasks: ['copy:playHtml']
            }
            
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            all : {
                src : ['<%= assetsDir %>/css/**/*.css']
            }
        },
        sass: {
            options : {
                style : 'expanded',
                trace : true
            },
            all: {
                files: {
                    '<%= assetsDir %>/css/app.css': '<%= assetsDir %>/scss/app.scss'
                }
            }
        },
        imagemin : {
            dist : {
                options : {
                    optimizationLevel: 7,
                    progressive : false,
                    interlaced : true
                },
                files: [{
                    expand: true,
                    cwd: '<%= assetsDir %>/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= distDir %>/'
                }]
            }
        }
    });

    /*grunt.registerTask('test:e2e', ['connect:test', 'karma:e2e']);
    grunt.registerTask('test:unit', ['karma:dist_unit:start']);
    grunt.registerTask('report', ['plato', 'connect:plato']);
    grunt.registerTask('dev', ['sass','browser_sync',   'karma:dev_unit:start',   'watch']);
    grunt.registerTask('package', ['jshint', 'clean', 'useminPrepare', 'copy', 'concat', 'ngmin', 'uglify',  'sass', 'cssmin',  'rev', 'imagemin', 'usemin']);
    grunt.registerTask('ci', ['package', 'connect:test', 'karma:dist_unit:start',  'karma:e2e'  ,'plato']);
    grunt.registerTask('ls', ['availabletasks']);*/

    grunt.registerTask('play', ['sass:all', 'copy:playIndex', 'copy:playHtml', 'copy:playJs', 'copy:playCss', 'copy:playBower']);
    grunt.registerTask('dev', ['play', 'watch']);
};