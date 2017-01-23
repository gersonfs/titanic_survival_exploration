module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.initConfig({
        compress: {
            default: {
                options: {
                    archive: 'dist/send.zip'
                },
                files: [
                    {src: [
                            'Titanic_Survival_Exploration.html', 
                            'Titanic_Survival_Exploration.ipynb'
                        ]
                    }
                ]
            },
        },
    });
};
