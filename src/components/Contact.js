import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Contact = (props) => {
  const { email, location, profiles, website } = props.info;
  // console.log(props.info);
  //style={{opacity: '1',transform: 'translateX(0px) translateY(0px) translateZ(0px)',transition: 'opacity 500ms, transform 500ms'}}
  const layout = {display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}
  return (
      <div className="Modal-Container" style={{background: '#fafafa'}}>
      
        <CSSTransitionGroup 
          style={layout}
          component="div"
          transitionName="slide"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}
        >
          <h1 className="Header-name" >Contact:</h1>
          <a href="mailto:carlos@carlosrh.com?subject=Resume%20Inquiry" style={{color: '#4a4a4a',textDecoration: 'none'}}>Carlos@carlosrh.com</a>
          <a href="https://carlosrh.com" style={{color: '#4a4a4a',textDecoration: 'none'}} target="_blank">{website}</a>
       
        </CSSTransitionGroup>
      </div>
    )
}

// Contact.propTypes = {
//   tagline: React.PropTypes.string.isRequired
// }
    
export default Contact;