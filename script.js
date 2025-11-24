document.getElementById('loginBtn').addEventListener('click', () => {
  window.location.href = 'main.html';
});

const balloonImages = [
  'b1.png',
  'b2.png',
  'b3.png',
  'b4.png',
  'b5.png',
  'b6.png',
  'b7.png'
];

const BALLOONS_PER_TYPE = 4;
const leftContainer = document.querySelector('.left-side .bg-elements');
const rightContainer = document.querySelector('.right-side .bg-elements');

function createBalloon(src) {
  const div = document.createElement('div');
  div.classList.add('balloon');
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Balon";
  div.appendChild(img);

  div.style.top = Math.random() * 100 + '%';
  div.style.left = Math.random() * 100 + '%';
  return div;
}

function animateMove(el) {
  let x = parseFloat(el.style.left);
  let y = parseFloat(el.style.top);
  let directionX = (Math.random() < 0.5 ? -1 : 1) * (0.05 + Math.random() * 0.15);
  let directionY = (Math.random() < 0.5 ? -1 : 1) * (0.05 + Math.random() * 0.15);

  function move() {
    x += directionX;
    y += directionY;

    if (x < 0) {
      x = 0;
      directionX = -directionX;
    }
    if (x > 100) {
      x = 100;
      directionX = -directionX;
    }
    if (y < 0) {
      y = 0;
      directionY = -directionY;
    }
    if (y > 100) {
      y = 100;
      directionY = -directionY;
    }

    el.style.left = x + '%';
    el.style.top = y + '%';

    requestAnimationFrame(move);
  }
  move();
}

function populateContainer(container) {
  balloonImages.forEach(src => {
    for (let i = 0; i < BALLOONS_PER_TYPE; i++) {
      const balloon = createBalloon(src);
      container.appendChild(balloon);
      animateMove(balloon);
    }
  });
}

populateContainer(leftContainer);
populateContainer(rightContainer);
