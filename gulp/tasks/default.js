import gulp from "gulp";
import config from "../config";
import "./html";
import "./javascript";
import "./less";
import "./staticContent";
import "./watch";

gulp.task("tasks", ["html", "javascript", "less", "staticContent","watch"]);

gulp.task("initialize", () => {
    console.log("**** Configuration ****")
    console.log(`Root folder : ${config.paths.rootDir}`)
    console.log(`Source folder : ${config.paths.sourceDir}`)
    console.log(`Outputting all files to : ${config.paths.outputDir}`)
    console.log("**** Configuration ****\n")

    gulp.start("tasks");
});

gulp.task("default", ["initialize"]);

export default {
    get config() {
        return config;
    }
}
