import '../App.css';

import imf from '../Images/Sponcer.png';

const Sponcer = () => (
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
       
       <div>
       <h1  style={{color:"black"}}>Our Sponcers</h1>
       </div>
       
       <div style={{marginLeft:"2cm", justifyContent: "center", width: "115%" }}>
        <img 
           src={imf} 
           
           style={{ 
            backbroundcolor:"#fff",
             maxWidth: "115%",  
             height: "auto",  
         }} 
         />
       </div>
       
      {/* <GetMoreChild1 />
      <GetMoreChild2 /> */}
    </div>
);

export default Sponcer;
