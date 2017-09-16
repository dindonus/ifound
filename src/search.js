const debug = require('./utils/debug')
const remote = require('./remote')
const url = 'https://www.leboncoin.fr/telephonie/offres/ile_de_france/?o=1&q=iphone%207'

//var utils = require('utils')
// if (!/2016|2017/.test(item.title))

debug("Loading: " + url)

var terminate = function() {
  this.echo("Exiting..").exit();
};

var casper = require('casper')
  .create({verbose: true})
  .start(url)
  .then(function() {
    debug("Parsing: " + this.getTitle());
    const items = this.evaluate(remote.getItems)
    debug(items.length + ' items found')
  })
  .then(terminate)
  .run();
