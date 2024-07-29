export async function getPropertyByType(propertyType) {
    return fetch('../../data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.properties && data.properties[propertyType]) {
                return data.properties[propertyType];
            } else {
                throw new Error('Property type not found');
            }
        })
        .catch(error => {
            console.error('Error fetching property data:', error);
            throw error;
        });
}