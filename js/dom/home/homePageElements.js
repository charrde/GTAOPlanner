import { createBusinessTypeSelection } from '../businesses/businessesSelectionElements.js';

export function generateHomePage() {
    document.querySelector('main').innerHTML = `
    <div id="category-selection" class="center-container">
    <div class="browse">
        <div class="browse-card">
            <div class="browse-card-details">
                <img src="img/Dynasty8Executive-GTAO-LombankWest.webp" alt="Maze Bank West">
                <h3>Businesses</h3>
            </div>
            <button id="browse-businesses" class="browse-button">Browse</button>
        </div>
        <div class="browse-card">
            <div class="browse-card-details">
                <img src="img/Dynasty8Executive-GTAO-LombankWest.webp" alt="Lombank West">
                <h3>Properties</h3>
            </div>
            <button id="browse-properties" class="browse-button">Browse</button>
        </div>
        <div class="browse-card">
            <div class="browse-card-details">
                <img src="img/vehicle.webp" alt="Vehicles">
                <h3>Vehicles</h3>
            </div>
            <button id="browse-vehicles" class="browse-button">Browse</button>
        </div>
    </div>
</div>
    `;

    document.getElementById('browse-businesses').addEventListener('click', function() {
        var elements = document.getElementById('category-selection');
        elements.style.opacity = 0;
        elements.addEventListener('transitionend', function() {
            document.querySelector('main').innerHTML = '';
            document.querySelector('main').appendChild(createBusinessTypeSelection());
        });
    });
};