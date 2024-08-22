document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menuContainer = document.querySelector('.menu-container');
    const nav = document.querySelector('.nav');
    const closeBtn = document.querySelector('.close-btn');
    const containers = document.querySelectorAll('.container1, .container2');

    function toggleMenu() {
        menuContainer.classList.toggle('open');
        nav.classList.toggle('open');

        console.log(menuContainer.classList)

        if (nav.classList.contains('open')) {
            menuContainer.style.right = '260px';
            containers.forEach(container => {
                container.style.right = '260px';
            });
        } else {
            menuContainer.style.right = '15px';
            containers.forEach(container => {
                container.style.right = '15px';
            }); 
        }
    }

    menuContainer.addEventListener('click', toggleMenu);

    closeBtn.addEventListener('click', function(e) {
        console.log('Close button clicked');
        e.stopPropagation()
        toggleMenu();
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!menuContainer.contains(target) && !target.matches('#menu-btn')) {
            menuContainer.classList.remove('open');
            nav.classList.remove('open');
            menuContainer.style.right = '15px';
            containers.forEach(container => {
                container.style.right = '15px';
            });
        }
    });

    // Hover effect on menu-container when mouse enters nav
    nav.addEventListener('mouseenter', function() {
        menuContainer.classList.add('hover');
    });

    nav.addEventListener('mouseleave', function() {
        menuContainer.classList.remove('hover');
    });
});
