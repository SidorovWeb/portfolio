function getItemByIndex(items, index) {
  return items[index]
}

function getWidth(item) {
  return item.offsetWidth
}

function getHeight(item) {
  return item.offsetHeight
}

function windowHeight() {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  )
}
function windowWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  )
}
export { getItemByIndex, getWidth, getHeight, windowHeight, windowWidth }
