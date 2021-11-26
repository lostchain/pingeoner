import React from 'react';

class Box extends React.Component {
    render() {
      var mainColor = "#303030";

      const styleBox = {};
      const myStyle = {
        background: "white",
        color: "black",
        "max-width": "600px",
        
      };
      const styleHeader = {
        "border-radius": "25px 25px 0 0",
        margin: "0px",
        width: "100%",
        background: mainColor,
        "min-width": "600px",
        "max-width": "600px",
      };
      const styleUser = {
        margin: "0px",
        padding: "10px 40px 10px 40px",
      };
      const styleHeading = {
        margin: "0px",
        padding: "0.5em 40px 0.5em 40px",
      };
      const styleText = {
        margin: "0px",
        padding: "0 40px 1em 40px",
      };
      const styleFooter = {
        background: mainColor,
        "min-width": "600px",
        "max-width": "600px",
        "border-radius": "0 0 25px 25px",
      };
      const styleFooterText = {
        margin: "0px",
        padding: "10px 40px 10px 40px",
      };

      //var contentHeading = "Heading of this Box!";
      //var contentText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
      var contentUser = "User Nr One";

      return (
        <div style={styleBox}>
          <div style={styleHeader}>
            <p style={styleUser}>{contentUser}</p>
          </div>
          <div style={myStyle}>
            <h2 style={styleHeading}>{this.props.heading}</h2>
            <p style={styleText}>{this.props.contentText}</p>
          </div>
          <div style={styleFooter}>
            <p style={styleFooterText}>Content</p>
          </div>
        </div>
      );
    }
  }

export default Box;