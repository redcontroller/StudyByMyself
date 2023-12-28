// 타입 가드(Guards)

function logText(el: Element) {
    console.log(el.textContent)
}

const h1El = document.querySelector('h1')
if (h1El instanceof HTMLHeadingElement) {
    logText(h1El)
}