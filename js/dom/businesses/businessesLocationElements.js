import { getPropertyByType } from "../../api/businesses.js";

export function createBusinessLocationSelection(type) {
    const businessDetailsElement = document.createElement('div');
    businessDetailsElement.classList.add('center-container');
    const locationSelection = document.createElement('div');
    locationSelection.classList.add('location-selection');
    businessDetailsElement.appendChild(locationSelection);

    const locationList = document.createElement('ul');
    locationSelection.appendChild(locationList);

    getPropertyByType(type).then(properties => {
        if (properties.locations && properties.locations.length > 0) {
            properties.locations.forEach(location => {
                const listItem = document.createElement('li');
                const locationLink = document.createElement('a');
                locationLink.href = '#';
                locationLink.textContent = `${location.name}`;
                locationLink.addEventListener('click', function() {
                    console.log('Location:', location);
                });
                listItem.appendChild(locationLink);
                locationList.appendChild(listItem);
            });
        } else {
            locationList.textContent = 'No locations found';
        }
    }).catch(error => {
        console.error('Error:', error);
        locationList.textContent = 'Error fetching locations';
    });

    return businessDetailsElement;
}
