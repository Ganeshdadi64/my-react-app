import '../App.css';
import image from '../Images/image.png';

const Navbar = () => (
    <nav 
      className="navbar Navbar"
      style={{
        marginLeft: "3cm",  
        marginRight: "3cm", 
        width: "calc(100% - 6cm)",  
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#043873", 
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    >
      
      <img className="whitespace" src={image} style={{ width:"100px",height: "50px" }} />

      
      <div className="nav-links" style={{ display: "flex", gap: "20px" }}>
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">Solutions</a>
        <a href="#" className="hover:underline">Resources</a>
        <a href="#" className="hover:underline">Pricing</a>
      </div>

      
      <div style={{ display: "flex", gap: "10px" }}>
        <button className="login-btn">Login</button>
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
            transition: "background-color 0.3s ease"
          }}
        >
          Try whitepace free
        </button>
      </div>
    </nav>
);

export default Navbar;
