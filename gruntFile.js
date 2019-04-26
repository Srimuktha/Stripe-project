module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 3030, // custom port
                    base: 'app/', // current directory for 'index.html' is root
                    livereload: 35729, // keep the server alive indefinitely
                    }
                }
            },
            sass: {
                dist: {
                    files: {
                        'app/stylesheets/styles.css' : 'app/stylesheets/styles.sass'
                    }
                }
            },
            watch: {
                options: {
                    livereload: 35729
                  },
                css: {
                    files: 'app/stylesheets/*.sass',
                    tasks: ['sass']
                }
            }

            
		});
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('dev',['sass','connect','watch']);

    };

      