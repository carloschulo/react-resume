import React, { Component } from 'react';
import Jobs from './Jobs';

class Card extends Component {
  render() {
    const { work } = this.props.resumeObj;
    const bgColors = ['#4A4A4A', '#DB7093', '#009EE2', '#ffab91'];//#54E7C7
   
    return (
      <div className="Card-Container">
      <h2 className="down-here animated bounce infinite">⬇ Down Here ⬇</h2>
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
