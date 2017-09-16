const getItems = function() {

  const select = function(parent, selector) {
    return Array.prototype.slice.call(parent.querySelectorAll(selector))
  }

  const getPrice = function(element) {
    if (element && select(element, 'h3.item_price')[0]) {
      return select(element, 'h3.item_price')[0].getAttribute('content')
    }
    return 0
  }

  return select(document, 'section.tabsContent > ul > li > a')
    .map(function(element) {
      return {
        'title': element.getAttribute('title'),
        'href': element.getAttribute('href'),
        'price': getPrice(element)
      };
    });

}

module.exports.getItems = getItems
