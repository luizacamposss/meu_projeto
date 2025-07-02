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

document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.galeria-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-imagem');
    const closeLightbox = document.querySelector('.fechar-lightbox');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.classList.add('ativo');
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;
        });
    });

    closeLightbox.addEventListener('click', function() {
        lightbox.classList.remove('ativo');
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.classList.remove('ativo');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Tenta encontrar o container da galeria na página
    const galeriaGrid = document.getElementById('galeria-grid');

    // Se o container da galeria existir...
    if (galeriaGrid) {
        // --- CÓDIGO PARA GERAR A GALERIA ---
        const totalImagens = 140; // Total de fotos que você tem
        const caminhoBase = 'Para Mi Catita/images/galeria'; // Caminho base das imagens

        for (let i = 1; i <= totalImagens; i++) {
            const divItem = document.createElement('div');
            divItem.classList.add('galeria-item');

            const img = document.createElement('img');
            img.src = `${caminhoBase}${i}.jpg`;
            img.alt = `Momento ${i}`;

            divItem.appendChild(img);
            galeriaGrid.appendChild(divItem);
        }

        // --- CÓDIGO DA LIGHTBOX (COM CORREÇÃO) ---
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-imagem');
        const closeLightbox = document.querySelector('.fechar-lightbox');
        const galleryImages = document.querySelectorAll('.galeria-grid img');

        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                if (lightbox) {
                    lightbox.classList.add('ativo');
                    lightboxImage.src = this.src;
                    lightboxImage.alt = this.alt;
                }
            });
        });

        // VERIFICA SE O BOTÃO DE FECHAR EXISTE ANTES DE USÁ-LO
        if (closeLightbox) {
            closeLightbox.addEventListener('click', function() {
                if (lightbox) {
                    lightbox.classList.remove('ativo');
                }
            });
        }

        // VERIFICA SE A LIGHTBOX EXISTE ANTES DE USÁ-LA
        if (lightbox) {
            lightbox.addEventListener('click', function(event) {
                if (event.target === lightbox) {
                    lightbox.classList.remove('ativo');
                }
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Tenta encontrar o container da galeria na página
    const galeriaGrid = document.getElementById('galeria-grid');

    // Se o container da galeria existir nesta página...
    if (galeriaGrid) {
        
        // --- CÓDIGO PARA GERAR A GALERIA (VERSÃO CORRIGIDA) ---

        // 1. Lista de arquivos.
        const arquivosDaGaleria = [
          'galeria1.mp4', 'galeria3.mp4', 'galeria4.mp4', 'galeria5.mp4', 'galeria6.mp4', 'galeria8.mp4', 'galeria9.jpg', 'galeria10.jpg',
          'galeria11.jpg', 'galeria12.jpg', 'galeria13.jpg', 'galeria14.jpg', 'galeria15.jpg', 'galeria16.jpg', 'galeria17.jpg', 'galeria18.jpg',
          'galeria19.jpg', 'galeria20.jpg', 'galeria21.jpg', 'galeria22.jpg', 'galeria23.jpg', 'galeria24.jpg', 'galeria25.jpg', 'galeria26.jpg',
          'galeria27.jpg', 'galeria28.jpg', 'galeria29.jpg', 'galeria30.jpg', 'galeria31.jpg', 'galeria32.jpg', 'galeria33.jpg', 'galeria34.jpg',
          'galeria35.jpg', 'galeria36.jpg', 'galeria37.jpg', 'galeria38.jpg', 'galeria39.jpg', 'galeria40.jpg', 'galeria41.jpg', 'galeria42.jpg',
          'galeria43.jpg', 'galeria44.jpg', 'galeria45.jpg', 'galeria46.jpg', 'galeria47.jpg', 'galeria48.jpg', 'galeria49.jpg', 'galeria50.jpg',
          'galeria51.jpg', 'galeria52.jpg', 'galeria53.jpg', 'galeria54.jpg', 'galeria55.jpg', 'galeria56.jpg', 'galeria57.jpg', 'galeria58.jpg',
          'galeria59.jpg', 'galeria60.jpg', 'galeria61.jpg', 'galeria62.jpg', 'galeria63.jpg', 'galeria64.jpg', 'galeria65.jpg', 'galeria66.jpg',
          'galeria67.jpg', 'galeria68.jpg', 'galeria69.jpg', 'galeria70.jpg', 'galeria71.jpg', 'galeria72.jpg', 'galeria73.jpg', 'galeria74.jpg',
          'galeria75.jpg', 'galeria76.jpg', 'galeria77.jpg', 'galeria78.jpg', 'galeria79.jpg', 'galeria80.jpg', 'galeria81.jpg', 'galeria82.jpg',
          'galeria83.jpg', 'galeria84.jpg', 'galeria85.jpg', 'galeria86.jpg', 'galeria87.jpg', 'galeria88.jpg', 'galeria89.jpg', 'galeria90.jpg',
          'galeria91.jpg', 'galeria92.jpg', 'galeria93.jpg', 'galeria94.jpg', 'galeria95.jpg', 'galeria96.jpg', 'galeria97.jpg', 'galeria98.jpg',
          'galeria99.jpg', 'galeria100.jpg', 'galeria101.jpg', 'galeria102.jpg', 'galeria103.jpg', 'galeria104.jpg', 'galeria105.jpg', 'galeria106.jpg',
          'galeria107.jpg', 'galeria108.jpg', 'galeria109.jpg', 'galeria110.jpg', 'galeria111.jpg', 'galeria112.jpg', 'galeria113.jpg', 'galeria114.jpg',
          'galeria115.jpg', 'galeria116.jpg', 'galeria117.jpg', 'galeria118.jpg', 'galeria119.jpg', 'galeria120.jpg', 'galeria121.jpg', 'galeria122.jpg',
          'galeria123.jpg', 'galeria124.jpg', 'galeria125.jpg', 'galeria126.jpg', 'galeria127.jpg', 'galeria128.jpg', 'galeria129.jpg', 'galeria130.jpg',
          'galeria131.jpg', 'galeria132.jpg', 'galeria133.jpg', 'galeria134.jpg', 'galeria135.jpg', 'galeria136.jpg', 'galeria137.jpg', 'galeria138.jpg',
          'galeria139.jpg', 'galeria140.jpg'
        ];

        // 2. O código que lê a lista e cria a galeria.
        const caminhoBase = 'Para Mi Catita/images/';

        arquivosDaGaleria.forEach(nomeDoArquivo => {
            const divItem = document.createElement('div');
            divItem.classList.add('galeria-item');

            if (nomeDoArquivo.endsWith('.mp4')) {
                const video = document.createElement('video');
                video.src = `${caminhoBase}${nomeDoArquivo}`;
                video.controls = true; video.muted = true;
                video.setAttribute('playsinline', ''); video.setAttribute('loop', '');
                divItem.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = `${caminhoBase}${nomeDoArquivo}`;
                img.alt = `Momento da galeria`;
                divItem.appendChild(img);
            }
            galeriaGrid.appendChild(divItem);
        });

        // --- CÓDIGO DA LIGHTBOX ---
        // (Este código pode ser adicionado aqui dentro do 'if' também para organização)
    }
});