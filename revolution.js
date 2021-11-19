const pipeline = (...funcs) => seed => funcs.reduce((l, r) => r(l), seed);



const degreeToRadian = deg => deg * Math.PI / 180;
const radianToDegree = rad => rad * 180 / Math.PI

const getXY = radius => deg => {
  const x = Math.sin(degreeToRadian(deg)) * radius
  const y = Math.cos(degreeToRadian(deg)) * radius

  return [x, y]
}

const toLeftTopCoordinate = radius => xy => xy.map(value => value + radius)

const moveToDeg = radius => {
  const getXYr = getXY(radius)
  const toLeftTopCoordinater = toLeftTopCoordinate(radius)
  return pipeline(
    getXYr,
    (xy) => [xy[0], -xy[1]],
    toLeftTopCoordinater
  )
}

const XYarrayToLeftTop = xy => new function() {
  this.left = xy[0]
  this.top = xy[1]
}

const toCssUnit = unit => values => _.map(values, value => `${value}${unit}`)

const toPixel = toCssUnit('px')

const insetOrbit = (radius, planetRadius, insetOrbitOffset, option) => {
  insetOrbitOffset = insetOrbitOffset || planetRadius
  radius -= insetOrbitOffset
  const move = moveToDeg(radius)

  if (option && option.orbitInsetBorderWidth) insetOrbitOffset -= option.orbitInsetBorderWidth
  return deg => move(deg).map(lefttop => lefttop + insetOrbitOffset - planetRadius)
}


const revolutionTemplate = planet => (radius, planetRadius) => option => {
  let deg = 0
  //deltadeg = 0.01
  //rate = 1
  //delay = 8

  const lt = lefttop(planet)
  const moveToInsetOrbit = insetOrbit(
    radius,
    planetRadius
  )

  const move = pipeline(
    moveToInsetOrbit,
    toPixel,
    XYarrayToLeftTop,
    lt
  )

  return setInterval(() => {
    deg += option.deltadeg
    move(deg / option.rate)
  }, option.delay)
}

/*const move = pipeline(
  moveToInsetOrbit,
  toPixel,
  XYarrayToLeftTop,
  lt
)*/

const setToDeg = (ele, radius, deg) => pipeline(
  moveToDeg(radius),
  toPixel,
  XYarrayToLeftTop,
  lefttop(ele)
)(deg)