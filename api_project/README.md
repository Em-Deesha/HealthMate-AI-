# HealthMate AI Backend

FastAPI backend with Google Gemini AI integration for intelligent health assistance.

## 🏥 Overview

This backend provides a RESTful API for the HealthMate AI application, powered by Google's Gemini AI model. It offers intelligent health advice, symptom analysis, and wellness recommendations.

## 🚀 Features

- **AI-Powered Health Assistant**: Google Gemini AI integration
- **RESTful API**: Clean, documented endpoints
- **CORS Support**: Frontend integration ready
- **Real-time Responses**: Instant health advice
- **Health-Focused Prompts**: Specialized for medical and wellness queries

## 📁 Project Structure

```
api_project/
├── main.py              # FastAPI application
├── gemini.py            # Google Gemini AI integration
├── requirements.txt     # Python dependencies
├── .env                # Environment variables (create this)
└── README.md           # This file
```

## 🛠️ Setup

### 1. Install Dependencies
```bash
# Activate virtual environment
source ../venv/bin/activate

# Install requirements
pip install -r requirements.txt
```

### 2. Configure Environment
Create a `.env` file in the `api_project/` directory:
```bash
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 3. Start the Server
```bash
python main.py
```

The server will start on: http://localhost:8000

## 📡 API Endpoints

### Health Check
```http
GET /
```
**Response:**
```json
{
  "message": "HealthMate AI backend working"
}
```

### Ask Health Question
```http
POST /ask
Content-Type: application/json

{
  "user_prompt": "What are the symptoms of diabetes?"
}
```

**Response:**
```json
{
  "response": "Diabetes symptoms include increased thirst, frequent urination, extreme hunger, unexplained weight loss, fatigue, blurred vision, and slow-healing sores..."
}
```

## 🤖 AI Integration

### GeminiHealthBot Class

The `GeminiHealthBot` class in `gemini.py` provides:

- **Health-Specialized Prompts**: Tailored for medical and wellness queries
- **Safety Guidelines**: Medical disclaimers and safety warnings
- **Comprehensive Responses**: Symptoms, treatments, prevention, and lifestyle advice

### System Prompt Features

The AI is configured to provide:
- Symptom analysis and explanations
- Treatment and prevention advice
- Exercise and diet recommendations
- Mental health support
- Medical disclaimers and safety warnings

## 🔧 Development

### Running in Development Mode
```bash
python main.py
```

The server will:
- Auto-reload on code changes
- Show detailed logs
- Enable CORS for frontend integration

### Testing the API

Using curl:
```bash
# Health check
curl http://localhost:8000/

# Ask a question
curl -X POST http://localhost:8000/ask \
  -H "Content-Type: application/json" \
  -d '{"user_prompt": "How can I improve my sleep?"}'
```

Using Python requests:
```python
import requests

# Health check
response = requests.get("http://localhost:8000/")
print(response.json())

# Ask a question
response = requests.post(
    "http://localhost:8000/ask",
    json={"user_prompt": "What are the benefits of exercise?"}
)
print(response.json()["response"])
```

## 🔒 Security Considerations

### Environment Variables
- Store API keys in `.env` file
- Never commit API keys to version control
- Use environment variables for sensitive data

### CORS Configuration
Current configuration allows all origins for development:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

For production, specify exact origins:
```python
allow_origins=["https://yourdomain.com", "http://localhost:3000"]
```

## 📊 Dependencies

### Core Dependencies
- **fastapi**: Modern web framework
- **uvicorn**: ASGI server
- **pydantic**: Data validation
- **python-dotenv**: Environment management

### AI Dependencies
- **google-generativeai**: Google Gemini AI client
- **google-genai**: Alternative Google AI client
- **google-api-core**: Google API core functionality

### Supporting Dependencies
- **requests**: HTTP client
- **httpx**: Async HTTP client
- **websockets**: WebSocket support
- **grpcio**: gRPC support

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**
   ```
   ValueError: GEMINI_API_KEY environment variable not set.
   ```
   **Solution**: Create `.env` file with your API key

2. **Import Error**
   ```
   ModuleNotFoundError: No module named 'google'
   ```
   **Solution**: Install requirements: `pip install -r requirements.txt`

3. **Port Already in Use**
   ```
   [Errno 98] Address already in use
   ```
   **Solution**: Kill existing process or change port in `main.py`

### Debug Mode
Enable debug logging by modifying `main.py`:
```python
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True, log_level="debug")
```

## 📈 Performance

### Optimization Tips
- Use async/await for I/O operations
- Implement response caching for common queries
- Monitor API rate limits
- Use connection pooling for database operations

### Monitoring
- Check server logs for errors
- Monitor API response times
- Track Gemini AI usage and costs

## 🔄 Integration with Frontend

The backend is designed to work seamlessly with the Next.js frontend:

- **CORS Enabled**: Allows frontend requests
- **JSON Responses**: Compatible with frontend parsing
- **Error Handling**: Graceful error responses
- **Real-time**: Supports concurrent requests

## 📝 API Documentation

When the server is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

These provide interactive API documentation and testing interface.

---

**HealthMate AI Backend** - Powered by Google Gemini AI 🤖
