import { generateHomePage } from './dom/home/homePageElements.js';
import { createBusinessTypeSelection } from './dom/businesses/businessesSelectionElements.js';

document.addEventListener('DOMContentLoaded', async function() {
    const baseTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', baseTheme);
    localStorage.setItem('theme', baseTheme);
    await generateHomePage();
});

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});