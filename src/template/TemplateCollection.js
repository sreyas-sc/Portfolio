import React from 'react';
import './TemplateCollection.css'; 


function TemplateCollect() {
    
    const templates = [
      {
        id: 1,
        name: 'Template 1',
        previewImage: 'template1.jpg', 
        details: 'Template details Lorem ipsum...',
      },
      {
        id: 2,
        name: 'Template 2',
        previewImage: 'template2.jpg', 
        details: 'Template details Lorem ipsum...',
      },
      
    ];
  
    return (
      <div className="template-collect">
        <h1>Template Collection</h1>
        <div className="template-list">
          {templates.map((template) => (
            <div key={template.id} className="template-item">
              <div className="template-preview">
                <img src={template.previewImage} alt={`Preview of ${template.name}`} />
              </div>
              <div className="template-details">
                <h2>{template.name}</h2>
                <p>{template.details}</p>
                <button className="use-template-button">Use Template</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TemplateCollect;
  