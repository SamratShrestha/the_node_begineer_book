var exec = require("child_process").exec;

function start(response){
    console.log('Request handler start was called');
    exec("ls -alh",function (error,stdout,stderr){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });
    // exec("find /",{timeout:10000,maxBuffer:20000*1024},function (error,stdout,stderr){
    //     response.writeHead(200,{"Content-Type":"plain/text"});
    //     response.write(stdout);
    //     response.end();
    // });
}
function upload(response){
    console.log('Request handler upload was called');
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello upload");
    response.end();
}
exports.start = start;
exports.upload = upload;

