// Component imports
import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { useShowPassword } from "../hooks/useShowPassword";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [samePassword, setSamePassword] = useState("");
  const [submitRegister, setSubmitRegister] = useState(true);

  const { visibility, setPasswordVisibility } = useShowPassword();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password === samePassword) {
      setSubmitRegister(false);
      try {
        const res = await fetch("https://api-challenge-alkemy.vercel.app/register", {
          method: "POST",
          body: JSON.stringify({ name, lastName, email, password }),
          headers: {
            "Content-Type": "Application/json",
            "Access-Control-Allow_Origin": "localhost:8080",
          },
          mode: "cors",
        });

        const data = await res.json();

        if (data.isAlreadyUsed) {
          setSubmitRegister(true);
          alert("Email already used.");
        } else window.location.assign("/login");
      } catch (error) {
        console.log(error);
      }
    } else alert("Passwords must be the same");
  };

  return (
    <>
      <section className="pb-5">
        <div className="mt-10">
          <form
            action=""
            className="login-form my-auto p-5"
            onSubmit={
              submitRegister
                ? (e) => submitHandler(e)
                : (e) => e.preventDefault()
            }
          >
            <h2 className="fw-bold text-center font-poppins font-black pb-4">
              Register
            </h2>
            <label
              className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="d-block w-100 p-2 px-4 font-poppins my-auto text-center"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label
              className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2"
              htmlFor="lastName"
            >
              Last name
            </label>
            <input
              className="d-block w-100 p-2 px-4 font-poppins my-auto text-center"
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label
              className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2"
              htmlFor="mail"
            >
              Email
            </label>
            <input
              className="d-block w-100 p-2 px-4 font-poppins my-auto text-center"
              type="email"
              name="mail"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-100 p-2 px-4 font-poppins my-auto text-center"
              type={visibility ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {visibility ? (
              <ImEyeBlocked
                className="font-purple-black"
                onClick={setPasswordVisibility}
                style={{ marginLeft: "-30px", cursor: "pointer" }}
              />
            ) : (
              <ImEye
                className="font-purple-black"
                onClick={setPasswordVisibility}
                style={{ marginLeft: "-30px", cursor: "pointer" }}
              />
            )}
            <label
              className="d-block fw-bold text-center font-poppins font-black mt-4 mb-2"
              htmlFor="password"
            >
              Repeat your password
            </label>
            <input
              className="w-100 p-2 px-4 font-poppins my-auto text-center"
              type={visibility ? "text" : "password"}
              name="samePassword"
              id="samePassword"
              placeholder="Repeat your password"
              onChange={(e) => setSamePassword(e.target.value)}
              required
            />
            {visibility ? (
              <ImEyeBlocked
                className="font-purple-black"
                onClick={setPasswordVisibility}
                style={{ marginLeft: "-30px", cursor: "pointer" }}
              />
            ) : (
              <ImEye
                className="font-purple-black"
                onClick={setPasswordVisibility}
                style={{ marginLeft: "-30px", cursor: "pointer" }}
              />
            )}
            <div className="text-center">
              <button className="border-0 login-button fw-bold font-poppins">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
