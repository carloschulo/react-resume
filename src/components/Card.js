import React, { Component } from 'react';
import Jobs from './Jobs';

class Card extends Component {
  render() {
    const { work } = this.props.resumeObj;
   
    return (
      <div className="Card-Container">
        <div className="Card-content">
         {
            work
              .map((key, index) => <Jobs 
              key={index} 
              index={index}
              details={work[index]}
              />)
          }
        </div>
      </div>
    );
  }
}

export default Card;
