const marqueeList = [
    "Nike Air Max — 2500 MDL", "Adidas Ultraboost — 2000 MDL", "Puma RS-X — 2400 MDL",
    "Reebok Classic — 2600 MDL", "New Balance 574 — 2500 MDL", "Asics Gel-Kayano — 2550 MDL",
    "Converse Chuck Taylor — 3200 MDL", "Vans Old Skool — 2000 MDL", "Under Armour HOVR — 2400 MDL",
    "Fila Disruptor — 3000 MDL", "Jordan Retro 1 — 2800 MDL", "Saucony Jazz — 2000 MDL",
    "Mizuno Wave Rider — 3200 MDL", "Hoka One One — 4000 MDL", "Salomon Speedcross — 3550 MDL",
    "Brooks Ghost — 4000 MDL", "On Cloud — 4250 MDL", "La Sportiva Bushido — 3000 MDL",
    "Merrell Moab — 4150 MDL", "Timberland Flyroam — 4000 MDL", "Nike Air Max Plus — 5000 MDL"
];

function creeazaHeader() {
    const marqueeItems = marqueeList.map(p => `👟 ${p}`).join(" &nbsp;•&nbsp; ");
    const header = document.createElement("header");
    header.className = "header-dark";
    header.innerHTML = `
        <div class="header-dark-top">
            <nav class="header-dark-nav">
                <button onclick="window.location.href='index.html'">Acasă</button>
                <button onclick="window.location.href='contacte.html'">Contacte</button>
                <button onclick="window.location.href='informatii.html'">Informații</button>
            </nav>
            <div class="header-dark-center">
                <span class="header-dark-dot"></span>
                <h1 class="header-dark-title">SHOES.MD</h1>
                <span class="header-dark-dot"></span>
            </div>
            <nav class="header-dark-nav">
                <button class="buton-cos" onclick="window.location.href='cos.html'">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button id="theme-toggle" class="theme-toggle">
                    <i class="fas fa-moon"></i>
                </button>
            </nav>
        </div>
        <div class="header-dark-marquee">
            <div class="header-dark-marquee-inner">${marqueeItems} &nbsp;•&nbsp; ${marqueeItems}</div>
        </div>
    `;
    // Șterge headerul vechi dacă există
    const headerVechi = document.querySelector("header");
    if (headerVechi) headerVechi.remove();
    document.body.prepend(header);
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    if (icon) icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        const ic = themeToggle.querySelector('i');
        if (ic) ic.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    creeazaHeader();
    initTheme();
});