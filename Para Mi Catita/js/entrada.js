document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enter-btn');
    const clickSound = document.getElementById('click-sound');

    if (enterBtn) {
        enterBtn.addEventListener('click', function() {
            if (clickSound) { try { clickSound.play(); } catch (e) {} }
            document.body.classList.add('fading-out');
            setTimeout(function() {
                window.location.href = 'home.html'; 
            }, 500);
        });
    }
});