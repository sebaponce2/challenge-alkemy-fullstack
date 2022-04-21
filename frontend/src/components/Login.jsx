// Component imports 
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";
import { msToDaysParser } from "../utils/msToDaysParser";
// Css imports
import "../css/Login.css";


const Login = () => {
    
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    
    const cookies = new Cookies();
    
    const submitHandler = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch("http://localhost:8080/login",{
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    "Content-Type": "Application/json",
                    "Access-Control-Allow_Origin": "localhost:8080"
                },
                mode:"cors"
            });
            const data = await res.json();

            if (data.isUser) {
                cookies.set(
                    "username",
                    {key: data.id},
                    {maxAge: msToDaysParser(3)},
                    {path: "/"}
                );
                cookies.set("name", data.name, {path: "/"});
                cookies.set("lastName", data.last_name, {path: "/"});
                cookies.set("idUser", data.id, {path: "/"});

                window.location.assign("/");
            }else alert("Email or password incorrect.");

        } catch (error) {
            console.log(error);
        }
    }


    return ( 
        <>
            <section style={{height: '100vh'}}>
                <div className="mt-10">
                    <form className="login-form my-auto p-5" onSubmit={submitHandler}>
                    <h2 className="fw-bold text-center font-poppins font-black pb-4">Login</h2>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="mail">Email</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="email" name="mail" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="password">Password</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="password" name="password" id="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
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