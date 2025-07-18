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
            slides.style.transform = `translateX(${-slideAtual * 100}%)`;
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

    // --- LÓGICA DOS CORAÇÕES (só executa se encontrar o container) ---
    const containerCoracoes = document.querySelector('.coracoes');
    if (containerCoracoes) {
        const criarCoracao = () => {
            const coracao = document.createElement('div');
            coracao.classList.add('coracao');
            coracao.innerText = '💖';
            coracao.style.