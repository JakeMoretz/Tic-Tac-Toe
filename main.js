function closeModal() {
    document.querySelector('#myModal').style.display = 'none';
}

document.addEventListener('click', (event) => {
    if (event.target.matches('.close') || !event.target.closest('#myModal')) {
        closeModal();
    }
});
