import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{background:"black",color:"white",padding:"10px"}}>
      <h2>EventHub</h2>

      <Link to="/">Home</Link> | 
      <Link to="/events">Events</Link> | 
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;