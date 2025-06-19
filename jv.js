// This is a placeholder for future JavaScript functionality.
// For now, the page is visually functional with HTML and CSS.

document.addEventListener('DOMContentLoaded', () => {
    // Example of how you could add interactivity in the future.
    // For instance, making the toggle switches log their state to the console.

    const toggles = document.querySelectorAll('.switch input[type="checkbox"]');

    toggles.forEach(toggle => {
        toggle.addEventListener('change', (event) => {
            const status = event.target.checked ? 'ON' : 'OFF';
            // Find the associated button text if it exists
            const controlButton = event.target.closest('.control-button');
            if (controlButton) {
                const buttonText = controlButton.querySelector('button').textContent;
                 console.log(`'${buttonText}' toggle is now ${status}`);
            } else {
                 console.log(`A toggle was switched ${status}`);
            }
        });
    });

    console.log("Smart Farm Dashboard Initialized.");
});
