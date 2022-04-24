// Component imports
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [samePassword, setSamePassword] = useState("");


    const submitHandler = async (e) => {
        
        if(password === samePassword) {
            e.preventDefault();
            try {
                const res = await fetch("http://localhost:8080/register",{
                    method: "POST",
                    body: JSON.stringify({name, lastName, email, password}),
                    headers: {
                        "Content-Type": "Application/json",
                        "Access-Control-Allow_Origin": "localhost:8080"
                    },
                    mode: "cors"
                });

                const data = await res.json();
                
                if (data.isAlreadyUsed) {
                    alert("Email already used.");
                } else window.location.assign("/login");

            } catch (error) {
                console.log(error);
            }
        }else alert("Passwords must be the same");
    }


    return ( 
        <>
            <section className="pb-5">
                <div className="mt-10">
                    <form action="" className="login-form my-auto p-5" onSubmit={(e) => submitHandler(e)}>
                    <h2 className="fw-bold text-center font-poppins font-black pb-4">Register</h2>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="name">Name</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="lastName">Last name</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="text" name="lastName" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} required/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="mail">Email</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="email" name="mail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="password">Password</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="password">Repeat your password</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="password" name="samePassword" id="samePassword" placeholder="Repeat your password" onChange={(e) => setSamePassword(e.target.value)} required/>
                        <div className="text-center">
                            <button className="border-0 login-button fw-bold font-poppins">Register</button>
                        </div>
                    </form>
                </div>
            </section>
        </> 
    );
}
 
export default Register;