let cos = JSON.parse(localStorage.getItem("cos")) || [];

function afiseazaCos() {
    const listaCos = document.getElementById("lista-cos");
    const totalElement = document.getElementById("total");

    listaCos.innerHTML = "";

    cos.forEach((produs, index) => {
        const item = document.createElement("li");
        item.className = "cos-item";
        item.innerHTML = `
            <img src="${produs.imagine}" alt="${produs.nume}">
            <div class="cos-item-info">
                <span class="cos-item-nume">${produs.nume}</span>
                <span class="cos-item-pret">${produs.pret} MDL</span>
            </div>
            <button onclick="stergeDinCos(${index})">Șterge</button>
        `;
        listaCos.appendChild(item);
    });

    const total = cos.reduce((sum, produs) => sum + produs.pret, 0);
    totalElement.textContent = `Total: ${total} MDL`;
}

function stergeDinCos(index) {
    cos.splice(index, 1);
    localStorage.setItem("cos", JSON.stringify(cos));
    afiseazaCos();
}

document.addEventListener("DOMContentLoaded", afiseazaCos);