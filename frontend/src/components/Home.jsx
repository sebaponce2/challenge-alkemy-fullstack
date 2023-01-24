// Component imports
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";


const Home = () => {
    const cookies = new Cookies();
    const idUser = cookies.get("idUser");
    const nameUser = cookies.get("name");

    const [history, setHistory] = useState([]);
    const [currentBalance, setCurrentBalance] = useState(0);

    useEffect(() => {
        const getHistory = async () => {
            
            try {
                const res = await fetch(`https://api-challenge-alkemy.vercel.app/${idUser}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow_Origin': 'localhost:8080'
                    },
                    mode: 'cors'
                });
    
                const data = await res.json();

                if (data.history === 0) {
                    setHistory([]);
                }else {
                    getCurrentBalance(data);
                    getLastTenOperations(data);
                }

            } catch (error) {
                console.log(error);
            }
        }
        getHistory();
    }, [idUser]);
    

    function getLastTenOperations(data){
        if (data === 0) return;
        
        if((data.history.length - 10) < 0){
            const index = 0;
            setHistory(data.history.splice(index, 10));
        }else {
            const index = data.history.length - 10;
            setHistory(data.history.splice(index, 10));
        }
    }

    function getCurrentBalance(data) {
        let accumulator = 0;
        if (data.history == 0) {
            return;
        }

        data.history.forEach((item) => {
            if (item.operation) {
                accumulator -= item.amount;
                setCurrentBalance(accumulator);
            }else {
                accumulator += item.amount;
                setCurrentBalance(accumulator);
            }
        })
    }

    return (
        <>
            <h1 className="text-center py-5">{`Welcome, ${nameUser}`}</h1>
            <div className="text-center m-auto">
                <p className="font-poppins mb-2">Add new income or expense</p>
                <Link to="/newOperation"><button className="button-incomes font-poppins border-0 mb-4 p-2">+Add operation</button></Link>
            </div>
            <div className="text-center py-4 menu-size">
                <h4 className='text-center font-purple-black pb-3 font-poppins fw-bold'>Last operations</h4>
                <h2 className="text-center my-auto nter font-black py-2 m-auto font-poppins">Current balance</h2>
                <h2 className={currentBalance == 0 ? "font-black font-poppins" : (currentBalance > 0 ? "font-green font-poppins" : "font-red font-poppins")} style={{display: 'inline'}}>${currentBalance ? currentBalance : "0"}</h2>
            </div>
            <hr className="menu-size font-black my-0"/>
            <div className="bg-white table-p font-black">
                {
                    history == 0 ? (<div>
                        <h1 className='text-center font-gray mt-5 pt-5'>There aren't operations.</h1>
                    </div>) : (
                        history && history.length !== undefined ? (
                            history.map((item => {
                                return(
                                    <div key={item.id}>
                                    <hr className="w-100 font-black my-0"/>
                                    <div className="d-flex py-2">
                                        <div className="sizing-operation-amount my-auto text-center">
                                            <p className={ (item.operation === 0) ? ("fw-bold my-auto font-green font-poppins") : ("fw-bold my-auto font-red font-poppins") }>{item.operation === 0 ? "Income" : "Expense"}</p>
                                        </div>
                                        <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-black">
                                            <div className="w-100 my-auto text-center">
                                                <p className="fw-bold my-auto">{item.date}</p>
                                            </div>
                                            <div className="w-100 my-auto text-center">
                                                <p className="fw-bold my-auto">{item.concept}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex my-auto font-black sizing-operation-amount text-center">
                                            <div className="w-100 my-auto">
                                                <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">${item.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-100 font-black my-0"/>
                                </div>
                                )
                            }))
                        ) : (
                            <div>
                                <h1 className='text-center font-gray mt-5 pt-5'>There aren't operations.</h1>
                            </div> 
                        )
                    ) 
                }
            </div>
        </>
    );
}
 
export default Home;