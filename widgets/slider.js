const createRange = option => {
  let range = null

  if (option.findSliderAtDOM) {
    range = document.body.querySelector(option.findTo)
  } else {
    range = document.createElement('input')

    range.type = 'range'
    range.min = option.min
    range.max = option.max
    range.value = option.value

    document.body.appendChild(range)
  }
  return range
}

const setSlider = (targetQuery, property, option = {}) => {

  /*option = {
    unit: 'px',
    min: 0,
    max: 100,
    value: 50,
    findSliderAtDOM: false,
    findTo: 'input[type="range"]',
    ...option,
  }*/

  defult = {
    customValueTemplate: null,
    unit: 'px',
    min: 0,
    max: 100,
    value: 50,
    findSliderAtDOM: false,
    findTo: 'input[type="range"]',
    call: null
  }

  for (const key in option) {
    defult[key] = option[key]
  }

  option = defult

  const range = createRange(option)

  // vetification
  if (!range) {
    console.log("range가 null입니다")
    return 1
  }

  const targetList = document.body.querySelectorAll(targetQuery)

  if (!targetList.length) {
    console.warn("targerList가 비어있습니다")
  }

  const numbox = document.createElement('p')
  document.body.appendChild(numbox)
  numbox.innerText = range.value

  const template =
    (
      () =>
      option
      .customValueTemplate ?
      (
        () => {
          const templateParts = option.customValueTemplate.split(/\$\{value\}/)
          return value => templateParts.join(value)
        }
      )() :
      value => `${value}${option.unit}`)()

  range.addEventListener('input', function(ev) {
    targetList.forEach(target => {
      target.style[property] = template(this.value)
    })
    numbox.innerText = ev.target.value
  })
}