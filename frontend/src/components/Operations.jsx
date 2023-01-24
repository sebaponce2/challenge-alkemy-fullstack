// Component imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import Cookies from "universal-cookie";
import swal from "sweetalert";

// Css imports
import "../css/Operations.css";

const Operations = () => {
  const cookies = new Cookies();
  const idUser = cookies.get("idUser");
  const [history, setHistory] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [idOperation, setIdOperation] = useState(0);
  const [operation, setOperation] = useState(-1);
  const [date, setDate] = useState("");
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState(0);
  const [submitOperation, setSubmitOperation] = useState(true);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await fetch(`https://api-challenge-alkemy.vercel.app/${idUser}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow_Origin": "localhost:8080",
          },
          mode: "cors",
        });

        const data = await res.json();

        if (data.history === 0) {
          setHistory([]);
        } else setHistory(data);
      } catch (error) {
        console.log(error);
      }
    };
    getHistory();
  }, [idUser]);

  const addHistory = async () => {
    try {
      const res = await fetch("https://api-challenge-alkemy.vercel.app/newOperation/", {
        method: "POST",
        body: JSON.stringify({ idUser, operation, date, concept, amount }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow_Origin": "localhost:8080",
        },
        mode: "cors",
      });

      const data = res.json();
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHistory = async () => {
    try {
      const res = await fetch("https://api-challenge-alkemy.vercel.app/newOperation/", {
        method: "PATCH",
        body: JSON.stringify({ idOperation, date, concept, amount }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow_Origin": "localhost:8080",
        },
        mode: "cors",
      });

      const data = await res.json();
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHistory = async (idOperation) => {
    try {
      const res = await fetch(`https://api-challenge-alkemy.vercel.app/newOperation/`, {
        method: "DELETE",
        body: JSON.stringify({ idOperation }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow_Origin": "localhost:8080",
        },
        mode: "cors",
      });

      const data = await res.json();
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSavedValues = (caseEdit, id, operation, date, concept, amount) => {
    setEditMode(caseEdit);
    setIdOperation(id);
    setOperation(operation);
    setDate(date);
    setConcept(concept);
    setAmount(amount);
  };

  function successPost(e) {
    e.preventDefault();
    setSubmitOperation(false);
    swal({
      title: "Success operation!",
      text: " ",
      icon: "success",
      buttons: false,
    });
    addHistory();
    setTimeout(() => {
      document.location.reload();
    }, 500);
  }

  function successChanges(e) {
    e.preventDefault();
    swal({
      title: "Success changes!",
      text: " ",
      icon: "success",
      buttons: false,
    });
    changeHistory();
    setTimeout(() => {
      document.location.reload();
    }, 500);
  }

  function handlerDelete(e, idOperation) {
    e.preventDefault();
    setIdOperation(idOperation);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not recover this operation.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteHistory(idOperation);
        swal("Operation deleted.", {
          icon: "success",
        });
      }
    });
    setTimeout(() => {
      document.location.reload();
    }, 1500);
  }

  const checkCompletedInputs = () => {
    if (concept && amount && date && operation >= 0) return true;

    return false;
  };

  return (
    <>
      <div className="text-center">
        <Link to="/">
          <button className="border-0 button-incomes mt-5 p-2 font-poppins fw-bold">
            Back home
          </button>
        </Link>
      </div>
      <h1 className="py-5 text-center font-poppins" id="edit">
        Create a new operation
      </h1>
      <section className="bg-white form-style mb-5 p-3 mx-sm-3a">
        <form
          className="m-auto"
          onSubmit={(e) =>
            checkCompletedInputs()
              ? editMode
                ? successChanges(e)
                : submitOperation
                ? successPost(e)
                : (e) => e.preventDefault()
              : " "
          }
        >
          <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">
            Concept
          </label>
          <input
            className="d-block border-2 w-100 p-2"
            type="text"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder="Salary"
            required
          />
          <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">
            Amount
          </label>
          <input
            className="d-block border-2 w-100 p-2"
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="10000"
            required
          />
          <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">
            Date
          </label>
          <input
            className="d-block border-2 p-1"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label className="d-block font-black font-poppins fw-bold pb-1 pt-4">
            Operation
          </label>
          {editMode ? (
            <p
              className={
                editMode && operation === 0
                  ? "fw-bold my-auto font-green font-poppins"
                  : "fw-bold my-auto font-red font-poppins"
              }
            >
              {editMode && operation === 0 ? "Income" : "Expense"}
            </p>
          ) : (
            <div
              className="d-flex w-100"
              onChange={(e) =>
                editMode ? operation : setOperation(e.target.value)
              }
            >
              <div className="d-flex">
                <label
                  className="font-black my-auto font-poppins"
                  name="income"
                  htmlFor="income"
                >
                  Income
                </label>
                <input
                  className="d-block border-2 my-auto ms-2"
                  type="radio"
                  name="operation"
                  id="income"
                  value="0"
                  required
                />
              </div>
              <div className="d-flex ps-5">
                <label
                  className="font-black my-auto font-poppins"
                  name="expense"
                  htmlFor="expense"
                >
                  Expense
                </label>
                <input
                  className="d-block border-2 my-auto ms-2"
                  type="radio"
                  name="operation"
                  id="expense"
                  value="1"
                  required
                />
              </div>
            </div>
          )}
          <div className="text-end">
            <button className="border-0 mt-4 mb-2 p-2 button-send font-poppins me-3">
              {editMode ? "Save changes" : "Add new"}
            </button>
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
              <p className="fw-bold font-white my-auto py-2 font-poppins">
                Amount
              </p>
            </div>
            <div className="font-purple-black my-auto">
              <p>a</p>
            </div>
          </div>
        </div>
        <div className="bg-white table-p">
          {history.history == 0 ? (
            <div>
              <h1 className="text-center font-gray mt-5 pt-5">
                There aren't operations.
              </h1>
            </div>
          ) : history && history.history !== 0 ? (
            history?.history?.map((item) => {
              return (
                <div key={item.id}>
                  <hr className="w-100 font-black my-0" />
                  <div className="d-flex py-2">
                    <div className="sizing-operation-amount my-auto text-center">
                      <p
                        className={
                          item.operation === 0
                            ? "fw-bold my-auto font-green font-poppins"
                            : "fw-bold my-auto font-red font-poppins"
                        }
                      >
                        {item.operation === 0 ? "Income" : "Expense"}
                      </p>
                    </div>
                    <div className="d-md-flex sizing-date-concept text-center font-poppins text-center font-gray-dark">
                      <div className="w-100 my-auto text-center">
                        <p className="fw-bold my-auto">{item.date}</p>
                      </div>
                      <div className="w-100 my-auto text-center">
                        <p className="fw-bold my-auto">{item.concept}</p>
                      </div>
                    </div>
                    <div className="d-flex my-auto font-gray-dark sizing-operation-amount text-center">
                      <div className="sizing-amount my-auto">
                        <p className="fw-bold my-auto py-2 font-poppins text-center my-auto">
                          ${item.amount}
                        </p>
                      </div>
                      <div className="d-flex">
                        <a
                          href="#edit"
                          onClick={() =>
                            getSavedValues(
                              true,
                              item.id,
                              item.operation,
                              item.date,
                              item.concept,
                              item.amount
                            )
                          }
                        >
                          <p className="w-25 fs-4 my-auto font-gray pb-2 change">
                            <FiEdit />
                          </p>
                        </a>
                        <a onClick={(e) => handlerDelete(e, item.id)}>
                          <p className="w-25 fs-4 px-1 my-auto font-gray pb-2 delete">
                            <IoCloseSharp />
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr className="w-100 font-black my-0" />
                </div>
              );
            })
          ) : (
            <div>
              <h1 className="text-center font-gray mt-5 pt-5">
                There aren't operations.
              </h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Operations;
