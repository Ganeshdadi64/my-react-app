import '../App.css';


 import image from '../Images/image.png';
const Navbar = () => (
    <nav className="navbar">
      <img className="whitespace" src={image} />
      <div className="nav-links">
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">Solutions</a>
        <a href="#" className="hover:underline">Resources</a>
        <a href="#" className="hover:underline">Pricing</a>
      </div>
      <div>
        <button className="login-btn">Login</button>
        <button className="try-btn">Try Free</button>
      </div>
    </nav>
  );
  
  export default Navbar;