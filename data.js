var http = require("https");
var token_index = 0;
let p = {FileSystemDirectoryEntry:"HEllo"};
const MyData = [];
function req_()
{
  const options = {
    "method": "GET",
    "hostname": "api.nftport.xyz",
    "port": null,
    "path": `/v0/nfts/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${token_index}?chain=ethereum`,
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "f636f122-48b6-45ec-942e-1415d9eda95b"
    }
  };
  const req = http.request(options, function (res) {
    const chunks = [];
    token_index++;
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
    
    res.on("end", function () {
      const body = Buffer.concat(chunks);
      let result = body.toString();
      result = JSON.parse(result);
      if (result.response == 'OK')
        MyData.push(result);
    });
  }); 
  req.end();
}
setInterval(req_, 500);
