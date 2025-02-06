import React from "react";
import img from "../Images/GetMoreChild2Img.png"; 

const ProjectManageChild1 = () => (
  <div
  style={{
    display: "flex",
    justifyContent: "space-between", // Distributes image and text equally
    alignItems: "center",
    width: "76%",
    maxWidth: "1200px",
    height: "350px",
   backgroundColor:"white",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "20px", 
    color: "#fff" // Ensures text is visible on a dark background
  }}
>
  {/* Left side - Image */}
  

  {/* Right side - Text Content with White Background */}
  <div 

    style={{ 
      width: "50%", 
      backgroundColor: "white", 
      padding: "30px", // Adds spacing inside the white box
      height: "100%", // Ensures the white box takes the full height
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center" 
    }}
  >
    <h1 style={{ fontSize: "24px", marginBottom: "10px", color: "#000" }}>
      Project Management
    </h1>
    <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#000" }}>
      image, videos and PDF's and audio files are supported crate math expression and diagrams directly from tha app
    </p>
<button 
style={{
  backgroundColor: "blue",
  width: "120px",  // Increased width for better appearance
  height: "40px",  // Proper height
  color: "white",  // White text for contrast
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",  // Rounded corners
  cursor: "pointer",  // Makes it look clickable
  marginTop: "10px",  // Space from text
  transition: "background-color 0.3s ease" // Smooth hover effect
}}
>
Try New 
</button>

  
  </div>

  <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
    <img
      src={img}
      alt="Project Child 1"
      style={{
        width: "100%", 
        height: "auto",
        objectFit: "cover",
      }}
    />
  </div>
</div>
);

export default ProjectManageChild1;
