# HealthMate AI Project Links & Resources

## 🏥 Project Overview

HealthMate AI is a comprehensive health assistant application featuring an AI-powered backend with Google Gemini AI and a modern React/Next.js frontend.

## 📁 Project Structure

### Main Components
- **Backend**: `api_project/` - FastAPI with Gemini AI integration
- **Frontend**: `api_frontend/` - React/Next.js with modern UI
- **Experiments**: `llm_api/` - Jupyter notebooks for AI testing
- **Documentation**: `slides/` - Presentation materials

## 🚀 Quick Access

### Development URLs
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

### Project Files
- **Main README**: [README.md](./README.md)
- **Backend README**: [api_project/README.md](./api_project/README.md)
- **Frontend README**: [api_frontend/README.md](./api_frontend/README.md)
- **LLM Experiments**: [llm_api/README.md](./llm_api/README.md)

## 🛠️ Technology Stack

### Backend Technologies
- **FastAPI**: Modern Python web framework
- **Google Gemini AI**: Advanced language model
- **Uvicorn**: ASGI server
- **Pydantic**: Data validation
- **python-dotenv**: Environment management

### Frontend Technologies
- **Next.js 14**: React framework with app router
- **React 18**: Modern React with hooks
- **CSS Modules**: Scoped styling
- **Modern JavaScript**: ES6+ features

### AI & ML
- **Google Generative AI**: Python client library
- **Google AI Core**: API core functionality
- **Jupyter**: Interactive development environment

## 📚 Documentation Resources

### Official Documentation
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Google Gemini AI Docs](https://ai.google.dev/docs)
- [React Documentation](https://react.dev/)

### API References
- [FastAPI API Reference](https://fastapi.tiangolo.com/reference/)
- [Google Generative AI Python](https://ai.google.dev/api/generative_ai)
- [Uvicorn Documentation](https://www.uvicorn.org/)

## 🎯 Key Features

### Backend Features
- Health-focused AI assistant
- RESTful API endpoints
- CORS support for frontend
- Real-time health advice
- Medical safety guidelines

### Frontend Features
- Modern, responsive design
- Interactive chat interface
- Health-themed UI elements
- Connection status indicator
- Suggested health questions

## 🔧 Development Commands

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

### Install Dependencies
```bash
# Python dependencies
pip install -r api_project/requirements.txt

# Node.js dependencies
cd api_frontend && npm install
```

## 🧪 Testing & Experimentation

### API Testing
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **Health Check**: http://localhost:8000/

### Frontend Testing
- **Development Server**: http://localhost:3000
- **Build Test**: `npm run build`
- **Linting**: `npm run lint`

### LLM Experiments
- **Jupyter Notebook**: `llm_api/gemini.ipynb`
- **Start Jupyter**: `jupyter notebook`

## 🔒 Security & Configuration

### Environment Variables
```bash
# Backend (.env in api_project/)
GEMINI_API_KEY=your_google_gemini_api_key_here

# Frontend (.env.local in api_frontend/)
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### CORS Configuration
Current development settings allow all origins. For production:
```python
allow_origins=["https://yourdomain.com", "http://localhost:3000"]
```

## 📱 Deployment Resources

### Backend Deployment
- **Vercel**: Serverless deployment
- **Railway**: Easy Python deployment
- **Heroku**: Traditional hosting
- **Docker**: Containerized deployment

### Frontend Deployment
- **Vercel**: Recommended for Next.js
- **Netlify**: Static site hosting
- **AWS Amplify**: Full-stack deployment
- **GitHub Pages**: Static hosting

## 🐛 Troubleshooting

### Common Issues
1. **API Key Error**: Check `.env` file in `api_project/`
2. **Port Conflicts**: Kill existing processes or change ports
3. **CORS Errors**: Verify backend CORS settings
4. **Build Errors**: Check Node.js version and dependencies

### Debug Resources
- **Backend Logs**: Check terminal output
- **Frontend Console**: Browser developer tools
- **Network Tab**: Monitor API requests
- **Jupyter**: Interactive debugging

## 📈 Performance & Monitoring

### Backend Monitoring
- **Response Times**: Monitor API latency
- **Error Rates**: Track failed requests
- **API Usage**: Monitor Gemini AI costs
- **Memory Usage**: Check server resources

### Frontend Monitoring
- **Page Load Times**: Core Web Vitals
- **Bundle Size**: Code splitting analysis
- **User Interactions**: Chat engagement metrics
- **Error Tracking**: Client-side error monitoring

## 🤝 Community & Support

### Official Communities
- [FastAPI Community](https://github.com/tiangolo/fastapi)
- [Next.js Community](https://github.com/vercel/next.js)
- [Google AI Community](https://ai.google.dev/community)
- [React Community](https://react.dev/community)

### Stack Overflow Tags
- `fastapi`
- `next.js`
- `google-generative-ai`
- `react`

### GitHub Repositories
- [FastAPI](https://github.com/tiangolo/fastapi)
- [Next.js](https://github.com/vercel/next.js)
- [Google Generative AI](https://github.com/google/generative-ai-python)

## 📄 License & Compliance

### Project License
This project is for educational purposes.

### Third-Party Compliance
- **Google Gemini AI**: Follow [Terms of Service](https://ai.google.dev/terms)
- **FastAPI**: MIT License
- **Next.js**: MIT License
- **React**: MIT License

## 🆘 Support Channels

### Documentation
1. Check individual README files
2. Review official documentation
3. Search GitHub issues
4. Consult Stack Overflow

### Getting Help
1. **Backend Issues**: Check `api_project/README.md`
2. **Frontend Issues**: Check `api_frontend/README.md`
3. **AI Integration**: Check `llm_api/README.md`
4. **General Issues**: Check main `README.md`

---

**HealthMate AI** - Your personal health assistant powered by AI 🤖🏥

*Last updated: August 2024* 