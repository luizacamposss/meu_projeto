// SCRIPT.JS - VERSÃO FINAL CORRIGIDA E PROTEGIDA
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO CARROSSEL (só executa se encontrar o carrossel) ---
    const carrosselContainer = document.querySelector('.carrossel');
    if (carrosselContainer) {
        let slideAtual = 0;
        const slides = carrosselContainer.querySelector('.slides');
        const totalSlides = carrosselContainer.querySelectorAll('.slide').length;
        const indicadores = carrosselContainer.querySelectorAll('.indicador');
        let intervalo;

        const iniciarCarrossel = () => intervalo = setInterval(proximoSlide, 4000);
        const pararCarrossel = () => clearInterval(intervalo);
        const proximoSlide = () => {
            slideAtual = (slideAtual + 1) % totalSlides;
            atualizarCarrossel();
        };
        const atualizarCarrossel = () => {
            if (slides) {
                slides.style.transform = `translateX(${-slideAtual * 100}%)`;
            }
            indicadores.forEach((ind, i) => ind.classList.toggle('ativo', i === slideAtual));
        };
        window.mostrarSlide = (n) => {
            slideAtual = n;
            atualizarCarrossel();
            pararCarrossel();
            iniciarCarrossel();
        };
        
        atualizarCarrossel();
        iniciarCarrossel();
        carrosselContainer.addEventListener('mouseenter', pararCarrossel);
        carrosselContainer.addEventListener('mouseleave', iniciarCarrossel);
    }

    // --- LÓGICA DA CARTA (só executa se encontrar a carta) ---
    const cartaContainer = document.querySelector('.carta-container');
    if (cartaContainer) {
        const paragrafos = cartaContainer.querySelectorAll('p');
        let i = 0;
        const revelarProximoParagrafo = () => {
            if (i < paragrafos.length) {
                paragrafos[i].classList.add('visivel');
                i++;
            }
        };
        setInterval(revelarProximoParagrafo, 1500);
    }

    // --- LÓGICA DA GALERIA (só executa se encontrar a galeria) ---
    const galeriaGrid = document.getElementById('galeria-grid');
    if (galeriaGrid) {
        // Lembre-se de preencher esta lista com todos os seus arquivos
        const arquivosDaGaleria = [
          'galeria1.mp4', 'galeria3.mp4', 'galeria4.mp4', 'galeria5.mp4', 'galeria6.mp4', 'galeria8.mp4', 'galeria9.jpg', 'galeria10.jpg'
          // ...e assim por diante
        ];
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

        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-imagem');
        const closeLightbox = document.querySelector('.fechar-lightbox');
        const galleryItems = document.querySelectorAll('.galeria-item img, .galeria-item video');

        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                if (lightbox && this.tagName === 'IMG') {
                    lightbox.classList.add('ativo');
                    lightboxImage.src = this.src;
                    lightboxImage.alt = this.alt;
                }
            });
        });

        if (closeLightbox) {
            closeLightbox.addEventListener('click', () => lightbox.classList.remove('ativo'));
        }
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) lightbox.classList.remove('ativo');
            });
        }
    }
});