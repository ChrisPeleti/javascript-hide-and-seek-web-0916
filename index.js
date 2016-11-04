function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested')
}

function deepestChild() {
  return document.querySelector('#grand-node')
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list')
  for (let cv = 0; cv < list.length; cv++) {
    list[cv].innerHTML = parseInt(list[cv].innerHTML)
  }
}
