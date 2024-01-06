let user = []
let tiket = []

let tablaPagos = document.getElementById("tablaPagos")
let fecha = ''

function fnDate() {

    let fechaActual = new Date();

    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1;
    let ano = fechaActual.getFullYear();

    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    fecha = `${dia}-${mes}`
}

fnDate()

let fechaOjo = document.getElementById("fechaOjo")
fechaOjo.textContent = fecha + '-2024'

async function fnUpd() {

    // convierte a valores del array
    user = JSON.parse(localStorage.getItem('user'))

    tablaPagos.textContent = ""

    for (let [index, i] of Object.entries(user)) {
        tablaPagos.innerHTML += `
                <tr class="table-content">
                    <td class="table-item">${i.nombre}</td>
                    <td class="table-item">${i.monto}</td>
                    <td class="table-item">${i.total - (i.cPago * i.monto)}</td>
                    <td class="table-item">${i.cPago}</td>

                    <td>
                        <button class="btn green" onclick="fnPagar(${index})">Pagar</button>
                    </td>    

                </tr>
                `
    }
}

fnUpd()

function fnPagar(index) {

    let clave = parseInt(prompt("Clave Para Pagos"))

    if (clave == 351) {
        user[index].cPago++

        localStorage.setItem('user', JSON.stringify(user))

        fntiket(index)
        fnUpd()

    } else {
        alert('clave incorrecta')
    }
}

function fntiket(num) {

    if (localStorage.getItem('tiket') == null) {

        localStorage.setItem('tiket', JSON.stringify(tiket)) // convierte a texto plano

    }

    tiket = JSON.parse(localStorage.getItem('tiket')) // convierte a valores del array

    tiket.unshift({
        nombre: user[num].nombre,
        metodo: user[num].metodo,
        monto: user[num].monto,
        cantidad: user[num].cantidad,
        cPago: user[num].cPago,
        uPago: fecha + '-2024'
    })

    if (tiket.length > 25) {
        tiket.pop()
    }

    tiket = localStorage.setItem('tiket', JSON.stringify(tiket)) // convierte a texto plano
}

