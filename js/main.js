let acordeon = document.querySelectorAll('.acordeon')
let headerItem = document.querySelectorAll('.header-item')
let mainContent = document.querySelector('.main-content')
let mainItem = document.querySelectorAll('.main-item')

// acordeon
acordeon.forEach(i => {
    i.addEventListener("click", () => {
        addClassAcordeon()
        i.children[1].classList.remove("none")
    })
})

function addClassAcordeon() {
    acordeon.forEach(i => {
        i.children[1].classList.add("none")
    })
}

addClassAcordeon()

// show Router
function addClassMainItem() {
    for (let i of mainItem) {
        i.classList.add("none")
    }
}

addClassMainItem()

mainItem[0].classList.remove("none")

for (const [index, value] of headerItem.entries()) {
    headerItem[index].addEventListener("click", () => {
        addClassMainItem()
        mainItem[index].classList.remove("none")
    })
}

// remove nodo Router
// function removeMain() {
//     mainItem.forEach((value, index) => {
//         value.remove()
//     })
// }

// removeMain()

// mainContent.appendChild(mainItem[0])

// mainItem.forEach((value, index) => {
//     headerItem[index].addEventListener("click", () => {
//         removeMain()
//         mainContent.appendChild(mainItem[index])
//     })
// })

