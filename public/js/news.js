$(document).ready(function () {
    $("#moodForm").on("submit", function(event) {
        event.preventDefault();

        let mood = $("input[name='mood']:checked").val();
        let sleep = $("input[name='sleep']:checked").val();
        let social = $("input[name='social']:checked").val();

        if (!mood || !sleep || !social) {
            $("#analysisText").text("⚠️ Please answer all questions before submitting.");
            $("#moodAnalysis").removeClass("hide");
            return;
        }

        $.ajax({
            type: "POST",
            url: "/analyze-mood", // ✅ Corrected URL
            data: JSON.stringify({ mood, sleep, social }),
            contentType: "application/json",
            success: function(response) {
                if (response.success) {
                    $("#analysisText").text(response.analysis);
                } else {
                    $("#analysisText").text("⚠️ AI analysis could not be generated. Please try again later.");
                }
                $("#moodAnalysis").removeClass("hide");
            },
            error: function(err) {
                console.error("AJAX Error:", err);
                $("#analysisText").text("⚠️ Unable to connect to AI service. Check your internet connection.");
                $("#moodAnalysis").removeClass("hide");
            }
        });
    });
});
