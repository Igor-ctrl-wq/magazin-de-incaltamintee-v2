const produse = [
    { id: 1, nume: "Nike Air Max", pret: 2500, imagine: "img/Nike Air Max.jpg" },
    { id: 2, nume: "Adidas Ultraboost", pret: 2000, imagine: "img/Adidas Ultraboost.jpg" },
    { id: 3, nume: "Puma RS-X", pret: 2400, imagine: "img/Puma RS-X.jpg" },
    { id: 4, nume: "Reebok Classic", pret: 2600, imagine: "img/Reebok Classic.jpg" },
    { id: 5, nume: "New Balance 574", pret: 2500, imagine: "img/New Balance 574.jpg" },
    { id: 6, nume: "Asics Gel-Kayano", pret: 2550, imagine: "img/Asics Gel-Kayano.jpg" },
    { id: 7, nume: "Converse Chuck Taylor", pret: 3200, imagine: "img/Converse Chuck Taylor.jpg" },
    { id: 8, nume: "Vans Old Skool", pret: 2000, imagine: "img/Vans Old Skool.jpg" },
    { id: 9, nume: "Under Armour HOVR", pret: 2400, imagine: "img/Under Armour HOVR.jpg" },
    { id: 10, nume: "Fila Disruptor", pret: 3000, imagine: "img/Fila Disruptor.jpg" },
    { id: 11, nume: "Jordan Retro 1", pret: 2800, imagine: "img/Jordan Retro 1.jpg" },
    { id: 12, nume: "Saucony Jazz", pret: 2000, imagine: "img/Saucony Jazz.jpg" },
    { id: 13, nume: "Mizuno Wave Rider", pret: 3200, imagine: "img/Mizuno Wave Rider.jpg" },
    { id: 14, nume: "Hoka One One", pret: 4000, imagine: "img/Hoka One One.jpg" },
    { id: 15, nume: "Salomon Speedcross", pret: 3550, imagine: "img/Salomon Speedcross.jpg" },
    { id: 16, nume: "Brooks Ghost", pret: 4000, imagine: "img/Brooks Ghost.jpg" },
    { id: 17, nume: "On Cloud", pret: 4250, imagine: "img/On Cloud.jpg" },
    { id: 18, nume: "La Sportiva Bushido", pret: 3000, imagine: "img/La Sportiva Bushido.jpg" },
    { id: 19, nume: "Merrell Moab", pret: 4150, imagine: "img/Merrell Moab.jpg" },
    { id: 20, nume: "Timberland Flyroam", pret: 4000, imagine: "img/Timberland Flyroam.jpg" },
    { id: 21, nume: "Nike Air Max Plus", pret: 5000, imagine: "img/Nike Air Max Plus.jpg" },
];

function afiseazaNotificare(mesaj) {
    const notificare = document.getElementById("notificare");
    notificare.textContent = mesaj;
    notificare.style.display = "block";
    setTimeout(() => { notificare.style.display = "none"; }, 3000);
}

function adaugaInCos(idProdus) {
    const produs = produse.find((p) => p.id === idProdus);
    if (produs) {
        const cos = JSON.parse(localStorage.getItem("cos")) || [];
        cos.push(produs);
        localStorage.setItem("cos", JSON.stringify(cos));
        afiseazaNotificare(`${produs.nume} a fost adăugat în coș!`);
    }
}

function afiseazaProduse(lista) {
    const containerProduse = document.getElementById("produse");
    containerProduse.innerHTML = "";
    if (lista.length === 0) {
        const mesaj = document.createElement("p");
        mesaj.className = "no-results";
        mesaj.textContent = "No footwear found at the selected price or brand.";
        containerProduse.appendChild(mesaj);
        return;
    }
    lista.forEach((produs) => {
        const produsElement = document.createElement("div");
        produsElement.className = "produs";
        produsElement.innerHTML = `
            <img src="${produs.imagine}" alt="${produs.nume}">
            <h3>${produs.nume}</h3>
            <p>Preț: ${produs.pret} MDL</p>
            <button onclick="adaugaInCos(${produs.id})">Adaugă în coș</button>
        `;
        containerProduse.appendChild(produsElement);
    });
}

function aplicaFiltre() {
    const pretFiltru = parseInt(document.getElementById("filter-pret").value);
    const brandFiltru = document.getElementById("filter-brand").value.toLowerCase();
    const searchTerm = document.getElementById("search-bar").value.trim().toLowerCase();

    let rezultate = produse;
    if (!isNaN(pretFiltru) && pretFiltru > 0) {
        rezultate = rezultate.filter(p => p.pret === pretFiltru);
    }
    if (brandFiltru) {
        rezultate = rezultate.filter(p => p.nume.toLowerCase().startsWith(brandFiltru));
    }
    if (searchTerm) {
        rezultate = rezultate.filter(p => p.nume.toLowerCase().includes(searchTerm));
    }
    afiseazaProduse(rezultate);
}

function actualizeazaRecomandari() {
    const cautari = JSON.parse(localStorage.getItem("cautari")) || [];
    const lista = document.getElementById("recomandari-lista");
    const gol = document.getElementById("recomandari-gol");
    if (!lista) return;
    lista.innerHTML = "";
    if (cautari.length === 0) {
        gol.style.display = "block";
        return;
    }
    gol.style.display = "none";
    const recomandate = produse.filter(p =>
        cautari.some(c => p.nume.toLowerCase().includes(c))
    );
    if (recomandate.length === 0) {
        gol.style.display = "block";
        gol.textContent = "No recommendations found based on your searches.";
        return;
    }
    recomandate.forEach(produs => {
        const card = document.createElement("div");
        card.className = "produs-rec";
        card.innerHTML = `
            <img src="${produs.imagine}" alt="${produs.nume}">
            <div class="produs-rec-info">
                <strong>${produs.nume}</strong>
                <span>${produs.pret} MDL</span>
                <button onclick="adaugaInCos(${produs.id})">Adaugă în coș</button>
            </div>
        `;
        lista.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Header
    const header = document.createElement("header");
    header.className = "header-dark";
    const marqueeItems = produse.map(p => `👟 ${p.nume} — ${p.pret} MDL`).join(" &nbsp;•&nbsp; ");
    header.innerHTML = `
        <div class="header-dark-top">
            <nav class="header-dark-nav">
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
    document.body.prepend(header);

    // Footer
    const footer = document.createElement("footer");
    footer.innerHTML = `<p>&copy; 2025 Magazin de Încălțăminte.</p>`;
    document.body.appendChild(footer);

    // Bara de filtrare (cu search bar inclus)
    const brands = [...new Set(produse.map(p => p.nume.split(" ")[0]))].sort();
    const filterBar = document.createElement("div");
    filterBar.className = "filter-bar";
    filterBar.innerHTML = `
        <input type="text" id="search-bar" placeholder="Caută încălțăminte...">
        <input type="number" id="filter-pret" placeholder="Caută după preț (MDL)..." min="0">
        <select id="filter-brand">
            <option value="">Toate brandurile</option>
            ${brands.map(b => `<option value="${b}">${b}</option>`).join("")}
        </select>
        <button id="filter-reset">Resetează</button>
    `;
    document.querySelector("main").prepend(filterBar);

    document.getElementById("search-bar").addEventListener("input", () => {
        const searchTerm = document.getElementById("search-bar").value.trim().toLowerCase();
        if (searchTerm.length > 1) {
            const cautari = JSON.parse(localStorage.getItem("cautari")) || [];
            if (!cautari.includes(searchTerm)) {
                cautari.push(searchTerm);
                if (cautari.length > 10) cautari.shift();
                localStorage.setItem("cautari", JSON.stringify(cautari));
            }
            actualizeazaRecomandari();
        }
        aplicaFiltre();
    });
    document.getElementById("filter-pret").addEventListener("input", aplicaFiltre);
    document.getElementById("filter-brand").addEventListener("change", aplicaFiltre);
    document.getElementById("filter-reset").addEventListener("click", () => {
        document.getElementById("search-bar").value = "";
        document.getElementById("filter-pret").value = "";
        document.getElementById("filter-brand").value = "";
        aplicaFiltre();
    });

    // Secțiunea de recomandări
    const sectiuneRecomandari = document.createElement("div");
    sectiuneRecomandari.id = "recomandari-section";
    sectiuneRecomandari.innerHTML = `
        <h2>⭐ Recomandate pentru tine</h2>
        <div id="recomandari-lista"></div>
        <p id="recomandari-gol">Caută un produs ca să primești recomandări personalizate!</p>
    `;
    document.querySelector("main").insertBefore(sectiuneRecomandari, document.getElementById("produse"));

    actualizeazaRecomandari();
    afiseazaProduse(produse);
});