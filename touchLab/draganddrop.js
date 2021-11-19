//Object.property.forEach = function(call) { Object.keys(this).forEach(key => call(this[key], key, this)); return this }
/*const _forEach = (obj, call, lastinit = '') => {
  let last = lastinit
  for (const key in obj) {
    last = call.call(obj, obj[key], key, obj, last)
  }
  return last
}*/
/*const getScrollDistance = type => new function() {
  this.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
  this.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
}
const getDocumentPosition = element => {
  let rect = element.getBoundingClientRect()
  const scroll = getScrollDistance()
  return {
    x: scroll.x + rect.top,
    y: scroll.y + rect.left
  }
}*/

const drag = query => {
  try {

    let pos = {
      clientX: 200,
      clientY: 200
    }

    const ele = document.querySelector(query)

    const touchbox = 0
    const reference = call => call(ele)
    const clfilter = xyzlist => Object.keys(xyzlist).reduce((last, propname) => ({ ...last, [propname.match(/[xyz]/i)[0].toUpperCase()]: xyzlist[propname] }), {})
    const styler = (element, styleable) => ({ ...element.style, ...styleable })
    const toTransform = (transformFunction, unit) => xyzRate => Object.keys(xyzRate).reduce((last, rateType) => last + `${transformFunction}${rateType}(${xyzRate[rateType]}${unit}) `, '')
    const calcRelativePosition = (ev, pos) => calcPropertyDifferance((a, b) => a - b)(['clientX', 'clientY'])(ev)(pos)
    const calcPropertyDifferance = assistantOperator => propertys => standardObject => comparisonObject => propertys.reduce((propertyDifferanceObject, property) => ({ ...propertyDifferanceObject, [property]: assistantOperator(standardObject[property], comparisonObject[property]) }), {});
    const calcRelativePosition1 = ev => {
      return {
        x: -pos.clientX + ev.clientX,
        y: -pos.clientY + ev.clientY,
      }
    }
    const moveMaker = element => ev => {
      const clp = calcRelativePosition1(ev.touches[0])
      //const clp = {
      //  x: clpos.clientX,
      //  y: clpos.clientY,
      //}

      try {
        const tt = toTransform('translate', 'px')(clp)
        //const tr = {
        // 'transform': tt
        //}

        // ele.style=styler(element, tr)
        // document.querySelector(query).style.transform = tt
        ele.style.transform = tt

        //print(element.style.backgroundColor=`rgb(${ev.touches[0].clientY / 2}, 100, 100)`)

      } catch (err) {
        print(err, 'MakerCatch')
      }
    }

    const move = moveMaker(ele)

    ele.ontouchstart = evs => {
      try {
        pos = evs.touches[0]
        //move(pos, ev)
      } catch (err) {
        print(err)
      }
      // print("t5tt28wishw")
    }

    ele.ontouchmove = ev => {
      try {
        move(ev)
      } catch (err) {
        print(err)
      }
    }

    touchbox.ontouchend = ev => {
      print("73384844848")

      //ele = document.querySelector(query)
    }

    ele.onclick = ev => {
      ele.style.backgroundColor = 'red'
    }
  } catch (err) {
    print(err, 'main')
  }
}