const getCanvas = (index = 0) => {
  const canvas = document.getElementsByTagName('canvas')[index]
  
  return [
    canvas,
    canvas.getContext('2d'),
  ]
}


const adjustToViewport = element => {
  element.width = document.documentElement.clientWidth
  element.height = document.documentElement.clientHeight
}

const getViewportWidth = ()=> document.documentElement.clientWidth
const getViewportHeight = ()=> document.documentElement.clientHeight


