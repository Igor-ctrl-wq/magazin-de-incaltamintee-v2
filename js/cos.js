let cos = JSON.parse(localStorage.getItem("cos")) || [];

function formatSuma(n) {
    return n.toLocaleString("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

async function afiseazaCos() {
    const listaCos = document.getElementById("lista-cos");
    const totalElement = document.getElementById("total");

    listaCos.innerHTML = "";

    const valuta = localStorage.getItem("valuta") || "MDL";
    let curs = 1;
    if (valuta !== "MDL") {
        try {
            const resp = await fetch(`https://api.exchangerate-api.com/v4/latest/MDL`);
            if (resp.ok) {
                const data = await resp.json();
                curs = data.rates[valuta] || 1;
            }
        } catch {
            // Dacă eșuează, rămâne curs = 1
        }
    }

    cos.forEach((produs, index) => {
        const pretConvertit = produs.pret * curs;
        const item = document.createElement("li");
        item.className = "cos-item";
        item.innerHTML = `
            <img src="${produs.imagine}" alt="${produs.nume}">
            <div class="cos-item-info">
                <span class="cos-item-nume">${produs.nume}</span>
                <span class="cos-item-pret">${formatSuma(pretConvertit)} ${valuta}</span>
            </div>
            <button onclick="stergeDinCos(${index})">Șterge</button>
        `;
        listaCos.appendChild(item);
    });

    const total = cos.reduce((sum, produs) => sum + produs.pret, 0) * curs;
    totalElement.textContent = `Total: ${formatSuma(total)} ${valuta}`;
}

function stergeDinCos(index) {
    cos.splice(index, 1);
    localStorage.setItem("cos", JSON.stringify(cos));
    afiseazaCos();
}

document.addEventListener("DOMContentLoaded", afiseazaCos);