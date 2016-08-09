let rootDir = process.cwd();
let outputDir = `${rootDir}/Distribution`;
let sourceDir = `${rootDir}/Source`;

export default {
    paths: {
        html: [
            `!${rootDir}/jspm_packages/**/*`,
            `!${rootDir}/node_modules/**/*`,
            `!${outputDir}/**/*`,
            `${rootDir}/**/*.html`
        ],

        javascript: [
            `!${rootDir}/jspm_packages/**/*`,
            `!${rootDir}/node_modules/**/*`,
            `!${outputDir}/**/*`,
            `!${rootDir}/config.js`,
            `!${rootDir}/gulpfile.js`,
            `!${rootDir}/gulp/**/*`,
            `${sourceDir}/**/*.js`
        ],

        less: [
            `!${rootDir}/jspm_packages/**/*`,
            `!${rootDir}/node_modules/**/*`,
            `!${outputDir}/**/*`,
            `${rootDir}/**/*.less`
        ],

        content: [
            `!${rootDir}/node_modules/**/*`,
            `!${outputDir}/**/*`,
            `${rootDir}/jspm_packages/**/*`,
            `${rootDir}/**/*.jpg`,
            `${rootDir}/**/*.jpeg`,
            `${rootDir}/**/*.gif`,
            `${rootDir}/**/*.png`
        ],

        rootDir: rootDir,
        outputDir: outputDir,
        sourceDir: sourceDir
    }
}