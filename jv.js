// JavaScript for toggle buttons
document.addEventListener('DOMContentLoaded', () => {
    const autoBtn = document.querySelector('.auto-btn');
    const manualBtn = document.querySelector('.manual-btn');

    if (autoBtn && manualBtn) {
        autoBtn.addEventListener('click', () => {
            autoBtn.classList.add('active');
            manualBtn.classList.remove('active');
            // Add logic for auto mode
            console.log('โหมดอัตโนมัติทำงาน');
        });

        manualBtn.addEventListener('click', () => {
            manualBtn.classList.add('active');
            autoBtn.classList.remove('active');
            // Add logic for manual mode
            console.log('โหมดควบคุมเองทำงาน');
        });
    }
});
