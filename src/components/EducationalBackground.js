import React from 'react';
import { useState } from 'react';
import '../App.css';



const EducationalBackground = () => {
  // Example educational background data
  const educations = [
    {
      id: 1,
      institution: 'Häme University of Applied Sciences',
      degree: 'Business Information Technology',
      year: '08/2022 -',
      description:
        'A versatile and inspirational introduction to various trends in the IT industry.',
    },
    {
      id: 2,
      institution: 'JAMK University of Applied Sciences',
      degree: 'BSc, Laboratory Science',
      year: '08/2004 - 01/2009',
      description:
        'Education to become an expert in biological and chemical laboratory analyses.',
    },
    // You can add more educational background entries here
  ];

  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible(!isVisible);

  }

  return (
    <div className="educational-background container mt-5">
      <h2 role="button" tabIndex="0" className={`clickable-heading ${isVisible ? 'effectBg' : ''}`} onClick={toggleDiv}>Educational Background</h2>
      {
        isVisible ? 
      
          <div className="row">
            {educations.map((education) => (
              <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                <div className="card h-100 shadow">
                  <div className="card-header">
                    <h5 className="card-title mb-0">{education.institution}</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {education.degree}
                    </h6>
                    <p className="card-text">{education.description}</p>
                  </div>
                  <div className="card-footer text-muted">
                    <small>{education.year}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          : null
      }
    </div>
  );
};



export default EducationalBackground;