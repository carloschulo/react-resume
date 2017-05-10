import React from 'react';

const School = (props) => {
  const { area, endDate, institution } = props.education;
  console.log(institution);
  // console.log(props.education)
  return (
      <div>
        <h1>School</h1>
        
      </div>
    )
}

// School.propTypes = {
//   tagline: React.PropTypes.string.isRequired
// }
    
export default School;