// In thsi topic we will learn about how we can travel all the way to the whole html file called tree traversing.
// There is alot of method which we can use to travel all the html through the methods.
// We will travel the html file which is conected to our javascript file.

// 1. For getting rootNode
// This method will provide you a main document
const rootNode = document.getRootNode()
// console.log(rootNode)

// 2. For getting child of elements.
const rootChild = rootNode.childNodes[0]
// console.log(rootChild)   // So it will print the [html]

// const htmlChilds = rootChild.childNodes   // NodeList(3) [head, text, body] Output
// The #text means all the newline spaces
// console.log(htmlChilds)

const head = rootChild.childNodes[0]
const body = rootChild.childNodes[2]
// console.log(head)
// console.log(body)

// NOTE - chilNode property will provide you a #text as well but the if you dont want the #text then you can simply use children property.
// childNodes - This will provide #text
// children - This will not provide #text
console.log(body.childNodes)
console.log(body.children)


// 3. For getting siblings
// nextSibling - This property will not skip the #text elements.
// nextElementSibling - This property will skip the #text.
const siblings = head.nextSibling
const siblings2 = head.nextElementSibling
// console.log(siblings)
// console.log(siblings2)


// Getting head childs
const headChild = head.childNodes
const titleElement = headChild[2]
// console.log(headChild)
// console.log(titleElement)

// Now here we move all the way to childrens and siblings.
// And now we will move to the children to the parents.
const titleParent = titleElement.parentNode.parentNode   // Will provide the html.
// console.log(titleParent)


// Now lets try with he body element with some tasks.
const bodyChild = body.childNodes[1].childNodes[1]   // This will provide the container and we are moving through shortly and selected h1.
// console.log(bodyChild)
bodyChild.style.backgroundColor = "#333"
bodyChild.style.color = "#efefef"


// Now we will move through the parent wise. And do the task that "Change the color of the body"
const bodyChildparent = bodyChild.parentNode.parentNode
// Moving through directly to the body
// console.log(bodyChildparent)

bodyChildparent.style.backgroundColor = "black"
bodyChildparent.style.color = "white"

// So now we came here all the way through rooNode. But we can directly select the element
const h1 = document.querySelector("h1")
const h1Parent = h1.parentNode.parentNode

bodyChildparent.style.backgroundColor = "white"
bodyChildparent.style.color = "black"

// console.log(h1Parent)

// TIP - We can directly select the elements as we use querySelector
const body2 = document.body
// console.log(body2)


// We can also use the querry selector inside of the elements.
const head2 = document.querySelector("head")
// console.log(head.querySelector("title").childNodes)
