// Get the popup and its elements
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const closeBtn = document.querySelector('.popup .close');
const galleryImages = document.querySelectorAll('.container11 img');

// Open popup when an image is clicked
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    popup.style.display = 'flex'; // Show the popup
    popupImg.src = img.src;      // Set popup image source
    popupImg.alt = img.alt;      // Set popup image alt text
  });
});

// Close popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
});

// Close popup when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Optional: Close popup on pressing the Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.style.display === 'flex') {
    popup.style.display = 'none';
  }
});
