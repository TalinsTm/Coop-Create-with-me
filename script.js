document.getElementById('routeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const routeName = document.getElementById('routeName').value;
    const routeDescription = document.getElementById('routeDescription').value;
    const isPrivate = document.getElementById('isPrivate').checked;

    const routeItem = document.createElement('div');
    routeItem.classList.add('route-item');
    
    routeItem.innerHTML = `
        <h3>${routeName} ${isPrivate ? '(Приватный)' : ''}</h3>
        <p>${routeDescription}</p>
        `;

   document.getElementById('routesList').appendChild(routeItem);

   // Очистка формы
   document.getElementById('routeForm').reset();
});