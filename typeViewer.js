const all = document.getElementsByTagName('*')


const eleSet = new Set()

log(toArray(all).concat([document.createTextNode('wouqcupoauyoqxod')
,
document.createComment('sioxgaiwg'),
document.createAttribute('max'),
document.createDocumentFragment('a'),

]).forEach(
  ele => log(
    ele instanceof HTMLElement ||
    ele instanceof Text ||
    ele instanceof Comment ||
    ele instanceof Attr ||
    ele instanceof DocumentType ||
    ele instanceof Document


    ,
    ' - ' + ele.toString()
  )
), ' every')


const nav = function search(parentNode) {
  for (const node of parentNode.childNodes) {
      eleSet.add(node.toString())
log(  (node instanceof HTMLElement
)+node
)
  search(node)
  }
}

nav(document)

const iter = eleSet.values()

log("===========")

while(1){
  const value =iter.next()
  if(value.done)break
  console.log(value.value);

  
}


log(document instanceof HTMLElement)