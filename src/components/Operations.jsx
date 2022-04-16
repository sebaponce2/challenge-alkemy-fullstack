// Component imports
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

// Css imports
import "../css/Operations.css";

const Operations = () => {
    return ( 
        <>
            <div className="text-center">
                <Link to="/"><button className="border-0 back-home mt-5 p-2 font-poppins fw-bold">Back home</button></Link>
            </div>
            <h1 className="py-5 text-center font-poppins">Create a new operation</h1>
            <section className="bg-white form-style mb-5 p-3 mx-sm-3a">
                <form action="/" className="m-auto">
                    <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">Concept</label>
                    <input className="d-block border-2 w-100 p-2" type="text" placeholder="Salary"/>
                    <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">Amount</label>
                    <input className="d-block border-2 w-100 p-2" type="number" placeholder="10000"/>
                    <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">Date time</label>
                    <input className="d-block border-2 p-1" type="date" name="" id="" />
                    <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">Operation</label>
                    <div className="d-flex w-100">
                        <div className="d-flex">
                            <label className="font-black my-auto font-poppins" name="income" for="income">Income</label>
                            <input className="d-block border-2 my-auto ms-2" type="radio" name="operation" id="income" value="0"/>
                        </div>
                        <div className="d-flex ps-5">
                            <label className="font-black my-auto font-poppins" name="expense" for="expense">Expense</label>
                            <input className="d-block border-2 my-auto ms-2" type="radio" name="operation" id="expense" value="1"/>
                        </div>
                    </div>
                    <div className="text-end">
                        <button type="submit" className="border-0 mt-4 mb-2 p-2 button-send font-poppins me-3">Add new</button>
                    </div>
                </form>
            </section>
            
            <section>
                <h2 className="text-center mt-5 mb-4">Historial</h2>
                <div className="bg-white table-p">
                <div className="d-flex justify-content-between py-2 bg-purple-dark">

                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold font-white ps-4 ps-md-5 my-auto font-black font-poppins">Operation</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-black d-md-flex justify-content-between">
                            <p className="m-0 fw-bold font-white my-auto ps-3">Date</p>
                            <p className="m-0 fw-bold font-white my-auto pe-4">Concept</p>
                        </div>
                        <div className="d-flex my-auto font-black pe-5">
                            <p className="fw-bold font-white my-auto py-2 font-poppins font-poppins">Amount</p>
                        </div>
                    </div>

                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$5000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-red font-poppins">Expense</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-red font-poppins">Expense</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-red font-poppins">Expense</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-red font-poppins">Expense</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex justify-content-between py-2">
                        <div className="w-16 font-black py-2 my-auto">
                            <p className="fw-bold ps-4 ps-md-5 my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="w-45 font-black text-center font-poppins font-gray-dark d-md-flex justify-content-between">
                            <p className="m-0 fw-bold my-auto">12-12-2020</p>
                            <p className="m-0 fw-bold my-auto">Cumpleaños</p>
                        </div>
                        <div className="d-flex my-auto font-black">
                            <p className="fw-bold my-auto py-2 font-poppins font-poppins">$3000</p>
                            <p className="fs-4 my-auto font-gray pb-2 mx-3 delete"><IoCloseSharp/></p>
                        </div>
                    </div>
                </div>
            </section>
        </> 
    );
}
 
export default Operations;