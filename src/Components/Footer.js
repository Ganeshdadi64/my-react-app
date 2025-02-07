import React from "react";
import image from '../Images/image.png';
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#032b5a",
        color: "white",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
      
        <div
          style={{
            flex: "1",
            minWidth: "250px",
            margin: "10px",
          }}
        >
          <img className="whitespace" src={image} style={{ width:"100px",height: "50px" }} />
          <h2>Whitespace</h2>
          <p>
            Whitespace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

       
        <div
          style={{
            display: "flex",
            flex: "2",
            justifyContent: "space-between",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
        
          <div>
            <h3>Product</h3>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Overview
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Customer stories
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3>Resources</h3>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Guides & Tutorials
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Help Center
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3>Company</h3>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  About us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Media kit
                </a>
              </li>
            </ul>
          </div>
        </div>

    
        <div
          style={{
            textAlign: "left",
            flex: "1",
            minWidth: "250px",
            margin: "10px",
          }}
        >
          <h3>Try It Today</h3>
          <p>Get started for free. Add your whole team as your needs grow.</p>
          <button
            style={{
              backgroundColor: "#1e90ff",
              color: "white",
              padding: "12px 24px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "6px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Start Today →
          </button>
        </div>
      </div>

    
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "0.9rem",
        }}
      >
        <p>© 2024 Whitepace LLC. | Terms & Privacy | Security | Status</p>
      </div>
    </footer>
  );
};

export default Footer;
