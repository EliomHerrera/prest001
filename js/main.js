if (document.querySelectorAll('.acordeon') == true) {
    let container = document.querySelectorAll('.acordeon')
    let content = document.querySelectorAll('.acordeon-content')

    for (const [i, e] of container.entries()) {
        e.addEventListener("click", () => {
            AddClassNone()
            content[i].classList.remove("d-none")
        })
    }

    function AddClassNone() {
        for (let i of content) {
            i.classList.add("d-none")
        }
    }

    AddClassNone()

    content[0].classList.remove("d-none")
}