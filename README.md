# HealthMate AI - Complete Health Assistant Project

A comprehensive health assistant application featuring an AI-powered backend and modern interactive frontend.

## 🏥 Project Overview

HealthMate AI is a complete health assistant solution that combines:
- **AI-Powered Backend**: FastAPI with Google Gemini AI for intelligent health responses
- **Modern Frontend**: React/Next.js with beautiful, responsive UI
- **Real-time Chat**: Interactive health consultation interface

## 📁 Project Structure

```
week_03/
├── api_project/          # FastAPI Backend
│   ├── main.py          # Main FastAPI application
│   ├── gemini.py        # Google Gemini AI integration
│   ├── requirements.txt  # Python dependencies
│   └── README.md        # Backend documentation
├── api_frontend/         # React/Next.js Frontend
│   ├── app/             # Next.js app directory
│   │   ├── page.js      # Main chat interface
│   │   ├── page.module.css # Styling
│   │   └── globals.css  # Global styles
│   ├── package.json     # Node.js dependencies
│   └── next.config.js   # Next.js configuration
├── llm_api/             # LLM API examples
├── slides/              # Presentation materials
├── venv/               # Python virtual environment
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- Google Gemini API Key

### 1. Setup Environment
```bash
# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
pip install -r api_project/requirements.txt

# Install Node.js dependencies
cd api_frontend
npm install
cd ..
```

### 2. Configure API Key
Create a `.env` file in `api_project/`:
```bash
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 3. Start the Application

**Terminal 1 - Backend:**
```bash
cd api_project
source ../venv/bin/activate
python main.py
```
Backend will run on: http://localhost:8000

**Terminal 2 - Frontend:**
```bash
cd api_frontend
npm run dev
```
Frontend will run on: http://localhost:3000

## 🎯 Features

### Backend (FastAPI)
- **Health AI Assistant**: Powered by Google Gemini AI
- **RESTful API**: Clean endpoints for health queries
- **CORS Support**: Frontend integration ready
- **Real-time Responses**: Instant health advice

### Frontend (Next.js)
- **Modern UI**: Beautiful, responsive design
- **Interactive Chat**: Real-time conversation interface
- **Health-Focused**: Medical-themed design elements
- **Smart Features**: 
  - Connection status indicator
  - Suggested health questions
  - Auto-scroll messages
  - Clear chat functionality

## 💬 Usage

1. **Open the Application**: Navigate to http://localhost:3000
2. **Start Chatting**: Type health-related questions
3. **Try Suggestions**: Click on pre-loaded health questions
4. **Get Advice**: Receive AI-powered health recommendations

### Example Questions
- "What are the symptoms of diabetes?"
- "How can I improve my sleep quality?"
- "What exercises are good for heart health?"
- "What should I eat for better immunity?"
- "How to manage stress and anxiety?"

## 🛠️ Technology Stack

### Backend
- **FastAPI**: Modern Python web framework
- **Google Gemini AI**: Advanced language model
- **Uvicorn**: ASGI server
- **Pydantic**: Data validation
- **python-dotenv**: Environment management

### Frontend
- **Next.js 14**: React framework
- **React 18**: UI library
- **CSS Modules**: Scoped styling
- **Modern JavaScript**: ES6+ features

## 🔧 Development

### Backend Development
```bash
cd api_project
source ../venv/bin/activate
python main.py
```

### Frontend Development
```bash
cd api_frontend
npm run dev
```

### API Endpoints
- `GET /`: Health check
- `POST /ask`: Submit health questions

## 📱 Responsive Design

The frontend is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔒 Security Notes

- Configure CORS properly for production
- Secure API keys and environment variables
- Implement proper authentication for production use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Please ensure compliance with Google Gemini AI terms of service.

## 🆘 Support

For issues or questions:
1. Check the individual README files in each directory
2. Verify all dependencies are installed
3. Ensure API keys are properly configured
4. Check server logs for error messages

---

**HealthMate AI** - Your personal health assistant powered by AI 🤖🏥
