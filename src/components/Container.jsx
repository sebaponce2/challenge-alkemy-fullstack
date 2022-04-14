// Component imports
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Css imports
import "../css/Home.css";
import "../css/Colors.css";
import "../css/Fonts.css";

const Container = () => {
    return ( 
        <>  
            <nav>
                <Navbar/>
            </nav>
            <section className="container-page font-white pt-5">
                <Home/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </> 
    );
}
 
export default Container;