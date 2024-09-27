const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    select.addEventListener('click', () => {
        dropdowns.forEach(dropdownInner => {
            let open = dropdownInner.querySelectorAll('.menu-open');
            open.forEach(window => {
                if (window != menu) {
                    window.classList.toggle('menu-open');
                }
            });
        });
        select.classList.toggle('select-clicked');
        menu.classList.toggle('menu-open');

    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.innerHTML;
            select.classList.remove('select-clicked');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

