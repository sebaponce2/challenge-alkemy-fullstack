// Component imports
import Home from "./Home";

// Css imports
import "../css/Home.css";
import "../css/Colors.css";

const Container = () => {
    return ( 
        <>
            <section className="container-page font-white">
                <Home/>
            </section>
        </> 
    );
}
 
export default Container;