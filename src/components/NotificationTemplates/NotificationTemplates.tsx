import React from 'react';
import './NotificationTemplates.css';

const NotificationTemplates: React.FC = () => {
  const templateScenarios = [
    { id: 'incoming-unauthenticated', label: 'Incoming unauthenticated' },
    { id: 'incoming-authenticated', label: 'Incoming authenticated' },
    { id: 'direct-callback', label: 'Direct callback - preview' },
    { id: 'consult', label: 'Consult' },
    { id: 'transfer', label: 'Transfer' },
    { id: 'supervisor-assign', label: 'Supervisor assign' }
  ];

  const templateOptions = [
    { value: '', label: 'Select a template' },
    { value: 'template1', label: 'Standard notification template' },
    { value: 'template2', label: 'Enhanced notification template' },
    { value: 'template3', label: 'Custom notification template' }
  ];

  return (
    <div className="notification-templates-section">
      <div className="notification-templates-content">
        <p className="notification-description">
          Configure notification templates for different conversation scenarios. Select the appropriate template for each scenario below.
        </p>
        {templateScenarios.map((scenario) => (
          <div key={scenario.id} className="form-group">
            <label htmlFor={scenario.id} className="form-label">
              {scenario.label}
            </label>
            <div className="select-wrapper">
              <select id={scenario.id} className="form-select">
                {templateOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTemplates;
