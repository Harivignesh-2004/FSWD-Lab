document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backArrow = document.querySelector('.back');
    const nextArrow = document.querySelector('.next');
    const highlightWrapper = document.querySelector('.highlight-wrapper');
    const backMenus = document.querySelector('.back-menus');
    const nextMenus = document.querySelector('.next-menus');
    const filterWrapper = document.querySelector('.filter-wrapper');

    let scrollAmount = 0;
    let filterScrollAmount = 0;

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            document.querySelector('.main').classList.toggle('active');
        });
    }
    if (backArrow && nextArrow && highlightWrapper) {
        backArrow.addEventListener('click', () => {
            scrollAmount -= 200;
            highlightWrapper.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        nextArrow.addEventListener('click', () => {
            scrollAmount += 200;
            highlightWrapper.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    if (backMenus && nextMenus && filterWrapper) {
        backMenus.addEventListener('click', () => {
            filterScrollAmount -= 100;
            filterWrapper.scrollTo({
                left: filterScrollAmount,
                behavior: 'smooth'
            });
        });

        nextMenus.addEventListener('click', () => {
            filterScrollAmount += 100;
            filterWrapper.scrollTo({
                left: filterScrollAmount,
                behavior: 'smooth'
            });
        });
    }

    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.getAttribute('data-item');
            const price = button.getAttribute('data-price');
            alert(`You have ordered ${item} for Rs.${price}/-`);
        });
    });
});