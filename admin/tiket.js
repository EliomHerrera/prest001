let factura = []

let divFactura = document.getElementById("factura")

let textPlane = localStorage.getItem('factura')
factura = JSON.parse(localStorage.getItem('factura'))

divFactura.innerHTML = `
    <div class="card text-center bg-dark w-100" >
    <h3 class="text-light bg-dark m-4"> ${factura[0].uPago}</h3>
    
    <div class="blanco">
    </div class="d-flex justify-content-center">  
    
    <img class="rounded" src="./persona.jfif" >
    <h1 class="text-dark card m-4"> ${factura[0].nombre}</h1>
        <div class="bg-dark">
        <h4 class="text-light">Monto: ${factura[0].monto}</h4>
        <h2 class="text-light" >Pago: #${factura[0].cPago}</h2>
        </div>
        <div class="bg-success p-2">
            <h1>Pagado</h1>
        </div>
    </div>
`