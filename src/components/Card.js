import React, { Component } from 'react';
import Jobs from './Jobs';

class Card extends Component {
  render() {
    const { work } = this.props.resumeObj;
    const bgColors = ['#4A4A4A', '#54E7C7', '#009EE2', '#ffab91'];
   
    return (
      <div className="Card-Container">
        <div className="Card-content">
         {
            work
              .map((key, index) => {
                return (
                  <Jobs 
                  key={index} 
                  details={work[index]}
                  colors={bgColors[index]}
                  />
                )
              })
          }
        </div>
      </div>
    );
  }
}

export default Card;
