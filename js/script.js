/*
 * Basic interactivity scripts for Akane Patrimoine static site.
 * Handles the mobile navigation toggle. Additional scripts could be added
 * here for scroll animations or other interactive features.
 */

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navbar ul');
    if (toggle && navList) {
        toggle.addEventListener('click', function () {
            navList.classList.toggle('show');
        });
    }
});