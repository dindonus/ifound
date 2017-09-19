const casper = require('casper').create()
const debug = require('./utils/debug')
const remote = require('./remote/items')

const url = casper.cli.options.url
// https://www.leboncoin.fr/telephonie/offres/ile_de_france/?o=1&q=iphone%207

const terminate = function() {
  //this.echo("Exiting...").exit()
  this.exit()
}

//debug("Loading: " + url)
casper
  .start(url)
  .then(function() {
    const items = this.evaluate(remote.getItems)
    //debug(items.length + " items found on " + this.getTitle())
    debug(items)
  })
  .then(terminate)
  .run()
