document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelectorAll('.btn-outline-secondary');

    addButton.forEach(function(button) {
        button.addEventListener('click', function() {
            const cardTitleElement = this.parentElement.querySelector('.card-text');
            const cardImageElement = this.parentElement.parentElement.querySelector('.card-img-top');

            if (cardTitleElement && cardImageElement) {
                const cardTitle = cardTitleElement.textContent;
                const cardImageSrc = cardImageElement.src;

                const myListContainer = document.querySelector('.category-container h2');
                if (myListContainer && myListContainer.textContent === 'Minha lista') {
                    const myListRow = myListContainer.parentElement.querySelector('.row');

                    const newCard = document.createElement('div');
                    newCard.className = 'col';
                    newCard.innerHTML = `
                        <div class="card shadow-sm">
                            <img src="${cardImageSrc}" class="card-img-top">
                            <div class="card-body">
                                <p class="card-text">${cardTitle}</p>
                                <button type="button" class="btn btn-sm btn-outline-secondary">+ Adicionar à Minha lista</button>
                            </div>
                        </div>
                    `;

                    myListRow.appendChild(newCard);
                }
            }
        });
    });
});
