document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 800);
    });

    // Mobile Menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });

    // Omikuji Logic
    const omikujiBtn = document.getElementById('omikuji-btn');
    const omikujiResult = document.getElementById('omikuji-result');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const closeResultPtn = document.getElementById('close-result');

    const results = [
        { title: '大吉', text: '願望：叶うでしょう。<br>待ち人：来ます。<br>失せ物：見つかるでしょう。心穏やかに過ごしましょう。' },
        { title: '中吉', text: '願望：焦らず努力せよ。<br>待ち人：遅れて来るでしょう。<br>健康：日頃の養生が大切です。' },
        { title: '小吉', text: '願望：時を待てば叶う。<br>学問：努力が実ります。<br>旅行：近場なら良いでしょう。' },
        { title: '吉', text: '願望：叶いますが、油断は禁物。<br>争事：控えた方が吉。<br>転居：良いところが見つかります。' }
    ];

    omikujiBtn.addEventListener('click', () => {
        // Randomly select a result
        const random = Math.floor(Math.random() * results.length);
        const result = results[random];
        
        resultTitle.innerHTML = result.title;
        resultText.innerHTML = result.text;
        
        omikujiResult.classList.remove('hidden');
        omikujiBtn.style.display = 'none';
        
        // Scroll to result slightly
        setTimeout(() => {
            omikujiResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    });

    closeResultPtn.addEventListener('click', () => {
        omikujiResult.classList.add('hidden');
        omikujiBtn.style.display = 'inline-block';
    });
});
