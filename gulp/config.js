var buildDir = "wwwroot/";

export default {
    paths: {
        appFile: "./app.js",
        html: [
            "!jspm_packages/**/*",
            "!node_modules/**/*",
            "!wwwroot/**/*",
            "**/*.html"
        ],

        javascript: [
            "!jspm_packages/**/*",
            "!node_modules/**/*",
            "!wwwroot/**/*",
            "!config.js",
            "!gulpfile.js",
            "!build/**/*",
            "!gulp/**/*",
            "**/*.js"
        ],

        less: [
            "!jspm_packages/**/*",
            "!node_modules/**/*",
            "!wwwroot/**/*",
            "**/*.less"
        ],

        dist: "./"+buildDir
    }
}