document.addEventListener('DOMContentLoaded', function() {
    // Activer le son après interaction utilisateur (nécessaire pour Android)
    const video = document.getElementById('bg-video');
    let soundActivated = false;
    
    function activateSound() {
        if (!soundActivated) {
            video.muted = false;
            soundActivated = true;
            // Retirer les écouteurs après activation
            document.body.removeEventListener('click', activateSound);
            document.body.removeEventListener('touchstart', activateSound);
        }
    }
    
    // Écouteurs pour click et touch (mobile)
    document.body.addEventListener('click', activateSound);
    document.body.addEventListener('touchstart', activateSound);
    
    // Empêcher la vidéo de se mettre en pause sur mobile
    function keepVideoPlaying() {
        if (video.paused) {
            video.play().catch(e => console.log('Video play prevented:', e));
        }
    }
    
    setInterval(keepVideoPlaying, 1000);
    
    // Réinitialiser la vidéo lors du changement d'orientation
    window.addEventListener('orientationchange', function() {
        video.style.display = 'none';
        void video.offsetWidth; // Trigger reflow
        video.style.display = 'block';
        video.play();
    });
});