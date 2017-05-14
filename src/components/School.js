import React from 'react';

  const School = (props) => {
  const { area, endDate, institution, studyType } = props.education;
//   style={{transition: "all 0.2s ease 0s, opacity 500ms, transform 500ms", opacity: "1", transform: "translateX(0px) translateY(0px) translateZ(0px)"}}
  return (
      <div className="Modal-Container" style={{background: '#fafafa'} }>
        
          <div style={{color: '#4a4a4a',display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <h1 className="Header-name">School:</h1>
            <h3>{institution}</h3>
            <h4>{studyType} in {area}</h4>
            <h4>Graduated {endDate}</h4>
          </div>
      </div>
    )
}
    
export default School;