const fs = require('fs')

const request = require('request');
const urlName =  "http://www.example.edu/";
const path = "/Users/honglingzhang/w2/d3/page-fetcher/index.html";

request(urlName, (error,response, body)=> {
  
  fs.writeFile(path, body, err => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
    })
    

  });