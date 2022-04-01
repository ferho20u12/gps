    let map = L.map('map').setView([20.65856439281416, -103.32348510503071], 6);

    function geoloc() {
        d=document.getElementById("demo");
        if (navigator.geolocation){
          d.innerHTML="<p>Tu dispositivo soporta la geolocalización.</p>";
          navigator.geolocation.getCurrentPosition(showPosition);
        }
      else {
          d.innerHTML="<p>Lo sentimos, tu dispositivo no admite la geolocaización.</p>";
        }
      }
      function showPosition(position){
        d.innerHTML+="<p>Latitud: "+position.coords.latitude+"</p>";
        d.innerHTML+="<p>Longitud: "+position.coords.longitude+"</p>";
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([20.65856439281416, -103.32348510503071]).addTo(map)
            .bindPopup('Tu estas aqui')
            .openPopup();
      }