'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Check if backend is running
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => {
        if (data.message === "HealthMate AI backend working") {
          setIsConnected(true);
        }
      })
      .catch(() => setIsConnected(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_prompt: inputValue }),
      });

      const data = await response.json();
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the server. Please make sure the backend is running.",
        sender: 'error',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const suggestedQuestions = [
    "What are the symptoms of diabetes?",
    "How can I improve my sleep quality?",
    "What exercises are good for heart health?",
    "What should I eat for better immunity?",
    "How to manage stress and anxiety?",
    "What are the warning signs of depression?"
  ];

  const handleSuggestedQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>🏥</div>
          <h1>HealthMate AI</h1>
        </div>
        <div className={styles.status}>
          <div className={`${styles.statusDot} ${isConnected ? styles.connected : styles.disconnected}`}></div>
          <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className={styles.main}>
        {/* Welcome Message */}
        {messages.length === 0 && (
          <div className={styles.welcome}>
            <div className={styles.welcomeIcon}>👋</div>
            <h2>Welcome to HealthMate AI</h2>
            <p>Your personal health assistant is here to help you with:</p>
            <ul>
              <li>💊 Symptom analysis and health advice</li>
              <li>🏃‍♂️ Exercise and fitness recommendations</li>
              <li>🥗 Nutrition and diet guidance</li>
              <li>😴 Sleep and wellness tips</li>
              <li>🧘‍♀️ Mental health support</li>
            </ul>
            
            <div className={styles.suggestions}>
              <h3>Try asking about:</h3>
              <div className={styles.suggestionGrid}>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className={styles.suggestionButton}
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className={styles.messages}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${styles[message.sender]}`}
            >
              <div className={styles.messageContent}>
                <div className={styles.messageText}>{message.text}</div>
                <div className={styles.messageTime}>{message.timestamp}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.bot}`}>
              <div className={styles.messageContent}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className={styles.footer}>
        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me about your health..."
              className={styles.input}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isLoading || !inputValue.trim()}
            >
              {isLoading ? (
                <div className={styles.spinner}></div>
              ) : (
                '💬'
              )}
            </button>
          </div>
        </form>
        
        {messages.length > 0 && (
          <button onClick={clearChat} className={styles.clearButton}>
            Clear Chat
          </button>
        )}
      </footer>
    </div>
  );
} 