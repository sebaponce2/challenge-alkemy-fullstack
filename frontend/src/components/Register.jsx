// Component imports
import { Link } from "react-router-dom";

const Register = () => {
    return ( 
        <>
            <section className="pb-5">
                <div className="mt-10">
                    <form action="" className="login-form my-auto p-5">
                    <h2 className="fw-bold text-center font-poppins font-black pb-4">Register</h2>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="name">Name</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="text" name="name" placeholder="Name"/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="lastName">Last name</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="text" name="lastName" placeholder="Last name"/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="mail">Email</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="email" name="mail" placeholder="Email"/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="password">Password</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="password" name="password" id="password" placeholder="Password"/>
                        <label className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2" htmlFor="password">Repeat your password</label>
                        <input className="d-block w-100 p-2 px-4 font-poppins my-auto text-center" type="password" name="password" id="password" placeholder="Repeat your password"/>
                        <div className="text-center">
                            <Link to="/login"><button className="border-0 login-button fw-bold font-poppins">Register</button></Link>
                        </div>
                    </form>
                </div>
            </section>
        </> 
    );
}
 
export default Register;