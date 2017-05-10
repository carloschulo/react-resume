import React from 'react';

const Contact = (props) => {
  const { email, location, profiles, website } = props.info;
  console.log(props.info);
  return (
      <div>
        <h1>Contact</h1>
        <a href="mailto:carlos@carlosrh.com?subject=Resume%20Inquiry" style={{transition: "all 0.2s ease 0s, opacity 500ms, transform 500ms", opacity: "1", transform: "translateX(0px) translateY(0px) translateZ(0px)"}}>Say Hola! Carlos@carlosrh.com</a>
       
      </div>
    )
}

// Contact.propTypes = {
//   tagline: React.PropTypes.string.isRequired
// }
    
export default Contact;