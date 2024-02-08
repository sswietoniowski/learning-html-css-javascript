window.onload = function() {
    const randomDogButton = document.getElementById('button-random-dog');
    const contentDiv = document.getElementById('content');

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
        }
    });
}