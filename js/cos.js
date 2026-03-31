// Array pentru a stoca produsele din coș (simulăm că este preluat din localStorage)
let cos = JSON.parse(localStorage.getItem("cos")) || [];

// Funcție pentru a afișa produsele din coș
function afiseazaCos() {
    const listaCos = document.getElementById("lista-cos");
    const totalElement = document.getElementById("total");

    // Golește lista coșului
    listaCos.innerHTML = "";

    // Adaugă fiecare produs din coș în listă
    cos.forEach((produs, index) => {
        const item = document.createElement("li");
        item.innerHTML = `
            ${produs.nume} - ${produs.pret} MDL
            <button onclick="stergeDinCos(${index})">Șterge</button>
        `;
        listaCos.appendChild(item);
    });

    // Calculează totalul
    const total = cos.reduce((sum, produs) => sum + produs.pret, 0);
    totalElement.textContent = `Total: ${total} MDL`;
}

// Funcție pentru a șterge un produs din coș
function stergeDinCos(index) {
    cos.splice(index, 1); // Elimină produsul din array
    localStorage.setItem("cos", JSON.stringify(cos)); // Actualizează localStorage
    afiseazaCos(); // Actualizează afișarea coșului
}

// Afișează produsele din coș la încărcarea paginii
document.addEventListener("DOMContentLoaded", afiseazaCos);