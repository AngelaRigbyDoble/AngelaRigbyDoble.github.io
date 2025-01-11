// Select the masonry container
const masonry = document.querySelector('.masonry');

// Function to calculate and set the column count
function updateColumns() {
    const screenWidth = window.innerWidth; // Get the viewport width
    const columns = Math.max(1, Math.ceil(screenWidth / 400)); // Calculate columns (at least 1)
    masonry.style.columnCount = columns; // Apply the column count
}

// Initial setup
updateColumns();

// Update columns on window resize
window.addEventListener('resize', updateColumns);
