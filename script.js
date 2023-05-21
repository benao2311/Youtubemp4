function descargarVideo() {
  var urlInput = document.getElementById('urlInput');
  var urlVideo = urlInput.value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/descargar-video', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert('La descarga del video ha sido iniciada en el servidor.');
      } else {
        alert('Ocurrió un error al iniciar la descarga del video.');
      }
    }
  };

  xhr.send(JSON.stringify({ url: urlVideo }));
}
