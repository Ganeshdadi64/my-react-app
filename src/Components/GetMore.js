import '../App.css';
import GetMoreChild1 from "./GetMoreChild1";
import GetMoreChild2 from "./GetMoreChild2";

const GetMore = () => (
    <div 
      className="get-more-container" 
      style={{
        marginLeft: "3cm",  
        marginRight: "3cm", 
        backgroundColor: "#043873", 
        width: "calc(100% - 6cm)", 
        maxWidth: "1200px", 
        height: "500px",  
        color: "#fff",
        padding: "20px", 
        
      }}
    >
      <GetMoreChild1 />
      <GetMoreChild2 />
    </div>
);

export default GetMore;
