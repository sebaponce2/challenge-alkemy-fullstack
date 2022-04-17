// Component imports
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Operations from "./Operations";
import Login from "./Login";
import Register from "./Register";

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
            <Routes>
                <Route path="/" element={ 
                    <section className="container-page font-white pt-5">
                        <Home/>
                    </section>
                }/> 
                <Route path="/newOperation" element={
                    <section className="container-page font-white pt-5">
                        <Operations/>
                    </section>
                }/>
                <Route path="/login" element= {
                    <section className="container-page font-white pt-5">
                        <Login />
                    </section>
                }/>
                <Route path="/register" element={
                    <section className="container-page font-white pt-5">
                        <Register/>  
                    </section>
                } />
            </Routes>
            <footer style={{bottom: '0'}}>
                <Footer/>
            </footer>
        </> 
    );
}
 
export default Container;