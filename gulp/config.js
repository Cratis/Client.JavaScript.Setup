let rootDir = process.cwd();
let outputDir = `${rootDir}/Distribution`;
let sourceDir = `${rootDir}/Source`;

const _rootDir = new WeakMap();
const _outputDir = new WeakMap();
const _sourceDir = new WeakMap();

class config {
    constructor() {
        this.paths = new paths(this);
    }
}

class paths {
    constructor(config) {
        this.config = config;
    }

    get html() {
        return [
            `!${this.rootDir}/jspm_packages/**/*`,
            `!${this.rootDir}/node_modules/**/*`,
            `!${this.outputDir}/**/*`,
            `${this.rootDir}/**/*.html`
        ]
    }

    get javascript() {
        return [
            `!${this.rootDir}/jspm_packages/**/*`,
            `!${this.rootDir}/node_modules/**/*`,
            `!${this.outputDir}/**/*`,
            `!${this.rootDir}/config.js`,
            `!${this.rootDir}/gulpfile.js`,
            `!${this.rootDir}/gulp/**/*`,
            `${this.sourceDir}/**/*.js`
        ]
    }

    get less() {
        return [
            `!${this.rootDir}/jspm_packages/**/*`,
            `!${this.rootDir}/node_modules/**/*`,
            `!${this.outputDir}/**/*`,
            `${this.rootDir}/**/*.less`
        ];
    }

    get content() {
        return [
            `!${this.rootDir}/node_modules/**/*`,
            `!${this.outputDir}/**/*`,
            `${this.rootDir}/jspm_packages/**/*`,
            `${this.rootDir}/**/*.jpg`,
            `${this.rootDir}/**/*.jpeg`,
            `${this.rootDir}/**/*.gif`,
            `${this.rootDir}/**/*.png`
        ]
    }

    get rootDir() {
        if (_rootDir.has(this)) {
            return _rootDir.get(this);
        }
        return _rootDir;
    }

    set rootDir(value) { _rootDir.set(this, value); }

    get outputDir() {
        if (_outputDir.has(this)) {
            return _outputDir.get(this);
        }
        return outputDir;
    }

    set outputDir(value) { _outputDir.set(this, value); }

    get sourceDir() {
        if (_sourceDir.has(this)) {
            return _sourceDir.get(this);
        }
        return sourceDir;
    }

    set sourceDir(value) { _sourceDir.set(this, value); }
}

export default new config();