document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu a');
    const content = document.querySelector('.content');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.href;

            content.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});
