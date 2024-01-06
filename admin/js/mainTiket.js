let registro = []

registro = JSON.parse(localStorage.getItem('tiket')) // convierte a valores del array

console.log(registro)

let tiket = document.getElementById("tiket")

function fnTiket() {
    tiket.innerHTML = ""

    registro.forEach((e, i) => {
        tiket.innerHTML += `
    
        <tr class="table-content">
            <td class="table-item">${e.nombre}</td>
            <td class="table-item">${e.monto}</td>
            <td class="table-item">${e.cPago}</td>
            <td class="table-item">${e.uPago}</td>
        </tr>
        `
    })

}

fnTiket()
