const bstData = [7, 5, 1, 8, 3, 6, 0, 9, 4, 2];

document.addEventListener("DOMContentLoaded", () => {
    const bstContainer = document.getElementById("bst");
    const explanation = document.getElementById("explanation");

    renderBST(bstData);
    renderExplanation(bstData);
});

function renderBST(data) {
    const bstContainer = document.getElementById("bst");
    bstContainer.innerHTML = '';

    data.forEach((value, index) => {
        const node = document.createElement("div");
        node.classList.add("node");
        node.textContent = value;
        bstContainer.appendChild(node);

        if (index !== data.length - 1) {
            const edge = document.createElement("div");
            edge.classList.add("edge");
            bstContainer.appendChild(edge);
        }
    });
}

function renderExplanation(data) {
    let explanationText = "Binary Search Tree Aşamaları:<br>";
    data.forEach((value, index) => {
        explanationText += `root ${value}'dir. `;
        if (index < data.length - 1) {
            const nextIndex = index + 1;
            explanationText += `root'un ${data[nextIndex] > value ? "sağından" : "solundan"} ${data[nextIndex]} bulunur. `;
        }
    });

    const explanation = document.getElementById("explanation");
    explanation.innerHTML = explanationText;
}
