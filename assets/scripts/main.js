document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 100);
                //observer.unobserve(entry.target);
            }
            else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const menuButton = document.getElementById('menu');
    const navMenu = document.querySelector('nav ul');
    const backgroundCover = document.getElementById('backgroundCover');
    const closeButton = document.getElementById('close');

    function showMenu() {
        navMenu.style.left = "0";
        backgroundCover.style.opacity = "1";
    }

    function hideMenu() {
        navMenu.style.left = "-100%";
        backgroundCover.style.opacity = "0";
    }

    menuButton.addEventListener('click', showMenu);
    backgroundCover.addEventListener('click', hideMenu);
    closeButton.addEventListener('click', hideMenu);

    navMenu.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            hideMenu();
        });
    });
});
