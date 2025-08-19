const bgMusic = document.getElementById('bgMusic');

// Corazones flotando continuamente
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = (15 + Math.random() * 25) + 'px';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);

// Confeti
function startConfetti() {
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 150);
    }
}

// Explosión de corazones
function explodeHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-explode');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

function triggerMagicShow() {
    document.body.classList.add('brillo');
    explodeHearts();
    setTimeout(() => document.body.classList.remove('brillo'), 3000);
}

// Compatibilidad
function checkCompatibility() {
    const girl = document.getElementById('girlName').value.trim().toLowerCase();
    const boy = document.getElementById('boyName').value.trim().toLowerCase();
    const message = document.getElementById('message');

    if (girl === "michelle" && boy === "patrick") {
        message.innerHTML = '<span class="infinity">♾️</span><br>♥️ Vamos a estar juntos por siempre ♥️';
        message.style.opacity = 1;
        document.getElementById('gift').style.display = 'inline-block';
        startConfetti();
        bgMusic.play();
        triggerMagicShow();
    } else {
        message.innerHTML = '¡Hmm! Intenta con los nombres correctos ♥️';
        message.style.opacity = 1;
        document.getElementById('gift').style.display = 'none';
        document.getElementById('flowers').style.display = 'none';
    }
}

// Abrir regalo
function openGift() {
    const flowers = document.getElementById('flowers');
    flowers.style.display = 'block';
    flowers.style.opacity = 1;
    startConfetti();
    showOpenLetterButton();
}

// Mostrar botón para abrir carta después del regalo
function showOpenLetterButton() {
    if (document.getElementById('openLetterButton')) return; // no duplicar
    const letterBtn = document.createElement('button');
    letterBtn.id = 'openLetterButton';
    letterBtn.innerText = '♥️ Abrir Carta ♥️';
    letterBtn.onclick = openLetter;
    document.body.appendChild(letterBtn);
}

// Abrir carta animada
function openLetter() {
    const letter = document.getElementById('letterModal');
    const content = document.getElementById('letterContent');
    letter.style.display = 'flex';
    content.style.animation = 'openLetter 1.2s forwards';
}

// Cerrar carta
function closeLetter() {
    document.getElementById('letterModal').style.display = 'none';
}

// Iniciar música al cargar
window.onload = function () {
    document.getElementById('letterModal').style.display = 'flex';
}