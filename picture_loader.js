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
			// Create the masonry-item div
			const masonryItem = document.createElement("div");
			masonryItem.className = "masonry-item";

			// Create the image element
			const imgElement = document.createElement("img");
			imgElement.src = image.path;
			imgElement.alt = image.path
				.split("/")
				.pop()
				.replace(/\.[^/.]+$/, "") // Remove file extension
				.replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
				.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word

			// Create the description overlay div
			const description = document.createElement("div");
			description.className = "description";
			description.innerHTML = image.description.replace("\n", "<br>"); // Format description text

			// Append the image, description, and category to the masonry item
			masonryItem.appendChild(imgElement);
			masonryItem.appendChild(description);
			masonryItem.appendChild(categoryTag);

			// Append the masonry item to the container
			masonryContainer.appendChild(masonryItem);
		});
	} catch (error) {
		console.error("Error loading images:", error);
	}
}

// Call the function to load images
loadImages();
