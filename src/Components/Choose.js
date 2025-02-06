import '../App.css';
import GetMoreChild1 from "./GetMoreChild1";
import GetMoreChild2 from "./GetMoreChild2";
import imf from '../Images/ChooseP.png';

const Choose = () => (
    <div 
      className="choose-container" 
      style={{
        marginLeft: "3cm",  
        marginRight: "3cm", 
        backgroundColor: "white", 
        width: "calc(100% - 6cm)",  
        maxWidth: "1200px",  
        height: "500px",  
        color: "#fff",
        padding: "20px", 
        display: "flex",
        flexDirection: "column", // Stack elements in one column
        alignItems: "center",
        justifyContent: "center",
        gap: "20px", // Adds spacing between text & image
        textAlign: "center",
      }}
    >   
       {/* Text Section */}
       <div style={{ width: "100%" }}>
        <h1 style={{color:"black", fontSize: "32px", marginBottom: "10px" }}>Choose your plan</h1>
        <p  style={{color:"black"}}>whatever you want get organized keep your personal like on track or boost work place productively </p>
       </div>

       {/* Image Section */}
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
         <img 
           src={imf} 
           alt="Choose Plan" 
           style={{ 
             maxWidth: "95%",  // ⬆️ Increased from 80% to 95%
             height: "auto",  // Maintain aspect ratio
             borderRadius: "10px", // Smooth corners
           }} 
         />
       </div>
       
      {/* <GetMoreChild1 />
      <GetMoreChild2 /> */}
    </div>
);

export default Choose;
