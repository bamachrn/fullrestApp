module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        
        nodemon:{
            dev:{
                script: 'index.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default',['nodemon']);

};
