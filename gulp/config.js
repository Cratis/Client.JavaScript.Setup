var buildDir = "public/";
var source = "./"

export default {
    paths: {
        appFile: "./app.js",
        html: [
            "!jspm_packages/**/*",
            "!node_modules/**/*",
            "!"+buildDir+"**/*",
            source+"**/*.html"
        ],

        javascript: [
            "!jspm_packages/**/*",
            "!node_modules/**/*",
            "!"+buildDir+"**/*",
            "!config.js",
            "!gulpfile.js",
            "!build/**/*",
            "!gulp/**/*",
            source+"**/*.js"
        ],

        less: [
            "!jspm_packages/**/*",
            "!node_modules/**/*",
            "!wwwroot/**/*",
            "!"+buildDir+"**/*",
            source+"**/*.less"
        ],

        dist: "./"+buildDir
    }
}