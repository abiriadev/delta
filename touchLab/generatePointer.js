const offset = -25
// -22

const move = (pointer, t) => {
  with(pointer.style) {
    top = `${t.clientY + offset}px`
    left = `${t.clientX + offset}px`
  }
}

const allmove = (move => {
  return ev => {
    for (let i = 0; i < ev.touches.length; ++i) move(pointerArr[i].pointer, ev.touches[i])
  }
})(move)

class Pointer {
  constructor(
    ev,
    pointer
  ) {
    this.ev = ev
    this.pointer = pointer
  }
}

pointerArr = []

cycle = false
cynum = 0
salen = 0
last = ''

colorlist = ['red', 'blue', 'yellow', 'green', 'perple']

const setTouchZone = (domObj, movePointer) => {

  domObj.addEventListener('touchstart', ev => {

    const newTouch = ev.touches[ev.touches.length - 1]

    const pointer = document.createElement('div')
    pointer.setAttribute('class', 'pointer')
    //const text = document.createTextNode(i)
    //pointer.appendChild(text)
    move(pointer, newTouch)
    pointer.style.borderColor = colorlist[pointerArr.length % colorlist.length]
    domObj.appendChild(pointer)

    pointerArr.push(new Pointer(ev, pointer))

    /*pointer.style = {
    ...pointer.style,
    top: `${e.pageY}px`,
    left: `${e.pageX}px`,
    }*/

    console.log("=====START=====");
    console.log(`length: ${ev.touches.length}`);
    console.log(`pointerArr: ${pointerArr.length}`);
    strfy(
     _.map(ev.touches
     ,touch => touch.identifier)

    );


    cycle = true
    last = 'start'
  })
  if (movePointer) {
    domObj.addEventListener('touchmove', ev2 => {
      //console.log("=-=-=-=-=-=-=-=-=");
      //console.log(`${pointer.ev.touches[0].cu}`);

      allmove(ev2)

      if (cynum == 0 || last != 'move') {
        console.log("===MOVE===")
        cynum = 1
      }

      if (salen != ev2.touches.length || last != 'move') {
        salen = ev2.touches.length
        console.log(`length: ${ev2.touches.length}`)
        console.log(`pointerArr: ${pointerArr.length}`);
      }

      last = 'move'
    })

    domObj.addEventListener('touchend', ev3 => {

      const p = pointerArr.pop()
      //pointerArr[ev3.touches.length]
      domObj.removeChild(p.pointer)

      allmove(ev3)

      console.log("==END==");
      console.log(`length: ${ev3.touches.length}`);
      console.log(`pointerArr: ${pointerArr.length}`);

      cycle = false
      cynum = 0
      salen = 0
      last = 'end'
    })
  }
}