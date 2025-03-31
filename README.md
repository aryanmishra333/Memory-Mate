# Memory Mate 🧠

Memory Mate is an innovative web application developed during Heal O Code 2.0 hackathon, designed to assist individuals with memory-related challenges. The application combines facial recognition technology, cognitive exercises, and daily reminders to help users maintain their cognitive abilities and stay connected with their loved ones.

## 🌟 Features

### 1. Facial Recognition System
- Real-time face detection and recognition
- Family member identification through uploaded photos
- Interactive "Guess Who" game using facial recognition

### 2. Cognitive Exercises
- Memory games to enhance cognitive abilities
- SAGE (Self-Administered Gerocognitive Examination) test
- Interactive quizzes with family photos
- Progress tracking and performance analytics

### 3. Daily Reminders
- Customizable event scheduling
- Multiple reminder options (daily, weekly)
- Time-based notifications
- Visual and text-based reminders

### 4. Entertainment Section
- Curated video content
- News feed with customizable preferences
- Mood-based content recommendations
- Interactive AI companion for engagement

### 5. Family Circle
- Family member profile management
- Photo upload and organization
- Relationship tracking
- Interactive family quizzes

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Passport.js
- **Facial Recognition**: face-api.js
- **AI Integration**: Google Gemini AI
- **File Storage**: Local file system
- **News API**: NewsAPI

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/memory-mate.git
cd memory-mate
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```env
# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string

# API Keys
NEWSAPI_KEY=your_newsapi_key
GEMINI_API_KEY=your_gemini_api_key

# Server Configuration
PORT=3000

# Session Secret
SESSION_SECRET=your_session_secret
```

> ⚠️ **Important**: Never commit your `.env` file to version control. Make sure to add `.env` to your `.gitignore` file.

4. Start the application
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
memory-mate/
├── public/
│   ├── js/
│   ├── css/
│   └── models/
├── views/
├── routes/
├── models/
├── uploads/
├── .env
└── app.js
```

## 🔒 Environment Variables

The following environment variables are required to run the application:

| Variable | Description | Required |
|----------|-------------|----------|
| MONGODB_URI | MongoDB connection string | Yes |
| GEMINI_API_KEY | API key for Google Gemini AI | Yes |
| PORT | Server port (default: 3000) | No |
| SESSION_SECRET | Secret key for session management | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- [Team Member 1]
- [Team Member 2]
- [Team Member 3]
- [Team Member 4]

## 🙏 Acknowledgments

- Heal O Code 2.0 hackathon organizers
- face-api.js team for the facial recognition library
- Google Gemini AI team

## 📞 Support

For support, please open an issue in the GitHub repository or contact the team at [your-email@example.com]

## 🔐 Security

Please report any security issues to [security-email@example.com]
