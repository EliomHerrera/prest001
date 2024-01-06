let tablaPagos = document.getElementById("tablaPagos")

let fecha = ''

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

fnDate()

async function fnUpd() {

    if (localStorage.length == 0) {
        // convierte a texto plano
        localStorage.setItem('user', JSON.stringify(user))
    }

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

        fnUpd()
    } else {
        alert('clave incorrecta')
    }
}

let fechaOjo = document.getElementById("fechaOjo")
fechaOjo.textContent = fecha + '-2024'