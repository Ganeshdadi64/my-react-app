import '../App.css';

import imf from '../Images/ChooseP.png';

const Choose = () => (
    <div 
      className="choose-container" 
      style={{
        marginLeft: "3cm",  
        marginRight: "3cm", 
        marginBottom:"1cm",
        backgroundColor: "white", 
        width: "calc(100% - 6cm)",  
        maxWidth: "1200px",  
        height: "500px",  
        color: "#fff",
        padding: "20px", 
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center",
        gap: "20px", 
        textAlign: "center",
      }}
    >   
       
       <div style={{ width: "100%" }}>
        <h1 style={{color:"black", fontSize: "32px", marginBottom: "10px" }}>Choose your plan</h1>
        <p  style={{color:"black"}}>whatever you want get organized keep your personal like on track or boost work place productively </p>
       </div>

       
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
         <img 
           src={imf} 
           
           style={{ 
             maxWidth: "105%",  
             height: "auto",  
             
           }} 
         />
       </div>
       
      {/* <GetMoreChild1 />
      <GetMoreChild2 /> */}
    </div>
);

export default Choose;
