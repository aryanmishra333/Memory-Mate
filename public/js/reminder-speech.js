// Function to speak text using the Web Speech API
function speakReminder(text, time) {
    // Check if browser supports speech synthesis
    if ('speechSynthesis' in window) {
        // Create a more descriptive message
        const descriptiveMessage = `Reminder: You need to ${text} at ${time}. Please make sure to complete this task.`;
        
        // Create a new utterance
        const utterance = new SpeechSynthesisUtterance(descriptiveMessage);
        
        // Set properties for better speech
        utterance.rate = 0.9;  // Slightly slower speed for better clarity
        utterance.pitch = 1.0; // Pitch of voice
        utterance.volume = 1.0; // Volume
        
        // Speak the text
        window.speechSynthesis.speak(utterance);
    } else {
        console.log('Speech synthesis not supported in this browser');
    }
}

// Function to check and speak reminders
function checkAndSpeakReminders() {
    // Get all reminder messages from the table
    const reminderRows = document.querySelectorAll('#reminders table tr');
    
    // Skip the header row
    for (let i = 1; i < reminderRows.length; i++) {
        const timeCell = reminderRows[i].querySelector('td:first-child');
        const messageCell = reminderRows[i].querySelector('td:last-child');
        if (timeCell && messageCell) {
            const time = timeCell.textContent.trim();
            const message = messageCell.textContent.trim();
            // Speak each reminder message with time
            speakReminder(message, time);
        }
    }
}

// Check reminders every 5 minutes
setInterval(checkAndSpeakReminders, 5 * 60 * 1000);

// Also check when the page loads
document.addEventListener('DOMContentLoaded', checkAndSpeakReminders); 