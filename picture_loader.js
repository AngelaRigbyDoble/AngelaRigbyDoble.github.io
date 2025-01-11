// Function to render all images (for default view)
function renderAllImages() {
    fetch('images.json')
        .then(response => response.json()) // Parse JSON data
        .then(imageData => {
            const masonryContainer = document.querySelector('.masonry');
            masonryContainer.innerHTML = ''; // Clear previous images

            // Loop through each image object and append to masonry container
            imageData.forEach(item => {
                const masonryItem = document.createElement('div');
                masonryItem.classList.add('masonry-item');

                const img = document.createElement('img');
                img.src = item.path;
                img.alt = item.category;

                const description = document.createElement('div');
                description.classList.add('description');
                description.innerHTML = item.description.replace('\n', '<br>');

                masonryItem.appendChild(img);
                masonryItem.appendChild(description);

                masonryContainer.appendChild(masonryItem);
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

// Function to filter images by category
function filterImagesByCategory(category) {
    fetch('images.json')
        .then(response => response.json()) // Parse JSON data
        .then(imageData => {
            const masonryContainer = document.querySelector('.masonry');
            masonryContainer.innerHTML = ''; // Clear previous images

            // Filter images based on the selected category
            const filteredImages = imageData.filter(item => item.category === category || category === 'all');

            // Loop through each filtered image and append to masonry container
            filteredImages.forEach(item => {
                const masonryItem = document.createElement('div');
                masonryItem.classList.add('masonry-item');

                const img = document.createElement('img');
                img.src = item.path;
                img.alt = item.category;

                const description = document.createElement('div');
                description.classList.add('description');
                description.innerHTML = item.description.replace('\n', '<br>');

                masonryItem.appendChild(img);
                masonryItem.appendChild(description);

                masonryContainer.appendChild(masonryItem);
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

// Call renderAllImages to load all images by default
renderAllImages();

// Event listener to handle category filter selection
document.querySelector('#categoryFilter').addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    filterImagesByCategory(selectedCategory); // Update images based on selected category
});
