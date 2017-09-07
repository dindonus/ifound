var utils = require('utils');

var getItems = function() {
    var elements = document.querySelectorAll('section.tabsContent > ul > li > a');
    var getPrice = function(element) {
        if (element && element.querySelectorAll('h3.item_price')[0]) {
            return element.querySelectorAll('h3.item_price')[0].getAttribute('content');
        }
        return 0;
    }
    elements = Array.prototype.slice.call(elements);
    return elements.map(function(element) {
        return {
            'title': element.getAttribute('title'),
            'href': element.getAttribute('href'),
            'price': getPrice(element)
        };
    });
}

var formatItem = function(item) {
    return "[" + item.price + "€] " + item.title + "\n" + item.href;
}

var matchFilter = function(item) {
    if (item.price > 1300) {
        return false;
    }
    if (!/2016|2017/.test(item.title)) {
        return false;
    }
    return true;
}

var processPage = function() {
    console.log("data received on page: " + this.getTitle());
    var result = this.evaluate(getItems)
        .filter(matchFilter)
        .map(formatItem)
        .join("\n\n");
    console.log(result);
}

console.log("loading...");

var casper = require('casper').create({verbose: true})
    .on('remote.message', function(msg) {
         this.echo('remote message caught: ' + msg);
    })
    .start('https://www.leboncoin.fr/annonces/offres/ile_de_france/?o=2&q=macbook')
    .then(processPage)
    .run();
