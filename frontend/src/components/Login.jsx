// Component imports 
import { Link } from "react-router-dom";

// Css imports
import "../css/Login.css";


const Login = () => {
    return ( 
        <>
            <section style={{height: '100vh'}}>
                <div className="mt-10">
                    <form action="" className="login-form my-auto p-5">
                    <h2 className="fw-bold text-center font-poppins font-black pb-4">Login</h2>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="mail">Email</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="email" name="mail" placeholder="Email"/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="password">Password</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="password" name="password" id="password" placeholder="Password"/>
                        <div className="text-center">
                            <button className="border-0 login-button fw-bold font-poppins" type="submit">Login</button>
                        </div>
                        <p className="font-black text-center font-poppins pt-3 pb-2 m-0 ">or</p>
                        <div className="w-100 text-center">
                            <Link to="/register"><button className="border-0 fw-bold font-poppins bg-white">Register</button></Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
     );
}
 
export default Login;