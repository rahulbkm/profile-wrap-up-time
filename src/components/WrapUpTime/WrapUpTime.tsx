import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import './WrapUpTime.css';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
}

type WrapUpConfig = 'always' | 'never' | 'custom' | null;

const WrapUpTime: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: 'How would you like to configure wrap-up time for this channel?'
    }
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const [selectedConfig, setSelectedConfig] = useState<WrapUpConfig>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customMinutes, setCustomMinutes] = useState('');
  const [customSeconds, setCustomSeconds] = useState('');

  const handleOptionClick = (option: WrapUpConfig, optionText: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: optionText
    };
    
    setMessages([...messages, newUserMessage]);
    setShowOptions(false);
    setSelectedConfig(option);

    // Add bot response
    setTimeout(() => {
      let botResponse = '';
      if (option === 'always') {
        botResponse = 'Got it! Wrap-up time will always be blocked for agents.';
        addBotMessage(botResponse);
      } else if (option === 'never') {
        botResponse = 'Understood! Wrap-up time blocking is disabled.';
        addBotMessage(botResponse);
      } else if (option === 'custom') {
        botResponse = 'Please specify the wrap-up duration:';
        addBotMessage(botResponse);
        setShowCustomInput(true);
      }
    }, 500);
  };

  const addBotMessage = (text: string) => {
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        type: 'bot',
        text
      }
    ]);
  };

  const handleCustomTimeSubmit = () => {
    if (customMinutes || customSeconds) {
      const mins = customMinutes || '0';
      const secs = customSeconds || '0';
      const userMessage = `${mins} min ${secs} secs`;
      
      const newUserMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        text: userMessage
      };
      
      setMessages([...messages, newUserMessage]);
      setShowCustomInput(false);

      setTimeout(() => {
        addBotMessage(`Perfect! Wrap-up time is set to ${mins} min ${secs} secs.`);
      }, 500);
    }
  };

  return (
    <div className="wrap-up-time">
      <div className="chat-container">
        <div className="messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.type}-message`}>
              {message.type === 'bot' && (
                <div className="message-avatar">
                  <FaRobot className="bot-icon" />
                </div>
              )}
              <div className="message-bubble">
                {message.text}
              </div>
            </div>
          ))}

          {showOptions && (
            <div className="quick-actions">
              <button 
                className="quick-action-btn"
                onClick={() => handleOptionClick('always', 'Always block time for wrap up')}
              >
                Always block time for wrap up
              </button>
              <button 
                className="quick-action-btn"
                onClick={() => handleOptionClick('never', "Don't block time for wrap up")}
              >
                Don't block time for wrap up
              </button>
              <button 
                className="quick-action-btn"
                onClick={() => handleOptionClick('custom', 'Custom time for wrap up')}
              >
                Custom time for wrap up
              </button>
            </div>
          )}

          {showCustomInput && (
            <div className="custom-time-input">
              <div className="time-input-group">
                <div className="time-input-field">
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(e.target.value)}
                    className="time-input"
                  />
                  <label className="time-label">min</label>
                </div>
                <div className="time-input-field">
                  <input
                    type="number"
                    min="0"
                    max="59"
                    placeholder="0"
                    value={customSeconds}
                    onChange={(e) => setCustomSeconds(e.target.value)}
                    className="time-input"
                  />
                  <label className="time-label">secs</label>
                </div>
              </div>
              <button 
                className="submit-time-btn"
                onClick={handleCustomTimeSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WrapUpTime;
