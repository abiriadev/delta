const calcAngle = (point1, point2) => radianToDegree(2 * Math.atan(
  (point2.x - point1.x) /
  (point1.y - point2.y) / 20
))

const max = (a, b) => a <= b ? a : b

const calcAngleWithSin = (point1, point2) =>
  radianToDegree(

    max(
      Math.asin(
        (point2.x - point1.x) /
        calcLength(point1, point2)
      ),
      -Math.acos(
        (point2.y - point1.y) /
        calcLength(point1, point2)
      )
    )

  )