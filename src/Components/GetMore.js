import '../App.css';
import GetMoreChild1 from "./GetMoreChild1";
import GetMoreChild2 from "./GetMoreChild2";

const GetMore = () => (
    <div className="get-more-container" style={{ backgroundColor: "#043873", width: "1290px", height: "500px", color: "#fff" }}>
      <GetMoreChild1 />
      <GetMoreChild2 />
    </div>
  );
  
  export default GetMore;
  