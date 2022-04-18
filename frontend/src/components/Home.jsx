// Component imports
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";



const Home = () => {
    const cookies = new Cookies();

    return (
        <>
            <h1 className="text-center py-5">{`Welcome, ${cookies.get("name")}`}</h1>
            <div className="text-center m-auto">
                <p className="font-poppins mb-2">Add new income or expense</p>
                <Link to="/newOperation"><button className="button-incomes font-poppins border-0 mb-4 p-2">+Add operation</button></Link>
            </div>
            <div className="text-center py-4 menu-size">
                <h2 className="text-center my-auto nter font-black py-2 m-auto font-poppins">Current balance</h2>
                <h2 className="font-green font-poppins" style={{display: 'inline'}}>$140000</h2>
            </div>
            <hr className="menu-size font-black my-0"/>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$5000</p>
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
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                        <div className="w-100 my-auto">
                            <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">$3000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;