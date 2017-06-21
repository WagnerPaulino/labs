'use strict';
var request = require('request');
var cheerio = require('cheerio');

var urlReq = 'https://busca.uol.com.br/result.html?term=ola';

request(urlReq, function(error,response, body){
    var $ = cheerio.load(body);

    console.log($('div[id=result]').html());

});
'div#result', 'section.result-list', 'article.result-item'