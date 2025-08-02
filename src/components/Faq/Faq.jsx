import React, { useState } from 'react';
import './Faq.css';

const faqData = {
  General: [
    "Why Club24Bet?",
    "What type of games does Goodluckt offer?",
    "Can I play Goodluck for free?",
    "My game Goodluck't loading. What do I do?"
  ],
  'Registration and Login': [
    "How do I register on Club24Bet?",
    "I forgot my password. What do I do?"
  ],
  'Account and Verification': [
    "What is KYC?",
    "Why do I need to verify my identity?"
  ],
  'Responsible Gaming': [
    "How do I stop gambling on Club24Bet?",
    "How to recognize a gambling problem?"
  ],
  Banking: [
    "What payment methods do you accept?",
    "How long do deposits take?"
  ],
  Promotions: [
    "Where can I see active promotions?",
    "How do I use a bonus?"
  ],
  'Privacy & Security': [
    "Is Goodluck secure?",
    "Are Goodlucks games fair?",
    "Does Goodluck use cookies?",
    "What is my personal information used for?"
  ],
  'Jet Privilege Program': [
    "What is the Jet Privilege Program?"
  ]
};

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (key) => {
    setOpenQuestion(openQuestion === key ? null : key);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
      <div className="faq-columns">
        {Object.entries(faqData).map(([section, questions], i) => (
          <div className="faq-column" key={i}>
            <h3 className="faq-section">{section}</h3>
            <ul>
              {questions.map((q, index) => {
                const key = `${section}-${index}`;
                return (
                  <li key={key} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleQuestion(key)}
                    >
                      <span>{q}</span>
                      <span className="faq-icon">{openQuestion === key ? '−' : '+'}</span>
                    </button>
                    {openQuestion === key && (
                      <div className="faq-answer">
                        <p>This is a sample answer for "{q}".</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
