import gulp from "gulp";
import config from "../config";

gulp.task("default", ["html", "javascript", "less", "staticContent","watch"]);
