let user = []

let nombre = document.getElementById("nombre")
let cantidad = document.getElementById("cantidad")
let metodo = document.getElementById("metodo")

let tablaDeudor = document.getElementById("tablaDeudor")
let tablaPagos = document.getElementById("tablaPagos")

let tiket = document.getElementById("tiket")

let fecha = ''
let userId = 0

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

    if (localStorage.length == 0) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    userLocal = localStorage.getItem('user')
    user = JSON.parse(userLocal)

    tablaDeudor.textContent = ""

    for (let [index, i] of Object.entries(user)) {
        tablaDeudor.innerHTML += `
        <tr class="table-content">
            <td>${i.nombre}</td>
            <td>${i.cantidad}</td>
            <td>${i.metodo}</td>

            <td>
                <button class="btn red" onclick="fnDel(${index})">X</button>
            </td>    
        </tr>
        `
    }

    tablaPagos.textContent = ""

    for (let [index, i] of Object.entries(user)) {
        tablaPagos.innerHTML += `
                <tr class="table-content">
                    <td>${i.nombre}</td>
                    <td>${i.monto}</td>
                    <td>${i.total - (i.cPago * i.monto)}</td>
                    <td>${i.cPago}</td>

                    <td>
                        <button class="btn green" onclick="fnPagar(${index})">Pagar</button>
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

        if (metodo.value == "diario") {
            monto = ((parseInt(cantidad.value) * 0.20) + parseInt(cantidad.value)) / 24
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

function fnTiket(index) {

    tiket.textContent = ""

    tiket.innerHTML = `

        <div class="tiket">
            <h3 class="tiket-title">Tiket Pagado</h3>

            <div class="tiket-content">

                <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                </svg>
                
                <div class="tiket-item">
                <h3>${user[index].nombre}</h3>
                    <p>Monto ${user[index].monto}</p>
                    <h3>Pago
                        <p><span>#</span> ${user[index].cPago}</p>
                    </h3>
                    <p class="fecha" >fecha ${fecha}</p>
                </div>
            </div>
        </div>
        `
}

function fnPagar(index) {

    let clave = parseInt(prompt("Clave Para Pagos"))

    if (clave == 351) {
        user[index].cPago++

        localStorage.setItem('user', JSON.stringify(user))

        fnTiket(index)
        fnUpd()
    } else {
        alert('clave incorrecta')
    }
}