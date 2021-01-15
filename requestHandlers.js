var exec = require("child_process").exec;
var fs = require("fs");
var formidable = require("formidable");

// function start(response,postData){
function start(response,request){
    console.log('Request handler start was called');
    // exec("ls -alh",function (error,stdout,stderr){
    //     response.writeHead(200,{"Content-Type":"text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });
    // exec("find /",{timeout:10000,maxBuffer:20000*1024},function (error,stdout,stderr){
    //     response.writeHead(200,{"Content-Type":"plain/text"});
    //     response.write(stdout);
    //     response.end();
    // });

    //text area form
    // var body = '<html>'+
    //             '<head>'+
    //             '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">'+
    //             '</head>'+
    //             '<body>'+
    //             '<form method="post" action="/upload">'+
    //             '<textarea cols="60" rows="20" name="text"></textarea>'+
    //             '<input type="submit" value="Submit">'+
    //             '</form>'+
    //             '</body>'+
    //             '</html>';

    //upload form
    var body = '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">'+
                '</head>'+
                '<body>'+
                '<form method="post" action="/upload" enctype="multipart/form-data">'+
                '<input type="text" name="title">'+
                '<input type="file" name="upload" multiple="multiple">'+
                '<input type="submit" value="Submit">'+
                '</form>'
                '</body>'+
                '</html>';
    response.writeHead(200,{"Content-Type":"text/html"})
    response.write(body);
    response.end();

}

// function upload(response,postData){
function upload(response,request){
    console.log('Request handler upload was called');
    var form = formidable.IncomingForm();
    form.parse(request,function(error,fields,files){
        fs.rename(files.upload.path,"/tmp/test.png",function(error){
            if(error){
            fs.unlink("/tmp/test.png");
            fs.rename(files.upload.path,"/tmp/test.png");
            }
        })
    })
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("received image:\n");
    response.write("<img src='/show' />");
    response.end();
}

// function show(response,request){
function show(response){
    console.log('Request handler show was called');
    response.writeHead(200,{"Content-Type":"image/png"});
    fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;

