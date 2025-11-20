function downloadClients() {
    return new Promise(resolve => {
        // Aqui va el codigo con la ruta para descargar los clientes
        console.log('Descargando clientes');
        // Estas lineas se ejecutan despues de pasado un tiempo determinado en la programacion
        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 3000);
    })
}

// async function app() {
//     try {
//         const clients = await (downloadClients())
//         const clients = await (downloadClients())
//         console.log('Este codigo si se bloquea');
//         console.log(clients);
//     } catch (error) {
//         console.log(error);

//     }

// }


function dowloadLastestTextOrders() {
    return new Promise(resolve => {
        console.log('Descargando pedido de texto');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 12000);
    })
}


// Otro metodo

async function app() {
    try {
        // Metodo mas eficiente
        const result = await Promise.all([downloadClients(), dowloadLastestTextOrders()])
        console.log('Este codigo si se bloquea');
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);

    }

}

app();
console.log('Este codigo no se bloquea');







