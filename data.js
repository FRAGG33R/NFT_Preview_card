const http = require("https");
const { connected } = require("process");
const { compileFunction } = require("vm");

const options = {
  "method": "GET",
  "hostname": "api.nftport.xyz",
  "port": null,
  "path": "/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "f636f122-48b6-45ec-942e-1415d9eda95b"
  }
};

const req = http.request(options, (res) => {
  const chunks = [];
  res.on("data", (chunk) => {
    chunks.push(chunk);
  });
    res.on("end", () => {
    const body = Buffer.concat(chunks);
    let result = body.toString();
    result = JSON.parse(result);
    for(let i = 0; i < 10; i++)
    {
        let isnum = /^\d+$/.test(result.nfts[i].token_id);
        if (isnum)
        {
            //send request
        }
    }
});
});

req.end();
