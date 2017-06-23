'use strict';
var request = require('request');
var cheerio = require('cheerio');

var urlReq = 'http://www.google.com.br/search?gcx=c&ix=c1&sourceid=chrome&ie=UTF-8&q=teste';

request(urlReq, function(error,response, body){
    var $ = cheerio.load(body);
//console.log(body)
    console.log($('div.g').text());

});
//'div#result', 'section.result-list', 'article.result-item'
