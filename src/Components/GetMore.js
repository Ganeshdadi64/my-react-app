import '../App.css';
import GetMoreChild1 from "./GetMoreChild1";
import GetMoreChild2 from "./GetMoreChild2";

const GetMore = () => (
    <div 
      className="get-more-container" 
      style={{
        marginLeft: "3cm",  // 3 cm left margin
        marginRight: "3cm", // 3 cm right margin
        backgroundColor: "#043873", 
        width: "calc(100% - 6cm)",  // Ensures responsiveness (total left + right = 6cm)
        maxWidth: "1200px",  // Prevents excessive width
        height: "500px",  
        color: "#fff",
        padding: "20px", // Adds some spacing inside the container
        
      }}
    >
      <GetMoreChild1 />
      <GetMoreChild2 />
    </div>
);

export default GetMore;
