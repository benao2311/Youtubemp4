function descargarVideo() {
    var urlInput = document.getElementById('urlInput');
    var urlVideo = urlInput.value;

    // Realiza una petición al servidor para iniciar la descarga del video
    fetch('/descargar-video', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: urlVideo })
    })
    .then(response => {
        if (response.ok) {
            alert('La descarga del video ha sido iniciada en el servidor.');
        } else {
            alert('Ocurrió un error al iniciar la descarga del video.');
        }
    })
    .catch(error => {
        console.error('Ocurrió un error:', error);
    });
}
