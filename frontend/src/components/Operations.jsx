// Component imports
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

// Css imports
import "../css/Operations.css";

const Operations = () => {
    return ( 
        <>
            <div className="text-center">
                <Link to="/"><button className="border-0 button-incomes mt-5 p-2 font-poppins fw-bold">Back home</button></Link>
            </div>
            <h1 className="py-5 text-center font-poppins" id="title">Create a new operation</h1>
            <section className="bg-white form-style mb-5 p-3 mx-sm-3a">
                <form action="/" className="m-auto">
                    <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">Concept</label>
                    <input className="d-block border-2 w-100 p-2" type="text" placeholder="Salary"/>
                    <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">Amount</label>
                    <input className="d-block border-2 w-100 p-2" type="number" min={1} placeholder="10000"/>
                    <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">Date</label>
                    <input className="d-block border-2 p-1" type="date" name="" id="" />
                    <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">Operation</label>
                    <div className="d-flex w-100">
                        <div className="d-flex">
                            <label className="font-black my-auto font-poppins" name="income" htmlFor="income">Income</label>
                            <input className="d-block border-2 my-auto ms-2" type="radio" name="operation" id="income" value="0"/>
                        </div>
                        <div className="d-flex ps-5">
                            <label className="font-black my-auto font-poppins" name="expense" htmlFor="expense">Expense</label>
                            <input className="d-block border-2 my-auto ms-2" type="radio" name="operation" id="expense" value="1"/>
                        </div>
                    </div>
                    <div className="text-end">
                        <button type="submit" className="border-0 mt-4 mb-2 p-2 button-send font-poppins me-3">Add new</button>
                    </div>
                </form>
            </section>
            <section>
                <h2 className="text-center mt-5 mb-4">History</h2>
                <div className="d-flex py-2 bg-purple-dark menu-size">
                    <div className="sizing-operation-amount my-auto text-center">
                        <p className="fw-bold font-white my-auto font-poppins">Operation</p>
                    </div>
                    <div className="d-md-flex sizing-date-concept text-center font-poppins">
                        <div className="w-100 my-auto text-center">
                            <p className="fw-bold font-white my-auto">Date</p>
                        </div>
                        <div className="w-100 my-auto text-center">
                            <p className="fw-bold font-white my-auto">Concept</p>
                        </div>
                    </div>
                    <div className="sizing-operation-amount my-auto text-center d-flex">
                        <div className="sizing-amount">
                            <p className="fw-bold font-white my-auto py-2 font-poppins">Amount</p>
                        </div>
                        <div className="font-purple-black my-auto">
                            <p>a</p>
                        </div>

                    </div>
                </div>
                <div className="bg-white table-p">
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
                            </div>
                            <div className="d-flex">
                                <a href="#title">
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit /></p>
                                </a>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-red font-poppins">Expense</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-red font-poppins">Expense</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-red font-poppins">Expense</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit href="#title"/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-red font-poppins">Expense</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 font-black my-0"/>
                    <div className="d-flex py-2">
                        <div className="sizing-operation-amount my-auto text-center">
                            <p className="fw-bold my-auto font-green font-poppins">Income</p>
                        </div>
                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">12-12-2020</p>
                            </div>
                            <div className="w-100 my-auto text-center">
                                <p className="fw-bold my-auto">Cumpleaños</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                            <div className="sizing-amount my-auto">
                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p className="w-25 fs-4 my-auto font-gray pb-2 change"><FiEdit/></p>
                                </div>
                                <div>
                                    <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete"><IoCloseSharp/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </> 
    );
}
 
export default Operations;