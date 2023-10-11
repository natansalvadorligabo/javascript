const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', function() {
    searchInput.classList.toggle('active');
});

// Adicione um evento de clique fora da caixa de busca para escondê-la
document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && event.target !== searchIcon) {
        searchInput.classList.remove('active');
    }
});
