document.addEventListener('DOMContentLoaded', () => {
    const dateDisplay = document.getElementById('date-display');
    const lastUpdated = document.getElementById('last-updated');
    
    const now = new Date();
    const dateStr = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    if (dateDisplay) dateDisplay.textContent = dateStr;
    if (lastUpdated) lastUpdated.textContent = now.toLocaleString();
    
    console.log('Daily Finance initialized for', dateStr);
});
