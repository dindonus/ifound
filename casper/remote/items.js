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

  const getLocation = function(element) {
    const metas = element ? select(element, 'meta[itemprop="address"]') : []
    return metas
      .map(function(meta) {
        return meta.getAttribute('content')
      })
      .join(' / ')
  }

  const getDate = function(element) {
    if (element) {
      const meta = select(element, 'p[itemprop="availabilityStarts"]')
      return meta ? meta[0].innerText.trim() : ''
    }
    return ''
  }

  return select(document, 'section.tabsContent > ul > li > a')
    .map(function(element) {
      return {
        title: element.getAttribute('title'),
        href: element.getAttribute('href'),
        price: getPrice(element),
        location: getLocation(element),
        date: getDate(element)
      }
    })

}

module.exports.getItems = getItems
