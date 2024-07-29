const businessTypes = [
    'Agency',
    'Arcade',
    'Arena Workshop',
    'Bunker',
    'Bail Office',
    'Clubhouse',
    'Facility',
    'Hangar',
    'Nightclub',
    'Offices',
    'Office Garage',
    'Penthouse',
    'Import/Export Vehicle Warehouse',
    'Cargo Warehouse',
    'Meth Lab',
    'Weed Farm',
    'Cocaine Lockup',
    'Counterfeit Cash Factory',
    'Document Forgery Office',
    'Auto Shop',
    'Salvage Yard',
    'Acid Lab',
];

import { createBusinessLocationSelection } from './businessesLocationElements.js';
import { generateHomePage } from '../home/homePageElements.js';

export function createBusinessTypeSelection() {
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.classList.add('back-button');
    backButton.addEventListener('click', function() {
        document.querySelector('main').innerHTML = '';
        generateHomePage();
    });
    const businessTypeSelection = document.createElement('div');
    businessTypeSelection.classList.add('center-container');
    businessTypeSelection.appendChild(backButton);
    const typeSelection = document.createElement('div');
    typeSelection.classList.add('type-selection');
    businessTypeSelection.appendChild(typeSelection);

    const typeList = document.createElement('ul');
    typeSelection.appendChild(typeList);

    businessTypes.forEach(type => {
        const typeItem = document.createElement('li');
        const typeLink = document.createElement('a');
        typeLink.href = '#';
        typeLink.textContent = type;
        typeLink.addEventListener('click', function() {
            const typeUnformatted = type.toLowerCase();
            const businessLocationSelection = createBusinessLocationSelection(typeUnformatted);
            document.querySelector('main').appendChild(businessLocationSelection);
        });
        typeItem.appendChild(typeLink);
        typeList.appendChild(typeItem);

    });
    document.querySelector('main').appendChild(businessTypeSelection);

    return businessTypeSelection;
}