import '../App.css';
import Extensionchild1 from './Extensionchild1';
import Extensionchild2 from './Extensionchild2';

const Extension = () => (
  <div 
    className="get-more-container" 
    style={{
      backgroundColor: "#043873", 
      width: "calc(100% - 6cm)",
      height: "500px", 
      color: "#fff",
      marginLeft: "3cm",  
      marginRight: "3cm", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
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
