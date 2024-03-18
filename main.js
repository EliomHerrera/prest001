let user = []
let userId = 0
let fecha = ''

let nombre = document.getElementById("nombre")
let cantidad = document.getElementById("cantidad")
let metodo = document.getElementById("metodo")

let tablaDeudor = document.getElementById("tablaDeudor")

function fnDate() {

    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1;
    let ano = fechaActual.getFullYear();

    fecha = `${dia}-${mes}`

    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    userId = `${mes}${dia}${horas}${minutos}${segundos}`
}

async function fnUpd() {
    fnDate()

    if (localStorage.getItem('user') == null) {
        // convierte a texto plano
        localStorage.setItem('user', JSON.stringify(user))
    }

    // convierte a valores del array
    user = JSON.parse(localStorage.getItem('user'))

    tablaDeudor.innerHTML = ""

    for (let [index, i] of Object.entries(user)) {
        tablaDeudor.innerHTML += `
        <tr class="table-content">
            <td class="table-item">${i.nombre}</td>
            <td class="table-item">${i.cantidad}</td>
            <td class="table-item">${i.metodo}</td>

            <td>
                <button class="btn btn-danger" onclick="fnDel(${index})">X</button>
            </td>    
        </tr>
        `
    }
}

fnUpd()

let fnSend = document.getElementById("fnSend");
fnSend.addEventListener("click", () => {

    let clave = parseInt(prompt("Clave para crear cliente"))

    if (clave == 351) {
        let monto = 0
        let total = 0

        if (nombre.value == "") {
            alert("nombre esta vacio")
            return
        }

        if (cantidad.value == "") {
            alert("cantidad esta vacio")
            return
        }

        if (metodo.value == "Seleccionar") {
            alert("Seleccionar Diario o Semanal")
            return
        }

        if (metodo.value == "diario 24") {
            monto = ((parseInt(cantidad.value) * 0.20) + parseInt(cantidad.value)) / 24
            total = ((parseInt(cantidad.value) * 0.20) + parseInt(cantidad.value))
        }

        if (metodo.value == "diario 30") {
            monto = ((parseInt(cantidad.value) * 0.20) + parseInt(cantidad.value)) / 30
            total = ((parseInt(cantidad.value) * 0.20) + parseInt(cantidad.value))
        }

        if (metodo.value == "semanal") {
            monto = ((parseInt(cantidad.value) * 0.30) + parseInt(cantidad.value)) / 13
            total = ((parseInt(cantidad.value) * 0.30) + parseInt(cantidad.value))
        }

        user.push({
            id: userId,
            nombre: nombre.value,
            cantidad: cantidad.value,
            metodo: metodo.value,
            monto: monto,
            uPago: '',
            cPago: 0,
            total: total
        })

        nombre.value = ""
        cantidad.value = ""
        metodo.value = "Seleccionar"

        localStorage.setItem('user', JSON.stringify(user))

        fnUpd()
    } else {
        alert('clave incorrecta')
    }
})

function fnDel(index) {

    let clave = parseInt(prompt("Clave Para Borrar Cliente"))

    if (clave == 350) {
        user.splice(index, 1)

        localStorage.setItem('user', JSON.stringify(user))

        fnUpd()
    } else {
        alert('clave incorrecta')
    }
}

