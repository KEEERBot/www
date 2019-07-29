;(function() {
  var $ = function(sel) {return document.querySelector(sel)}
  var $$ = function(sel) {return document.querySelectorAll(sel)}
  var appbar = $('#appbar')
  var header = $('.container.header')
  if(header && !header.classList.contains('nohide')) {
    var hidden = true
    window.addEventListener('scroll', function() {
      var rect = header.getBoundingClientRect()
      if(hidden && rect.top + rect.height - 64 < 0) {
        appbar.classList.remove('hidden')
        hidden = false
      }
      if(!hidden && rect.top + rect.height - 64 > 0) {
        appbar.classList.add('hidden')
        hidden = true
      }
    })
  } else {
    appbar.classList.remove('hidden')
  }

  var ripples = [].concat(Array.from($$('[data-ripple]')), Array.from($$('.mdc-button')))
  for(var i = 0; i < ripples.length; i++) {
    mdc.ripple.MDCRipple.attachTo(ripples[i])
  }
})()
