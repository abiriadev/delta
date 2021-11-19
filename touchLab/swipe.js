let x = 0
let y = 0

let last = null;

const swipe = (domObj, query) => {
  domObj.ontouchstart = ev => {

    x = ev.touches[0].clientX
    y = ev.touches[0].clientY

    last = ev
  }

  domObj.ontouchend = ev => {
    const relX = x - last.touches[0].clientX
    const relY = y - last.touches[0].clientY

    const swipeEv = document.createEvent('CustomEvent');
    const diraction = (relX < -102 ? 'right' : 0) || (relX > 102 ? 'left' : 0) || (relY < -102 ? 'up' : 0) || (relY > 102 ? 'down' : 0)

    const willev = {
      relX,
      relY
    }
    
    // swipe
    if (diraction) {
      console.log(`${diraction} swipe`);
      willev['diraction'] = diraction
      swipeEv.initCustomEvent(
        'swipe', true, true, willev)
    }
    //swipe canceled
    else {
      console.log('swipe canceled');
      swipeEv.initCustomEvent('swipecancel', true, true, willev);
    }
    document.querySelector(query).dispatchEvent(swipeEv)
  }

  domObj.ontouchmove = ev => {
    last = ev
    const relX = x - last.touches[0].clientX
    const relY = y - last.touches[0].clientY

    const swipeEv = document.createEvent('CustomEvent')

    swipeEv.initCustomEvent('swipeing', true, true, {
      relX,
      relY
    })

    document.querySelector(query).dispatchEvent(swipeEv)
  }
}