document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.full-photo-btn');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const adLink = this.getAttribute('data-ad-link');
            const fullImage = this.getAttribute('data-full-image');
            const productName = this.closest('.product-card').querySelector('h3').textContent; // Product නම ගන්නවා
            let clicked = this.getAttribute('data-clicked') === 'true'; // Check if clicked

            if (!clicked) {
                // First click: Open ad link in a new tab
                console.log('Opening ad:', adLink); // Debugging
                window.open(adLink, '_blank'); // නව ටැබ් එකක open කරනවා
                // Mark as clicked for this session
                this.setAttribute('data-clicked', 'true');
            } else {
                // Subsequent clicks: Show full image in modal
                console.log('Showing full image:', fullImage); // Debugging
                modal.style.display = "block";
                modalImg.src = fullImage;
                captionText.textContent = productName; // Modal එකේ caption එකට product නම දානවා
            }
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the image
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // Modal background එක click කලොත් විතරක් close වෙනවා
            modal.style.display = "none";
        }
    });
});