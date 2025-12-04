import ReactMarkdown from 'react-markdown';
import { getPersona } from './personaUtils';
import './Stage3.css';

export default function Stage3({ finalResponse }) {
  if (!finalResponse) {
    return null;
  }

  const persona = getPersona(finalResponse.model);

  return (
    <div className="stage stage3">
      <h3 className="stage-title">Stage 3: Final Council Answer</h3>
      <div className="final-response">
        <div className="chairman-label">
          <span>Chairman: {finalResponse.model.split('/')[1] || finalResponse.model}</span>
          <span className={`persona-pill ${persona.accent}`}>
            <span className="persona-name">{persona.shortName}</span>
            <span className="persona-title">{persona.title}</span>
          </span>
        </div>
        <div className="final-text markdown-content">
          <ReactMarkdown>{finalResponse.response}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
