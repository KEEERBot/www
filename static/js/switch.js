;(function () {
  var $ = function (sel) { return document.querySelector(sel) }
  var $$ = function (sel) { return document.querySelectorAll(sel) }
  switchButton = $('#switch-person')
  peopleList = $$('.people')
  for (var i = 0; i < peopleList.length; i++) {
    peopleList[i].classList.add('hidden')
    peopleList[i].classList.add('nodelay')
    peopleList[i].removeAttribute('data-show')
  }
  var displayNumber = Math.floor(Math.random() * (peopleList.length))
  var displayPerson = peopleList[displayNumber]
  displayPerson.classList.remove('hidden')
  switchButton.onclick = function () {
    var oldPerson = displayPerson
    oldPerson.removeAttribute('data-show')
    oldPerson.classList.add('ghost')
    var x = Math.floor(Math.random() * (peopleList.length - 1))
    if (x >= displayNumber) x++
    // now x belongs to [0, peopleList.length), and doesn't equal to the old displayNumber.
    displayNumber = x
    displayPerson = peopleList[x]
    displayPerson.removeAttribute('data-show')
    displayPerson.classList.remove('hidden')
    setTimeout(function () { displayPerson.setAttribute('data-show', '') }, 50)
    setTimeout(function () {
      oldPerson.classList.remove('ghost')
      oldPerson.classList.add('hidden')
    }, 250)
  }
})()
