let slideAtual = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        const indicadores = document.querySelectorAll('.indicador');
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
            
            // Atualiza indicadores
            indicadores.forEach((ind, i) => {
                ind.classList.toggle('ativo', i === slideAtual);
            });
        }

        // Inicia o carrossel
        atualizarCarrossel();
        iniciarCarrossel();

        // Pausa quando o mouse está sobre o carrossel
        document.querySelector('.carrossel').addEventListener('mouseenter', pararCarrossel);
        document.querySelector('.carrossel').addEventListener('mouseleave', iniciarCarrossel);

const container = document.querySelector('.coracoes');

    function criarCoracao() {
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');
        coracao.innerText = '💖';

        // Posição e tamanho aleatórios
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.fontSize = (Math.random() * 10 + 15) + 'px';

        container.appendChild(coracao);

        // Remover depois de um tempo
        setTimeout(() => {
            coracao.remove();
        }, 5000);
    }

    setInterval(criarCoracao, 300);