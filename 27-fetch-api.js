// Fetch API
// Es una funcion de JS que permite realizar peticiones HTTP, incluyendo GET, POST, PUT, DELETE, ETCs

function getEmployees() {
    // Aqui se copiaria la URL, https://www.ricoprogramar.com
    const file = 'employees.json';

    fetch(file)
        .then(result => {
            return result.json();
        })
        .then(data => {
            console.log(data);
            // Desestructuracion de objetos
            const { employees } = data;
            console.log(employees);
            // Se itera por el arreglo
            employees.forEach(employe => {
                console.log(employe.id)
                console.log(employe.userName)
                console.log(employe.job)

                document.querySelector('.content').textContent += employe.userName;
            })
        })
}


getEmployees();