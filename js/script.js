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

function afiseazaProduse() {
    const containerProduse = document.getElementById("produse");
    produse.forEach((produs) => {
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

function adaugaInCos(idProdus) {
    const produs = produse.find((p) => p.id === idProdus);
    if (produs) {
        cos.push(produs);
        localStorage.setItem("cos", JSON.stringify(cos));
        actualizeazaCos();
        alert(`${produs.nume} a fost adăugat în coș!`);
    }
}

let cos = [];

function afiseazaProduse() {
    const containerProduse = document.getElementById("produse");
    produse.forEach((produs) => {
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

function afiseazaNotificare(mesaj) {
    const notificare = document.getElementById("notificare");
    notificare.textContent = mesaj;
    notificare.style.display = "block";

    setTimeout(() => {
        notificare.style.display = "none";
    }, 3000);
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

document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.innerHTML = `
        <h1 class="titlu-header">Shoes.md</h1>
        <nav>
            <button onclick="window.location.href='contacte.html'">Contacte</button>
            <button class="buton-cos" onclick="window.location.href='cos.html'">
                <i class="fas fa-shopping-cart"></i>
            </button>
            <button onclick="window.location.href='informatii.html'">Informații</button>
            <button id="theme-toggle" class="theme-toggle">
                <i class="fas fa-moon"></i>
            </button>
        </nav>
    `;
    document.body.prepend(header);

    const footer = document.createElement("footer");
    footer.innerHTML = `<p>&copy; 2025 Magazin de Încălțăminte.</p>`;
    document.body.appendChild(footer);

    afiseazaProduse();
});

document.addEventListener("DOMContentLoaded", () => {
    const butonMeniu = document.getElementById("buton-meniu");
    if (butonMeniu) {
        butonMeniu.addEventListener("click", () => {
            alert("Navighează la meniul principal!");
        });
    }

    const butonContacte = document.getElementById("buton-contacte");
    if (butonContacte) {
        butonContacte.addEventListener("click", () => {
            alert("Navighează la pagina de contacte!");
        });
    }
});

document.getElementById("search-button").addEventListener("click", () => {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const produsGasit = produse.find((produs) => produs.nume.toLowerCase().includes(searchTerm));

    if (produsGasit) {
        alert(`Produs găsit: ${produsGasit.nume} - Preț: ${produsGasit.pret} MDL`);
    } else {
        alert("Produsul nu a fost găsit.");
    }
});