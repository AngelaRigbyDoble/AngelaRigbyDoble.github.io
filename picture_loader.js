// Fetch the JSON data (replace with your correct path to images.json)
fetch('images.json')
    .then(response => response.json()) // Parse JSON data
    .then(imageData => {
        const masonryContainer = document.querySelector('.masonry');

        // Loop through each image object in the JSON data
        imageData.forEach(item => {
            // Create the masonry-item div
            const masonryItem = document.createElement('div');
            masonryItem.classList.add('masonry-item');

            // Create the image element
            const img = document.createElement('img');
            img.src = item.path;
            img.alt = item.category;

            // Create the description div
            const description = document.createElement('div');
            description.classList.add('description');
            description.innerHTML = item.description.replace('\n', '<br>');  // Format the description text

            // Append the image and description to the masonry-item
            masonryItem.appendChild(img);
            masonryItem.appendChild(description);

            // Append the masonry-item to the container
            masonryContainer.appendChild(masonryItem);
        });
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
