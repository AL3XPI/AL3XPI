var siteWidth = 3840;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');