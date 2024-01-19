document.addEventListener('DOMContentLoaded', function () {
    const kittenGallery = document.getElementById('kittenGallery');
    const imageSize = 300; // Change this to the desired image size

    // Function to fetch kitten images
    function fetchKittenImages() {
        fetch(`https://placekitten.com/${imageSize}/${imageSize}`, {
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.url;
        })
        .then(url => {
            displayKittenImage(url);
        })
        .catch(error => {
            console.error('Error fetching kitten image:', error);
        });
    }

    // Function to display kitten image
    function displayKittenImage(url) {
        kittenGallery.innerHTML = '';

        const kittenCard = document.createElement('div');
        kittenCard.classList.add('col-md-4', 'mb-4');

        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Kitten Image';
        img.classList.add('img-fluid', 'rounded');

        kittenCard.appendChild(img);
        kittenGallery.appendChild(kittenCard);
    }

    // Fetch kitten image when the page is loaded
    fetchKittenImages();
});
