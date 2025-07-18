// SCRIPT.JS - VERSÃO FINAL E COMPLETA
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO CARROSSEL ---
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
            if (slides) slides.style.transform = `translateX(${-slideAtual * 100}%)`;
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

    // --- LÓGICA DA CARTA ---
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

    // --- LÓGICA DA GALERIA ---
    const galeriaGrid = document.getElementById('galeria-grid');
    if (galeriaGrid) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-imagem');
        const closeLightbox = document.querySelector('.fechar-lightbox');
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
        const caminhoBase = 'Para Mi Catita/images/';

        arquivosDaGaleria.forEach(nomeDoArquivo => {
            const divItem = document.createElement('div');
            divItem.classList.add('galeria-item');
            if (nomeDoArquivo.endsWith('.mp4')) {
                const video = document.createElement('video');
                video.src = `${caminhoBase}${nomeDoArquivo}`;
                video.controls = true; video.muted = true;
                divItem.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = `${caminhoBase}${nomeDoArquivo}`;
                img.alt = `Momento da galeria`;
                img.addEventListener('click', function() {
                    if (lightbox) {
                        lightbox.classList.add('ativo');
                        lightboxImage.src = this.src;
                        lightboxImage.alt = this.alt;
                    }
                });
                divItem.appendChild(img);
            }
            galeriaGrid.appendChild(divItem);
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