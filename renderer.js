// renderer.js

if (navigator.gpu) {
  console.log('[Renderer]: ¡¡¡JODER, SÍ!!! ¡¡¡WebGPU está aquí, putos!!!');
  
  const h1 = document.createElement('h1');
  h1.style.color = '#00FF00'; // ¡Verde victoria, joder!
  h1.textContent = 'WebGPU Status: DETECTED!';
  document.body.appendChild(h1);

} else {
  console.error('[Renderer]: ¡¡¡A LA MIERDA!!! ¡¡¡No hay WebGPU!!! ¡¡¡Algo va mal!!!');
  
  const h1 = document.createElement('h1');
  h1.style.color = '#FF0000'; // ¡Rojo de puta derrota!
  h1.textContent = 'WebGPU Status: NOT FOUND!';
  document.body.appendChild(h1);
}