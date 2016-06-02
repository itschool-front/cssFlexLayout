module.exports = function(grunt){
    
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        
        connect: {
            server: {
                options: {
                    livereload: true,
                    /*keepalive: true,*/
                    open: true,
                    port: 8000,
                    base: '.'
                }
            }
        },
        
        watch: {
            
                options: {
                    livereload: true    
                },
                
                html: {
                    files: ['index.html']
                },
                
                css: {
                    files: ['css/*.css']
                },
                
                js: {
                    files: ['js/*.js']
                }
            
        }
        
        
        
    });//initConfig
    
    grunt.registerTask('default', ['connect', 'watch']);
    
}