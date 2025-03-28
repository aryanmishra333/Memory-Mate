const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyDPW0ANWGwSiXPqmDdM-eRNODoRP1Mn-wI"; // 🔴 Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

router.post("/analyze-mood", async (req, res) => {
    const { mood, sleep, social } = req.body;

    const userResponse = `Mood: ${mood}, Sleep: ${sleep}, Social Engagement: ${social}`;
    const prompt = `I have provided the following responses: ${userResponse}. 
                    Generate a short AI analysis of my emotional well-being and suggest actions I can take.`;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);

        if (!result || !result.response || !result.response.text()) {
            throw new Error("Invalid AI response format.");
        }

        res.json({ success: true, analysis: result.response.text() });
    } catch (error) {
        console.error("Error with Gemini AI:", error);
        res.status(500).json({ success: false, analysis: "⚠️ AI analysis could not be generated. Please try again later." });
    }
});

module.exports = router;
