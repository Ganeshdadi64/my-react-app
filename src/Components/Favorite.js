import React from "react";
import img from "../Images/Favorite.png"; 

const Favorite = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between", 
      alignItems: "center",
      width: "76%",
      maxWidth: "1200px",
      height: "350px",
     backgroundColor:"white",
      borderRadius: "10px",
      overflow: "hidden",
      padding: "20px", 
      color: "#fff" 
    }}
  >
    
    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
      <img
        src={img}
        alt="Project Child 1"
        style={{
          width: "110%", 
          height: "auto",
          objectFit: "cover",
        }}
      />
    </div>

    
    <div 
      style={{ 
        width: "50%", 
        backgroundColor: "white", 
        padding: "30px", 
        height: "100%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center" 
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "10px", color: "#000" }}>
        Work with your Favorite apps using whitespace
      </h1>
      <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#000" }}>
        workspace teams up with your favorite software
      </p>
<button 
  style={{
    backgroundColor: "blue",
    width: "120px",  
    height: "40px",  
    color: "white", 
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",  
    cursor: "pointer", 
    marginTop: "10px",  
    transition: "background-color 0.3s ease" 
  }}
 >
  Try New 
</button>

    </div>
  </div>
);

export default Favorite;
