import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { useState, useContext, useEffect } from "react";
import userContext from "./context";
import PasswordChecklist from "react-password-checklist"
import Card from "./card";

  function Create(props) {
  let data = useContext(userContext);
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [submitDisbaled, setSubmitDisabled] = useState(true);
  let balance = 0;
  let udata = { name, email, password, phone, balance };
  console.log(name);

    useEffect(() => {
    if (!(name || email || phone || password)) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [name, email, phone, password]);

  function validate(field, label) {

    if ((label === "name" || label === "email" || label === "phone") && !field) {
      setStatus("Error: " + label + " must contain a value.");
      alert("All fields must contain a value")
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (label === "password" && field.length < 9) {
      setStatus("Error: " + label + " must be greater than eight characters.");
      return false;
    } else if (label === "phone" && field.length !== 10) {
      setStatus("Error: " + label + " phone number must be 10 digits.");
      alert("phone number must be 10 digits")
      return false;
    }
    return true;
  }

  let create = () => {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(phone, "phone")) return;
    if (!validate(password, "password")) return;
    alert("Successfully Account Created");
    data.users.push(udata);
    console.log(data);
  };

  return (
    <>
      {/* <h1>Create user</h1> */}
      <section class="vh-100">
      <div className="column">
      <div className="row">
      <div><h1>Create Account</h1></div>
    <Card
      txtcolor="black"
      header="Create Your Account and LogIn"
      title="We Promise Your Personal Info is Safe With Us"
      body={(<img src={require('../images/createaccount.jpg')} className="img-fluid" class='mb-4' alt=""/>)}
      >
    </Card>
      </div>
      
        <form class="mx-auto col-6 col-md-6 col-lg-6">
                
                {/*Email input*/}
                <div class="form-outline mb-1">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <small class="form-text text-muted">We'll probably share your email with anyone that will pay for it.</small>
                </div>
                {/*Password input*/}
                <div class="form-outline mb-1">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control form-control-lg"
                    placeholder="Create password"
                  />
                <small class="form-text text-muted">Make it something simple and easy to figure out</small>
                <PasswordChecklist
                  rules={["minLength","specialChar","number","capital"]}
                  minLength={8}
                  value={password}
                  onChange={(isValid) => {}}
                />
                </div>
                {/*Name Input*/}
                <div class="form-outline mb-1">
                  <input
                    type="input"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value, "name")}
                    className="form-control form-control-lg"
                    placeholder="Enter Your Full Name Please"
                  />
                  <small class="form-text text-muted">It's nice to meet you and your money</small>
                </div>
                {/*Name input*/}
                <div class="form-outline mb-1">
                  <input
                    type="number"
                    id="phone"
                    pattern="[0-9]*"
                    onChange={(e) => setPhone(e.target.validity.valid ? e.target.value : e)}
                    class="form-control form-control-lg"
                    placeholder="Enter Valid Phone Number"
                  />
                 <small class="form-text text-muted">Hope You Love RoboCalls</small>
          
                </div>

                <div class="d-flex justify-content-between align-items-center">
                
                </div>

                <div class="text-center text-lg-start mt-2 pt-2">
                <br />
            <button
              type="submit"
              className="btn btn-dark"
              onClick={create}
              disabled={submitDisbaled}
            >
              Create Account
              </button>
          
          <>      
      
          </>
                  </div>
          </form>
            </div>
      </section>
    </>
  );
}

export default Create;