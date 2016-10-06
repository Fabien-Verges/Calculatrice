const express = require('express');

const server = express();
const port = process.env.PORT || 8050;
// fonctions
const arrondi = (nombre) => Math.round(1000000 * nombre) / 1000000;


// routes
server.get('/', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

server.get('/status', (req, res) => {
  res.send({ status: 'OK' });
});

server.get('/add/:a&:b', (request, response) => {
  const a = request.params.a;
  const b = request.params.b;
  const res = arrondi((parseFloat(a, 10) + parseFloat(b, 10))).toString();
  response.send(res);
});

server.get('/sub/:a&:b', (request, response) => {
  const a = request.params.a;
  const b = request.params.b;
	const res = arrondi((parseFloat(a, 10) - parseFloat(b, 10))).toString();
  response.send(res);
});

server.get('/mult/:a&:b', (request, response) => {
  const a = request.params.a;
  const b = request.params.b;
	const res = arrondi((parseFloat(a, 10) * parseFloat(b, 10))).toString();
  response.send(res);
});

server.get('/div/:a&:b', (request, response) => {
  const a = request.params.a;
  const b = request.params.b;
	const res = arrondi((parseFloat(a, 10) / parseFloat(b, 10))).toString();
  response.send(res);
});

server.use(express.static('./'));	// pour utiliser les fichiers du dossier courant (css, images)

// mise en route du serveur
server.listen(port, () => {
  console.log(`Démmarage du serveur sur le port ${port}...`);
});
