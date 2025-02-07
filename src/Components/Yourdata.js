import '../App.css';
import Extensionchild1 from './Extensionchild1';
import Extensionchild2 from './Extensionchild2';
import Yourdatachild1 from './Yourdatachild1';

const Yourdata = () => (
  <div 
    className="get-more-container" 
    style={{
      backgroundColor: "#fff", 
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
   <Yourdatachild1 />
  </div>
);

export default Yourdata;
