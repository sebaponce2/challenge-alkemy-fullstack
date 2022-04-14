import { useState } from "react";

const Home = () => {

    const [historial, setHistorial] = useState();
    
    return (
        <>
            <h1 className="text-center">Home</h1>
            <div>
                {
                    historial.map((e) => {
                        <div className="d-flex">
                            <p>$3000</p>
                            <p>Ingreso</p>
                        </div>
                    })
                }
            </div>
        </>
     );
}
 
export default Home;