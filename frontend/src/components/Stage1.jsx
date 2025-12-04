import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPersona } from './personaUtils';
import './Stage1.css';

export default function Stage1({ responses }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!responses || responses.length === 0) {
    return null;
  }

  return (
    <div className="stage stage1">
      <h3 className="stage-title">Stage 1: Individual Responses</h3>

      <div className="tabs">
        {responses.map((resp, index) => (
          // Tab shows model name and a hint of its persona
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="tab-model">
              {resp.model.split('/')[1] || resp.model}
            </span>
            <span className="tab-persona">
              {getPersona(resp.model).title}
            </span>
          </button>
        ))}
      </div>

      <div className="tab-content">
        <div className="model-meta">
          <div className="model-name">{responses[activeTab].model}</div>
          {(() => {
            const persona = getPersona(responses[activeTab].model);
            return (
              <div className={`persona-chip ${persona.accent}`}>
                <span className="persona-name">{persona.shortName}</span>
                <span className="persona-title">{persona.title}</span>
                <span className="persona-blurb">{persona.blurb}</span>
              </div>
            );
          })()}
        </div>
        <div className="response-text markdown-content">
          <ReactMarkdown>{responses[activeTab].response}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
