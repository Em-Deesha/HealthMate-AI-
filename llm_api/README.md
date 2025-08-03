# LLM API Experiments

This directory contains Jupyter notebooks and experiments with Large Language Models (LLMs), specifically focusing on Google Gemini AI integration.

## 🧪 Overview

This folder serves as a testing and experimentation environment for LLM APIs, particularly Google's Gemini AI. It provides a sandbox for testing different prompts, configurations, and API integrations before implementing them in the main application.

## 📁 Contents

- `gemini.ipynb`: Jupyter notebook with Gemini AI experiments and examples
- `README.md`: This documentation file

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Jupyter Notebook or JupyterLab
- Google Gemini API Key

### Setup
```bash
# Activate virtual environment
source ../venv/bin/activate

# Install Jupyter (if not already installed)
pip install jupyter

# Start Jupyter
jupyter notebook
```

### API Key Configuration
Create a `.env` file in this directory or use environment variables:
```bash
GEMINI_API_KEY=your_google_gemini_api_key_here
```

## 📓 Notebook Contents

### gemini.ipynb
This notebook contains:

#### 1. **Basic Setup**
- Environment configuration
- API key setup
- Import statements

#### 2. **API Testing**
- Basic text generation
- Different model configurations
- Response analysis

#### 3. **Health-Focused Prompts**
- Medical query testing
- Symptom analysis examples
- Treatment recommendation testing

#### 4. **Advanced Features**
- System prompt experimentation
- Safety guidelines testing
- Response formatting

#### 5. **Integration Examples**
- Code snippets for main application
- Error handling patterns
- Best practices

## 🔬 Experimentation Areas

### Prompt Engineering
- Test different system prompts
- Optimize for health-related queries
- Experiment with safety guidelines

### Model Configuration
- Try different Gemini models
- Test temperature and top_p settings
- Explore response length limits

### Integration Testing
- Test API response formats
- Validate error handling
- Performance benchmarking

## 🛠️ Usage Examples

### Basic Text Generation
```python
import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

# Configure API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Generate text
model = genai.GenerativeModel('gemini-2.5-flash')
response = model.generate_content("What are the symptoms of diabetes?")
print(response.text)
```

### Health-Specific Testing
```python
# Test health-focused prompts
health_prompt = """
You are HealthMate AI, a friendly and knowledgeable health assistant.
Please provide information about: {user_query}
Include symptoms, treatments, and prevention tips.
"""

response = model.generate_content(health_prompt.format(user_query="diabetes"))
```

## 📊 Testing Framework

### Response Quality Metrics
- **Accuracy**: Verify medical information correctness
- **Completeness**: Ensure comprehensive responses
- **Safety**: Check for appropriate medical disclaimers
- **Clarity**: Assess readability and understandability

### Performance Metrics
- **Response Time**: Measure API latency
- **Token Usage**: Monitor API costs
- **Error Rate**: Track failed requests
- **Rate Limits**: Test API boundaries

## 🔍 Analysis Tools

### Response Analysis
```python
def analyze_response(response):
    """Analyze response quality and characteristics."""
    return {
        'length': len(response.text),
        'has_disclaimer': 'disclaimer' in response.text.lower(),
        'has_symptoms': 'symptom' in response.text.lower(),
        'has_treatment': 'treatment' in response.text.lower(),
        'readability_score': calculate_readability(response.text)
    }
```

### Prompt Testing
```python
def test_prompt_variations(base_prompt, variations):
    """Test different prompt variations."""
    results = []
    for variation in variations:
        response = model.generate_content(variation)
        results.append({
            'prompt': variation,
            'response': response.text,
            'analysis': analyze_response(response)
        })
    return results
```

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**
   ```
   ValueError: API key not found
   ```
   **Solution**: Verify `.env` file or environment variable

2. **Import Error**
   ```
   ModuleNotFoundError: No module named 'google'
   ```
   **Solution**: Install requirements: `pip install google-generativeai`

3. **Rate Limit Error**
   ```
   Rate limit exceeded
   ```
   **Solution**: Implement exponential backoff or reduce request frequency

### Debug Mode
Enable detailed logging:
```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

## 📈 Best Practices

### Prompt Design
- Be specific and clear
- Include safety guidelines
- Test with various user inputs
- Iterate and improve

### Error Handling
- Implement retry logic
- Handle rate limits gracefully
- Log errors for debugging
- Provide fallback responses

### Performance Optimization
- Cache common responses
- Batch requests when possible
- Monitor API usage
- Optimize prompt length

## 🔄 Integration with Main Project

### Code Transfer
Successful experiments can be transferred to:
- `api_project/gemini.py`: Main AI integration
- `api_project/main.py`: API endpoints
- Frontend: User interface improvements

### Testing Workflow
1. **Experiment**: Test new features in notebook
2. **Validate**: Ensure quality and safety
3. **Implement**: Transfer to main application
4. **Test**: Verify integration works correctly

## 📚 Resources

### Documentation
- [Google Gemini AI Documentation](https://ai.google.dev/docs)
- [Python Client Library](https://ai.google.dev/tutorials/python_quickstart)
- [API Reference](https://ai.google.dev/api/generative_ai)

### Community
- [Google AI Community](https://ai.google.dev/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/google-generative-ai)
- [GitHub Issues](https://github.com/google/generative-ai-python/issues)

## 🤝 Contributing

### Adding Experiments
1. Create new notebook or add to existing
2. Document your approach
3. Include example outputs
4. Add to this README

### Sharing Results
- Document findings clearly
- Include code examples
- Share performance metrics
- Note any limitations

---

**LLM API Experiments** - Testing and experimentation with Google Gemini AI 🧪🤖
