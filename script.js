document.getElementById('loginBtn').addEventListener('click', () => {
    window.location.href = 'main.html';
});

// Buat 30 pensil dan 30 buku di kiri dan kanan dan animasi berjalan bebas

const NUM_ITEMS = 30;
const leftContainer = document.querySelector('.left-side .bg-elements');
const rightContainer = document.querySelector('.right-side .bg-elements');

function createElement(type) {
    const el = document.createElement('div');
    el.classList.add(type);
    el.style.top = Math.random() * 100 + '%';
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (20 + Math.random() * 40) + 's';
    el.style.animationDelay = (Math.random() * 20) + 's';
    el.style.opacity = 0.3 + Math.random() * 0.4;
    return el;
}

function animateMove(el) {
    const container = el.parentElement;
    let x = parseFloat(el.style.left);
    let y = parseFloat(el.style.top);
    let directionX = (Math.random() < 0.5 ? -1 : 1) * (0.1 + Math.random() * 0.2);
    let directionY = (Math.random() < 0.5 ? -1 : 1) * (0.1 + Math.random() * 0.2);

    function move() {
        x += directionX;
        y += directionY;

        // Boundary check (0% - 100%)
        if (x < 0) { x = 0; directionX = -directionX; }
        if (x > 100) { x = 100; directionX = -directionX; }
        if (y < 0) { y = 0; directionY = -directionY; }
        if (y > 100) { y = 100; directionY = -directionY; }

        el.style.left = x + '%';
        el.style.top = y + '%';

        requestAnimationFrame(move);
    }
    move();
}

// create and animate pensil and buku in container
function populateContainer(container) {
    for (let i = 0; i < NUM_ITEMS; i++) {
        const pencil = createElement('pencil');
        container.appendChild(pencil);
        animateMove(pencil);
        
        const book = createElement('book');
        container.appendChild(book);
        animateMove(book);
    }
}

populateContainer(leftContainer);
populateContainer(rightContainer);
