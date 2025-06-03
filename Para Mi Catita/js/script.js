/* =================================================================   */
/* CÓDIGO FINAL E COMPLETO - SCRIPT.JS                */
/* =================================================================   */


// --- CÓDIGO DO CARROSSEL (PARA A PÁGINA 'NÓS') ---
// Primeiro, tentamos encontrar o contêiner do carrossel
const carrosselContainer = document.querySelector('.carrossel');

// SE o carrosselContainer existir nesta página...
if (carrosselContainer) {
    // ...então, todo o código do carrossel é executado aqui dentro.
    let slideAtual = 0;
    const slides = carrosselContainer.querySelector('.slides');
    const totalSlides = carrosselContainer.querySelectorAll('.slide').length;
    const indicadores = carrosselContainer.querySelectorAll('.indicador');
    let intervalo;

    function iniciarCarrossel() {
        intervalo = setInterval(proximoSlide, 4000);
    }

    function pararCarrossel() {
        clearInterval(intervalo);
    }

    function proximoSlide() {
        slideAtual = (slideAtual + 1) % totalSlides;
        atualizarCarrossel();
    }

    function mostrarSlide(n) {
        slideAtual = n;
        atualizarCarrossel();
        pararCarrossel();
        iniciarCarrossel();
    }

    function atualizarCarrossel() {
        const deslocamento = -slideAtual * 100;
        slides.style.transform = `translateX(${deslocamento}%)`;
        
        indicadores.forEach((ind, i) => {
            ind.classList.toggle('ativo', i === slideAtual);
        });
    }

    // As chamadas iniciais e os listeners também ficam aqui dentro
    atualizarCarrossel();
    iniciarCarrossel();

    carrosselContainer.addEventListener('mouseenter', pararCarrossel);
    carrosselContainer.addEventListener('mouseleave', iniciarCarrossel);

    // Adicionamos a função mostrarSlide ao escopo global para que o onclick do HTML funcione
    window.mostrarSlide = mostrarSlide;
}


// --- CÓDIGO DOS CORAÇÕES (PARA TODAS AS PÁGINAS) ---
const containerCoracoes = document.querySelector('.coracoes');

if (containerCoracoes) {
    function criarCoracao() {
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');
        coracao.innerText = '💖';
    
        // Posição e tamanho aleatórios
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.fontSize = (Math.random() * 10 + 15) + 'px';
        coracao.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Varia a velocidade
    
        containerCoracoes.appendChild(coracao);
    
        // Remover depois de um tempo
        setTimeout(() => {
            coracao.remove();
        }, 5000);
    }
    
    setInterval(criarCoracao, 300);
}


// --- CÓDIGO DA CARTA (PARA A PÁGINA 'CARTA') ---
document.addEventListener('DOMContentLoaded', function() {
    // Tenta encontrar o contêiner da carta na página atual
    const cartaContainer = document.querySelector('.carta-container');

    // Se o contêiner da carta existir...
    if (cartaContainer) {
        // Pega todos os parágrafos (<p>) que estão dentro dele
        const paragrafos = cartaContainer.querySelectorAll('p');
        let i = 0; // Um contador para saber qual parágrafo revelar

        // Função para revelar o próximo parágrafo
        function revelarProximoParagrafo() {
            if (i < paragrafos.length) {
                // Adiciona a classe 'visivel' ao parágrafo atual
                paragrafos[i].classList.add('visivel');
                i++; // Prepara para o próximo parágrafo
            }
        }

        // A cada 1.5 segundos (1500ms), revela um novo parágrafo.
        // Ajuste o tempo (1500) para ser mais rápido ou mais lento.
        setInterval(revelarProximoParagrafo, 1500);
    }
});

// --- CÓDIGO DO PLAYER DE MÚSICA (PARA A PÁGINA 'CARTA') ---
const playBtn = document.getElementById('play-pause-btn');
const audio = document.getElementById('musica-fundo');

if (playBtn && audio) {
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playBtn.innerText = '⏸️ Pausar';
        } else {
            audio.pause();
            playBtn.innerText = '▶️ Tocar nossa música';
        }
    });
}