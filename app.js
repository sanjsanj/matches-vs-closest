const elements = ["div", "p", "span", "a", "section", "article"]
const strings = ["A string", "B string", "C string", "D string"]

let getRandomFrom = arr => (arr[Math.floor(Math.random() * arr.length)])

let addNode = () => {
  const node = document.createElement(getRandomFrom(elements));
  node.className = getRandomFrom(strings);
  node.innerText = getRandomFrom(strings);
  document.body.appendChild(node);
}

const times = x => f => {
  if (x > 0) {
    f()
    times(x - 1)(f)
  }
}

times(20)(addNode)
