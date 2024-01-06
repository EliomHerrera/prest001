let tiket = document.getElementById("tiket")

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