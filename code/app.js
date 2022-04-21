import server from '../server/server';
const router = () => {
  const main = document.getElementById('main-container');
  main.innerHTML = server.render();
};
window.addEventListener('load', router);
