const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;

app.post('/descargar-video', (req, res) => {
  const url = req.body.url; // La URL del video se recibe como parte del cuerpo de la solicitud POST
  
  // Verificar si la URL es válida
  if (!ytdl.validateURL(url)) {
    res.status(400).json({ error: 'URL inválida' });
    return;
  }
  
  try {
    // Descargar el video utilizando ytdl-core
    ytdl(url).pipe(res); // Envía la respuesta con el video descargado al cliente
  } catch (error) {
    console.error('Error al descargar el video:', error);
    res.status(500).json({ error: 'Error al descargar el video' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

