// Basic Guide Interactivity
document.addEventListener('DOMContentLoaded', () => {
    // 1. Progress Bar Initialization
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    const progressBar = document.createElement('div');
    progressBar.id = 'guideProgressBar';
    progressBar.className = 'progress-bar';
    progressContainer.appendChild(progressBar);
    document.body.prepend(progressContainer);

    // 2. Scroll-to-Top Button Initialization
    const topBtn = document.createElement('button');
    topBtn.innerHTML = '↑';
    topBtn.className = 'back-to-top-btn';
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(topBtn);

    // 3. Scroll Logic
    window.onscroll = () => {
        // Progress bar update
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("guideProgressBar").style.width = scrolled + "%";

        // Back to top visibility
        if (winScroll > 500) {
            topBtn.style.opacity = "1";
            topBtn.style.pointerEvents = "auto";
            topBtn.style.transform = "translateY(0)";
        } else {
            topBtn.style.opacity = "0";
            topBtn.style.pointerEvents = "none";
            topBtn.style.transform = "translateY(20px)";
        }
    };

    // Initialize Lucide if available
    if (window.lucide) {
        lucide.createIcons();
    }
});
