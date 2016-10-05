const express = require('express');

const server = express();

//fonctions
const arrondi = (nombre) => Math.round(1000000 * nombre) / 1000000;


//routes
server.get('/', (request, response) =>{
	response.sendFile(`/home/fabien/workspace/Calculatrice/index.html`);
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

server.use(express.static('./'));	//pour utiliser les fichiers du dossier courant (css, images)

//mise en route du serveur
console.log(`Démmarage du serveur sur le port 8050...`)
server.listen(8050);
