document.getElementById("moodForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedMood = document.querySelector('input[name="mood"]:checked');
    if (selectedMood) {
        let responseMessage;
        switch (selectedMood.value) {
            case "happy":
                responseMessage = "Great! Keep up the positive vibes! 🌟";
                break;
            case "neutral":
                responseMessage = "It's okay to have neutral days. Stay balanced! ⚖️";
                break;
            case "sad":
                responseMessage = "Sorry to hear that. Maybe a relaxing activity could help! 💙";
                break;
        }
        document.getElementById("moodResult").innerText = responseMessage;
    } else {
        alert("Please select a mood.");
    }
});
