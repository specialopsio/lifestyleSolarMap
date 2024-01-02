document.addEventListener("DOMContentLoaded", function() {
    // Function to update the total
    function updateSelectedTotal() {
        let total = 0;

        // Find all selected sidebar links with the 'count-total' class
        const selectedLinks = document.querySelectorAll('.sidebar4_link.is-selected-button.count-total');

        // Sum up the numbers in their badges
        selectedLinks.forEach(link => {
            const badge = link.querySelector('.sidebar4_badge');
            if (badge) {
                const number = parseInt(badge.textContent.replace(/,/g, ''), 10);
                if (!isNaN(number)) {
                    total += number;
                }
            }
        });

        // Update the total in the selectedTotal element
        const totalElement = document.getElementById('selectedTotal');
        if (totalElement) {
            totalElement.textContent = total.toLocaleString();
        }
    }

    // Initial update of the total on page load
    updateSelectedTotal();

    // Function to toggle the class on the link and the badge, and update the total
    function toggleAndSum() {
        // Check if the clicked link is not the one containing the selectedTotal
        if (!this.querySelector('#selectedTotal')) {
            // Toggle 'is-selected-button' on the link
            this.classList.toggle('is-selected-button');

            // Find the badge within the link
            const badge = this.querySelector('.sidebar4_badge');
            if (badge) {
                // Toggle 'is-selected' on the badge
                badge.classList.toggle('is-selected');
            }

            // Update the total
            updateSelectedTotal();
        }
    }

    // Add click event listeners to sidebar links with 'count-total' class
    document.querySelectorAll('.sidebar4_link.count-total').forEach(link => {
        link.addEventListener('click', toggleAndSum);
    });
     // Store ongoing timeouts to clear them if needed
    const timeouts = new Map();

    // Function to set initial display style for options
    function setInitialDisplayStyleForOptions() {
        document.querySelectorAll('.sidebar4_link.cancellable .options').forEach(options => {
            options.style.display = 'none';
        });
    }

    // Function to revert to the default state without showing options
    function revertToDefaultState(linkElement) {
        const textElement = linkElement.querySelector('.icon-container-with-text div:last-child');
        const originalText = textElement.getAttribute('data-original-text') || textElement.textContent;
        textElement.textContent = originalText;
        linkElement.querySelector('.options').style.display = 'none';

        // Clear any ongoing timeout
        if (timeouts.has(linkElement)) {
            clearTimeout(timeouts.get(linkElement));
            timeouts.delete(linkElement);
        }
    }

    // Function to revert to the default state and show options
    function revertToShowOptions(linkElement) {
        revertToDefaultState(linkElement);
        linkElement.querySelector('.options').style.display = 'flex';
    }

    // Function to toggle the display of options
    function toggleOptionsDisplay(event) {
        const textElement = this.querySelector('.icon-container-with-text div:last-child');
        const originalText = textElement.getAttribute('data-original-text');

        // If text is already in the 'Confirmed!' or 'Cancelled' state, revert and show options immediately
        if (originalText && (textElement.textContent === 'Confirmed!' || textElement.textContent === 'Cancelled')) {
            revertToShowOptions(this);
        } else {
            const options = this.querySelector('.options');
            options.style.display = options.style.display === 'none' ? 'flex' : 'none';
        }
    }

    // Function to handle click on cancel or confirm
    function handleCancelConfirm(event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the parent element

        const sidebarLink = this.closest('.sidebar4_link');
        const textElement = sidebarLink.querySelector('.icon-container-with-text div:last-child');
        
        // Store original text if not already stored
        if (!textElement.getAttribute('data-original-text')) {
            textElement.setAttribute('data-original-text', textElement.textContent);
        }

        const newText = this.classList.contains('confirm') ? 'Confirmed!' : 'Cancelled';
        textElement.textContent = newText;

        // Hide options immediately
        sidebarLink.querySelector('.options').style.display = 'none';

        // Clear any ongoing timeout
        if (timeouts.has(sidebarLink)) {
            clearTimeout(timeouts.get(sidebarLink));
        }

        // Revert to original text after 5 seconds and keep options hidden
        const timeoutId = setTimeout(() => {
            revertToDefaultState(sidebarLink);
        }, 5000);
        timeouts.set(sidebarLink, timeoutId);
    }

    // Set initial display style for options
    setInitialDisplayStyleForOptions();

    // Add click event listeners to cancellable links
    document.querySelectorAll('.sidebar4_link.cancellable').forEach(link => {
        link.addEventListener('click', toggleOptionsDisplay);
    });

    // Add click event listeners to cancel and confirm icons
    document.querySelectorAll('.sidebar4_link.cancellable .cancel, .sidebar4_link.cancellable .confirm').forEach(icon => {
        icon.addEventListener('click', handleCancelConfirm);
    });
});
