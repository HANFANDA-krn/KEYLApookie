// Tombol masuk halaman pilih perangkat (index.html)
// Sudah di-handle inline pada index.html, tapi bisa tambah disini jika perlu

// Tombol masuk halaman login-laptop.html (desktop)
document.getElementById('loginBtnLaptop')?.addEventListener('click', () => {
  window.location.href = 'main-laptop.html';
});

// Tombol masuk halaman login-hp.html (mobile)
document.getElementById('loginBtnHP')?.addEventListener('click', () => {
  window.location.href = 'main-hp.html';
});

// Balon animasi pada halaman login (jika ada)
const balloonImages = [
  './images/b1.png',
  './images/b2.png',
  './images/b3.png',
  './images/b4.png',
  './images/b5.png',
  './images/b6.png',
  './images/b7.png'
];

const BALLOONS_PER_TYPE = 4;
const balloonsContainer = document.querySelector('.balloons-container');

function createBalloon(src) {
  const div = document.createElement('div');
  div.classList.add('balloon');
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Balon";
  div.appendChild(img);
  div.style.top = Math.random() * 100 + '%';
  div.style.left = Math.random() * 100 + '%';

  img.onerror = () => console.error('Gagal load gambar balon:', src);

  return div;
}

function animateMove(el) {
  let x = parseFloat(el.style.left);
  let y = parseFloat(el.style.top);

  let directionX = (Math.random() < 0.5 ? -1 : 1) * (0.1 + Math.random() * 0.15);
  let directionY = (Math.random() < 0.5 ? -1 : 1) * (0.1 + Math.random() * 0.15);

  function move() {
    x += directionX;
    y += directionY;
    if(x <= 0){x=0;directionX = -directionX;}
    if(x >= 100){x=100;directionX = -directionX;}
    if(y <= 0){y=0;directionY = -directionY;}
    if(y >= 100){y=100;directionY = -directionY;}
    el.style.left = x + '%';
    el.style.top = y + '%';
    requestAnimationFrame(move);
  }
  move();
}

if(balloonsContainer){
  balloonImages.forEach(src => {
    for(let i=0; i<BALLOONS_PER_TYPE; i++){
      const balloon = createBalloon(src);
      balloonsContainer.appendChild(balloon);
      animateMove(balloon);
    }
  });
}

// Toggle menu untuk halaman utama
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleWrapper = document.getElementById('toggleMenuWrapper');
  if(!toggleWrapper) return;
  toggleWrapper.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });
});
