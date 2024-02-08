window.onload = function() {
    const randomDogButton = document.getElementById('button-random-dog');
    const contentDiv = document.getElementById('content');
    const inputBreed = document.getElementById('input-breed');
    const showBreedButton = document.getElementById('button-show-breed');
    const showSubBreedButton = document.getElementById('button-show-sub-breed');

    const dogApiBaseUrl = 'https://dog.ceo/api';

    randomDogButton.addEventListener('click', async function() {
        const response = await fetch(`${dogApiBaseUrl}/breeds/image/random`);

        if (!response.ok) {
            contentDiv.innerHTML = 'Error fetching random dog';
            return;
        }

        const data = await response.json();

        if (data.status === 'success') {
            contentDiv.innerHTML = `<img src="${data.message}" alt="Random dog" />`;
        } else {
            contentDiv.innerHTML = 'Error fetching random dog';
        }
    });

    showBreedButton.addEventListener('click', async function() {
        const breed = inputBreed.value.toLowerCase();
        const response = await fetch(`${dogApiBaseUrl}/breed/${breed}/images/random`);

        if (!response.ok) {
            contentDiv.innerHTML = '<p>Breed not found!</p>';
            return;
        }

        const data = await response.json();

        if (data.status === 'success') {
            contentDiv.innerHTML = `<img src="${data.message}" alt="${breed}" />`;
        } else {
            contentDiv.innerHTML = '<p>Breed not found!</p>';
        }
    });

    showSubBreedButton.addEventListener('click', async function() {
        const breed = inputBreed.value.toLowerCase();
        const response = await fetch(`${dogApiBaseUrl}/breed/${breed}/list`);

        if (!response.ok) {
            contentDiv.innerHTML = '<p>Breed not found!</p>';
            return;
        }

        const data = await response.json();

        if (data.status === 'success' && data.message.length > 0) {
            let subBreddsList = '<ol>';
            data.message.forEach(subBreed => {
                subBreddsList += `<li>${subBreed}</li>`;
            });
            subBreddsList += '</ol>';
            contentDiv.innerHTML = subBreddsList;
        } else {
            contentDiv.innerHTML = '<p>No sub-breeds found!</p>';
        }
    });
}