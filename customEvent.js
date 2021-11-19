
const customEv = document.createEvent('CustomEvent')

customEv
.initCustomEvent('asds', false, false, {
  asdfgh: 1819936
})

const h1 = document.createElement('h1')
h1.addEventListener('asds', ev => {
  console.log(JSON.stringify(ev.detail.asdfgh))
})

console.log(h1.nodeName);
document.body.appendChild(h1)
h1.innerText = "header"

setTimeout(
  () => {
    h1.dispatchEvent(customEv)
  }, 4000
)