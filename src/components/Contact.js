import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Contact = (props) => {
  const { email, website } = props.info;
  const layout = {display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}
  return (
      <div className="Modal-Container bg-gray" style={{display: 'flex'}}>
        <div className="Modal-content">
          <CSSTransitionGroup 
            style={layout}
            component="div"
            transitionName="slide"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={3000}>
            <h1 className="Header-name" >Contact:</h1>
            <a href="mailto:carlos@carlosrh.com?subject=Resume%20Inquiry" style={{color: '#4a4a4a',textDecoration: 'none'}}>{email}</a>
            <a href="https://carlosrh.com" style={{color: '#4a4a4a',textDecoration: 'none'}} target="_blank">{website}</a>
        
          </CSSTransitionGroup>
        </div>
      </div>
    )
}

// Contact.propTypes = {
//   tagline: React.PropTypes.string.isRequired
// }
    
export default Contact;