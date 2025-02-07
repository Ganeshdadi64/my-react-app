import '../App.css';

const Everywhere = () => (
  <div 
    className="get-more-container" 
    style={{
      backgroundColor: "#043873",  
      width: "calc(100% - 6cm)", 
      height: "250px", 
      color: "#fff",
      marginLeft: "3cm",
      marginRight: "3cm",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      textAlign: "center", 
      padding: "20px" 
    }}
  >
   
    <div 
      style={{
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        gap: "10px", 
        maxWidth: "600px" 
      }}
    >
      <h1>Your work, everywhere you are</h1>
      <p>
        Access your notes from your computer or phone by synchronizing with 
        services including Workspace, Dropbox, and OneDrive.
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
        Try Now
      </button>
    </div>
  </div>
);

export default Everywhere;
