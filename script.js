const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;

app.post('/descargar-video', (req, res) => {
  const url = req.body.url; // La URL del video se recibe como parte del cuerpo de la solicitud POST
  
  // Validar la URL y realizar la descarga del video utilizando ytdl-core
  ytdl(url).pipe(res); // Envía la respuesta con el video descargado al cliente
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

