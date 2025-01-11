async function loadImages() {
	try {
		// Fetch the JSON file
		const response = await fetch("images.json");
		if (!response.ok) {
			throw new Error(`Failed to load images: ${response.statusText}`);
		}

		const images = await response.json(); // Parse the JSON data

		// Get the masonry container
		const masonryContainer = document.querySelector(".masonry");

		// Iterate over the image file names and create elements
		images.forEach((image) => {
			const masonryItem = document.createElement("div");
			masonryItem.className = "masonry-item";

			const imgElement = document.createElement("img");
			imgElement.src = image.path;
			imgElement.alt = image.path
				.split("/")
				.pop()
				.replace(/\.[^/.]+$/, "") // Remove file extension
				.replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
				.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word

			// Create a category tag
			const categoryTag = document.createElement("span");
			categoryTag.className = "category-tag";
			categoryTag.textContent = image.category;

			// Append the image and category to the masonry item
			masonryItem.appendChild(imgElement);
			masonryItem.appendChild(categoryTag);
			masonryContainer.appendChild(masonryItem);
		});
	} catch (error) {
		console.error("Error loading images:", error);
	}
}



// Call the function to load images
loadImages();
