const dip = (ev, domObj) => {
  const point = document.createElement('div')
  point.setAttribute('class', 'point')
  with(point.style) {
    left = `${ev.touches[0].clientX}px`
    top = `${ev.touches[0].clientY}px`
  }

  domObj.appendChild(point)
  return point
}

const dipListener = ev => {
  dip(ev, document.body)
}

document.body.addEventListener('touchstart', dipListener)
document.body.addEventListener('touchmove', dipListener)