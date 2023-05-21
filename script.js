function descargarVideo() {
    var urlInput = document.getElementById('urlInput');
    var urlVideo = urlInput.value;

    // Realiza una petición al servidor para descargar el video
    // Puedes usar AJAX, fetch u otras técnicas aquí

    // Ejemplo utilizando fetch y enviando la URL como parámetro en la URL de la petición
    fetch('/descargar?video=' + encodeURIComponent(urlVideo))
        .then(response => {
            if (response.ok) {
                alert('El video se ha descargado correctamente.');
            } else {
                alert('Ocurrió un error al descargar el video.');
            }
        })
        .catch(error => {
            console.error('Ocurrió un error:', error);
        });
}
