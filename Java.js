document.addEventListener('DOMContentLoaded', () => {
    const autoBtn = document.getElementById('autoModeBtn');
    const manualBtn = document.getElementById('manualModeBtn');

    if (autoBtn && manualBtn) {
        autoBtn.addEventListener('click', () => {
            autoBtn.classList.add('active');
            manualBtn.classList.remove('active');
            // Add logic here for when AUTO mode is activated
            console.log('AUTO mode activated');
        });

        manualBtn.addEventListener('click', () => {
            manualBtn.classList.add('active');
            autoBtn.classList.remove('active');
            // Add logic here for when Manual mode is activated
            console.log('Manual mode activated');
        });
    }

    // Example of how you might update a sensor value (for demonstration)
    // In a real system, this would come from an API or WebSocket
    const sensorCards = document.querySelectorAll('.sensor-card');
    if (sensorCards.length > 0) {
        // You could update specific sensor values here if you had actual data
        // For example:
        // sensorCards[0].querySelector('.sensor-detail:nth-child(2)').textContent = '25.5°C';
        // sensorCards[0].querySelector('.sensor-detail:nth-child(3)').textContent = 'Temperature';
    }

    // Placeholder for real-time updates for notifications or logs
    // const notificationList = document.querySelector('.notification-list');
    // const systemLogDisplay = document.querySelector('.system-log-display');

    // function addNotification(type, message) {
    //     const newItem = document.createElement('div');
    //     newItem.classList.add('notification-item');
    //     newItem.innerHTML = `<span class="status-indicator ${type}"></span><span>${message}</span>`;
    //     notificationList.prepend(newItem); // Add new notifications at the top
    // }

    // // Example: add a new notification after 5 seconds
    // setTimeout(() => {
    //     addNotification('yellow', 'ระบบกำลังตรวจสอบการเชื่อมต่อ...');
    // }, 5000);

    // function addLog(message) {
    //     const newLogLine = document.createElement('p');
    //     newLogLine.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    //     systemLogDisplay.prepend(newLogLine); // Add new logs at the top
    // }

    // setTimeout(() => {
    //     addLog('ข้อมูลเซ็นเซอร์อุณหภูมิถูกบันทึกแล้ว');
    // }, 7000);

});