// Component imports
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Operations from "./Operations";
import Login from "./Login";
import Register from "./Register";
import Cookies from "universal-cookie"; 

// Css imports
import "../css/Home.css";
import "../css/Colors.css";
import "../css/Fonts.css";

const Container = () => {
    const cookies = new Cookies();

    return ( 
        <>  
            <nav>
                <Navbar/>
            </nav>
            <Routes>
                <Route path="/" element={ 
                    (cookies.get("username")) ? (
                        <section className="container-page font-white pt-5">
                            <Home/>
                        </section>
                    ) : (
                        <section className="container-page font-white pt-5">
                            <Login />
                        </section>
                    )
                }/> 
                <Route path="/newOperation" element={
                    (cookies.get("username")) ? (
                        <section className="container-page font-white pt-5">
                            <Operations/>
                        </section>
                        
                    ) : (
                        <section className="container-page font-white pt-5">
                            <Login />
                        </section>
                    )
                    
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