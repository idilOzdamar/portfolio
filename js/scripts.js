/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

// window.addEventListener('DOMContentLoaded', event => {

//     // Activate Bootstrap scrollspy on the main nav element
//     const sideNav = document.body.querySelector('#sideNav');
//     if (sideNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#sideNav',
//             rootMargin: '0px 0px -40%',
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Navbar functionality
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navbarCollapse = document.body.querySelector('.navbar-collapse');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    // Hide toggler when clicked
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            // Only hide if the collapse is being shown (not already collapsed)
            if (!navbarCollapse.classList.contains('show')) {
                this.style.display = 'none';
            }
        });
    }

    // Show toggler when collapse is hidden
    if (navbarCollapse) {
        navbarCollapse.addEventListener('hidden.bs.collapse', function() {
            if (navbarToggler) {
                navbarToggler.style.display = 'block';
            }
        });
    }

    // Collapse responsive navbar when toggler is visible and nav items are clicked
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});