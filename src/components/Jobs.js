import React, { Component } from 'react';

class Jobs extends Component {
  render() {
    const { details, index } = this.props;
    console.log(this.props.details);
     const bgColors = ['#4A4A4A', '#54E7C7', '#009EE2', '#ffab91'];
    return (
      <div className="Jobs-container" style={{background:bgColors[index]}}>
          <div className="jobs-flex">
            <h3>{details.company}</h3>
            <h4>{details.position}</h4>
          </div>
          
          <div className="jobs-current">
            {details.current ? `Current Job as of ${details.startDate}`: `${details.startDate} to ${details.endDate}`}
          </div>
          
          <div className="job-summary">{details.summary}</div>
          <ul className="job-highlights">
            {
              details.highlights
                .map((key, index) => {
                  return <li key={index}>{details.highlights[index]}</li>
                })
            }
          </ul>
      </div>
    );
  }
}

export default Jobs;
