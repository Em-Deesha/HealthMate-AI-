# HealthMate AI Frontend

Modern, responsive React/Next.js frontend for the HealthMate AI health assistant application.

## 🎨 Overview

A beautiful, interactive web interface that provides users with a seamless experience for health consultations. Built with Next.js 14 and modern React patterns, featuring a health-focused design with real-time chat capabilities.

## ✨ Features

### 🏥 Health-Focused Design
- **Medical Theme**: Hospital emoji logo with animated pulse effect
- **Professional UI**: Clean, trustworthy interface perfect for health applications
- **Gradient Background**: Beautiful purple-blue gradient for modern appeal
- **Responsive Layout**: Works perfectly on all devices

### 💬 Interactive Chat Interface
- **Real-time Messaging**: Instant communication with AI backend
- **Message Bubbles**: Distinct styles for user and AI responses
- **Typing Indicators**: Visual feedback during AI processing
- **Auto-scroll**: Messages automatically scroll to bottom
- **Timestamps**: Track when messages were sent

### 🧠 Smart Features
- **Connection Status**: Real-time backend connectivity indicator
- **Suggested Questions**: Pre-loaded health questions for easy access
- **Clear Chat**: Reset conversation with one click
- **Loading States**: Visual feedback during API calls
- **Error Handling**: Graceful error messages for connection issues

### 📱 Responsive Design
- **Mobile-First**: Optimized for smartphones and tablets
- **Touch-Friendly**: Large buttons and inputs for mobile use
- **Adaptive Layout**: Automatically adjusts to screen size
- **Cross-Browser**: Works on all modern browsers

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Backend server running on localhost:8000

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at: http://localhost:3000

## 📁 Project Structure

```
api_frontend/
├── app/                    # Next.js app directory
│   ├── page.js            # Main chat interface component
│   ├── page.module.css    # Component-specific styles
│   ├── globals.css        # Global styles and fonts
│   └── layout.js          # Root layout component
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
└── README.md              # This file
```

## 🎯 Usage

### Getting Started
1. **Open the Application**: Navigate to http://localhost:3000
2. **Check Connection**: Verify the status indicator shows "Connected"
3. **Start Chatting**: Type health questions in the input field
4. **Try Suggestions**: Click on pre-loaded health questions

### Example Interactions

**User**: "What are the symptoms of diabetes?"
**AI**: "Diabetes symptoms include increased thirst, frequent urination, extreme hunger, unexplained weight loss, fatigue, blurred vision, and slow-healing sores..."

**User**: "How can I improve my sleep quality?"
**AI**: "To improve sleep quality, try maintaining a consistent sleep schedule, creating a relaxing bedtime routine, avoiding caffeine and screens before bed..."

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 14**: React framework with app router
- **React 18**: Modern React with hooks and concurrent features
- **CSS Modules**: Scoped styling for components
- **Modern JavaScript**: ES6+ features and async/await

### Styling & UI
- **CSS Modules**: Component-scoped styles
- **Custom Properties**: CSS variables for theming
- **Flexbox & Grid**: Modern layout techniques
- **Animations**: Smooth transitions and micro-interactions

### Development Tools
- **ESLint**: Code linting and formatting
- **Next.js Dev Tools**: Built-in development features
- **Hot Reload**: Instant updates during development

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Success**: Green (#10b981) for connected status
- **Error**: Red (#ef4444) for disconnected status
- **Background**: White with transparency for glass effect

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on different devices

### Components

#### Header
- Logo with animated hospital emoji
- Connection status indicator
- Clean, professional appearance

#### Welcome Section
- Friendly greeting with animated emoji
- Feature list with health-related icons
- Suggested questions grid

#### Chat Interface
- Message bubbles with different styles
- User messages (right-aligned, purple gradient)
- AI messages (left-aligned, white background)
- Error messages (centered, red styling)

#### Input Area
- Rounded input field with focus states
- Circular send button with hover effects
- Clear chat button when messages exist

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables
Create a `.env.local` file for environment-specific settings:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### API Integration
The frontend communicates with the backend via:
- **Health Check**: `GET /` to verify backend status
- **Chat Endpoint**: `POST /ask` for health questions

### State Management
- **React Hooks**: useState for local state
- **useEffect**: For side effects and API calls
- **useRef**: For DOM manipulation (auto-scroll)

## 📱 Responsive Breakpoints

### Mobile (≤480px)
- Single column layout
- Larger touch targets
- Simplified header layout

### Tablet (481px - 768px)
- Adjusted grid layouts
- Medium-sized components
- Optimized spacing

### Desktop (≥769px)
- Full feature set
- Multi-column layouts
- Enhanced animations

## 🔒 Security & Performance

### Security Features
- **CORS Handling**: Proper cross-origin requests
- **Input Validation**: Client-side validation
- **Error Boundaries**: Graceful error handling
- **XSS Prevention**: Safe HTML rendering

### Performance Optimizations
- **Code Splitting**: Automatic by Next.js
- **Image Optimization**: Built-in Next.js features
- **CSS Optimization**: Scoped styles reduce conflicts
- **Bundle Analysis**: Built-in performance monitoring

## 🐛 Troubleshooting

### Common Issues

1. **Connection Failed**
   - Check if backend is running on port 8000
   - Verify CORS settings in backend
   - Check browser console for errors

2. **Build Errors**
   ```bash
   npm run build
   ```
   - Check for syntax errors
   - Verify all imports are correct
   - Ensure all dependencies are installed

3. **Styling Issues**
   - Clear browser cache
   - Check CSS module imports
   - Verify class names match

### Debug Mode
Enable detailed logging by adding to `next.config.js`:
```javascript
module.exports = {
  experimental: {
    appDir: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Automatic deployments
- **Docker**: Containerized deployment

### Environment Setup
Set production environment variables:
```bash
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines
- Follow React best practices
- Use CSS Modules for styling
- Maintain responsive design
- Test on multiple devices

## 📄 License

This project is for educational purposes. Please ensure compliance with all third-party licenses.

## 🆘 Support

For issues or questions:
1. Check the browser console for errors
2. Verify backend connectivity
3. Review the API documentation
4. Check the main project README

---

**HealthMate AI Frontend** - Modern, responsive health assistant interface 🏥💻 