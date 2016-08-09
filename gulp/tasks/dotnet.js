import gulp from "gulp";
import start from "gulp-start-process";
import ps from "ps-node";
import config from "../config";

var dotnetProcess = null;
var starting = false;

function startDotnet(stream, cb) {
    if( starting ) return;
    
    starting = true;

    ps.lookup({}, (error, resultList) => {
        if (error) throw new Error(error);

        var processFound = null;

        resultList.forEach(process => {
            if (process.command.indexOf(config.paths.dotnetProcessString) > 0) {
                processFound = process;
                return;
            }
        });

        let dotnetStart = () => {
            dotnetProcess = start("dotnet run", { setsid: true }, cb);
            starting = false;
        };

        if (processFound != null) {
            ps.kill(processFound.pid, (error) => {

                if (error) throw new Error(error);
                
                dotnetStart();
            });
        } else {
            dotnetStart();
        }
    });
}

export function dotnetPipeline(stream, cb) {
    startDotnet(stream, cb);
}

gulp.task("dotnet", cb => {
    dotnetPipeline(null, cb);
});