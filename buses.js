  const form = document.querySelector('form');
const busesList = document.querySelector('#buses');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const start = document.querySelector('#start-location').value;
  const destination = document.querySelector('#destination-location').value;

  fetch('buses.json')
    .then(response => response.json())
    .then(buses => {
      busesList.innerHTML = '';
      for (let bus of buses) {
        if (bus.start === start && bus.destination === destination) {
          let busItem = document.createElement('li');
          busItem.innerHTML = `Bus No. ${bus.busNumber} starts from ${bus.start} to  ${bus.destination}`;
          busesList.appendChild(busItem);
        }
    
      }
    })
    .catch(error => {
      console.error('Error fetching buses data:', error);
    });
});
