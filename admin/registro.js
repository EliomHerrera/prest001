let registro = []

registro = JSON.parse(localStorage.getItem('tiket')) // convierte a valores del array

// console.log(registro)

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

            <td>
                <button class="btn btn-success" onclick="fnCrearTiket(${i})">Tiket</button>
            </td>  
            
        </tr>
        `
    })

}

fnTiket()

function fnCrearTiket(index) {

    let factura = []

    if (localStorage.getItem('factura') == null) {
        // colocar en cada funcion que modifique el array
        localStorage.setItem('factura', JSON.stringify(factura))
    }

    factura = JSON.parse(localStorage.getItem('factura'))
    factura = []
    factura.push(registro[index])
    localStorage.setItem('factura', JSON.stringify(factura))
    alert("Tiket Creado")
}
