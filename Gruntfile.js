/**
 * Created by onlyit on 14-4-25.
 */
module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {

            build: {
                src: 'src/kp/src/kpSliderClone.js',
                dest: 'src/kp/src/kpsliderCloner.min.js'
            }
        }
    });

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认任务
    grunt.registerTask('default', ['uglify']);
}
