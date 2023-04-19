import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { useContext, useState } from "react";
import userContext from "./context";
import Card from "./card";

  function Withdraw() {
  const [amount, setAmount] = useState();
  let data = useContext(userContext);
  let dataen = data.users.length;
  let balance = data.users[dataen - 1].balance;
  let customer = data.users[dataen - 1].name;

  const withdraw = () => {
    if (data.users.length === 0) {
      alert("create account");
    } else {
      if (amount >= 0) {
        if (amount <= data.users[data.users.length - 1].balance) {
          data.users[data.users.length - 1].balance =
            data.users[data.users.length - 1].balance - Number(amount);
          alert("withdraw successful");
        } else {
          alert("enter the valid amount");
          ;
        }
      }
    }
  };

  return (
    <>
      {/* <h1>Deposit</h1> */}
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
          <div className="column">
      <div className="row">
        <div><h1>Withdraw Money</h1></div>
    <Card
      txtcolor="black"
      header="What! You Want Your Money Back"
      title="We Miss It Already"
      body={(<img class= "mt-3" src={require('../images/Withdraw.png')} className="img-fluid" alt=""/>)}
      >
    </Card>

    <div id="bal" className="card-header" style={{fontWeight: 'bold', fontFamily: 'monospace', fontSize: '2.2rem'}}>
                     {`${(customer)} your Account Balance: $${(balance).toFixed(2)}`}
                    </div>
   
      </div>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"></div>

                <div class="divider d-flex align-items-center my-4"></div>

                {/*<!-- Password input --> */}

                <div class="form-outline mb-3">
                  <input
                    type="number"
                    min={0}
                    max={balance}
                    class="form-control form-control-lg"
                    placeholder="Enter a valid Amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <label class="form-label" for="form3Example4"></label>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="button" onClick={withdraw}>
                    Withdraw
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Withdraw;