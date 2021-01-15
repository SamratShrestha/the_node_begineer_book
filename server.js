var http = require('http');
var url = require('url');
var formidable = require('formidable');
var sys = require('sys');

function start(route,handle){
http.createServer(function(request,response){

    // var postData = "";
    var pathname = url.parse(request.url).pathname;

    console.log("Request for "+pathname+" received");
    route(handle,pathname,response,request);

    // request.setEncoding("utf-8");

    // request.addListener("data",function(postDataChunk){
    //     postData += postDataChunk;
    //     console.log("Received POST data chunk '"+postDataChunk +" '.")
    // })
    // request.addListener("end",function(){
    //     route(handle,pathname,response,postData);
    // })

    // response.writeHead(200,{"Content-Type":"text/plain"});
    // response.write("Hello World");
    // response.end()

    //formidable
    // if(request.url=="/upload" && request.method.toLowerCase()=='post'){
    //     var form = formidable.IncomingForm();
    //     form.parse(request,function(error,fields,files){
    //         response.writeHead(200,{"Content-Type":"text/plain"});
    //         response.write('received upload: \n\n')
    //         response.end(sys.inspect({fields:fields,files:files}));
    //     })
    //     return;
    // }
    // response.writeHead(200,{"Content-Type":"text/html"});
    // response.end(
    //     '<form method="post" action="/upload" enctype="multipart/form-data">'+
    //     '<input type="text" name="title">'+
    //     '<input type="file" name="upload" multiple="multiple">'+
    //     '<input type="submit" value="Submit">'+
    //     '</form>'
    // );
}).listen(8888);
console.log("Server has started");
}
exports.start = start;

