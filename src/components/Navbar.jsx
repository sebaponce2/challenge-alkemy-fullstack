// css imports
import "../css/Navbar.css";
const Navbar = () =>{
    return ( 
        <>
            <div className="navbar navbar-light bg-purple-dark px-3 fixed-navbar">
                <div className="container-fluid d-flex justify-content-between container-navbar">
                    <span className="navbar-brand mb-0 h1 font-poppins font-white fw-bold">Sebastián Ponce</span>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item font-poppins fw-bold">
                                <a className="nav-link active font-white" aria-current="page" href="#">Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;