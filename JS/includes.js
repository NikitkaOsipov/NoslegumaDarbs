// Include HEADER
document.addEventListener("DOMContentLoaded", function() {
    fetch('includes/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('header file not found');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Header not loaded:', error);
    });
}); 