import '../App.css';
import Extensionchild1 from './Extensionchild1';
import Extensionchild2 from './Extensionchild2';

const Extension = () => (
  <div 
    className="get-more-container" 
    style={{
      backgroundColor: "#043873", 
      width: "calc(100% - 6cm)", // Adjust width to account for the 3cm padding on each side
      height: "500px", 
      color: "#fff",
      marginLeft: "3cm",  // Ensure left gap of 3cm
      marginRight: "3cm", // Ensure right gap of 3cm
      display: "flex", // Enable flexbox layout
      justifyContent: "center", // Center children horizontally
      alignItems: "center", // Center children vertically
      margin:"10px",
      paddingLeft:"40px"
    }}
  >
   <div style={{ flex: 1 }}>
      <Extensionchild1 />
    </div>
    <div style={{ flex: 1 }}>
      <Extensionchild2 />
    </div>
  </div>
);

export default Extension;
